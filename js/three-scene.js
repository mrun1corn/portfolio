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
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        this.clock = new THREE.Clock();
        
        // Mouse tracking for parallax
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        // Scroll tracking
        this.scrollProgress = 0;
        this.targetScrollProgress = 0;
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('scroll', () => this.onScroll());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onMouseMove(e) {
        if (!this.targetMouse) return;
        this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1; // standard webgl coordinates
    }

    onScroll() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.targetScrollProgress = window.scrollY / (totalHeight || 1);
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Initial Camera Position
        this.camera.position.set(0, 15, 30);
        this.camera.lookAt(0, 0, 0);
        
        this.createMatrix();
        this.addLights();
        this.updateTheme();
    }

    updateTheme() {
        const style = getComputedStyle(document.documentElement);
        const bgColor = style.getPropertyValue('--color-bg').trim() || '#101713';
        const accentColor = style.getPropertyValue('--color-accent').trim() || '#10b981';
        
        this.scene.fog = new THREE.FogExp2(bgColor, 0.025);
        
        if (this.pointsMaterial) {
            this.pointsMaterial.color.set(accentColor);
        }
        if (this.linesMaterial) {
            this.linesMaterial.color.set(accentColor);
        }
    }

    createMatrix() {
        // Create an "Infrastructure Data Matrix"
        const gridSize = 20;
        const spacing = 3;
        
        const positions = [];
        const colors = [];
        
        // Generate grid points
        for (let x = -gridSize; x <= gridSize; x++) {
            for (let z = -gridSize; z <= gridSize; z++) {
                // Determine a slight organic displacement in Y to make it look like a data landscape
                const y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 2;
                
                positions.push(x * spacing, y, z * spacing);
                
                // Colors logic: randomly dim some nodes to feel like active/inactive clusters
                const intensity = 0.5 + Math.random() * 0.5;
                colors.push(intensity, intensity, intensity);
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create the nodes (points)
        this.pointsMaterial = new THREE.PointsMaterial({
            size: 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        this.points = new THREE.Points(geometry, this.pointsMaterial);
        this.scene.add(this.points);

        // Generate lines (Edges of the matrix)
        const linePositions = [];
        const cols = (gridSize * 2) + 1;
        
        for (let x = 0; x < cols; x++) {
            for (let z = 0; z < cols; z++) {
                const currentIndex = x * cols + z;
                
                // Connect to right neighbor
                if (x < cols - 1) {
                    const rightIndex = (x + 1) * cols + z;
                    linePositions.push(
                        positions[currentIndex * 3], positions[currentIndex * 3 + 1], positions[currentIndex * 3 + 2],
                        positions[rightIndex * 3], positions[rightIndex * 3 + 1], positions[rightIndex * 3 + 2]
                    );
                }
                
                // Connect to bottom neighbor
                if (z < cols - 1) {
                    const bottomIndex = x * cols + (z + 1);
                    linePositions.push(
                        positions[currentIndex * 3], positions[currentIndex * 3 + 1], positions[currentIndex * 3 + 2],
                        positions[bottomIndex * 3], positions[bottomIndex * 3 + 1], positions[bottomIndex * 3 + 2]
                    );
                }
            }
        }

        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        
        this.linesMaterial = new THREE.LineBasicMaterial({
            transparent: true, 
            opacity: 0.08
        });
        
        this.lines = new THREE.LineSegments(lineGeo, this.linesMaterial);
        this.scene.add(this.lines);
        
        // Group for rotation
        this.matrixGroup = new THREE.Group();
        this.matrixGroup.add(this.points);
        this.matrixGroup.add(this.lines);
        this.scene.add(this.matrixGroup);
    }

    addLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
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
        
        if (this.matrixGroup) {
            // Gentle constant rotation of the data plane
            this.matrixGroup.rotation.y = elapsed * 0.05;
            
            // Mouse parallax tilt
            this.matrixGroup.rotation.z = this.mouse.x * 0.15;
            this.matrixGroup.rotation.x = -this.mouse.y * 0.15;
            
            // Scroll creates a downward dive effect
            this.matrixGroup.position.y = this.scrollProgress * 15 - 5;
            this.camera.position.z = 30 - (this.scrollProgress * 10);
        }
        
        // Animate the vertices to give a flowing data effect
        if (this.points && this.points.geometry.attributes.position) {
            const positions = this.points.geometry.attributes.position.array;
            const cols = 41; // gridSize * 2 + 1
            
            for (let x = 0; x < cols; x++) {
                for (let z = 0; z < cols; z++) {
                    const idx = (x * cols + z) * 3 + 1; // The Y coordinate
                    const origX = positions[idx - 1];
                    const origZ = positions[idx + 1];
                    // Ripple effect
                    positions[idx] = Math.sin(origX * 0.2 + elapsed) * Math.cos(origZ * 0.2 + elapsed) * 2;
                }
            }
            
            this.points.geometry.attributes.position.needsUpdate = true;
            
            // Re-sync lines with updated point positions
            if (this.lines && this.lines.geometry.attributes.position) {
                const linePositions = this.lines.geometry.attributes.position.array;
                let lineIdx = 0;
                
                for (let x = 0; x < cols; x++) {
                    for (let z = 0; z < cols; z++) {
                        const currentIndex = x * cols + z;
                        
                        // Right neighbor
                        if (x < cols - 1) {
                            const rightIndex = (x + 1) * cols + z;
                            linePositions[lineIdx + 1] = positions[currentIndex * 3 + 1];
                            linePositions[lineIdx + 4] = positions[rightIndex * 3 + 1];
                            lineIdx += 6;
                        }
                        
                        // Bottom neighbor
                        if (z < cols - 1) {
                            const bottomIndex = x * cols + (z + 1);
                            linePositions[lineIdx + 1] = positions[currentIndex * 3 + 1];
                            linePositions[lineIdx + 4] = positions[bottomIndex * 3 + 1];
                            lineIdx += 6;
                        }
                    }
                }
                this.lines.geometry.attributes.position.needsUpdate = true;
            }
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
