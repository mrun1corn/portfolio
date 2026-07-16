import React from "react";

export default function About() {
  return (
    <section id="about" className="section-style">
      <div className="container about-container">
        <div className="section-kicker">About</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title">Reliable infrastructure support with a builder's mindset.</h2>
            <p className="description">
              I am a C++ Developer and Infrastructure Engineer with experience in software development, server
              administration, and network operations. I specialize in building efficient systems and maintaining
              high-availability infrastructure using Linux, MikroTik, and virtualization technologies.
            </p>
          </div>
          <ul className="about-list">
            <li>Developing software using C++ with a focus on system-level problem solving and debugging at BFIN IT.</li>
            <li>Managing server infrastructure, including VPS, ticketing systems, and Linux-based security systems at Joy Cinemas.</li>
            <li>Configured and maintained MikroTik and Cisco network environments for day-to-day connectivity and subscriber support.</li>
            <li>Expertise in virtualization (Proxmox VE, VMware) and containerization (Docker) for modern infrastructure deployment.</li>
          </ul>
        </div>
        <div className="focus-grid">
          <article className="focus-item">
            <p>C++, Python, Linux</p>
            <h3>Software Development</h3>
            <span>C++ development, system-level programming, debugging, and building efficient software solutions.</span>
          </article>
          <article className="focus-item">
            <p>VPS, CCTV, monitoring</p>
            <h3>Systems & Security</h3>
            <span>Server and VPS administration, CCTV rollout support, backup awareness, access control, and operational hygiene.</span>
          </article>
          <article className="focus-item">
            <p>MikroTik, Cisco, LAN/WAN</p>
            <h3>Network Operations</h3>
            <span>Monitoring, routing, switching, hotspot support, MikroTik configuration, Cisco basics, and practical network troubleshooting.</span>
          </article>
        </div>
      </div>
    </section>
  );
}
