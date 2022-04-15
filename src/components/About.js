import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row pContainer">
        <div className="col-md">
          <div>
            <label className="headerLabel aboutTitle">About Me</label>
            <div className="aboutInfo1">
              <label>
                Hi, I am Mihir Nagalkar. 
              </label>
              <label className="mt-4">
              IT Undergrad with excellent problem solving skills and ability to perform well in a team and under pressure. <br/>Passionate about coding and writing good quality code and a Machine Learning enthusiast.
               <br/> 
                I am highly motivated and optimistic person with a lot of enthusiasm to learn new technologies.
              
              </label>
              <label className="mt-4">
               I love problem solving, reading and cycling.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
