import React, { useState, useEffect } from "react";

const outer = {
  border: "1px solid black",
  borderRadius: "6px",
  width: "300px",
  height: "20px",
  margin: "10px 0",
  overflow: "hidden",
};

const inner = (progress) => ({
  backgroundColor: "green",
  height: "100%",
  width: `${progress}%`,
  transition: "width 20ms linear",
  color:'white'
});

const ProgressBar = () => {
  const [progressBars, setProgressBars] = useState([]);

  function addProgressBar() {
    const newId = Date.now();
    setProgressBars((prev) => [
      ...prev,
      {
        id: newId,
        progress: 0,
      },
    ]);
  }

  useEffect(() => {
    const intervals = progressBars.map((bar) => {
      if (bar.progress < 100) {
        return setInterval(() => {
          setProgressBars((prev) =>
            prev.map((prevBar) =>
              prevBar.id === bar.id
                ? { ...prevBar, progress: Math.min(prevBar.progress + 1, 100) }
                : prevBar
            )
          );
        }, 20); // 100 steps over 2000ms = 20ms per step
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => interval && clearInterval(interval));
    };
  }, [progressBars]);


  return (
    <div>
      <button onClick={addProgressBar}>Add Progress Bar</button>
      <div>
        {" "}
        {progressBars.map((item) => (
          <div key={item.id} style={outer}>
            <div style={inner(item.progress)}> {item.progress}% </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default ProgressBar;
