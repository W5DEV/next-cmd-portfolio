export interface IProject {
  name: string;
  type: string;
  link: string | null;
  status: string;
  description: string;
  github: string | null;
  tech: string[];
  primaryTech: string;
}

export const electricWorksInc: IProject = {
  name: "Electric Works Inc",
  link: "https://ew.liquidcreative.net/",
  type: "Professional",
  status: "Delivered",
  description:
    "The Electric Works Inc website was designed by a team of designers at a former employer. I adapted to the tech being used at the company and developed this website using their OctoberCMS-based CMS platform of choice - WinterCMS. I utilized bootstrap, as that was the preferred CSS framework at the time. I was able to integrate with the CMS using HTML and Javascript to create a perfect representation of the designs provided.",
  github: null,
  tech: ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "Laravel", "WinterCMS"],
  primaryTech: "Laravel",
};

export const paulJackson: IProject = {
  name: "Paul Jackson and Sons",
  link: "https://pauljacksonandson.com/calendar-loggedout",
  type: "Professional",
  status: "Delivered",
  description:
    "The Paul Jackson and Sons website overhaul involved designing a calendar for the website that displayed events and allowed admin users to add and modify new events and projects. It also allowed certain online users to see hidden events and projects as the owner selected. I utilized TailwindCSS and AlpineJS to accomplish most of the heavy lifting and was able to deliver a product that met the client's needs and exceed expectations.",
  github: null,
  tech: [
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "AlpineJS",
    "Laravel",
    "WinterCMS",
    "TailwindCSS",
  ],
  primaryTech: "AlpineJS",
};

export const msmiga: IProject = {
  name: "MS MIGA",
  link: "https://ms-miga.com/",
  type: "Professional",
  status: "Delivered",
  description:
    "The MS Insurance Guarantee Association website was designed as an overhaul to the client's existing website which provided a much more modern user experience. I was able to utilize TailwindCSS with WinterCMS, along with vanilla HTML and JavaScript to create the website exactly as it was designed.",
  github: null,
  tech: [
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Laravel",
    "WinterCMS",
    "TailwindCSS",
  ],
  primaryTech: "Laravel",
};

export const birminghamAirport: IProject = {
  name: "Birmingham Airport",
  link: "https://www.flybirmingham.com/",
  type: "Professional",
  status: "Delivered",
  description:
    "The Birmingham Airport website has a Gatsby-based front end that incorporates GraphQL to connect to a backend which uses WordPress API to serve content.",
  github: null,
  tech: ["Gatsby", "GraphQL", "TailwindCSS", "WordPress API"],
  primaryTech: "Gatsby",
};

export const youDotCom: IProject = {
  name: "You.com",
  link: "https://you.com/",
  type: "Professional",
  status: "Contract Completed on Live Website",
  description:
    "You.com is a search engine designed to rival Google. I worked on this project for a few months and implemented several designs using Styled Components.",
  github: null,
  tech: ["NextJS"],
  primaryTech: "NextJS",
};

export const agerpoint: IProject = {
  name: "Agerpoint",
  link: null,
  type: "Professional",
  status: "Contract Completed on Live Website",
  description:
    "The Agerpoint project used React to interface with OpenLayers to add waypoints to a map that correlated with user uploaded files and images.",
  github: null,
  tech: ["React", "OpenLayers"],
  primaryTech: "React",
};

export const incFile: IProject = {
  name: "IncFile",
  link: null,
  type: "Professional",
  status: "Delivered",
  description:
    "IncFile is a website that offers businesses the ability to form a business online and select all necessary services to legally get everything setup that they'd need. This project utilized VueJS and eventually TailwindCSS, and I was part of the engineering team that helped implement the designs for their new checkout flow. We were able to work with another engineering firm to make technology suggestions and assist with getting the project to a point where it could be speedily developed and have designs implemented quickly.",
  github: null,
  tech: ["VueJS", "TailwindCSS"],
  primaryTech: "VueJS",
};

export const devRev: IProject = {
  name: "DevRev",
  link: null,
  type: "Professional",
  status: "In Progress",
  description:
    "My work with DevRev involved implementing theme-driven UI Component designs in React using TailwindCSS, and documenting them using Storybook.",
  github: null,
  tech: ["React", "TailwindCSS", "Storybook"],
  primaryTech: "React",
};

export const recipeVaultOnline: IProject = {
  name: "Online Cookbook v1",
  link: "https://recipes.jjlarson.com/",
  type: "Personal",
  status: "Deployed",
  description:
    "This project was born out of the desire to have an easy way to store my personal recipes and family recipes in a manner that got rid of the need to keep track of paper and flash cards that collect gross food and spills. The first version of this, Recipe Vault Online, uses VueJS and displays recipes in a pop up window. The implementation of this led to some problems with sharing and bookmarking recipes, so I began developing the second iteration of this based on NextJS.",
  github: "https://github.com/W5DEV/vite-recipe-vault-online",
  tech: ["VueJS", "TailwindCSS", "Supabase"],
  primaryTech: "VueJS",
};

export const recipeVaultOnlineV2: IProject = {
  name: "Online Cookbook v2",
  link: "https://cookbook.jjlarson.com/",
  type: "Personal",
  status: "In Progress",
  description:
    "The second version of my Online Cookbook/Recipe Storage is made with NextJS, and is currently a work in progress while I get it to a state where it satisfies the same requirements as the previous version. This new version is quicker, more secure and assigns URLs for each recipe, so sharing is made much easier.",
  github: "https://github.com/W5DEV/next-recipes",
  tech: ["NextJS", "TailwindCSS"],
  primaryTech: "NextJS",
};

export const recipeApi: IProject = {
  name: "Recipe API",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "Initially, my recipe backend was built on Supabase, which performed the duties I asked of it. In the name of being more robust, I decided to make a new RestfulAPI using NestJS and Prisma. This API is secure and only allows connections from the NextJS frontend that I built.",
  github: "https://github.com/W5DEV/nest-prisma-api",
  tech: ["NestJS", "Prisma"],
  primaryTech: "NestJS",
};

export const greatIdeaMediaPlatform: IProject = {
  name: "Great Idea Media Platform",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "The Great Idea Media Platform is a new project that I'm working on to introduce a clean, easy-to-use platform for newspapers and sports media groups to upload content and share it with their audiences. While it is still a WIP project, I felt the world of newspaper websites were lacking and very difficult to use, as well as quite slow. After researching the reasons, I discovered this is mostly due to predatory practices that target small newspapers, forcing them to pay thousands of dollars for a website that is outdated and grossly ineffective. I hope to branch this platform out and provide small newspapers and media groups affordable and easily deployable and maintainable websites.",
  github: "https://github.com/W5DEV/great-idea-media-sanity",
  tech: ["NextJS", "TailwindCSS"],
  primaryTech: "NextJS",
};

export const myBudgetBuddy: IProject = {
  name: "My Budget Buddy",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "This is my latest WIP project. I find myself becoming more obsessed with finances and budgeting as I get older, and while I have relied on a google doc for my personal budget and outlook, I thought it would be extremely useful to make an app that allows users to easily track their income and expenses. After doing lots of research, I determined a native app with no connection to the cloud would be the most honest way of doing this. I have used several apps and the one main problem with these apps is the insistence on connecting to your personal accounts and shoving ads and up-charges to the user. I feel strongly about being able to have access to useful tools without having to compromise your personal security and without being constantly targeted for advertisement revenue. My plan is to release this app on app stores for a small, one time fee, with promises that their data will never be stored on cloud servers and there will never be any up-charges or ads.",
  github: "https://github.com/W5DEV/nextjs-budget-buddy",
  tech: ["Kotlin"],
  primaryTech: "Kotlin",
};

export const portfolioV1: IProject = {
  name: "VueJS Portfolio",
  link: "https://vite-project-seven-dusky.vercel.app/",
  type: "Personal",
  status: "Deployed",
  description:
    "My first real iteration of an online portfolio was built with Angular when I first started learning JavaScript frameworks. I have since killed that project and I rebuilt and redesigned it using VueJS. My objective with this portfolio was to simply make a simple and clean website as a home to show off my projects and experience. I implemented icons and animated menus to make things a bit more aesthetically appealing. I originally built this version of my portfolio with NextJS, but decided to overhaul it in a 1-to-1 way using VueJS to better learn and familiar myself with the framework, which I was using for a project for a client at work. This version of my portfolio was never fully realized, and recently I decided to redesign it to be something more unique and fun, the result of which is the website you are currently visiting.",
  github: "https://github.com/W5DEV/vite-portfolio",
  tech: ["VueJS", "TailwindCSS"],
  primaryTech: "VueJS",
};

export const terminalPortfolio: IProject = {
  name: "W5DEV Terminal Portfolio",
  link: "https://www.jjlarson.com/",
  type: "Personal",
  status: "In Progress",
  description:
    "I have been more on the nerdy side for my entire life. I wanted a portfolio that demonstrated my own personality and interests, and I thought it would be fun to redesign a command terminal inside of a web browser. I took lots of inspiration to the other terminal projects that exist to get a feel for how they handled the design and find some inspiration for fun ways to incorporate my own flare on the project. I am a believer in using the technology stack that you are currently using most in your career/life, so I decided to write this in NextJS, using Tailwind for styling. There's lots of fun easter eggs and hidden information scattered about this project, so I hope this can be a website that grows and adapts as I continue to think of more fun things to add to it.",
  github: "https://github.com/W5DEV/nextjs-cmd-portfolio",
  tech: ["NextJS", "TailwindCSS"],
  primaryTech: "NextJS",
};

export const amazonClone: IProject = {
  name: "Amazon Clone",
  link: "https://amazon.jjlarson.com/",
  type: "Personal",
  status: "Deployed",
  description:
    "In 2021, I was using Bootstrap in my day-to-day work with my employer, and I was fully aware of the downsides of using Bootstrap, and I knew I had the opportunity to introduce new procedures and technologies that would make development easier and more efficient. I decided to learn to use TailwindCSS, and one of the best tutorials I found walked through rebuilding a clone of the amazon website, with a more modern and simplistic touch. I found that this project adequately changed the way a developer needs to think to fall in love with TailwindCSS, and despite this project being super basic and straight forward, I still keep it around to pay tribute to my experience learning TailwindCSS.",
  github: "https://github.com/W5DEV/amazon-clone",
  tech: ["HTML", "Javascript", "TailwindCSS", "Firebase"],
  primaryTech: "TailwindCSS",
};

export const ktorMediaApi: IProject = {
  name: "Ktor RESTful API",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "On the quest to learn a dedicated backend language, I decided to start to learn Kotlin and Ktor. I have been using Kotlin since the end of 2023, and I find it extremely fun to use and program in. I am hoping to continue to spin up a robust and useful RESTful API that I can use for the backbone of the Great Idea Media platform, as well as a good outlet to learn more about Kotlin and Ktor.",
  github: null,
  tech: ["Kotlin", "Ktor"],
  primaryTech: "Kotlin",
};
