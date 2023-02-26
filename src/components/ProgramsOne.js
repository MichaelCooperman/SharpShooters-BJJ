import React from "react";
import classes from "../main.module.css";

const ProgramsOne = (props) => {
  const { ProgramsImg, ProgramsImgAlt, ProgramsTitle, ProgramsDesc } = props;

  return (
    <div className={classes["program-cards"]}>
      <div className={classes["program-img"]}>
        <img src={ProgramsImg} alt={ProgramsImgAlt} />
      </div>
      <div className={classes["program-info"]}>
        <h3>{ProgramsTitle}</h3>
        <p>{ProgramsDesc}</p>
      </div>
    </div>
  );
};

export default ProgramsOne;
