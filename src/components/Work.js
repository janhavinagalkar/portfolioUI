import React from "react";

function Work() {
  return (
    <div>
      <div className="container">
        <div className="row pContainer align-content-start">
          <div>
            <label className="headerLabel">Work Experience</label>
            <div className="d-flex align-items-end">
              <h5>Front End Developer </h5>
              &nbsp;<h6>( Dec'19 - Present )</h6>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Utilized HTML, CSS and JavaScript (ES6) within React.JS
                  framework to create a responsive UI and resolved browsers
                  compatibility issues.
                </label>
              </div>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Involved in the analysis of requirements, design, development,
                  integration, deployment, testing and bug fixing on
                  functionality.
                </label>
              </div>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Integrated the front end with Redux Saga using the JSON data
                  from the backend mainly .Net API calls.
                </label>
              </div>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Supported the QA team to design test cases for various change
                  requests and enhancement. Experienced in implementing
                  Authentication and Authorization security mechanisms.
                </label>
              </div>
            </div>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="workInfoLabel">
                  Developed software in Agile methodology, participated in and
                  contributed to the daily stand-ups, code reviews, sprint
                  planning that kept our process continually improving.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
