"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for fallback criteria
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      canvas.classList.add("bg-fallback");
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let clock: THREE.Clock | null = null;
    let points: THREE.Points | null = null;
    let lines: THREE.LineSegments | null = null;
    let matrixGroup: THREE.Group | null = null;
    let pointsMaterial: THREE.PointsMaterial | null = null;
    let linesMaterial: THREE.LineBasicMaterial | null = null;
    let animationFrameId: number | null = null;

    // Trackers
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    // 1. Initialize Scene, Camera, Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    clock = new THREE.Clock();

    // 2. Generate Grid Matrix
    const gridSize = 20;
    const spacing = 3;
    const cols = gridSize * 2 + 1;

    const positions: number[] = [];
    const colors: number[] = [];

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 2;
        positions.push(x * spacing, y, z * spacing);
        const intensity = 0.5 + Math.random() * 0.5;
        colors.push(intensity, intensity, intensity);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    pointsMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    points = new THREE.Points(geometry, pointsMaterial);

    // Generate lines (Edges of the matrix)
    const linePositions: number[] = [];
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < cols; z++) {
        const currentIndex = x * cols + z;
        if (x < cols - 1) {
          const rightIndex = (x + 1) * cols + z;
          linePositions.push(
            positions[currentIndex * 3],
            positions[currentIndex * 3 + 1],
            positions[currentIndex * 3 + 2],
            positions[rightIndex * 3],
            positions[rightIndex * 3 + 1],
            positions[rightIndex * 3 + 2]
          );
        }
        if (z < cols - 1) {
          const bottomIndex = x * cols + (z + 1);
          linePositions.push(
            positions[currentIndex * 3],
            positions[currentIndex * 3 + 1],
            positions[currentIndex * 3 + 2],
            positions[bottomIndex * 3],
            positions[bottomIndex * 3 + 1],
            positions[bottomIndex * 3 + 2]
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

    linesMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.08,
    });

    lines = new THREE.LineSegments(lineGeo, linesMaterial);

    matrixGroup = new THREE.Group();
    matrixGroup.add(points);
    matrixGroup.add(lines);
    scene.add(matrixGroup);

    // Add simple ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Theme updating logic
    const updateTheme = () => {
      if (!scene || !pointsMaterial || !linesMaterial) return;
      const style = getComputedStyle(document.documentElement);
      const bgColor = style.getPropertyValue("--color-bg").trim() || "#030712";
      const accentColor = style.getPropertyValue("--color-accent").trim() || "#10b981";

      scene.fog = new THREE.FogExp2(bgColor, 0.025);
      pointsMaterial.color.set(accentColor);
      linesMaterial.color.set(accentColor);
    };

    updateTheme();

    // Listen for theme mutations
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Resize
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Scroll
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = window.scrollY / (totalHeight || 1);
    };
    window.addEventListener("scroll", handleScroll);

    // Mouse
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      if (!renderer || !scene || !camera || !clock) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smoothly interpolate scroll and mouse
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      if (matrixGroup) {
        matrixGroup.rotation.y = elapsed * 0.05;
        matrixGroup.rotation.z = mouse.x * 0.15;
        matrixGroup.rotation.x = -mouse.y * 0.15;
        matrixGroup.position.y = scrollProgress * 15 - 5;
        camera.position.z = 30 - scrollProgress * 10;
      }

      // Ripple vertices
      if (points && points.geometry.attributes.position) {
        const positionsArr = points.geometry.attributes.position.array as Float32Array;
        for (let x = 0; x < cols; x++) {
          for (let z = 0; z < cols; z++) {
            const idx = (x * cols + z) * 3 + 1; // Y coordinate
            const origX = positionsArr[idx - 1];
            const origZ = positionsArr[idx + 1];
            positionsArr[idx] = Math.sin(origX * 0.2 + elapsed) * Math.cos(origZ * 0.2 + elapsed) * 2;
          }
        }
        points.geometry.attributes.position.needsUpdate = true;

        if (lines && lines.geometry.attributes.position) {
          const linePositionsArr = lines.geometry.attributes.position.array as Float32Array;
          let lineIdx = 0;
          for (let x = 0; x < cols; x++) {
            for (let z = 0; z < cols; z++) {
              const currentIndex = x * cols + z;
              if (x < cols - 1) {
                const rightIndex = (x + 1) * cols + z;
                linePositionsArr[lineIdx + 1] = positionsArr[currentIndex * 3 + 1];
                linePositionsArr[lineIdx + 4] = positionsArr[rightIndex * 3 + 1];
                lineIdx += 6;
              }
              if (z < cols - 1) {
                const bottomIndex = x * cols + (z + 1);
                linePositionsArr[lineIdx + 1] = positionsArr[currentIndex * 3 + 1];
                linePositionsArr[lineIdx + 4] = positionsArr[bottomIndex * 3 + 1];
                lineIdx += 6;
              }
            }
          }
          lines.geometry.attributes.position.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      // Dispose resources
      if (geometry) geometry.dispose();
      if (lineGeo) lineGeo.dispose();
      if (pointsMaterial) pointsMaterial.dispose();
      if (linesMaterial) linesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}
