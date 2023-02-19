import React from "react";
import Modal from "../../UI/Modal";
import classes from "../../main.module.css";
import logo from "../../images/SharpShootersLogo.png";
import { AiOutlineClose } from "react-icons/ai";

const PopUp = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["popup-container"]}>
        <div className={classes["popup-top"]}>
          <img src={logo} alt="logo-img" />
          <button onClick={props.onClose}>
            <AiOutlineClose
              size="25px"
              color="#000000"
              className={classes.hamburger}
            />
          </button>
        </div>
        <div className={classes["popup-header"]}>
          <h4>SIGN UP FOR YOUR FREE TRIAL TODAY!</h4>
          <p>
            The staff here would love to set you or yhour children up with a
            free tiral week. Sign up today!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
