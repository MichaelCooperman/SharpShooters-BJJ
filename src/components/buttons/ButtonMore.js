import React from "react";
import classes from "../../main.module.css";

const ButtonMore = (props) => {
  const { buttonText } = props;

  return (
    <a href="programs" className={classes["animated-button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {buttonText}
    </a>
  );
};

export default ButtonMore;
