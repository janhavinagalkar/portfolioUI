import React from "react";
import "./StarsBg.css";

function Footer() {
  return (
    <div
      style={{
        flexShrink: 0,
        background: "rgb(0, 0, 0)",
        width: "100%",
        bottom: "0",
        position: "fixed",
        height: "45px",
        zIndex: 5,
      }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
}

export default Footer;
