const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
}
