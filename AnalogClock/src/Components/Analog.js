import React, { useState, useEffect } from "react";

const Analog = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div style={styles.clock}>
      <div
        style={{
          ...styles.hand,
          ...styles.hour,
          transform: `rotate(${hourDeg}deg)`,
        }}
      />
      <div
        style={{
          ...styles.hand,
          ...styles.minute,
          transform: `rotate(${minuteDeg}deg)`,
        }}
      />
      <div
        style={{
          ...styles.hand,
          ...styles.second,
          transform: `rotate(${secondDeg}deg)`,
        }}
      />
      <div style={styles.center} />
    </div>
  );
};

export default Analog;

// Inline CSS as JS objects
const styles = {
  clock: {
    width: "300px",
    height: "300px",
    border: "8px solid #333",
    borderRadius: "50%",
    position: "relative",
    margin: "50px auto",
    background: "white",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  },
  hand: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transformOrigin: "bottom center",
    borderRadius: "2px",
  },
  hour: {
    width: "6px",
    height: "70px",
    background: "#000",
    zIndex: 3,
  },
  minute: {
    width: "4px",
    height: "100px",
    background: "#333",
    zIndex: 2,
  },
  second: {
    width: "2px",
    height: "120px",
    background: "red",
    zIndex: 1,
  },
  center: {
    width: "12px",
    height: "12px",
    background: "#000",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },
};
