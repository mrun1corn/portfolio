/**
 * visualEffects.js
 * Implements Parallax and 3D Tilt effects
 */

document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initTilt();
});

function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const layers = document.querySelectorAll('.hero-icon, .hero-tagline');

    hero.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        layers.forEach((layer, index) => {
            const speed = (index + 1) * 2;
            const xOffset = x * speed;
            const yOffset = y * speed;
            layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
        });
    });

    // Reset on mouse leave
    hero.addEventListener('mouseleave', () => {
        layers.forEach((layer) => {
            // Check if it has a hover transform (like hero-icon) we need to be careful not to overwrite hover states aggressively
            // Ideally simply removing the inline style lets CSS hover take over
            layer.style.transform = '';
        });
    });
}

function initTilt() {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleHover);
        card.addEventListener('mouseleave', handleLeave);
    });

    function handleHover(e) {
        const card = this;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to the card center
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function handleLeave() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}
