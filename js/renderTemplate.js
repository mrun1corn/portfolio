import { introductionData, skillsData, projectsData, aboutMeData } from '../data/data.js';

function render() {
    /* INTRODUCTION ----------------------------------------------------- */
    const heroWindow = document.querySelector(".header-apresentation");
    if (heroWindow) {
        const {
            yourName,
            tagline,
            headline,
            contactLink,
            contactLabel
        } = introductionData;

        const taglineMarkup = tagline ? `<p class="hero-tagline">${tagline}</p>` : "";
        const headlineMarkup = headline ? `<p class="hero-lead">${headline}</p>` : "";
        const contactHref = contactLink || "";
        const contactLabelText = contactLabel || "Let's connect";
        const contactAttrs = contactHref && !contactHref.startsWith("mailto:")
            ? ' target="_blank" rel="noopener"'
            : "";
        const contactMarkup = contactHref
            ? `<a class="button ghost" href="${contactHref}"${contactAttrs}>${contactLabelText}</a>`
            : "";

        heroWindow.innerHTML = `
            ${taglineMarkup}
            <h1 class="hero-title">Hi, I'm <span class="gradient">${yourName}</span></h1>
            ${headlineMarkup}
            <div class="hero-actions">
                <a class="button primary" href="#projects">View Projects</a>
                ${contactMarkup}
            </div>
        `;
    }

    const socialWindow = document.querySelector(".header-icons");
    if (socialWindow) {
        socialWindow.innerHTML = introductionData.socialNetwork.map((data) => {
            const isMail = data.url && data.url.startsWith("mailto:");
            const target = isMail ? "" : ' target="_blank" rel="noopener"';
            return `
            <a class="icon hero-icon" aria-label="${data.nameSocialNetwork}" href="${data.url}"${target}>
                <i class="${data.icon}"></i>
            </a>
            `;
        }).join("");
    }

    const navWindow = document.querySelector(".nav");
    if (navWindow) {
        navWindow.innerHTML = introductionData.nav.map((data) => `
            <a class="nav-link" href="#${data.idSection}">
                ${data.optionNav}
            </a>
        `).join("");
    }

    /* ABOUT ------------------------------------------------------------ */
    const aboutWindow = document.querySelector(".section-style");
    if (aboutWindow) {
        const hasCV = Boolean(aboutMeData.urlCV);
        const cvAttrs = hasCV && aboutMeData.urlCV && !aboutMeData.urlCV.startsWith("mailto:")
            ? ' target="_blank" rel="noopener"'
            : "";
        const cvMarkup = hasCV
            ? `
                <div class="about-actions">
                    <a class="button primary" href="${aboutMeData.urlCV}"${cvAttrs}>
                        ${aboutMeData.titleURL}
                    </a>
                </div>
            `
            : "";

        aboutWindow.innerHTML = `
            <div class="container about-container">
                <h2 class="section-title">${aboutMeData.title}</h2>
                <p class="description">${aboutMeData.description}</p>
                ${cvMarkup}
            </div>
        `;
    }

    /* SKILLS ----------------------------------------------------------- */
    const skillsWindow = document.querySelector(".cards-main");
    if (skillsWindow) {
        skillsWindow.innerHTML = skillsData.map((data) => `
            <div class="card shadow tilt-card">
                <img class="img-card" src="${data.img}" alt="${data.nameSkill}">
                <p>${data.nameSkill}</p>
            </div>
        `).join("");
    }

    /* PROJECTS --------------------------------------------------------- */
    const projectsWindow = document.querySelector(".projects-main");
    if (projectsWindow) {
        projectsWindow.innerHTML = projectsData.map((data) => {
            const hasLink = Boolean(data.url);
            const linkAttrs = hasLink && data.url && !data.url.startsWith("mailto:")
                ? ' target="_blank" rel="noopener"'
                : "";
            const linkText = data.ctaLabel || "View project";
            const linkMarkup = hasLink
                ? `
                    <a class="project-link" href="${data.url}"${linkAttrs}>
                        ${linkText}
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                `
                : "";

            return `
                <article class="project-card tilt-card" data-aos="fade-up">
                    <div class="project-visual" role="presentation">
                        <img src="${data.img}" alt="${data.title}">
                    </div>
                    <div class="project-content">
                        <h3>${data.title}</h3>
                        <p>${data.describe}</p>
                        ${linkMarkup}
                    </div>
                </article>
            `;
        }).join("");
    }

    /* NAV TOGGLE ------------------------------------------------------- */
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

    /* FOOTER YEAR ------------------------------------------------------ */
    const footerYear = document.querySelector(".footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
}

render();
