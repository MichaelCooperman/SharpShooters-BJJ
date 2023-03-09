import React from "react";
import ButtonPop from "../../components/buttons/ButtonPop";
import classes from "../../main.module.css";
import scheduleImg from "../../images/SharpShooters-Schedule-Image.jpg";

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
          Here at Sharp Shooters we are open 24/7, except national holidays. See
          the schedule below for further details on when our classes are. We
          look forward to seeing you in one of upcoming classes!
        </p>
      </div>
      <div>
        <img
          className={classes["schedule-img"]}
          src={scheduleImg}
          alt="schedule-img"
        />
      </div>
    </div>
  );
};

export default ScheduleMid;
