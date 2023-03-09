import React, { useRef } from "react";
import ButtonPop from "../../components/buttons/ButtonPop";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import classes from "../../main.module.css";
import emailjs from "@emailjs/browser";

const ContactMid = (props) => {
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
    <div className={classes["main-containers"]}>
      <div className={classes["contact-container"]}>
        <div className={classes["sign-button"]}>
          <ButtonPop
            onClick={props.onOpen}
            btnText="SIGN UP FOR A TRIAL HERE"
          />
        </div>

        <h3>CONTACT US OR STOP BY IN PERSON!</h3>
        <h4 className={classes["contact-para"]}>
          We are so excited to hear from you. Please fill out a form below if
          you have any questions, comments, concerns, or ideas. We will get back
          to you as soon as we can!
        </h4>
        <div className={classes.contact}>
          <h2 className={classes["contact-title"]}>Contact Me</h2>
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
            <textarea
              placeholder="Your Message here..."
              name="message"
              cols="30"
              rows="10"
            ></textarea>
            <ButtonSubmit btnTxt="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMid;
