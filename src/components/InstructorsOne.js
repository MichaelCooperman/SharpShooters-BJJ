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
      <img src={InstructorImg} alt={InstructorImgAlt} />
      <div>
        <h3>{InstructorName}</h3>
        <p>{InstructorDesc}</p>
        <hr color={InstructorColor} />
      </div>
    </div>
  );
};

export default InstructorsOne;
