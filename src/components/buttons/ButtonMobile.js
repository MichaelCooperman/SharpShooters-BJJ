import React, { useState } from "react";
// import { MdAssignment } from "react-icons/md";
import classes from "../../main.module.css";

const ButtonMobile = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 0) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      onClick={props.onPopup}
      style={{ display: visible ? "inline" : "none" }}
      className={classes["button-mobile"]}
    >
      <div>
        JO
        <br />
        IN
      </div>
    </div>
  );
};

export default ButtonMobile;
