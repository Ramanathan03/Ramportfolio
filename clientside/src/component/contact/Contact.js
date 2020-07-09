import React from "react";
import Socialmedia from "../header/Socialmedia";
import "./contact.css";
import $ from "jquery";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };
  handlesubjectChange = (event) => {
    this.setState({ subject: event.target.value });
    console.log(this.state.subject);
  };
  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
    console.log(this.state.message);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log(response, response.status);

          let newElement = $(
            "<p class='success'>Soon Get in Touch with you Thank you</p>"
          );
          $("#contact-form").append(newElement);
          $(".sendButton").addClass("color-change-sucess");
          setInterval(() => {
            newElement.remove();
            $(".sendButton").removeClass("color-change-sucess");
          }, 8000);
          document.getElementById("contact-form").reset();
        } else if (response.status === "fail") {
          console.log(response, response.status);
          let newElement = $("<p class='Error'>Sorry Try again later</p>");
          $("#contact-form").append(newElement);
          $(".sendButton").addClass("color-change-error");
          setInterval(() => {
            newElement.remove();
            $(".sendButton").removeClass("color-change-error");
          }, 8000);

          document.getElementById("contact-form").reset();
        }
      });
  };

  render() {
    let spanColor = { color: "red" };

    return (
      <div className="Contact">
        <div className="Contact-div">
          <div className="section-header-loader"> </div>
          <span>
            <hr className="horizontal-line" />
          </span>
          <span className="loader-dot"></span>
          <span className="loader-dot-outer"></span>
          <h1 className="section-headers">Contact Me</h1>
        </div>
        <div className="contact-grid">
          <div>
            <div className="padding-contact-tablet">
              <h1 className="title">Don't be a Stranger</h1>
              <h3 className="side-header">Just say Hello</h3>
              <p className="padding-left-in-contact">
                Feel free to get in touch with me I am always happy to discusses
                new project or opportunity to work with you
              </p>
              <span>
                <p className="email padding-left-in-contact">Want to talk?</p>{" "}
                <strong
                  className="padding-left-in-contact"
                  style={{ color: "#d0d0d0" }}
                >
                  Ramanathan47@hotmail.com
                </strong>
              </span>
            </div>
            <div className="social-media-contacts">
              <Socialmedia />
            </div>
          </div>

          <form onSubmit={this.handleSubmit} id="contact-form">
            <div className="mobileViewPadding">
              <div className="contact-label-div">
                <label>
                  Full Name <span style={spanColor}>*</span>
                </label>
              </div>
              <input
                type="text"
                className="contact-form-input"
                name="FullName"
                required
                onChange={this.handleNameChange}
              />
            </div>
            <div className="mobileViewPadding">
              <div className="contact-label-div">
                <label>
                  Email <span style={spanColor}>*</span>
                </label>
              </div>
              <input
                type="email"
                className="contact-form-input"
                name="email"
                required
                onChange={this.handleEmailChange}
              />
            </div>

            <div className="mobileViewPadding">
              <div className="contact-label-div">
                <label>
                  Subject <span style={spanColor}>*</span>
                </label>
              </div>
              <input
                type="text"
                className="contact-form-input"
                name="subject"
                onChange={this.handlesubjectChange}
                required
              />
            </div>
            <div className="mobileViewPadding">
              <div className="contact-label-div">
                <label>
                  Message <span style={spanColor}>*</span>
                </label>
              </div>
              <textarea
                name="message"
                className="contact-form-textarea"
                onChange={this.handleMessageChange}
                required
              />
            </div>
            <button type="submit" className="sendButton">
              Send Email
              <span style={{ paddingLeft: "5px" }}>
                <i className="far fa-paper-plane"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
