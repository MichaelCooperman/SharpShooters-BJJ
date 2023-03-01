import React from "react";
import classes from "../../main.module.css";

const ButtonFancy = (props) => {
  const { fancyText } = props;
  return (
    <button onClick={props.onClick} className={classes["animated-button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {fancyText}
    </button>
  );
};

export default ButtonFancy;
