import React from "react";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="row pContainer align-content-start">
          <div>
            <label className="headerLabel">Projects</label>
            <div className="d-flex align-items-end">
              <label className="projectTitle">
                1. Covid-19 Detection using X-Ray Images | Machine Learning,
                Python
              </label>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-2">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Uses a SVM Classifier to detect whether the patient is
                  infected by Covid-19 or not from his chest X-ray image
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end">
          <label className="projectTitle">2. Co-Ordinates Finder | Python, Google Maps API</label>
          </div>
          <div className="d-flex">
              <svg height={25} width={25} className="mt-2">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                Gives us Longitude and Latitude of any location on Earth
                </label>
              </div>
            </div>
            <div className="d-flex align-items-end">
            <label className="projectTitle">3. Discord Bot | MySQL, Discord.py, Python</label>
          </div>
          <div className="d-flex">
              <svg height={25} width={25} className="mt-2">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                Bot to play Mafia game among friends in a Discord server
                </label>
              </div>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-2">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                Used MySQL to store information about all players
                </label>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
