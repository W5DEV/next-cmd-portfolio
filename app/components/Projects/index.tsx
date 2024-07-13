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

export const rpgManager: IProject = {
  name: "RPG Manager",
  link: "https://github.com/W5DEV/python-rpg-manager",
  type: "Personal",
  status: "In Progress",
  description:
    "The idea to create an RPG Manger stemmed from my active work in my Legends & Legacies project. I decided that a more urgent need within the RPG community was a utility that facilitated creating characters and managing campaigns. I am currenly working thorugh laying out the UI and solidifying the core mechanics of the application. My goal is to eventually make a system for syncing player data so DMs can easily keep track of player stats as well as their own campaign data.",
  github: "https://github.com/W5DEV/python-rpg-manager",
  tech: ["Python"],
  primaryTech: "Python",
};

export const legendsAndLegacies: IProject = {
  name: "Legends and Legacies",
  link: "https://github.com/W5DEV/python-legends-and-legacies",
  type: "Personal",
  status: "In Progress",
  description:
    "Legends and Legacies is a text-based RPG game that I am builidng based on the rules and mechanics of Dungeons and Dragons. It is currently a work in progress and I am in the rules and mechanics phase of development.",
  github: "https://github.com/W5DEV/python-legends-and-legacies",
  tech: ["Python"],
  primaryTech: "Python",
};

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
  status: "Deployed/Outdated",
  description:
    "This project was born out of the desire to have an easy way to store my personal recipes and family recipes in a manner that got rid of the need to keep track of paper and flash cards that collect gross food and spills. The first version of this, Recipe Vault Online, uses VueJS and displays recipes in a pop up window. The implementation of this led to some problems with sharing and bookmarking recipes, so I began developing the second iteration of this based on NextJS.",
  github: "https://github.com/W5DEV/vue-recipe-vault-online",
  tech: ["VueJS", "TailwindCSS", "Supabase"],
  primaryTech: "VueJS",
};

export const recipeVaultOnlineV2: IProject = {
  name: "Online Cookbook v2",
  link: "https://cookbook.jjlarson.com/",
  type: "Personal",
  status: "Deployed/In Use",
  description:
    "The second version of my Online Cookbook/Recipe Storage is made with NextJS. This new version is quicker, more secure and assigns URLs for each recipe, so sharing is made much easier. My goal with this version was to make a stripped down, less complex version that could easily be used by me and my family, but I am dockerizing this version so it can ultimately be run locally. My goal is for this project to also be easily cloned and spun up for anyone else's use as well. I have made an accompanying API for this project, which is built with Go and Docker, so that portion can also be spun up and used easily by anyone.",
  github: "https://github.com/W5DEV/next-recipes",
  tech: ["NextJS", "TailwindCSS, Docker"],
  primaryTech: "NextJS",
};

export const recipeApi: IProject = {
  name: "Recipe API v1",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "Initially, my recipe backend was built on Supabase, which performed the duties I asked of it. In the name of being more robust, I decided to make a new RestfulAPI using NestJS and Prisma. This API is secure and only allows connections from the NextJS frontend that I built.",
  github: "https://github.com/W5DEV/nest-prisma-api",
  tech: ["NestJS", "Prisma"],
  primaryTech: "NestJS",
};

export const goRecipeApi: IProject = {
  name: "Recipe API v2",
  link: null,
  type: "Personal",
  status: "In Progress",
  description:
    "I found prisma to be a bit bulky and complex to maintain, and I also noticed updates to Nest or Prisma sometimes broke some API routes or my database schema. I decided to rebuild it Go to both improve performance and to improve my skills with Go. I built this API in about 6 hours and it is currently the one I have in production for use with my current Online Cookbook iteration. My goal was to make a self-hosted version, which can be easily cloned and spun up by anyone with their own credentials using the Dockerfile.",
  github: "https://github.com/W5DEV/go-recipe-api",
  tech: ["Go", "Gin", "GORM", "Docker"],
  primaryTech: "Go",
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

export const portfolioV1: IProject = {
  name: "VueJS Portfolio",
  link: "https://vite-project-seven-dusky.vercel.app/",
  type: "Personal",
  status: "Deployed",
  description:
    "My first real iteration of an online portfolio was built with Angular when I first started learning JavaScript frameworks. I have since killed that project and I rebuilt and redesigned it using VueJS. My objective with this portfolio was to simply make a simple and clean website as a home to show off my projects and experience. I implemented icons and animated menus to make things a bit more aesthetically appealing. I originally built this version of my portfolio with NextJS, but decided to overhaul it in a 1-to-1 way using VueJS to better learn and familiar myself with the framework, which I was using for a project for a client at work. This version of my portfolio was never fully realized, and recently I decided to redesign it to be something more unique and fun, the result of which is the website you are currently visiting.",
  github: "https://github.com/W5DEV/vue-portfolio",
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
  github: "https://github.com/W5DEV/next-cmd-portfolio",
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

export const greatIdeaDevelopment: IProject = {
  name: "GreatIdea.dev",
  link: "https://www.greatidea.dev/",
  type: "Personal",
  status: "Deployed",
  description:
    "The purpose behind GreatIdea.dev is to provide expert-level web development services to small businesses and individuals in need of establishing or refreshing their online presence, but who may not have the resources or funds to hire a large agency. I consider this 'business' an evolution of my freelance work, which has assumed various names over the years. The website itself is built with NextJS and TailwindCSS, and the actual development focuses on showcasing more of my professional work to attract prospective clients.",
  github: "https://github.com/GreatIdea-Dev/greatideadotdev-website",
  tech: ["NextJS", "TailwindCSS"],
  primaryTech: "NextJS",
};

export const greatIdeaUI: IProject = {
  name: "GreatIdea.dev UI Kit",
  link: "https://ui.greatidea.dev/",
  type: "Personal",
  status: "Deployed/WIP",
  description:
    "The purpose behind this project is to be a collection of reusable components that I can grab and use throughout various projects that I work on to add a bit of extra flair. My intention is to make this a living project that I can continually expand and refine as I realize more ideas for clever components. So far, I have designed a theme picker, which allows the user to select their preferred color for dark mode or light mode, and also lets them choose an accent color that is used throughout the site. I have also integrated that with some basic components, like a heading and a bordered container which uses some logic to create gradients when the mouse moves over the specific area.",
  github: "https://github.com/GreatIdea-Dev/greatideadotdev-uikit",
  tech: ["NextJS", "TailwindCSS"],
  primaryTech: "TailwindCSS",
};

export const extremeNetworksAPIJSONParser: IProject = {
  name: "Extreme Networks API JSON Parser",
  link: "https://extreme.greatidea.dev/",
  type: "Professional",
  status: "Deployed/WIP",
  description:
    "This project was built to help a client of mine parse JSON data from an API and display it in a more user-friendly manner. This project was built with Solid.js and TailwindCSS, and I used the project as an opportunity to learn more about the Solid.js framework and how viable it would be for future projects that require a lightweight frontend presence.",
  github: "https://github.com/GreatIdea-Dev/extreme-jsonparser",
  tech: ["Solid.js", "TailwindCSS"],
  primaryTech: "Solid.js",
};

export const asteroidBlasterGame: IProject = {
  name: "2D Space Shooter Game",
  link: null,
  type: "Personal",
  status: "Completed",
  description:
    "This game is a simple asteroid blaster game built with Godot. I am using this project to get familiar with using Godot and work through some of the basics of game development. My intention is to make this game cross platform and think through various features and mechanics that I can implement to make the game more fun and unique.",
  github: "https://github.com/W5DEV/godot-spaceshooter",
  tech: ["Godot"],
  primaryTech: "Godot",
};
