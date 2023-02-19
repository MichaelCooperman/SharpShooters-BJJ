import classes from "../../main.module.css";
import React from "react";
import NavLinks from "./NavLinks";
import logo from "../../images/SharpShootersLogo.png";
import ButtonPop from "../../components/buttons/ButtonPop";

const Navigation = () => {
  return (
    <nav className={classes["navigation"]}>
      <img className={classes.logo} src={logo} alt="logo.png" />
      <NavLinks />
      <ButtonPop btnText="JOIN TODAY" />
    </nav>
  );
};

export default Navigation;
