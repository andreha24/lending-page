import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as BurgerMenuIcon } from "./burgerMenu.svg";

import logo from "../../assets/logo.png";
import Button from "../Button";
import Navigation from "../Navigation";

import "./index.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="logo-block">
        <img src={logo} alt="logo" />
      </div>
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="burger-menu"
      >
        <Navigation />
      </CSSTransition>
      <Button className="check-status-btn" title="Check Status" type="button" />
      <div className="burger-menu-wrap">
        <BurgerMenuIcon onClick={() => setShowMenu((prev) => !prev)} />
        {/* <button type="button" onClick={() => setShowMenu(false)}> */}
        {/*  closeeeee */}
        {/* </button> */}
      </div>
    </header>
  );
};

export default Header;
