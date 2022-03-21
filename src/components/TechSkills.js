import React from "react";
import Progressbar from "./ProgressBar";
import { TechSkillData,EducationData } from "./MockData";

function TechSkills() {
  return (
    <div className="container">
      <div className="row pContainer">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <label className="headerLabel">Technical Skills</label>
          </div>
          <div className="mt-2">
            {TechSkillData && TechSkillData.length ? (
              TechSkillData.map((a) => (
                <div className="d-flex">
                  <img
                    className="techIcon"
                    src={a.iconSrc}
                    alt="techIconSvgs"
                  />
                  <div className="d-flax flex-column" style={{ width: "90%" }}>
                    <label style={{ fontWeight: "500" }}>{a.techName}</label>
                    <Progressbar
                      bgcolor="#10d5ea"
                      progress={a.progress}
                      height={5}
                    />
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="eduBlock">
            <label className="headerLabel">Education</label>
            {EducationData && EducationData.length ? (
              EducationData.map((edu) => (
                <div className="d-flex">
                  <svg height={25} width={25} className="mt-4">
                    <circle cx="5" cy="5" r="4" />
                  </svg>
                  <div>
                    <label className="aboutInfo">
                      <b>{edu.degree}</b>
                    </label>
                    <div>
                      {edu.field !== "" && (
                        <label className="aboutInfo">{edu.field}</label>
                      )}
                    </div>
                    <label
                      className="aboutInfo"
                      style={edu.field === "" ? { marginTop: "0.75em" } : {}}
                    >
                      {edu.school}
                    </label>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
