import React from "react";
import LottiePlayer from "./LottiePlayer";

interface ProjectItem {
  title: string;
  description: string;
  result: string;
  tech: string[];
  link: string;
  src: string;
  width: string;
  height: string;
}

const projectsData: ProjectItem[] = [
  {
    title: "portview",
    description: "A C++ Windows CLI tool to list open ports, map them to active processes, and display real-time per-connection network traffic statistics.",
    result: "Provides deep system-level network visibility and debugging directly from the command line.",
    tech: ["C++", "CMake", "Windows SDK"],
    link: "https://github.com/mrun1corn/portview",
    src: "/assets/cpp.json",
    width: "100px",
    height: "100px",
  },
  {
    title: "Community Savings Platform (mca)",
    description: "A full-stack monorepo for savings groups, covering deposits, dues, CSV exports, authentication, and role-based workflows across API, web, and mobile clients.",
    result: "Turns group finance tasks into a structured workflow with clearer records and easier reporting.",
    tech: ["TypeScript", "Express", "Vite", "Expo"],
    link: "https://github.com/mrun1corn/mca",
    src: "/assets/project-savings.json",
    width: "100px",
    height: "100px",
  },
  {
    title: "Expense Tracker",
    description: "A clean and responsive mobile application built to track personal expenses, manage budgets, and visualize spending categories.",
    result: "Simplifies personal budgeting and provides immediate insights into daily spending patterns.",
    tech: ["Flutter", "Dart", "SQLite"],
    link: "https://github.com/mrun1corn/expense",
    src: "/assets/project-expense.json",
    width: "100px",
    height: "100px",
  },
  {
    title: "ShareBuddy Android",
    description: "An Android share target and expense-sharing application built to easily capture links, normalize URLs, queue reminders, and split bills.",
    result: "Makes shared links and shared expenses easier to organize and return to from any Android workflow.",
    tech: ["Kotlin", "Compose", "Android SDK", "CLI Build"],
    link: "https://github.com/mrun1corn/ShareBuddy",
    src: "/assets/project-sharebuddy.json",
    width: "100px",
    height: "100px",
  },
  {
    title: "Hello Streamer IPTV",
    description: "A lightweight IPTV streaming web application that allows users to stream live channels in the browser with responsive player controls.",
    result: "Provides low-latency channel streaming on both mobile and desktop screens.",
    tech: ["HTML", "CSS", "Python", "IPTV"],
    link: "https://github.com/mrun1corn/hello-streamer",
    src: "/assets/project-web.json",
    width: "100px",
    height: "100px",
  },
  {
    title: "Smart Restaurant System",
    description: "A full-stack digital menu and order management system. Customers scan QR codes to order, while staff manage tables and active orders in real-time.",
    result: "Modernizes restaurant workflows with digital menus and live order tracking.",
    tech: ["React", "Node.js", "Prisma", "Socket.io"],
    link: "https://github.com/mrun1corn/smart_restuarant",
    src: "/assets/project-restaurant.json",
    width: "100px",
    height: "100px",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="skills-animation">
            <LottiePlayer
              src="/assets/projects-animation.json"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>
        <div className="projects-main">
          {projectsData.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-visual" role="presentation">
                <LottiePlayer
                  src={project.src}
                  style={{ width: project.width, height: project.height }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-impact">
                  <strong>Result</strong>
                  <span>{project.result}</span>
                </div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                >
                  View Repository
                  <i className="fa fa-external-link" aria-hidden="true" style={{ marginLeft: "6px" }}></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
