import React from "react";
import TopHeader from "../../components/TopHeader";
import classes from "../../main.module.css";

const ProgramsTop = () => {
  return (
    <div className={classes["programs-top-container"]}>
      <TopHeader Headers="PROGRAMS" />
    </div>
  );
};

export default ProgramsTop;
