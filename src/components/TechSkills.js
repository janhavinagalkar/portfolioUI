import React from "react";
import Progressbar from "./ProgressBar";

function TechSkills() {
  const data = [
    {
      techName: "HTML",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      color: "#0dcaf0",
      progress: 90,
    },
    {
      techName: "CSS",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#0dcaf0",
      progress: 80,
    },
    {
      techName: "Bootstrap",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",

      progress: 75,
    },
    {
      techName: "JavaScript",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

      progress: 90,
    },
    {
      techName: "React",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

      progress: 90,
    },
    {
      techName: "Redux",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",

      progress: 80,
    },
    {
      techName: "Git",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

      progress: 90,
    },
    // {
    //   techName: "Material-UI",
    //   iconSrc:
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",

    //   progress: 70,
    // },
  ];
  return (
    <div className="container">
      <div className="row pContainer">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <label className="headerLabel">Technical Skills</label>
          </div>
          <div className="mt-2">
            {data.map((a) => (
              <div className="d-flex">
                <img className="techIcon" src={a.iconSrc} alt="techIconSvgs" />
                <div className="d-flax flex-column" style={{ width: "90%" }}>
                  <label style={{ fontWeight: "500" }}>{a.techName}</label>
                  <Progressbar
                    bgcolor="#10d5ea"
                    progress={a.progress}
                    height={5}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="eduBlock">
            <label className="headerLabel">Education</label>
            <div className="d-flex">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="aboutInfo">
                  <b>Bachelor of Engineering</b>
                </label>
                <br />
                <label className="aboutInfo">
                  Electronics and Telecommunication Engineering
                </label>
                <br />
                <label className="aboutInfo">University of Mumbai</label>
              </div>
            </div>
            <div className="d-flex mt-4">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="aboutInfo">
                  <b>Higher Secondary Education</b>
                </label>
                <br />
                <label className="aboutInfo">Maharashtra State Board</label>
              </div>
            </div>
            <div className="d-flex mt-4">
              <svg height={25} width={25} className="mt-4">
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div>
                <label className="aboutInfo">
                  <b>Senior Secondary Education</b>
                </label>
                <br />
                <label className="aboutInfo">Maharashtra State Board</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
