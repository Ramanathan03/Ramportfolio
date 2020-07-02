import React,{ Suspense} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import $ from "jquery";
import "./App.css";

// React Lazy
const Contact =  React.lazy(()=> import("./component/Contact"));
const About  =  React.lazy(()=> import("./component/About"));
const Slider = React.lazy(()=> import("./component/Slider"));
const Footer =  React.lazy(()=> import("./component/Footer"));




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
