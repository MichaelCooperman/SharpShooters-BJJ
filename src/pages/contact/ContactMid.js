import React from "react";
import ButtonPop from "../../components/buttons/ButtonPop";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import classes from "../../main.module.css";

const ContactMid = (props) => {
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
            <textarea
              placeholder="Your Message here..."
              name="message"
              cols="30"
              rows="10"
            ></textarea>
            <ButtonSubmit btnTxt="SUBMIT" />
            {/* <div>
              <h3>DROPPING IN? FILL OUT WAIVER</h3>
              <ButtonSubmit btnTxt="SIGN WAIVER" />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMid;
