import React from "react";
import classes from "../../main.module.css";

const ButtonSubmit = (props) => {
  const { btnTxt } = props;
  return (
    <div>
      <button className={classes["button-sub"]}>{btnTxt}</button>
    </div>
  );
};

export default ButtonSubmit;
