import React from "react";
import classes from "../../src/main.module.css";

const HomeTwo = (props) => {
  const { programImg, programImgAlt, programType, programExtra, programDesc } =
    props;
  return (
    <div className={classes["home-two"]}>
      <img src={programImg} alt={programImgAlt} />
      <h3>{programType}</h3>
      <h4>[{programExtra}]</h4>
      <p>{programDesc}</p>
    </div>
  );
};

export default HomeTwo;
