import React from "react";
import classes from "../../main.module.css";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <section className={classes["header-section"]}>
      <NavBar onPopup={props.onPopup} />
    </section>
  );
};

export default Header;
