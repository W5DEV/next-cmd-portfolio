const password = "w5dev";
const linkedin = "https://www.linkedin.com/in/W5DEV/";
const github = "https://github.com/W5DEV/";
const email = "mailto:hello@w5dev.com";

export const whois = (
  <div className="flex flex-col justify-start items-start w-full text-pretty">
    <br />
    <span>Howdy, I&apos;m John (aka W5DEV)! 🤠</span>
    <span>
      I am a software developer for Midwestern Interactive and I build websites
      and web applications much like this one.
    </span>
    <span>
      I am a self-taught developer and I have been coding professionally for
      about 10 years, starting with simple websites using Wordpress and vanilla
      HTML/CSS, and eventually working my way up to full stack web applications
      using frontend libraries and frameworks like React, NextJS, Vue.js, and
      backend frameworks and languages like NestJS, Kotlin and Laravel.
    </span>
    <span>
      My hobbies outside of programming include hiking, camping, survival,
      shooting and ham radio.
    </span>
    <span>
      Professionally, my story started with jobs in IT and software support,
      then progressed to engineering roles, and finally to software development.
      I have worked for a variety of companies - both small and large - in a
      wide array of industries, and I have experience with both customer-facing
      and internal-only roles.
    </span>
    <span>
      Outside of company-based work, my freelance work has included running a
      successful web-first sports media company (South MS Sports, era
      2013-2018), working with local businesses to improve their online
      footprint, and building custom web applications to solve problems in my
      own day-to-day life.
    </span>
    <br />
  </div>
);
export const whoami = (
  <div className="flex flex-col justify-start items-start w-full">
    <br />
    <a className="underline hover:italic" href="https://youtu.be/YFNsRogBqb0">
      Blimey, didn&apos;t you ever wonder where yer mom and dad learned it all?
      (Click me...)
    </a>
    <br />
  </div>
);

export const social = (
  <div className="flex flex-col justify-center items-start w-full">
    <br />
    <div className="flex flex-row w-full">
      <span className="w-48 flex flex-row text-cyan-600 text-shadow-sm shadow-cyan-400">
        linkedin
      </span>
      <span>
        <a
          className="cursor-pointer hover:underline"
          href={linkedin}
          target="_blank"
        >
          linkedin.com/in/W5DEV
        </a>
      </span>
    </div>
    <div className="flex flex-row w-full">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        github
      </span>
      <span>
        <a
          className="cursor-pointer hover:underline"
          href={github}
          target="_blank"
        >
          github.com/W5DEV
        </a>
      </span>
    </div>
    <br />
  </div>
);

export const secret = (
  <div className="flex flex-col justify-center items-start">
    <br />
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        sudo
      </span>
      <span>Only use if you&apos;re the admin</span>
    </div>
    <br />
  </div>
);

export const help = (
  <div className="flex flex-col justify-center items-start">
    <br />
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        whois
      </span>
      <span className="text-nowrap clamp-1 truncate">Who is W5DEV?</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        whoami
      </span>
      <span className="text-nowrap clamp-1 truncate">Who are you?</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        projects
      </span>
      <span className="text-nowrap clamp-1 truncate">
        View development projects
      </span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        resume
      </span>
      <span className="text-nowrap clamp-1 truncate">
        Download my resume (You <i>may</i> need to allow pop-ups)
      </span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        social
      </span>
      <span className="text-nowrap clamp-1 truncate">
        Display social networks
      </span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        email
      </span>
      <span className="text-nowrap clamp-1 truncate">Contact me!</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        banner
      </span>
      <span className="text-nowrap clamp-1 truncate">Display the header</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        clear
      </span>
      <span className="text-nowrap clamp-1 truncate">Clear terminal</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        help
      </span>
      <span className="text-nowrap clamp-1 truncate">
        You obviously already know what this does
      </span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        history
      </span>
      <span className="text-nowrap clamp-1 truncate">View command history</span>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
        secret
      </span>
      <span className="text-nowrap clamp-1 truncate">Find the password</span>
    </div>
    <br />
  </div>
);
