import React from "react";
import classes from "../../main.module.css";
import ButtonSign from "../../components/buttons/ButtonSign";

const HomeTop = () => {
  return (
    <div>
      <div className={classes["home-top-container"]}>
        <div className={classes["home-logo"]}>
          <h1>SHARP SHOOTERS</h1>
          <h3>GRAPPLING CLUB</h3>
        </div>
        <ButtonSign buttonText="SIGN UP FOR A TRIAL HERE" />
      </div>
    </div>
  );
};

export default HomeTop;
