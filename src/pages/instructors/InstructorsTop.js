import React from "react";
import TopHeader from "../../components/TopHeader";
import classes from "../../main.module.css";

const InstructorsTop = () => {
  return (
    <div className={classes["instructors-top-container"]}>
      <TopHeader Headers="INSTRUCTORS" />
    </div>
  );
};

export default InstructorsTop;
