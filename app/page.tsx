"use client";

import type { IProject } from "./components/Projects";
import { ReactNode, useEffect, useRef, useState } from "react";
import CopyrightHeading from "./components/CopyrightHeading";
import HelpText from "./components/HelpText";
import MorseClosing from "./components/MorseEnding";
import MorseOpening from "./components/MorseOpening";
import Prefix from "./components/Prefix";
import WelcomeArt from "./components/WelcomeArt";
import {
  whois,
  whoami,
  social,
  secret,
  help,
  openThePodBayDoors,
} from "./components/Commands";
import * as Projects from "./components/Projects";
interface IProjects {
  [key: string]: IProject;
}

export default function Home() {
  const [history, setHistory] = useState<ReactNode[]>([]);
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<boolean>(false);
  const [cmdHistory, setCmdHistory] = useState<ReactNode[]>([]);
  const [throwError, setThrowError] = useState<boolean>(false);
  const [projectSelectionMode, setProjectSelectionMode] =
    useState<boolean>(false);
  const inputRef = useRef(null);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const getProject = (name: string) => {
    const projects: IProjects = Projects;
    let selectedProject: IProject | undefined;
    Object.values(projects).map((project) => {
      if (project.name.toLowerCase() === name) {
        selectedProject = project;
      }
    });
    return selectedProject;
  };

  const getProjectNames = () => {
    const projects: IProjects = Projects;
    const projectNames = Object.keys(projects).map((key) => {
      return (
        <div
          className="flex flex-row justify-start items-center"
          key={Math.random()}
        >
          <span className="w-96 text-cyan-600 text-shadow-sm shadow-cyan-400">
            {projects[key].name}
          </span>
          <span>{projects[key].primaryTech}</span>
        </div>
      );
    });
    return projectNames;
  };

  const addHistory = (command: string) => {
    setInputValue("");

    if (command.toLowerCase() === "clear") {
      setHistory([]);
      setCmdHistory([]);
      setProjectSelectionMode(false);
      setPassword(false);
    } else if (password) {
      if (command === "w5devpw") {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Password: *****</span>
            </div>
            <div className="p-4">{secret}</div>
          </div>,
        ]);
        setPassword(false);
      } else {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Password: *****</span>
            </div>
            <div className="p-4 text-red-600">Password Invalid!</div>
          </div>,
        ]);
      }
    } else if (projectSelectionMode) {
      const selectedProject = getProject(command.toLowerCase());
      if (selectedProject) {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Project: {command}</span>
            </div>
            <div className="p-4">
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Name:</span>
                <span>{selectedProject.name}</span>
              </div>
              {selectedProject.link && (
                <div className="flex flex-row justify-start items-center">
                  <a
                    target="_blank"
                    href={selectedProject.link}
                    className="w-48 text-yellow-600 underline text-shadow-sm shadow-yellow-400"
                  >
                    Visit the Site!
                  </a>
                </div>
              )}
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Primary Tech:</span>
                <span>{selectedProject.primaryTech}</span>
              </div>
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Type:</span>
                <span>{selectedProject.type}</span>
              </div>
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Status:</span>
                <span>{selectedProject.status}</span>
              </div>
              {selectedProject.github && (
                <div className="flex flex-row justify-start items-center">
                  <span className="w-48 text-yellow-600">Github</span>
                  <span>{selectedProject.github}</span>
                </div>
              )}
              <div className="flex flex-row justify-start items-start">
                <span className="w-48 text-yellow-600">Tech:</span>
                <div>
                  {selectedProject.tech.map((tech) => {
                    return (
                      <span
                        className="flex flex-row justify-start items-center"
                        key={Math.random()}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="w-48 pb-2 text-yellow-600">Description:</span>
                <div className="pl-8">{selectedProject.description}</div>
              </div>
            </div>
          </div>,
        ]);
        setProjectSelectionMode(false);
      } else {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Project: {command}</span>
            </div>
            <div className="p-4  font-normal text-red-600">
              Project name invalid! Please try again.
            </div>
          </div>,
        ]);
      }
    } else if (getProject(command.toLowerCase())) {
      const selectedProject = getProject(command.toLowerCase());
      if (selectedProject) {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Project: {command}</span>
            </div>
            <div className="p-4">
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Name:</span>
                <span>{selectedProject.name}</span>
              </div>
              {selectedProject.link && (
                <div className="flex flex-row justify-start items-center">
                  <a
                    target="_blank"
                    href={selectedProject.link}
                    className="w-48 text-yellow-600 underline text-shadow-sm shadow-yellow-400"
                  >
                    Visit the Site!
                  </a>
                </div>
              )}
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Primary Tech:</span>
                <span>{selectedProject.primaryTech}</span>
              </div>
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Type:</span>
                <span>{selectedProject.type}</span>
              </div>
              <div className="flex flex-row justify-start items-center">
                <span className="w-48 text-yellow-600">Status:</span>
                <span>{selectedProject.status}</span>
              </div>
              {selectedProject.github && (
                <div className="flex flex-row justify-start items-center">
                  <span className="w-48 text-yellow-600">Github</span>
                  <span>{selectedProject.github}</span>
                </div>
              )}
              <div className="flex flex-row justify-start items-start">
                <span className="w-48 text-yellow-600">Tech:</span>
                <div>
                  {selectedProject.tech.map((tech) => {
                    return (
                      <span
                        className="flex flex-row justify-start items-center"
                        key={Math.random()}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="w-48 pb-2 text-yellow-600">Description:</span>
                <div className="pl-8">{selectedProject.description}</div>
              </div>
            </div>
          </div>,
        ]);
        setProjectSelectionMode(false);
      } else {
        setHistory([
          ...history,
          <div
            className="flex flex-col items-start justify-center"
            key={Math.random()}
          >
            <div className="w-full flex flex-row justify-start items-center">
              <Prefix />
              <span className="">Project: {command}</span>
            </div>
            <div className="p-4  font-normal text-red-600">
              Project name invalid! Please try again.
            </div>
          </div>,
        ]);
      }
    } else {
      switch (command.toLowerCase()) {
        case "banner":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <WelcomeArt />
            </div>,
          ]);
          break;

        case "email":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
            </div>,
          ]);
          setTimeout(function () {
            window.open("mailto:hello@w5dev.com");
          });
          break;

        case "github":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
            </div>,
          ]);
          setTimeout(function () {
            window.open("https://github.com/W5DEV/", "_blank");
          }, 1000);
          break;

        case "help":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{help}</div>
              <div className="px-4 pt-2 pb-2 w-full flex flex-col justify-center items-start font-normal text-yellow-600 italic">
                You may also enter the name of a project at any time to view
                details.
                <p className="text-yellow-600 mt-2 italic text-sm">
                  Tip: some commands may be hidden!
                </p>
              </div>
            </div>,
          ]);
          break;

        case "history":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{cmdHistory}</div>
            </div>,
          ]);
          break;

        case "linkedin":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
            </div>,
          ]);
          setTimeout(function () {
            window.open("https://linkedin.com/in/W5DEV/", "_blank");
          }, 1000);
          break;

        case "openthepodbaydoors" || "open the pod bay doors":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{openThePodBayDoors}</div>
            </div>,
          ]);
          break;

        case "open the pod bay doors":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{openThePodBayDoors}</div>
            </div>,
          ]);
          break;

        case "please sudo":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4 text-red-600">
                Oh no! You&apos;re not admin!
              </div>
            </div>,
          ]);
          setTimeout(function () {
            window.open(
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              "_blank"
            );
          }, 1000);
          break;

        case "please please sudo":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">
                Visitor is overly polite. Correct the request and resubmit.
              </div>
            </div>,
          ]);
          break;

        case "projects":
          setProjectSelectionMode(true);
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="px-4 pt-4 pb-2 w-full flex flex-col justify-center items-start font-normal text-yellow-600">
                For more info on a project, enter the name of the project.
              </div>
              <div className="px-4 pb-2 w-full flex flex-col justify-center items-start font-normal text-emerald-400 italic">
                If the project is public, the project website will be available
                for you to visit!
              </div>
              <div className="px-4 pb-4 w-full flex flex-col justify-center items-start">
                <div className="flex flex-row justify-start items-center pb-1">
                  <span className="w-96 text-yellow-600" key={Math.random()}>
                    Project Name
                  </span>
                  <span className="text-yellow-600">Primary Tech</span>
                </div>
                {getProjectNames()}
              </div>
            </div>,
          ]);
          break;

        case "resume":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
            </div>,
          ]);
          window.open("./john-larson-resume.pdf", "_blank");
          break;

        case "secret":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
            </div>,
          ]);
          setPassword(true);
          break;

        case "social":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{social}</div>
            </div>,
          ]);
          break;

        case "sudo":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">
                Visitor is insufficiently polite to use sudo.{" "}
                <i className="w-48 text-cyan-600 text-shadow-sm shadow-cyan-400">
                  Please
                </i>{" "}
                correct the request and resubmit.
              </div>
            </div>,
          ]);
          break;

        case "whoami":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{whoami}</div>
            </div>,
          ]);
          break;

        case "whois":
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="w-full flex flex-row justify-start items-center">
                <Prefix />
                <span className="">{command}</span>
              </div>
              <div className="p-4">{whois}</div>
            </div>,
          ]);
          break;

        default:
          setHistory([
            ...history,
            <div
              className="flex flex-col items-start justify-center"
              key={Math.random()}
            >
              <div className="flex flex-row items-center justify-start">
                <Prefix />
                <span>{command}</span>
              </div>
              <div className="flex flex-col items-start justify-start py-2 pl-4">
                <p className="text-red-600">
                  <i className="text-cyan-600">&apos;{command}&apos;</i> is not
                  a valid command.{" "}
                  <b className="font-normal text-red-600">
                    For a list of available commands, type{" "}
                  </b>
                  <b className="text-cyan-600 text-shadow-sm shadow-cyan-400 font-normal">
                    &apos;help&apos;
                  </b>
                  .
                </p>
              </div>
            </div>,
          ]);
          break;
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCmdHistory([
        ...cmdHistory,
        <div key={Math.random()}>{inputValue}</div>,
      ]);
      addHistory(event.currentTarget.value);
    }

    if (event.key === "Escape") {
      setPassword(false);
      setProjectSelectionMode(false);
      setInputValue("");
    }
  };

  const throwNewError = (passedError: boolean) => {
    if (passedError) {
      console.error(
        "Uncaught TypeError: cannot read property 'pasword' of undefined at <anonymous>:13:8: 'if (pasword === 'w5devpw') {"
      );
    }
  };

  useEffect(() => {
    setThrowError(true);
    throwNewError(throwError);
  }, [throwError]);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement)?.focus();
    }
  }, [isEditing]);

  return (
    <main onClick={toggleEditing}>
      <div className="flex flex-row text-stone-400 text-xs">
        <MorseOpening />
      </div>
      <div className="flex flex-row">
        <CopyrightHeading />
      </div>
      <div className="flex flex-row text-stone-400">
        <WelcomeArt />
      </div>
      <div className="flex flex-row text-stone-400 text-xs">
        <MorseClosing />
      </div>
      <div className="flex flex-row">
        <HelpText />
      </div>
      <div className="flex flex-col">{history}</div>
      <div className="relative flex flex-row w-full">
        <Prefix />
        <span className={password ? "flex" : "hidden"}>Password: </span>
        <span className={projectSelectionMode ? "flex" : "hidden"}>
          Project:{" "}
        </span>
        <input
          ref={inputRef}
          onKeyDown={(event) => handleKeyPress(event)}
          onChange={(event) => setInputValue(event.currentTarget.value)}
          value={inputValue}
          type={password ? "password" : "text"}
        />
      </div>
    </main>
  );
}
