import React from "react";
import classes from "../../main.module.css";
import logo from "../../images/SharpShootersLogo.png";

const Footer = () => {
  return (
    <div className={classes["footer-bg"]}>
      <footer className={classes["footer-container"]}>
        <div className={classes["footer-top"]}>
          <h4>CONNECT WITH US</h4>
          <h5>484-898-9908</h5>
          <h4>Main Location</h4>
          <h5>123 Street Oxford PA 123456</h5>
          <h4>Email</h4>
          <h5>SSBJJ@gmail.com</h5>
          <div className={classes["footer-socials"]}>
            <h4>SOCIAL MEDIA</h4>
          </div>
        </div>
        <div className={classes["footer-bottom"]}>
          <img src={logo} alt="logo-img" />
          <div className={classes["home-logo"]}>
            <h1>SHARP SHOOTERS</h1>
            <h3>GRAPPLING CLUB</h3>
          </div>
          <h5>© Copyright 2023 SHARP SHOOTERS GRAPPLING CLUB</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
