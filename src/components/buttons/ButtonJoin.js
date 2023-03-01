import React from "react";
import classes from "../../main.module.css";

const ButtonJoin = (props) => {
  const { buttonJoinText } = props;

  return (
    // <button onClick={props.onClick} className={classes["button-join"]}>
    //   {buttonJoinText}
    // </button>
    <button onClick={props.onClick} className={classes["animated-button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {buttonJoinText}
    </button>
  );
};

export default ButtonJoin;
