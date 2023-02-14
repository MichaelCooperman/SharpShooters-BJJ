import React from "react";
import classes from "../main.module.css";

const HomeOne = (props) => {
  const { title, desc, image } = props;

  return (
    <div className={classes["home-one"]}>
      <h3>{title}</h3>
      <p>{desc}</p>
      {image}
    </div>
  );
};

export default HomeOne;
