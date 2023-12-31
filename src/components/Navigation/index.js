import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import navItems from "./constants";

import "./index.scss";

const Navigation = ({ isOpen, closeMenu, className }) => (
  <ul className={className}>
    {navItems.map(({ title, to }) => (
      <li key={to}><Link to={to} smooth duration={1000} className="navigation-link">{title}</Link></li>
    ))}
    {isOpen && <button type="button" className="close-menu" onClick={closeMenu}>X</button>}
  </ul>
);

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
  className: PropTypes.string,
};

export default Navigation;
