import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as BurgerMenuIcon } from "./burgerMenu.svg";

import logo from "../../assets/logo.png";
import Button from "../Button";
import Navigation from "../Navigation";

import "./index.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <CSSTransition
        in={showMenu}
        timeout={600}
        classNames="menu-animation"
        unmountOnExit
      >
        <Navigation isOpen={showMenu} closeMenu={closeMenu} className="burger-menu" />
      </CSSTransition>
      <Navigation isOpen={showMenu} closeMenu={closeMenu} className="navigation-block" />
      <Button className="check-status-btn" title="Check Status" type="button" />
      <BurgerMenuIcon onClick={() => setShowMenu((prev) => !prev)} />
    </header>
  );
};

export default Header;
