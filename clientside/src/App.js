import React, { Suspense } from "react";

import Header from "./component/header/Header";
import $ from "jquery";
import "./App.css";

// React Lazy
const Contact = React.lazy(() => import("./component/contact/Contact"));
const About = React.lazy(() => import("./component/about/About"));
const Slider = React.lazy(() => import("./component/slideshow/Slider"));
const Footer = React.lazy(() => import("./component/footer/Footer"));

class App extends React.Component {
  connectToServer = () => {
    fetch("/");
  };

  componentDidMount() {
    this.connectToServer();
    $(window).scroll(function () {
      let scrollval = $(this).scrollTop();
      let elementOffset = $(".about-grid").offset().top;
      let elementOffsetSkills = $(".skills-div").offset().top;
      let elementOffsetContact = $(".Contact-div").offset().top;

      let NavElement = $(".header-description-layout").offset().top;

      if (scrollval > elementOffset - $(window).height() / 1.5) {
        $(".AboutMe").addClass("isShowing");
      }

      if (scrollval > elementOffsetSkills - $(window).height() / 2) {
        $(".Skills").addClass("come-in");
      }

      if (scrollval > elementOffsetContact - $(window).height() / 1.5) {
        $(".Contact").addClass("isShowing");
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
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <About />
            <Slider />
            <Contact />
            <Footer />
          </section>
        </Suspense>
      </div>
    );
  }
}

export default App;
