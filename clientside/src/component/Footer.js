import React from "react";
import "./footer.css";
import Socialmedia from './Socialmedia'
import NavElement from './NavElement'
function Footer() {
  return (
    <div className="footer">
      
      <p>Feel free to contact me Always open for new project and work with you </p>
      <p>Ramanathan47@hotmail.com</p>
      <div className="footer-socialmedia">
      <Socialmedia />
      </div>
    </div>
  );
}

export default Footer;
