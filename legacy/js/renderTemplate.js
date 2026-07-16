function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav");
    if (menuToggle && navMenu) {
        const toggleIcon = (isOpen) => {
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("nav-open");
            menuToggle.setAttribute("aria-expanded", isOpen.toString());
            toggleIcon(isOpen);
            if (isOpen) {
                // Set focus to the first nav item for screen readers/keyboard users when menu opens
                const firstLink = navMenu.querySelector("a");
                if (firstLink) firstLink.focus();
            }
        });

        // Close menu on pressing Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("nav-open")) {
                navMenu.classList.remove("nav-open");
                menuToggle.setAttribute("aria-expanded", "false");
                toggleIcon(false);
                menuToggle.focus();
            }
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-open");
                menuToggle.setAttribute("aria-expanded", "false");
                toggleIcon(false);
            });
        });
    }
}

function updateFooterYear() {
    const footerYear = document.querySelector(".footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
}

setupMenu();
updateFooterYear();
