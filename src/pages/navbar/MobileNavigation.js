import React, { useState } from "react";
import NavLinks from "./NavLinks";
import classes from "../../main.module.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/SharpShootersLogo.png";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const openHamburger = (
    <FiMenu
      size="25px"
      color="#fa7cd0d0"
      className={classes.hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  const closedHamburger = (
    <AiOutlineClose
      size="25px"
      color="#fa7cd0d0"
      className={classes.hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={classes["mobile-navigation"]}>
      <img className={classes.logo} src={logo} alt="logo.png" />
      <h2>Sharp Shooters</h2>
      {open ? closedHamburger : openHamburger}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
