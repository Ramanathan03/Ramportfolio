import React from "react";
import Socialmedia from "./Socialmedia";
import NavElement from "./NavElement";
import $ from "jquery";
import "../App.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  ProjectScroll = () => {
    $("html, body").animate(
      {
        scrollTop: $(".portfolio").offset().top,
      },
      1000
    );
  };

  render() {
    return (
      <header className="header-props">
        <NavElement />

        <div className="header-description-layout">
          <div className="header-padding-tabletView">
            <div className="job-line">
              <span>
                <hr className="horizontal" />
              </span>
              <p className="header-job">Full stack web Developer</p>
            </div>
            <h4 className="header-title">Ramanathan Annes</h4>

            <div className="about job-line">
              <p>
                Specializing in creating a UX and UI design and server-side
                development for websites.
              </p>
            </div>
            <div className="job-line">
              <button className=" resume-button" onClick={this.ProjectScroll}>
                Portfolio
              </button>
            </div>
          </div>
          <div className="socialmedia-in-smallScreen">
            <Socialmedia />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
