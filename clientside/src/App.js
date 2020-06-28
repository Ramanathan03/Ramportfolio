import React from "react";
import { Route, Switch } from "react-router-dom";
import Socialmedia from "./component/Socialmedia";
import NavElement from "./component/NavElement";
import Contact from "./component/Contact";
import About from "./component/About";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Header from "./component/Header";
import $ from "jquery";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  connectToServer = () => {
    fetch("/");
  };

  componentDidMount() {
    this.connectToServer();
    $(window).scroll(function () {
      let scrollval = $(this).scrollTop();
      let elementOffset = $(".about-grid").offset().top;
      let elementOffsetSkills = $(".skills-div").offset().top;
      let elementOffsetPortfolio = $(".portfolio").offset().top;
      let elementOffsetContact = $(".Contact-div").offset().top;

      let NavElement = $(".header-description-layout").offset().top;

      if (scrollval > elementOffset - $(window).height() / 1.3) {
        $(".AboutMe").addClass("isShowing");
      }

      if (scrollval > elementOffsetSkills - $(window).height() / 1.3) {
        $(".Skills").addClass("isShowing");
      }

      if (scrollval > elementOffsetPortfolio - $(window).height() / 1.3) {
        $(".portfolio").addClass("isShowing");
      }
      if (scrollval > elementOffsetContact - $(window).height() / 1.3) {
        $(".Contact-div").addClass("isShowing");
      }

      if (scrollval > NavElement + 50) {
        $(".nav-ul").addClass("NavElement-scroll");
        $(".nav-li-contact").addClass("border-when-scroll");
        // I could use quote to remove but that's not good practice
      } else {
        $(".nav-ul").removeClass("NavElement-scroll");
        $(".nav-li-contact").removeClass("border-when-scroll");
      }
    });
  }

  render() {
    $(document).ready(() => {});

    return (
      <div>
        <Header />

        <section>
          <About />
          
          <Contact />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
