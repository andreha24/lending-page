import React from "react";

import instagram from "../../assets/social-media/instagram.svg";
import twitter from "../../assets/social-media/twitter.svg";
import youtube from "../../assets/social-media/youtube.svg";
import facebook from "../../assets/social-media/facebook.svg";
import logo from "../../assets/logo.png";
import Navigation from "../Navigation";

import "./index.scss";

const Footer = () => (
  <footer>
    <div className="footer-info">
      <img src={logo} alt="logo" />
      <Navigation className="footer-menu" />
      <div className="social-media">
        <img src={youtube} alt="youtube" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
      </div>
    </div>
  </footer>
);

export default Footer;
