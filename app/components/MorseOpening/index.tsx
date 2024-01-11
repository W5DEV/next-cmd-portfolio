export default function MorseOpening() {
  const morseOpening =
    "--.- ... .-..    -.-. --.-    -.-. --.-    -.-. --.-    .-- ..... -.. . ...- ";
  return (
    <span className="flex flex-col items-start justify-center bg-transparent tracking-widest  whitespace-pre-wrap">
      {morseOpening}
    </span>
  );
}
