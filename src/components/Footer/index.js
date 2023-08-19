import React from "react";

import instagram from "../../assets/social-media/instagram.png";
import logo from "../../assets/logo.png";
import Navigation from "../Navigation";

import "./index.scss";

const Footer = () => (
  <footer>
    <div className="logo-block">
      <img src={logo} alt="logo" />
    </div>
    <Navigation />
    <div className="social-media">
      <img src={instagram} alt="youtube" />
      <img src={instagram} alt="instagram" />
      <img src={instagram} alt="twitter" />
      <img src={instagram} alt="facebook" />
    </div>
  </footer>
);

export default Footer;
