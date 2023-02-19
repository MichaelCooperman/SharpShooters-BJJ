import React from "react";
import { Link } from "react-router-dom";
import classes from "../../main.module.css";

const NavLinks = (props) => {
  return (
    <ul>
      <li>
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={classes["nav-link"]}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={classes["nav-link"]}
          to="/instructors"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={classes["nav-link"]}
          to="/programs"
        >
          Programs
        </Link>
      </li>
      <li>
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={classes["nav-link"]}
          to="/schedule"
        >
          Schedule
        </Link>
      </li>
      <li>
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={classes["nav-link"]}
          to="/contact"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
