"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import CopyrightHeadng from "./components/CopyrightHeading";
import HelpText from "./components/HelpText";
import Input from "./components/Input";
import MorseClosing from "./components/MorseEnding";
import MorseOpening from "./components/MorseOpening";
import Prefix from "./components/Prefix";
import WelcomeArt from "./components/WelcomeArt";
import {
  whois,
  whoami,
  social,
  secret,
  projects,
  help,
} from "./scripts/commands";

export default function Home() {
  const [history, setHistory] = useState<ReactNode[]>([]);
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<boolean>(false);
  const [cmdHistory, setCmdHistory] = useState<ReactNode[]>([]);
  const inputRef = useRef(null);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const addHistory = (command: string) => {
    console.log(password, command);
    setInputValue("");

    if (password) {
      if (command.toLowerCase() === "w5devpw") {
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
            <div className="p-4">Password Invalid!</div>
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

        case "clear":
          setHistory([]);
          setCmdHistory([]);
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
            window.open("https://github.com/JLarsonMWI");
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
            window.open("https://linkedin.com/in/johnjlarson");
          }, 1000);
          break;

        case "projects":
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
              <div className="p-4">{projects}</div>
            </div>,
          ]);
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
              <div className="p-4">Oh no! You&apos;re not admin!</div>
            </div>,
          ]);
          setTimeout(function () {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
          }, 1000);
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
              <div className="flex flex-col items-center justify-start py-2 pl-4">
                <p className="text-green-500">
                  &apos;<i className="text-cyan-600">{command}</i>&apos; is not
                  a valid command.{" "}
                  <b className="font-normal text-yellow-600">
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
      setInputValue("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement)?.focus();
    }
  }, [isEditing]);

  return (
    <main
      onClick={toggleEditing}
      className="flex min-h-screen min-w-[700px] flex-col items-start justify-start p-4 text-cyan-600 font-mono gap-2 tracking-widest border-4 border-double border-stone-400 outline-dashed outline-stone-400 -outline-offset-8"
    >
      <div className="flex flex-row text-stone-400 text-xs">
        <MorseOpening />
      </div>
      <div className="flex flex-row">
        <CopyrightHeadng />
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
        <input
          ref={inputRef}
          onKeyDown={(event) => handleKeyPress(event)}
          onChange={(event) => setInputValue(event.currentTarget.value)}
          value={inputValue}
          type={password ? "password" : "text"}
          className="w-full bg-transparent border-none focus:border-none focus:outline-none focus:ring-0"
        />
        {/* <div className="absolute l-10 w-full">
            <b className="animate-caret">█</b>
          </div> */}
      </div>
    </main>
  );
}
