import React from "react";
import "./about.css";

function Skills() {
  return (
    <div className="Skills">
      <div className="skills-div">
        <div className="section-header-loader"> </div>
        <span>
          <hr className="horizontal-line" />
        </span>
        <span className="loader-dot"></span>
        <span className="loader-dot-outer"></span>
        <h1 className="section-headers">MY SKILLS</h1>
      </div>
      <div className="skills-column">
        <div>
          <div className="skills-icon">
            <i className="far fa-address-card fa-2x font-padding"></i>
            <h3>Personal Skills</h3>
          </div>
          <div style={{ paddingTop: "15px" }}>
            <span>
              <h5 className="skill-title">Problem Solving</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "68%" }}>
              70
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "70%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
          <div style={{ paddingTop: "15px" }}>
            <span>
              <h5 className="skill-title">Communication</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "83%" }}>
              85
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "85%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
          <div style={{ paddingTop: "15px" }}>
            <span>
              <h5 className="skill-title">Team working</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "76%" }}>
              78
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "78%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>

          <div style={{ paddingTop: "15px" }}>
            <span>
              <h5 className="skill-title">Self Motivation</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "88%" }}>
              90
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "90%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
        </div>
        <div>
          <div className="skills-icon">
            <i className="fas fa-server fa-2x font-padding"></i>
            <h3>Professional Skills</h3>
          </div>
          <div style={{ padding: "15px", paddingBottom: "0px" }}>
            <span>
              <h5 className="skill-title">Html & Css</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "90%" }}>
              92
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "92%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
          <div style={{ padding: "15px", paddingBottom: "0px" }}>
            <span>
              <h5 className="skill-title">JavaScript</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "84%" }}>
              86
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "86%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
          <div style={{ padding: "15px", paddingBottom: "0px" }}>
            <span>
              <h5 className="skill-title">Python</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "87%" }}>
              89
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "89%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
          <div style={{ padding: "15px", paddingBottom: "0px" }}>
            <span>
              <h5 className="skill-title">PhotoShop</h5>{" "}
            </span>
            <span className="progression-tag" style={{ marginLeft: "78%" }}>
              80
            </span>
            <div className="porgressbar">
              <span
                style={{ width: "80%" }}
                className="progression-Made"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
