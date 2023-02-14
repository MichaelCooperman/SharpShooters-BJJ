import React from "react";
import classes from "../../main.module.css";

const ButtonSign = (props) => {
  const { buttonText } = props;

  return <button className={classes["button-main"]}>{buttonText}</button>;
};

export default ButtonSign;
