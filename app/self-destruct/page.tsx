"use client";

import { use, useEffect, useState } from "react";

export default function SelfDestruct() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft === 0) {
        setTimeout(function () {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 3000);
      } else if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    setTimeout(function () {
      window.open("/", "_self");
    }, 15000);
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex flex-row justify-center items-center">
      <div
        style={
          timeLeft >= 0 ? { opacity: `${timeLeft / 10}` } : { opacity: "1" }
        }
        className="font-bold w-screen h-screen flex justify-center items-center bg-red-600 text-white"
      >
        {timeLeft >= 0 ? (
          <span className="text-[400px]">{timeLeft}</span>
        ) : (
          <span className="text-[300px] text-center">FATAL ERROR</span>
        )}
      </div>
    </div>
  );
}
