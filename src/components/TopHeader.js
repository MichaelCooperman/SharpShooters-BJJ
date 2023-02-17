import React from "react";
import classes from "../../src/main.module.css";

const TopHeader = (props) => {
  const { Headers } = props;
  return (
    <div className={classes["home-logo"]}>
      <h1>{Headers}</h1>
    </div>
  );
};

export default TopHeader;
