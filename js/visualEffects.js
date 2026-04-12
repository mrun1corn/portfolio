document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const themeToggle = document.querySelector('.theme-toggle');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const updateHeader = () => {
        if (header) {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const getSavedTheme = () => localStorage.getItem('portfolio-theme');
    const getCurrentTheme = () => {
        const savedTheme = getSavedTheme();
        return savedTheme || (systemTheme.matches ? 'dark' : 'light');
    };

    const updateThemeColor = (theme) => {
        const lightMeta = document.querySelector('meta[name="theme-color"][media*="light"]');
        const darkMeta = document.querySelector('meta[name="theme-color"][media*="dark"]');
        if (!lightMeta || !darkMeta) return;

        const activeColor = theme === 'dark' ? '#101713' : '#f7faf8';
        lightMeta.setAttribute('content', activeColor);
        darkMeta.setAttribute('content', activeColor);
    };

    const applyThemeState = () => {
        if (!themeToggle) return;

        const currentTheme = getCurrentTheme();
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        themeToggle.classList.toggle('is-dark', currentTheme === 'dark');
        themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
        themeToggle.setAttribute('title', `Switch to ${nextTheme} theme`);
        updateThemeColor(currentTheme);
    };

    if (themeToggle) {
        applyThemeState();

        themeToggle.addEventListener('click', () => {
            const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = nextTheme;
            localStorage.setItem('portfolio-theme', nextTheme);
            applyThemeState();
        });

        systemTheme.addEventListener('change', () => {
            if (!getSavedTheme()) {
                applyThemeState();
            }
        });
    }

    if (!sections.length || !navLinks.length) return;

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
    };

    const updateActiveSection = () => {
        const headerOffset = (header?.offsetHeight || 0) + 80;
        const currentSection = sections.reduce((activeSection, section) => {
            const sectionTop = section.offsetTop - headerOffset;
            return window.scrollY >= sectionTop ? section : activeSection;
        }, sections[0]);

        setActiveLink(currentSection.id);
    };

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const id = link.getAttribute('href').slice(1);
            setActiveLink(id);
        });
    });

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
});
