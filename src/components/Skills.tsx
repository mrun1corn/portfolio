import React from "react";
import LottiePlayer from "./LottiePlayer";

interface SkillItem {
  src: string;
  level: string;
  title: string;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: [
      {
        src: "/assets/icon-it-support.svg",
        level: "Active focus",
        title: "C++ Development",
        description: "Develop system-level software, debug complex issues, and optimize application performance at BFIN IT.",
      },
      {
        src: "/assets/icon-os.svg",
        level: "Everyday tools",
        title: "Linux & Windows",
        description: "Expertise in deploying and troubleshooting both desktop and server environments.",
      },
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      {
        src: "/assets/icon-server.svg",
        level: "Core strength",
        title: "Containerization & CI/CD",
        description: "Docker, GitHub Actions, and environment standardization for reliable deployments.",
      },
      {
        src: "/assets/icon-automation.svg",
        level: "Everyday tools",
        title: "Scripting & Automation",
        description: "Python and Bash scripting for system maintenance, monitoring, and task automation.",
      },
    ],
  },
  {
    title: "Infrastructure & Networks",
    skills: [
      {
        src: "/assets/icon-server.svg",
        level: "Core strength",
        title: "Server & VPS Administration",
        description: "Manage Linux servers, Proxmox VE, VMware, and cloud infrastructure with a focus on uptime.",
      },
      {
        src: "/assets/icon-network.svg",
        level: "Core strength",
        title: "Network Operations",
        description: "Maintain connectivity, MikroTik/Cisco configuration, and LAN/WAN infrastructure.",
      },
    ],
  },
  {
    title: "Operations & Support",
    skills: [
      {
        src: "/assets/icon-it-support.svg",
        level: "Daily operations",
        title: "Technical Support",
        description: "Resolve hardware/software issues and maintain clear documentation for IT workflows.",
      },
      {
        src: "/assets/icon-cctv.svg",
        level: "Field work",
        title: "CCTV Systems",
        description: "Install, configure, and maintain surveillance systems and remote viewing paths.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">Technical Expertise</h2>
          </div>
          <div className="skills-animation">
            <LottiePlayer
              src="/assets/skills-animation.json"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-cards">
                {category.skills.map((skill) => (
                  <article key={skill.title} className="skill-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.src} className="vector-icon" alt={`${skill.title} icon`} />
                    <div>
                      <p className="skill-level">{skill.level}</p>
                      <h3>{skill.title}</h3>
                      <span>{skill.description}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
