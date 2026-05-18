import React, { useRef, useState } from "react";

function Stopwatch() {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>{time}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default Stopwatch;