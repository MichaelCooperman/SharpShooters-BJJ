import React, { useState } from "react";
import { HiArrowUpCircle } from "react-icons/hi2";
import classes from "../../main.module.css";

const ButtonMobile = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={classes["button-scroll"]}>
      <HiArrowUpCircle
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ButtonMobile;
