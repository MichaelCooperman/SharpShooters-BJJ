import React from "react";
import classes from "../../main.module.css";

const ButtonSubmit = (props) => {
  const { btnTxt } = props;
  return (
    <button onClick={props.onClick} className={classes["animated-button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {btnTxt}
    </button>
  );
};

export default ButtonSubmit;
