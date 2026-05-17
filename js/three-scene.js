import * as THREE from 'https://cdn.skypack.dev/three@0.152.2';

class PortfolioScene {
    constructor() {
        this.canvas = document.querySelector('#bg-canvas');
        if (!this.canvas) return;

        // Check for fallback criteria
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;

        if (prefersReducedMotion || isMobile) {
            this.applyFallback();
            return;
        }

        this.initScene();
    }

    applyFallback() {
        if (this.canvas) {
            this.canvas.classList.add('bg-fallback');
        }
    }

    initScene() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        this.clock = new THREE.Clock();
        this.nodes = [];
        this.lines = null;
        
        // Scroll tracking
        this.scrollProgress = 0;
        this.targetScrollProgress = 0;
        
        // Mouse tracking
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('scroll', () => this.onScroll());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onMouseMove(e) {
        if (!this.targetMouse) return;
        this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    }

    onScroll() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.targetScrollProgress = window.scrollY / (totalHeight || 1);
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Initial Camera Position
        this.camera.position.z = 5;
        
        this.createNetwork();
        this.addLights();
        this.updateTheme();
    }

    updateTheme() {
        const style = getComputedStyle(document.documentElement);
        const bgColor = style.getPropertyValue('--color-bg').trim() || '#f8fafc';
        const accentColor = style.getPropertyValue('--color-accent').trim() || '#0ea5e9';
        
        this.scene.fog = new THREE.FogExp2(bgColor, 0.05);
        
        if (this.lines) {
            this.lines.material.color.set(accentColor);
        }
        
        if (this.pointLight) {
            this.pointLight.color.set(accentColor);
        }
    }

    createNetwork() {
        // Create a tunnel/corridor of points
        const count = 1000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60;
            const y = (Math.random() - 0.5) * 60;
            const z = (Math.random() - 1) * 200;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            colors[i * 3] = 0.5 + Math.random() * 0.2;
            colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
            colors[i * 3 + 2] = 1.0;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.6
        });

        const points = new THREE.Points(geometry, material);
        this.scene.add(points);
        
        // Add some connecting lines for a "network" look
        const lineCount = 200;
        const linePositions = [];
        for (let i = 0; i < lineCount; i++) {
            const p1 = new THREE.Vector3(
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 60,
                (Math.random() - 1) * 200
            );
            const p2 = p1.clone().add(new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 20
            ));
            linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
        
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
        const lineMat = new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.2 });
        this.lines = new THREE.LineSegments(lineGeo, lineMat);
        this.scene.add(this.lines);
    }

    addLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
        
        this.pointLight = new THREE.PointLight(0x0ea5e9, 1);
        this.pointLight.position.set(5, 5, 5);
        this.scene.add(this.pointLight);
    }

    onWindowResize() {
        if (!this.renderer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        if (!this.renderer) return;
        requestAnimationFrame(() => this.animate());
        const elapsed = this.clock.getElapsedTime();
        
        // Smoothly interpolate scroll progress
        this.scrollProgress += (this.targetScrollProgress - this.scrollProgress) * 0.05;
        
        // Smoothly interpolate mouse position
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;
        
        // Move camera through tunnel based on scroll
        this.camera.position.z = 5 - this.scrollProgress * 150;
        
        // Apply mouse parallax
        this.camera.position.x = this.mouse.x * 2;
        this.camera.position.y = -this.mouse.y * 2;
        
        // Subtle tilt/wobble + mouse look
        this.camera.rotation.y = Math.sin(elapsed * 0.2) * 0.05 + (-this.mouse.x * 0.1);
        this.camera.rotation.x = Math.cos(elapsed * 0.3) * 0.02 + (this.mouse.y * 0.1);

        // Subtle movement of network elements
        if (this.lines) {
            this.lines.rotation.z = elapsed * 0.02;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

function initPortfolioScene() {
    if (!window.portfolioScene) {
        window.portfolioScene = new PortfolioScene();
    }
}

function scheduleInit() {
    if (window.requestIdleCallback) {
        requestIdleCallback(initPortfolioScene);
    } else {
        setTimeout(initPortfolioScene, 1);
    }
}

// Initialize when page is fully loaded or idle
if (document.readyState === 'complete') {
    scheduleInit();
} else {
    window.addEventListener('load', scheduleInit);
}
