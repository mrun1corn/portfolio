function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("nav-open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-open");
                menuToggle.setAttribute("aria-expanded", "false");
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
