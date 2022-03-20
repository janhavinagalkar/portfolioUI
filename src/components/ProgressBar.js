import React from "react";

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 8,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 5,
    textAlign: "right",
  };
  const progresstext = {
    padding: 5,
    color: "black",
    fontWeight: 500,
    float: "right",
    fontSize: "12px",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
