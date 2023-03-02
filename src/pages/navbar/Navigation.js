import classes from "../../main.module.css";
import React from "react";
import NavLinks from "./NavLinks";
import logo from "../../images/SharpShootersLogo.png";
import ButtonJoin from "../../components/buttons/ButtonJoin";

const Navigation = (props) => {
  return (
    <nav className={classes["navigation"]}>
      <a href="/">
        <img className={classes.logo} src={logo} alt="logo.png" />
      </a>
      <NavLinks />
      <ButtonJoin onClick={props.onOpen} buttonJoinText="JOIN TODAY" />
    </nav>
  );
};

export default Navigation;
