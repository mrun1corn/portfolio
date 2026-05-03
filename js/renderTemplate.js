import {
    introductionData,
    skillsData,
    projectsData,
    aboutMeData,
    focusAreasData,
    experienceData,
    contactData
} from '../data/data.js';

const externalAttrs = (url) => url && !url.startsWith("mailto:") && !url.startsWith("tel:")
    ? ' target="_blank" rel="noopener"'
    : "";

const listMarkup = (items, className) => items && items.length
    ? `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";

function render() {
    const heroWindow = document.querySelector(".header-apresentation");
    if (heroWindow) {
        const {
            yourName,
            tagline,
            headline,
            summary,
            location,
            availability,
            contactLink,
            contactLabel,
            resumeLabel,
            resumeLink,
            highlights
        } = introductionData;

        heroWindow.innerHTML = `
            <p class="eyebrow">${tagline}</p>
            <h1 class="hero-title">Hi, I'm ${yourName}. I build calm, reliable IT operations.</h1>
            <p class="hero-lead">${headline}</p>
            <p class="hero-summary">${summary}</p>
            <div class="hero-actions" aria-label="Primary actions">
                <a class="button primary" href="${contactLink}"${externalAttrs(contactLink)}>${contactLabel}</a>
                <a class="button ghost" href="${resumeLink}"${externalAttrs(resumeLink)}>${resumeLabel}</a>
            </div>
            <div class="hero-meta" aria-label="Portfolio highlights">
                <span>${location}</span>
                <span>${availability}</span>
            </div>
            ${listMarkup(highlights, "hero-highlights")}
        `;
    }

    const socialWindow = document.querySelector(".header-icons");
    if (socialWindow) {
        socialWindow.innerHTML = introductionData.socialNetwork.map((data) => `
            <a class="icon hero-icon" aria-label="${data.nameSocialNetwork}" href="${data.url}"${externalAttrs(data.url)}>
                <i class="${data.icon}" aria-hidden="true"></i>
            </a>
        `).join("");
    }

    const navWindow = document.querySelector(".nav");
    if (navWindow) {
        navWindow.innerHTML = introductionData.nav.map((data) => `
            <a class="nav-link" href="#${data.idSection}">${data.optionNav}</a>
        `).join("");
    }

    const aboutWindow = document.querySelector(".section-style");
    if (aboutWindow) {
        aboutWindow.innerHTML = `
            <div class="container about-container">
                <div class="section-kicker">${aboutMeData.eyebrow}</div>
                <div class="about-grid">
                    <div>
                        <h2 class="section-title">${aboutMeData.title}</h2>
                        <p class="description">${aboutMeData.description}</p>
                    </div>
                    ${listMarkup(aboutMeData.details, "about-list")}
                </div>
                <div class="focus-grid">
                    ${focusAreasData.map((item) => `
                        <article class="focus-item">
                            <p>${item.meta}</p>
                            <h3>${item.title}</h3>
                            <span>${item.text}</span>
                        </article>
                    `).join("")}
                </div>
            </div>
        `;
    }

    const skillsWindow = document.querySelector(".cards-main");
    if (skillsWindow) {
        skillsWindow.innerHTML = skillsData.map((data) => `
            <article class="skill-card">
                <img class="img-card" src="${data.img}" alt="${data.alt || data.nameSkill}">
                <div>
                    <p class="skill-level">${data.level}</p>
                    <h3>${data.nameSkill}</h3>
                    <span>${data.description}</span>
                </div>
            </article>
        `).join("");
    }

    const projectsWindow = document.querySelector(".projects-main");
    if (projectsWindow) {
        projectsWindow.innerHTML = projectsData.map((data) => {
            const techMarkup = data.tech && data.tech.length
                ? `<div class="project-tech">${data.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>`
                : "";

            return `
                <article class="project-card">
                    <div class="project-visual" role="presentation">
                        <img src="${data.img}" alt="${data.alt || data.title}">
                    </div>
                    <div class="project-content">
                        <h3>${data.title}</h3>
                        <p>${data.describe}</p>
                        <div class="project-impact">
                            <strong>Result</strong>
                            <span>${data.impact}</span>
                        </div>
                        ${techMarkup}
                        <a class="project-link" href="${data.url}"${externalAttrs(data.url)}>
                            ${data.ctaLabel}
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>
            `;
        }).join("");
    }

    const experienceWindow = document.querySelector(".experience-main");
    if (experienceWindow) {
        experienceWindow.innerHTML = experienceData.map((item) => `
            <article class="experience-item">
                <div>
                    <p>${item.period}</p>
                    <h3>${item.role}</h3>
                    <span>${item.organization}</span>
                </div>
                ${listMarkup(item.points, "experience-list")}
            </article>
        `).join("");
    }

    const contactWindow = document.querySelector(".contact-panel");
    if (contactWindow) {
        contactWindow.innerHTML = `
            <div>
                <p class="section-kicker">Contact</p>
                <h2 class="section-title">${contactData.title}</h2>
                <p>${contactData.text}</p>
            </div>
            <div class="contact-links">
                <a href="mailto:${contactData.email}"><i class="fa fa-envelope-o" aria-hidden="true"></i>${contactData.email}</a>
                <a href="tel:${contactData.phone}"><i class="fa fa-phone" aria-hidden="true"></i>${contactData.phone}</a>
                <a href="${contactData.github}" target="_blank" rel="noopener"><i class="fa fa-github-alt" aria-hidden="true"></i>GitHub</a>
                <a href="${contactData.facebook}" target="_blank" rel="noopener"><i class="fa fa-facebook-square" aria-hidden="true"></i>Facebook</a>
            </div>
        `;
    }

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

    const footerYear = document.querySelector(".footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render();
});
