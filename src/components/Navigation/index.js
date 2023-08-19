import React from "react";
import { Link } from "react-scroll";

import navItems from "./constants";

import "./index.scss";

const Navigation = () => (
  <ul className="navigation-block">
    {navItems.map(({ title, to }) => (
      <li key={to}><Link to={to} smooth duration={1000}>{title}</Link></li>
    ))}
  </ul>
);

export default Navigation;
