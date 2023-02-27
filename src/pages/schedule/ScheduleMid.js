import React from "react";
import ButtonPop from "../../components/buttons/ButtonPop";
import classes from "../../main.module.css";

const ScheduleMid = (props) => {
  return (
    <div className={classes["main-containers"]}>
      <div className={classes["schedule-container"]}>
        <div className={classes["sign-button"]}>
          <ButtonPop
            onClick={props.onOpen}
            btnText="SIGN UP FOR A TRIAL HERE"
          />
        </div>
        <p className={classes["schedule-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ScheduleMid;
