import React from "react";
import classes from "../main.module.css";

const ProgramsOne = (props) => {
  const { ProgramsImg, ProgramsImgAlt, ProgramsTitle, ProgramsDesc } = props;

  return (
    <div className={classes["program-cards"]}>
      <img src={ProgramsImg} alt={ProgramsImgAlt} />
      <div>
        <h3>{ProgramsTitle}</h3>
        <p>{ProgramsDesc}</p>
      </div>
    </div>
  );
};

export default ProgramsOne;
