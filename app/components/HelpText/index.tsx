export default function HelpText() {
  return (
    <div className="flex flex-col gap-2 items-start justify-center bg-transparent tracking-widest">
      <a
        href="https://contact.greatidea.dev/"
        target="_blank"
        className="text-pink-500 italic text-xs hover:underline"
      >
        To reach out regarding &apos;Legends and Legacies&apos; or my RPG
        Manager, click here.
      </a>

      <span className="text-yellow-600">
        For a list of available commands, type{" "}
        <span className="text-cyan-600 text-shadow-sm shadow-cyan-400">
          &apos;help&apos;
        </span>
        .
      </span>
    </div>
  );
}
