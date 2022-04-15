import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import "./StarsBg.css";

function Home() {
  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <header className="App-header">
        <p id="nameSlider" className="namelabel">
          <span className="text-slider-items"></span>
          <strong className="text-slider">
            <Typed strings={["Hello, I am Mihir Nagalkar!"]} typeSpeed={40} />
          </strong>
        </p>
        <p className="intro-subtitle">
          <span className="text-slider-items"></span>
          <strong className="text-slider">
            <Typed
              strings={["IT Undergrad","Aspiring Software Developer","Tech Enthusiast"]}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </strong>
        </p>
        <button className="myworkbtn">
          <Link to={process.env.PUBLIC_URL+"/Projects"} className="myworkbtnText">
            View My Projects
          </Link>
        </button>
      </header>
    </div>
  );
}

export default Home;
