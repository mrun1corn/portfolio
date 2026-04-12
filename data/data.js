export const introductionData = {
    yourName: "Robin Mia",
    tagline: "IT Executive & Assistant Network Engineer",
    headline: "I keep office networks, ISP services, CCTV systems, and support workflows dependable for the people who use them every day.",
    summary: "Based in Bangladesh, I combine hands-on network administration with practical automation, server care, and calm user support. My work usually sits where uptime, documentation, and fast troubleshooting matter.",
    location: "Bangladesh",
    availability: "Open to IT, network, and infrastructure roles",
    contactLink: "mailto:robin424123@gmail.com",
    contactLabel: "Email Me",
    resumeLabel: "Download Resume",
    resumeLink: "assets/Robin_Mia_Resume.pdf",
    highlights: [
        "3+ years hands-on IT experience",
        "Network, CCTV, server, and support operations",
        "Currently completing BSc in CSE"
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
    description: "I work across network administration, IT support, CCTV maintenance, server operations, and small automation tools. I like practical systems: clean documentation, clear escalation paths, steady monitoring, and fixes that reduce repeat incidents.",
    details: [
        "Configured and maintained MikroTik and Cisco network environments for day-to-day connectivity and subscriber support.",
        "Supported users with hardware, software, operating system, printer, and connectivity issues while keeping communication clear.",
        "Installed, replaced, and maintained CCTV systems, including site checks, device setup, and handover support.",
        "Continue to grow through a BSc in CSE, with extra focus on Linux, virtualization, automation, and full-stack project work."
    ]
};

export const focusAreasData = [
    {
        title: "Network Operations",
        text: "Monitoring, routing, switching, hotspot support, MikroTik configuration, Cisco basics, and practical network troubleshooting.",
        meta: "MikroTik, Cisco, LAN/WAN"
    },
    {
        title: "IT Support",
        text: "User support, OS setup, software issues, hardware diagnosis, printer support, and clear incident documentation.",
        meta: "Windows, Linux, help desk"
    },
    {
        title: "Systems & Security",
        text: "Server and VPS administration, CCTV rollout support, backup awareness, access control, and operational hygiene.",
        meta: "VPS, CCTV, monitoring"
    }
];

export const skillsData = [
    {
        img: "assets/icon-it-support.svg",
        nameSkill: "IT Support & Troubleshooting",
        level: "Daily operations",
        description: "Resolve user issues, diagnose devices, support operating systems, and communicate fixes in plain language.",
        alt: "IT Support and Troubleshooting skill icon"
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
        img: "assets/icon-server.svg",
        nameSkill: "Server & VPS Administration",
        level: "Growing focus",
        description: "Work with Linux servers, VPS setup, basic service checks, access control, and deployment support.",
        alt: "Server and VPS Administration skill icon"
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
        role: "IT Executive / Assistant Network Engineer",
        organization: "Infrastructure and support roles",
        period: "3+ years",
        points: [
            "Maintained network availability, handled technical support requests, and helped teams recover from connectivity issues.",
            "Worked with MikroTik and Cisco environments, CCTV systems, operating systems, and server-side tasks.",
            "Documented fixes and recurring issues so future support work became faster and easier to understand."
        ]
    },
    {
        role: "BSc in Computer Science & Engineering",
        organization: "Ongoing academic growth",
        period: "Current",
        points: [
            "Building stronger foundations in software, systems, databases, networking, and problem solving.",
            "Applying study directly through automation, full-stack projects, and Linux-based workflows."
        ]
    }
];

export const contactData = {
    title: "Let's make the next system easier to run.",
    text: "For network support, IT operations, CCTV work, server administration, or infrastructure-focused roles, email is the best first step.",
    email: "robin424123@gmail.com",
    phone: "+8801716708463",
    github: "https://github.com/mrun1corn",
    facebook: "https://facebook.com/mrun1orn"
};
