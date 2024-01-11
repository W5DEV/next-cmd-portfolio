export default function MorseClosing() {
  const morseClosing =
    "--... ...--    .-- ..... -.. . ...-    -.. .    .-- ..... -.. . ...-";

  return (
    <span className="flex flex-col items-start justify-center bg-transparent tracking-widest whitespace-pre-wrap">
      {morseClosing}
    </span>
  );
}
