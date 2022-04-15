import React from "react";
import Progressbar from "./ProgressBar";
import { TechSkillData, TechSkillData2 } from "./MockData";

function TechSkills() {
  return (
    <div className="container">
      <div className="row pContainer">
        <label className="headerLabel" style={{height:0}}>Technical Skills</label>
        <div className="col-md-6">
          <div>
            {TechSkillData && TechSkillData.length ? (
              TechSkillData.map((a) => (
                <div className="d-flex">
                  <img
                    className="techIcon"
                    src={a.iconSrc}
                    alt="techIconSvgs"
                  />

                  <label
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      marginTop: "0.75em",
                    }}
                  >
                    {a.techName}
                  </label>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="eduBlock">
            {TechSkillData2 && TechSkillData2.length ? (
              TechSkillData2.map((a) => (
                <div className="d-flex">
                  <img
                    className="techIcon"
                    src={a.iconSrc}
                    alt="techIconSvgs"
                  />
                  <div className="d-flax flex-column" style={{ width: "90%" }}>
                    <label
                      style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        marginTop: "0.75em",
                      }}
                    >
                      {a.techName}
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
