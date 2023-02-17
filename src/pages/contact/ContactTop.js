import React from "react";
import TopHeader from "../../components/TopHeader";
import classes from "../../main.module.css";

const ContactTop = () => {
  return (
    <div className={classes["contact-top-container"]}>
      <TopHeader Headers="CONTACT US" />
    </div>
  );
};

export default ContactTop;
