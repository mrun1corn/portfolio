"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initial theme check
    const currentTheme = document.documentElement.dataset.theme || "dark";
    setTheme(currentTheme as "light" | "dark");

    // Scroll state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ["about", "skills", "projects", "experience", "contact"];
      let currentActive = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If top of section is within upper half of viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="wrapper">
        <a href="#top" className="brand gradient" onClick={closeMenu}>
          Robin
        </a>
        <nav
          id="primary-nav"
          className={`nav ${isOpen ? "nav-open" : ""}`}
          aria-label="Primary Navigation"
        >
          {["about", "skills", "projects", "experience", "contact"].map((sec) => (
            <a
              key={sec}
              className={`nav-link ${activeSection === sec ? "is-active" : ""}`}
              href={`#${sec}`}
              onClick={closeMenu}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </nav>
        <button
          className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
          type="button"
          aria-label="Switch theme"
          aria-live="polite"
          onClick={toggleTheme}
        >
          <i className="fa fa-moon-o theme-icon-dark" aria-hidden="true"></i>
          <i className="fa fa-sun-o theme-icon-light" aria-hidden="true"></i>
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
}
