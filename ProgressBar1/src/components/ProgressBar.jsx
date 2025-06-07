import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const outerStyle = {
    width: "100%",
    height: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "10px 0",
    overflow: "hidden",
  };

  const innerStyle = {
    transform: `translateX(${animatedProgress - 100}%)`,
    height: "100%",
    backgroundColor: "green",
    color: "white",
    textAlign: "right",
    transition: "0.5s ease-in",
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => {};
  }, [progress]);

  return (
    <div>
      <h3 style={{ borderTop: "1px solid black" }}>Demo Progress bar</h3>
      <div className="outer" style={outerStyle}>
        <div className="inner" style={innerStyle}>
          {" "}
          {animatedProgress}%{" "}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
