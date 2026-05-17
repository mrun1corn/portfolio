const header = document.querySelector('.site-header');
const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const navLinks = [...document.querySelectorAll('.nav-link')];
const allSections = [...document.querySelectorAll('section')];
const typingTextElement = document.querySelector('.typing-text');

// Dynamic Typing Effect
const roles = ["C++ Developer", "Server Administrator", "Infrastructure Engineer", "System Optimizer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const type = () => {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
};

if (typingTextElement) {
    type();
}

// Lottie Animation Performance Optimization
const lottieObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const player = entry.target;
        if (entry.isIntersecting) {
            player.play();
        } else {
            player.pause();
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('dotlottie-player, lottie-player').forEach(player => {
    lottieObserver.observe(player);
});

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

    const activeColor = theme === 'dark' ? '#020617' : '#f8fafc';
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

    // Sync 3D Scene
    if (window.portfolioScene) {
        window.portfolioScene.updateTheme();
    }
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

const setActiveLink = (id) => {
    navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
};

const updateActiveSection = () => {
    const headerOffset = (header?.offsetHeight || 0) + 80;
    
    // Find the last section that has been scrolled past
    const currentSection = [...allSections].reverse().find(section => 
        window.scrollY >= (section.offsetTop - headerOffset)
    ) || allSections[0];

    if (currentSection) {
        setActiveLink(currentSection.id);
    }
    
    // Reveal sections as they become active or are already in view
    allSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (isVisible) {
            section.classList.add('is-visible');
        }
    });
};

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const id = link.getAttribute('href').slice(1);
        setActiveLink(id);
    });
});

// Run once on load to show initial sections, with a slight delay to ensure rendering is complete
setTimeout(() => {
    updateActiveSection();
}, 50);

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', updateActiveSection);

