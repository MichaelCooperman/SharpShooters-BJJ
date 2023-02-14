import classes from "../../main.module.css";
import React from "react";
import NavLinks from "./NavLinks";
import logo from "../../images/SharpShootersLogo.png";

import ButtonSign from "../../components/buttons/ButtonSign";

const Navigation = () => {
  return (
    <nav className={classes["navigation"]}>
      <img className={classes.logo} src={logo} alt="logo.png" />
      <NavLinks />
      <ButtonSign buttonText="JOIN TODAY" />
    </nav>
  );
};

export default Navigation;
