import React from "react";
import "./about.css";
import Skills from "./Skills";

function About() {
  return (
    <div>
      <div className="AboutMe">
        <div className="AboutDiv">
          <div className="section-header-loader"> </div>
          <span>
            <hr className="horizontal-line" />
          </span>
          <span className="loader-dot"></span>
          <span className="loader-dot-outer"></span>
          <h1 className="section-headers">ABOUT ME</h1>
        </div>
        <div className="about-grid">
          <div className="about-bg-pic"></div>
          <div className="about-content">
            <h3 className="about-side-header">
              I am Ram, I'm a passionate and Young Website developer with
              good knowledge about SEO and backend
            </h3>
            <hr className="side-header-line" />
            <p className="about-p-tag">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              sed do eiusm tempor incididunt ut labore et dolore magna. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="CV-button">Download CV</button>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
