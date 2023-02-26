import React from "react";
import Modal from "../../UI/Modal";
import classes from "../../main.module.css";
import logo from "../../images/SharpShootersLogo.png";
import { AiOutlineClose } from "react-icons/ai";
import ButtonSubmit from "../buttons/ButtonSubmit";

const PopUp = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["popup-container"]}>
        <div className={classes["popup-top"]}>
          <img src={logo} alt="logo-img" />
          <h3>FREE TRIAL!</h3>
          <button onClick={props.onClose}>
            <AiOutlineClose
              size="25px"
              color="#000000"
              className={classes.hamburger}
            />
          </button>
        </div>
        <div className={classes["popup-header"]}>
          {/* <h4>SIGN UP FOR YOUR FREE TRIAL TODAY!</h4> */}
          <p>
            The staff here would love to set you or your children up with a free
            tiral week. Sign up today!
          </p>
        </div>
        <div className={classes.contact}>
          <form className={classes["contact-form"]}>
            <input
              type="text"
              placeholder="First Name"
              name="user_first_name"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="user_last_name"
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="user_phone_number"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <ButtonSubmit btnTxt="SUBMIT" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
