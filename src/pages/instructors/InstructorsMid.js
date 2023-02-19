import React from "react";
import InstructorsOne from "../../components/InstructorsOne";
import classes from "../../main.module.css";
import InstImg1 from "../../images/Instructor-img1.jpg";
import InstImg2 from "../../images/Instructor-img2.jpg";
import InstImg3 from "../../images/Instructor-img3.jpg";
import InstImg4 from "../../images/Instructor-img4.jpg";
import ButtonPop from "../../components/buttons/ButtonPop";

const InstructorsMid = (props) => {
  return (
    <div className={classes["main-containers"]}>
      <ButtonPop onClick={props.onOpen} btnText="SIGN UP FOR A TRIAL HERE" />
      <InstructorsOne
        InstructorImg={InstImg1}
        InstructorImgAlt="MIKE-img"
        InstructorName="MIKE"
        InstructorDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Arcu bibendum at varius vel pharetra."
        InstructorColor="black"
      />
      <InstructorsOne
        InstructorImg={InstImg2}
        InstructorImgAlt="JEFF-img"
        InstructorName="JEFF"
        InstructorDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Arcu bibendum at varius vel pharetra."
        InstructorColor="#713F11"
      />
      <InstructorsOne
        InstructorImg={InstImg3}
        InstructorImgAlt="HELLO-img"
        InstructorName="HELLO"
        InstructorDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Arcu bibendum at varius vel pharetra."
        InstructorColor="#4870D7"
      />
      <InstructorsOne
        InstructorImg={InstImg4}
        InstructorImgAlt="GEORGE-img"
        InstructorName="GEORGE"
        InstructorDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Arcu bibendum at varius vel pharetra."
        InstructorColor="#8869BA"
      />
    </div>
  );
};

export default InstructorsMid;
