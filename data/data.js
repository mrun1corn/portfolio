

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "Robin", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "robin424123@gmail.com"  //  url of the Social Network
        },
        {
            icon: "fa fa-facebook-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Facebook",
            url: "facebook.com/mrun1orn"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "github.com/mrun1corn"
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
    description: "Hello there! I'm Robin, an Assistant Network Engineer with a passion for technology and a knack for self-learning. I thrive on the challenges of troubleshooting network issues and optimizing systems for peak performance. Whether it's configuring routers, ensuring network security, or staying updated with the latest advancements in the field, I'm always eager to expand my knowledge and skills. Outside of work, you can find me diving into online courses, experimenting with new networking concepts, or simply enjoying a good book on technology. Let's connect and explore the ever-evolving world of networking together!",
    titleURL: "View CV",
    urlCV: "#"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/ru.png",  // card image  > insert the svg image in the assets folder
        nameSkill: "Ubuntu"      //  card name
    },
    {
        img: "assets/m.png",
        nameSkill: "Router"
    },
    {
        img: "assets/a.png",
        nameSkill: "Android Rom Development"
    },

]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Bash Scripting",    // card image  > insert the svg image in the assets folder
        describe: "Proficient in Bash scripting, I utilize this skill to automate various tasks, streamline processes, and enhance efficiency within network environments. I have hands-on experience creating custom scripts tailored to specific needs, whether it's automating routine maintenance tasks, deploying software packages, or configuring network devices.",
        url: "github.com/mrun1corn/server_scripts",  // url of the Github repository
        img: "assets/project1.jpg"  //image Project
    },
    {
        title: "Hypervisor Technologies",
        describe: "Virtualization technology has become increasingly prevalent in modern computing environments, enabling efficient resource utilization, enhanced security, and simplified infrastructure management. Hypervisors play a pivotal role in virtualization by abstracting physical hardware resources and facilitating the creation and management of virtual machines (VMs). This project aims to conduct a comprehensive comparative analysis of prominent hypervisor technologies, including VirtualBox, VMware, and Cockpit, to evaluate their features, performance, and suitability for various use cases.",
        url: "#",
        img: "assets/h.jpg"
    },

]








