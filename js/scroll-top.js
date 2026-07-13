const topButton = document.getElementById("top-button");

document.addEventListener("scroll", scrollFunction);
if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function scrollFunction() {
    if (topButton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.classList.remove("top-button-hidden");
        } else {
            topButton.classList.add("top-button-hidden");
        }
    }
}
