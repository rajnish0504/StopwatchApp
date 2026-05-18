import React, { useRef, useState } from "react";

function Stopwatch() {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  // Time Format
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div style={styles.container}>
      <div style={styles.stopwatchBox}>
        <h1 style={styles.heading}>Stopwatch</h1>

        <h2 style={styles.time}>
          {minutes}:{seconds}
        </h2>

        <div style={styles.buttonContainer}>
          <button style={styles.startBtn} onClick={start}>
            Start
          </button>

          <button style={styles.stopBtn} onClick={stop}>
            Stop
          </button>

          <button style={styles.resetBtn} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial",
  },

  stopwatchBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
  },

  heading: {
    marginBottom: "20px",
    color: "#333",
  },

  time: {
    fontSize: "40px",
    marginBottom: "20px",
    color: "#222",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  startBtn: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "green",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },

  stopBtn: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "red",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },

  resetBtn: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Stopwatch;