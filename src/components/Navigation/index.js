import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import navItems from "./constants";

import "./index.scss";

const Navigation = ({ isOpen, closeMenu, className }) => (
  <ul className={className}>
    {navItems.map(({ title, to }) => (
      <li key={to}><Link to={to} smooth duration={1000}>{title}</Link></li>
    ))}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    {isOpen && <span className="close-menu" onClick={closeMenu}>Close</span>}
  </ul>
);

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
  className: PropTypes.string,
};

export default Navigation;
