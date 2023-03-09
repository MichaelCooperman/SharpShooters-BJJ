import React, { useRef } from "react";
import Modal from "../../UI/Modal";
import classes from "../../main.module.css";
import logo from "../../images/SharpShootersLogo.png";
import { AiOutlineClose } from "react-icons/ai";
import ButtonSubmit from "../buttons/ButtonSubmit";
import emailjs from "@emailjs/browser";

const PopUp = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89kgjki",
        "template_9gwn3i8",
        form.current,
        "K-P0Lrcjx9aic3gfj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
          <p>
            The staff here would love to set you or your children up with a free
            tiral week. Sign up today!
          </p>
        </div>
        <div className={classes.contact}>
          <form
            ref={form}
            className={classes["contact-form"]}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="First Name"
              name="user_firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="user_lastName"
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="user_phone"
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
