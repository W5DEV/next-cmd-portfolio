import CopyrightHeadng from "./components/CopyrightHeading";
import Input from "./components/Input";
import MorseClosing from "./components/MorseEnding";
import MorseOpening from "./components/MorseOpening";
import Prefix from "./components/Prefix";
import WelcomeArt from "./components/WelcomeArt";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-[700px] flex-col items-start justify-start p-4 text-stone-300 font-mono gap-2 tracking-widest border-4 border-double border-stone-400 outline-dashed outline-stone-400 -outline-offset-8">
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
        <Prefix />
        <Input />
      </div>
    </main>
  );
}
