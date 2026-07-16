"use client";

import React, { useEffect, useState } from "react";
import ThreeCanvas from "@/components/ThreeCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Reveal sections on scroll
    const sections = document.querySelectorAll("section:not(.hero)");
    
    const revealOnScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (isVisible) {
          section.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("resize", revealOnScroll);
    
    // Check top button visibility
    const handleScrollBtn = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollBtn, { passive: true });

    // Initial trigger
    revealOnScroll();
    handleScrollBtn();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", revealOnScroll);
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);

  return (
    <>
      <ThreeCanvas />
      
      <Navbar />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <main id="main-content">
        <noscript>
          <div className="noscript-summary container">
            <h1>JavaScript Required</h1>
            <p>
              This portfolio uses smooth animations, real-time matrix effects, and dynamic transitions that require
              JavaScript. Please enable JavaScript in your browser settings to experience the full features.
            </p>
          </div>
        </noscript>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <a
        href="#top"
        id="top-button"
        className={`icon ${showTopBtn ? "is-visible" : ""}`}
        style={{
          opacity: showTopBtn ? 1 : 0,
          visibility: showTopBtn ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        aria-label="Scroll to top"
      >
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </a>
    </>
  );
}
