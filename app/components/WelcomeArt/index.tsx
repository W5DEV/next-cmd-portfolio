export default function WelcomeArt() {
  const asciiCallsign = [
    "     _       ____________  _______    __",
    "    | |     / / ____/ __ |/ ____/ |  / /",
    "    | | /| / /___ |/ / / / __/  | | / / ",
    "    | |/ |/ /___/ / /_/ / /___  | |/ /  ",
    "    |__/|__/_____/_____/_____/  |___/   ",
  ];
  return (
    <span className="flex flex-col items-start justify-center bg-transparent tracking-widest whitespace-pre">
      {asciiCallsign.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </span>
  );
}
