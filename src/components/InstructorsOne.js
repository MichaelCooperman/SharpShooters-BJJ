import React from "react";
import classes from "../main.module.css";

const InstructorsOne = (props) => {
  const {
    InstructorImg,
    InstructorImgAlt,
    InstructorName,
    InstructorDesc,
    InstructorColor,
  } = props;

  return (
    <div className={classes["instructor-cards"]}>
      <div className={classes["instructor-img"]}>
        <img src={InstructorImg} alt={InstructorImgAlt} />
      </div>
      <div className={classes["instructor-info"]}>
        <h3>{InstructorName}</h3>
        <p>{InstructorDesc}</p>
        <hr color={InstructorColor} />
      </div>
    </div>
  );
};

export default InstructorsOne;
