export default function CopyrightHeadng() {
  const date = new Date();
  const today =
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "." +
    ("0" + date.getDate()).slice(-2) +
    "." +
    date.getFullYear();
  return (
    <div className="flex flex-col gap-2 items-start justify-center bg-transparent tracking-widest">
      <span className="text-stone-400">
        Whiskey 5 Development Terminal (Version {today})
      </span>
      <span className="text-stone-400">
        (c) 2024 John Larson (W5DEV) All rights reserved.
      </span>
    </div>
  );
}
