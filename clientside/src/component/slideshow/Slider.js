import React from "react";
import "./slider.css";
import $ from "jquery";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";

class Slider extends React.Component {
  render() {
    let index = 0;
    let next = 1;

    let slideLeft = () => {
      let slides = $(".slides");
      let numberDiv = $(".number");
      let describeDiv = $(".description");
      let sourceDiv = $(".anchor-Text");

      slides[index].classList.remove("next");
      slides[index].classList.add("hide");
      if (index === 0) {
        numberDiv[index].style.opacity = "0";
        numberDiv[index + 1].style.opacity = "1";

        describeDiv[index].classList.add("describeDisAppear");
        describeDiv[index].classList.remove("describeTransform");
        describeDiv[index + 1].classList.add("describeTransform");

        sourceDiv[index].classList.add("describeDisAppear");
        sourceDiv[index].classList.remove("describeTransform");
        sourceDiv[index + 1].classList.add("describeTransform");
      }
      if (index === 1) {
        numberDiv[index].style.opacity = "0";
        numberDiv[index + 1].style.opacity = "1";

        describeDiv[index].classList.remove("describeTransform");
        describeDiv[index + 1].classList.add("describeTransform");

        sourceDiv[index].classList.remove("describeTransform");
        sourceDiv[index + 1].classList.add("describeTransform");
      }
      if (index === 2) {
        numberDiv[index].style.opacity = "0";
        numberDiv[0].style.opacity = "1";

        describeDiv[index].classList.remove("describeTransform");
        describeDiv[0].classList.add("describeTransform");

        sourceDiv[index].classList.remove("describeTransform");
        sourceDiv[0].classList.add("describeTransform");
      }

      index++;

      slides[next].classList.add("next");
      if (next + 1 < slides.length) {
        slides[next + 1].classList.add("next1");
      }

      next++;
      if (next >= slides.length) next = 0;
      if (index >= slides.length) {
        index = 0;
        slides.removeClass("hide");
        slides.removeClass("next");
        slides.removeClass("next1");
      }
    };
    return (
      <div className="portfolio">
        <div className="portfolio-div">
          <div className="section-header-loader"> </div>
          <span>
            <hr className="horizontal-line" />
          </span>
          <span className="loader-dot"></span>
          <span className="loader-dot-outer"></span>
          <h1 className="section-headers">Portfolio</h1>
        </div>
        <div className="sliderShow">
          <div className="number-div">
            <h4 className="number">01</h4>
            <h4 className="number" style={{ opacity: "0" }}>
              02
            </h4>
            <h4 className="number" style={{ opacity: "0" }}>
              03
            </h4>
          </div>
          <div className="describe">
            <h3 className="description">We solve your Issue</h3>
            <h3 className="description" style={{ opacity: "0" }}>
              Let the world know about your recipe
            </h3>
            <h3 className="description" style={{ opacity: "0" }}>
              Real Time chat With closed One
            </h3>
          </div>

          <div className="Source">
            <div className="viewDiv">
              <a
                href="https://github.com/"
                style={{ margin: "0px" }}
                className="anchor-Text"
              >
                View Case
              </a>
              <hr />
            </div>
            <div className="viewDiv">
              <a
                href="https://github.com/"
                style={{ margin: "0px", opacity: "0" }}
                className="anchor-Text"
              >
                View Case
              </a>
              <hr />
            </div>
            <div className="viewDiv">
              <a
                href="https://github.com/"
                style={{ margin: "0px", opacity: "0" }}
                className="anchor-Text"
              >
                View Case
              </a>
              <hr />
            </div>
          </div>

          <div className="slides" onClick={slideLeft}>
            <img
              src={project1}
              alt="project-screenshot1"
              srcSet={` ${project1} 480w, ${project1} 560w, ${project1} 1080w `}
              className="project-image"
              width="700px"
              height="400px"
            />
          </div>

          <div
            className="slides"
            style={{ opacity: "0.5" }}
            onClick={slideLeft}
          >
            <img
              src={project1}
              alt="project-screenshot2"
              srcSet={` ${project1} 480w, ${project1} 560w, ${project1} 1080w `}
              className="project-image"
            />
          </div>
          <div className="slides " onClick={slideLeft}>
            <img
              src={project2}
              alt="project-screenshot3"
              srcSet={` ${project2} 480w, ${project2} 560w, ${project2} 1080w `}
              className="project-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
