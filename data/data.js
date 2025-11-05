

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "Robin Mia", // Insert your name
    tagline: "IT Executive & Assistant Network Engineer",
    headline: "I keep distributed teams online by hardening networks, automating support, and turning incident-prone systems into reliable services.",
    contactLink: "mailto:robin424123@gmail.com",
    contactLabel: "Let's Connect",
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "mailto:robin424123@gmail.com"  //  url of the Social Network
        },
        {
            icon: "fa fa-phone",
            nameSocialNetwork: "Phone",
            url: "tel:+8801716708463"
        },
        {
            icon: "fa fa-facebook-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Facebook",
            url: "https://facebook.com/mrun1orn"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/mrun1corn"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "About Me",
    description: "I'm an infrastructure-focused technologist who blends three years of hands-on experience with a curiosity for every layer of the stack. From replacing legacy CCTV systems at Joy Cinemas to keeping ISP subscribers online at ALO Communication, I thrive in roles that demand rapid troubleshooting, precise documentation, and empathetic support. I'm currently completing my BSc in CSE while sharpening automation and virtualization skills to deliver smoother rollouts and faster recoveries.",
    titleURL: "Download CV",
    urlCV: "assets/Robin_Mia_Resume.pdf"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/icon-it-support.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "IT Support & Troubleshooting"      //  card name
    },
    {
        img: "assets/icon-network.svg",
        nameSkill: "Network Monitoring & Maintenance"
    },
    {
        img: "assets/icon-automation.svg",
        nameSkill: "MikroTik & Cisco Configuration"
    },
    {
        img: "assets/icon-cctv.svg",
        nameSkill: "CCTV Installation & Maintenance"
    },
    {
        img: "assets/icon-server.svg",
        nameSkill: "Server & VPS Administration"
    },
    {
        img: "assets/icon-os.svg",
        nameSkill: "Linux & Windows Operations"
    }

]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "MikroTik Hotspot Manager",
        describe: "Flask + Telegram automation that provisions hotspot users, syncs MikroTik profiles, approves payments, and prunes expired accounts without touching WinBox.",
        url: "https://github.com/mrun1corn/mikrotik-hotspot-manager",
        ctaLabel: "View on GitHub",
        img: "assets/project-joy-cinemas.jpg"
    },
    {
        title: "Community Savings Platform",
        describe: "Full-stack monorepo (Express API, Vite web app, Expo mobile client) handling deposits, dues, CSV exports, authentication, and role-based workflows for savings groups.",
        url: "https://github.com/mrun1corn/mca",
        ctaLabel: "Explore monorepo",
        img: "assets/project-alo-network.jpg"
    },
    {
        title: "ShareBuddy Android Share Target",
        describe: "Jetpack Compose Material 3 app that intercepts Android shares, normalizes links, queues reminders, and ships via CLI builds so the APK can be produced fully on Ubuntu.",
        url: "https://github.com/mrun1corn/ShareBuddy",
        ctaLabel: "See the app",
        img: "assets/project-ist-labs.jpg"
    },

]
