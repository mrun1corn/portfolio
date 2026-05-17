export const introductionData = {
    yourName: "Robin Mia",
    tagline: "C++ Developer | Server Administrator | Networking & Infrastructure Engineer",
    headline: "I build robust C++ applications and manage dependable networks, servers, and infrastructure systems.",
    summary: "Based in Bangladesh, I combine modern C++ development with hands-on server administration and network engineering. I focus on system-level problem solving, automation, and infrastructure uptime.",
    location: "Bangladesh",
    availability: "Open to C++ development, server admin, and infrastructure roles",
    contactLink: "mailto:robin424123@gmail.com",
    contactLabel: "Email Me",
    resumeLabel: "Download Resume",
    resumeLink: "assets/Robin_Mia_CV(17-05-2026).pdf",
    highlights: [
        "C++ Developer & System-level programmer",
        "Server Administrator & Infrastructure Engineer",
        "3+ years in Network & IT Operations"
    ],
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",
            nameSocialNetwork: "Email",
            url: "mailto:robin424123@gmail.com"
        },
        {
            icon: "fa fa-phone",
            nameSocialNetwork: "Phone",
            url: "tel:+8801716708463"
        },
        {
            icon: "fa fa-facebook-square",
            nameSocialNetwork: "Facebook",
            url: "https://facebook.com/mrun1orn"
        },
        {
            icon: "fa fa-github-alt",
            nameSocialNetwork: "Github",
            url: "https://github.com/mrun1corn"
        },
        {
            icon: "fa fa-linkedin",
            nameSocialNetwork: "LinkedIn",
            url: "https://linkedin.com/in/robin-unicorn"
        }
    ],
    nav: [
        {
            optionNav: "About",
            idSection: "about"
        },
        {
            optionNav: "Skills",
            idSection: "skills"
        },
        {
            optionNav: "Projects",
            idSection: "projects"
        },
        {
            optionNav: "Experience",
            idSection: "experience"
        },
        {
            optionNav: "Contact",
            idSection: "contact"
        }
    ]
};

export const aboutMeData = {
    title: "Reliable infrastructure support with a builder's mindset.",
    eyebrow: "About",
    description: "I am a C++ Developer and Infrastructure Engineer with experience in software development, server administration, and network operations. I specialize in building efficient systems and maintaining high-availability infrastructure using Linux, MikroTik, and virtualization technologies.",
    details: [
        "Developing software using C++ with a focus on system-level problem solving and debugging at BFIN IT.",
        "Managing server infrastructure, including VPS, ticketing systems, and Linux-based security systems at Joy Cinemas.",
        "Configured and maintained MikroTik and Cisco network environments for day-to-day connectivity and subscriber support.",
        "Expertise in virtualization (Proxmox VE, VMware) and containerization (Docker) for modern infrastructure deployment."
    ]
};

export const focusAreasData = [
    {
        title: "Software Development",
        text: "C++ development, system-level programming, debugging, and building efficient software solutions.",
        meta: "C++, Python, Linux"
    },
    {
        title: "Systems & Security",
        text: "Server and VPS administration, CCTV rollout support, backup awareness, access control, and operational hygiene.",
        meta: "VPS, CCTV, monitoring"
    },
    {
        title: "Network Operations",
        text: "Monitoring, routing, switching, hotspot support, MikroTik configuration, Cisco basics, and practical network troubleshooting.",
        meta: "MikroTik, Cisco, LAN/WAN"
    }
];

export const skillsData = [
    {
        img: "assets/js.svg",
        nameSkill: "C++ Development",
        level: "Active",
        description: "Develop system-level software, debug complex issues, and optimize application performance.",
        alt: "C++ Development skill icon"
    },
    {
        img: "assets/icon-server.svg",
        nameSkill: "Server & VPS Administration",
        level: "Core strength",
        description: "Work with Linux servers, Proxmox VE, VMware, VPS setup, and service maintenance.",
        alt: "Server and VPS Administration skill icon"
    },
    {
        img: "assets/icon-network.svg",
        nameSkill: "Network Monitoring & Maintenance",
        level: "Core strength",
        description: "Maintain connectivity, inspect faults, support LAN/WAN environments, and keep network changes documented.",
        alt: "Network Monitoring and Maintenance skill icon"
    },
    {
        img: "assets/icon-automation.svg",
        nameSkill: "MikroTik & Cisco Configuration",
        level: "Hands-on",
        description: "Configure router features, hotspot workflows, profiles, user access, and basic switching or routing tasks.",
        alt: "MikroTik and Cisco Configuration skill icon"
    },
    {
        img: "assets/icon-cctv.svg",
        nameSkill: "CCTV Installation & Maintenance",
        level: "Field work",
        description: "Install cameras, replace faulty devices, verify viewing paths, and support handover after deployment.",
        alt: "CCTV Installation and Maintenance skill icon"
    },
    {
        img: "assets/icon-os.svg",
        nameSkill: "Linux & Windows Operations",
        level: "Everyday tools",
        description: "Install, maintain, and troubleshoot desktop and server environments across Windows and Linux.",
        alt: "Linux and Windows Operations skill icon"
    }
];

export const projectsData = [
    {
        title: "MikroTik Hotspot Manager",
        describe: "A Flask and Telegram automation project for hotspot user provisioning, profile sync, payment approval, and expired-account cleanup without repeating manual WinBox work.",
        impact: "Reduces repetitive account management and makes support actions available from a simple bot workflow.",
        tech: ["Python", "Flask", "Telegram Bot", "MikroTik"],
        url: "https://github.com/mrun1corn/mikrotik-hotspot-manager",
        ctaLabel: "View on GitHub",
        img: "assets/mikrotik-icon.png",
        alt: "MikroTik Hotspot Manager project screenshot"
    },
    {
        title: "Community Savings Platform",
        describe: "A full-stack monorepo for savings groups, covering deposits, dues, CSV exports, authentication, and role-based workflows across API, web, and mobile clients.",
        impact: "Turns group finance tasks into a structured workflow with clearer records and easier reporting.",
        tech: ["Express", "Vite", "Expo", "CSV Export"],
        url: "https://github.com/mrun1corn/mca",
        ctaLabel: "Explore monorepo",
        img: "assets/savings.png",
        alt: "Community Savings Platform project screenshot"
    },
    {
        title: "ShareBuddy Android Share Target",
        describe: "A Jetpack Compose app that intercepts Android shares, normalizes links, queues reminders, and can be built from Ubuntu through CLI tooling.",
        impact: "Makes shared links easier to capture, organize, and return to later from an Android workflow.",
        tech: ["Android", "Kotlin", "Compose", "CLI Build"],
        url: "https://github.com/mrun1corn/ShareBuddy",
        ctaLabel: "See the app",
        img: "assets/android.png",
        alt: "ShareBuddy Android app screenshot"
    }
];

export const experienceData = [
    {
        role: "C++ Developer",
        organization: "BFIN IT",
        period: "April 2026 – Present",
        points: [
            "Leading software development initiatives using C++.",
            "Specializing in debugging and solving complex system-level problems.",
            "Contributing to the development of robust and efficient software applications."
        ]
    },
    {
        role: "IT Executive / Server Administrator",
        organization: "Joy Cinemas",
        period: "July 2024 – Present",
        points: [
            "Managing server infrastructure including VPS, ticketing software, and system maintenance.",
            "Ensuring smooth operation of Linux-based servers and security systems.",
            "Configuring and monitoring networking, CCTV systems, and IT hardware."
        ]
    },
    {
        role: "Assistant Network Engineer",
        organization: "ALO Communication",
        period: "Sep 2022 – Jul 2024 (1 yr 10 mos)",
        points: [
            "Managed home user network infrastructure and provided technical support.",
            "Configured routers, switches, and firewall security for high availability.",
            "Assisted in server maintenance and critical updates at the head office."
        ]
    },
    {
        role: "BSc in Computer Science & Engineering",
        organization: "University of South Asia",
        period: "Current (Expected 2029)",
        points: [
            "Building stronger foundations in software, systems, databases, networking, and problem solving.",
            "Applying study directly through automation, full-stack projects, and Linux-based workflows."
        ]
    }
];

export const contactData = {
    title: "Let's make the next system easier to run.",
    text: "For C++ development, server admin, network support, or infrastructure-focused roles, email is the best first step.",
    email: "robin424123@gmail.com",
    phone: "+8801716708463",
    github: "https://github.com/mrun1corn",
    facebook: "https://facebook.com/mrun1orn"
};
