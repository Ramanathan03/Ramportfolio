import React from "react";
import "../../App.css";
import { Link, Route, Switch } from "react-router-dom";
import $ from "jquery";
import Contact from "../contact/Contact";
import About from "../about/About";
import Slider from "../slideshow/Slider";
import Header from "./Header";
class NavElement extends React.Component {
  AboutScroll = () => {
    $("html, body").animate(
      {
        scrollTop: $(".about-grid").offset().top - 100,
      },
      1000
    );
  };
  ContactScroll = () => {
    $("html, body").animate(
      {
        scrollTop: $(".contact-grid").offset().top - 100,
      },
      1000
    );
  };

  ProjectScroll = () => {
    $("html, body").animate(
      {
        scrollTop: $(".portfolio").offset().top,
      },
      1000
    );
  };
  HomeBack = () => {
    $("html, body").animate(
      {
        scrollTop: $(".header-props").offset().top,
      },
      1000
    );
  };

  mobileMenu = () => {
    $(document).ready(() => {
      if ($(window).width() < 435) {
        let menu = $(".mobile-menu").css("display");
        if (menu === "flex") {
          $(".mobile-menu").css({ display: "none" });
          $(".X-cancle").css({ display: "flex" });
          $(".nav-ul").css({ display: "flex" });
          $("body").css({
            "overflow-y": "hidden",
          });
        } else {
          $(".mobile-menu").css({ display: "flex" });
          $(".X-cancle").css({ display: "none" });
          $(".nav-ul").css({ display: "none" });
          $("body").css({
            "overflow-y": "scroll",
          });
        }
      }
    });
  };

  render() {
    if ($(window).width() < 435) {
      $(".mobile-menu").css({ display: "flex" });
      $(".X-cancle").css({ display: "none" });
      $(".nav-ul").css({ display: "none" });
    } else {
      $(".mobile-menu").css({ display: "none" });
      $(".X-cancle").css({ display: "none" });
      $(".nav-ul").css({ display: "flex" });
    }
    return (
      <div>
        <Switch>
          <Route extact path="/" Component={Header} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Slider} />
        </Switch>
        <div className="mobile-menu" onClick={this.mobileMenu}>
          <div className="hamburgerMenu"></div>
          <div className="hamburgerMenu"></div>
          <div className="hamburgerMenu"></div>
        </div>
        <div className="X-cancle" onClick={this.mobileMenu}>
          <div className="X"></div>
          <div className="X-minus"></div>
        </div>

        <ul className="nav-ul">
          <li className="nav-li" onClick={this.mobileMenu}>
            <Link to="/" className="nav-text" onClick={this.HomeBack}>
              Home
            </Link>
          </li>
          <li className="nav-li" onClick={this.mobileMenu}>
            <Link to="/about" className="nav-text" onClick={this.AboutScroll}>
              About
            </Link>
          </li>
          <li className="nav-li" onClick={this.mobileMenu}>
            <Link
              to="/projects"
              className="nav-text"
              onClick={this.ProjectScroll}
            >
              Projects
            </Link>
          </li>
          <li className="nav-li-contact" onClick={this.mobileMenu}>
            <Link
              to="/contact"
              className="nav-text"
              onClick={this.ContactScroll}
            >
              Contact Now
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavElement;
