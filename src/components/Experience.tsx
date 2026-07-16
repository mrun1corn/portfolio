import React from "react";

interface ExperienceItem {
  date: string;
  isNew?: boolean;
  title: string;
  company: string;
  bullets: string[];
}

const experienceData: ExperienceItem[] = [
  {
    date: "April 2026 – Present",
    isNew: true,
    title: "C++ Developer",
    company: "BFIN IT",
    bullets: [
      "Leading software development initiatives using C++.",
      "Specializing in debugging and solving complex system-level problems.",
      "Contributing to the development of robust and efficient software applications.",
    ],
  },
  {
    date: "July 2024 – March 2026",
    title: "IT Executive / Server Administrator",
    company: "Joy Cinemas",
    bullets: [
      "Managing server infrastructure including VPS, ticketing software, and system maintenance.",
      "Ensuring smooth operation of Linux-based servers and security systems.",
      "Configuring and monitoring networking, CCTV systems, and IT hardware.",
    ],
  },
  {
    date: "Sep 2022 – Jul 2024",
    title: "Assistant Network Engineer",
    company: "ALO Communication",
    bullets: [
      "Managed home user network infrastructure and provided technical support.",
      "Configured routers, switches, and firewall security for high availability.",
      "Assisted in server maintenance and critical updates at the head office.",
    ],
  },
  {
    date: "Expected 2029",
    title: "BSc in Computer Science & Engineering",
    company: "University of South Asia",
    bullets: [
      "Building stronger foundations in software, systems, databases, networking, and problem solving.",
      "Applying study directly through automation, full-stack projects, and Linux-based workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where the work shows up</h2>
        <div className="experience-main">
          {experienceData.map((item, idx) => (
            <article key={idx} className="experience-item">
              <div>
                <p>
                  {item.date} {item.isNew && <span className="badge">New</span>}
                </p>
                <h3>{item.title}</h3>
                <span>{item.company}</span>
              </div>
              <ul className="experience-list">
                {item.bullets.map((b, bulletIdx) => (
                  <li key={bulletIdx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
