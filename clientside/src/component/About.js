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
              I'm experienced in front-end and back-end web development. 
              I can work with languages like </p>
              <ul style={{ "color": "#b9b9b9"}} className="mobile-ul">
              <li>Python,</li>
              <li>Java,</li>
              <li>Javascript,</li>
              </ul>
              <p className="about-p-tag">
              and also for Web development I can able to work with <strong>Html, CSS/Sass, React, Jquery, 
              Django/Flask, Ngnix, Docker, Redis, Mongodb, MySQL, Bootstrap, Github, Heroku, CircleCI, TravisCI.</strong>
               I have a good knowledge about Search Engine Optimization(SEO), TypeScript which is Static type programming,
              Continuous integration and Development, Hashing, Relational database, Client Side Rendering and Server 
              Side Rendering.<br/>
              I am creative, hard working, enthusiastic.I'm always confident in myself and my abilities.
              I'm always excited and hunger to learn new skills and stuff. Fun part about coding is you have to solve problems 
              which is my favourite part I always willing to face and solve new problems.<br/>
              </p>
              <h5  className="mobile-ul">"Your mind is a Weapon. Keep it loaded"</h5>
              
            <button className="CV-button">Download CV</button>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
