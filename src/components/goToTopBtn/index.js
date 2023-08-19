import React from "react";
import { Link } from "react-scroll";

const goToTop = () => (
  <Link to="top" smooth duration={1000} className="go-top-btn">
    <img src="/img/up-arrow.png" alt="up-arrow" />
  </Link>
);

export default goToTop;
