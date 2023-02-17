import React from "react";
import TopHeader from "../../components/TopHeader";
import classes from "../../main.module.css";

const ScheduleTop = () => {
  return (
    <div className={classes["schedule-top-container"]}>
      <TopHeader Headers="SCHEDULE" />
    </div>
  );
};

export default ScheduleTop;
