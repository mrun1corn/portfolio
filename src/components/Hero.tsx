"use client";

import React, { useState, useEffect } from "react";
import LottiePlayer from "./LottiePlayer";

export default function Hero() {
  const roles = [
    "C++ Developer",
    "Server Administrator",
    "Infrastructure Engineer",
    "System Optimizer",
  ];
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const type = () => {
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        speed = 200; // Pause before next word
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, isDeleting && charIndex === currentRole.length ? 2000 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <div className="header-apresentation">
          <p className="eyebrow">
            Professional <span className="typing-text">{roleText}</span>
          </p>
          <h1 className="hero-title">
            <span className="line-0">Robin Mia</span>
            <span className="line-1">Building Robust Apps.</span>
            <span className="line-2">Scaling Reliable Systems.</span>
          </h1>
          <p className="hero-lead">
            I build robust C++ applications and manage dependable networks, servers, and infrastructure systems.
          </p>
          <p className="hero-summary">
            Based in Bangladesh, I combine modern C++ development with hands-on server administration and network
            engineering. I focus on system-level problem solving, automation, and infrastructure uptime.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:robin424123@gmail.com">
              Email Me
            </a>
            <a className="button ghost" href="assets/Robin_Mia_CV(17-05-2026).pdf" target="_blank" rel="noopener">
              Download Resume
            </a>
          </div>
          <div className="hero-meta" aria-label="Portfolio highlights">
            <span>Bangladesh</span>
            <span>Open to C++ development and infrastructure roles</span>
          </div>
          <ul className="hero-highlights">
            <li>C++ Developer & System-level programmer</li>
            <li>Server Administrator & Infrastructure Engineer</li>
            <li>3+ years in Network & IT Operations</li>
          </ul>
        </div>
        <div className="hero-visual" aria-label="Infrastructure work preview">
          <LottiePlayer
            src="/assets/hero-animation.json"
            className="w-full h-full block"
          />
          <div className="hero-visual-note">
            <strong>Systems & Development</strong>
            <span>Robust software, reliable infrastructure.</span>
          </div>
        </div>
        <div className="header-icons hero-icons">
          <a className="icon hero-icon" aria-label="Email" href="mailto:robin424123@gmail.com">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
          <a className="icon hero-icon" aria-label="Phone" href="tel:+8801716708463">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
          <a className="icon hero-icon" aria-label="Facebook" href="https://facebook.com/mrun1orn" target="_blank" rel="noopener">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a className="icon hero-icon" aria-label="Github" href="https://github.com/mrun1corn" target="_blank" rel="noopener">
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </a>
          <a className="icon hero-icon" aria-label="LinkedIn" href="https://linkedin.com/in/robin-unicorn" target="_blank" rel="noopener">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <a
        className="icon bounce gradient fade"
        id="down"
        href="#about"
        aria-label="Scroll to about section"
      >
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}
