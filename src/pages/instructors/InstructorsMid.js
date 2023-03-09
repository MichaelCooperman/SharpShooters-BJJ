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
      <div className={classes["sign-button"]}>
        <ButtonPop onClick={props.onOpen} btnText="SIGN UP FOR A TRIAL HERE" />
      </div>
      <div className={classes["instructors-container"]}>
        <InstructorsOne
          InstructorImg={InstImg1}
          InstructorImgAlt="MIKE-img"
          InstructorName="Michael Rogers"
          InstructorDesc="Hi there, I'm Michael, a sports endurance coach from Boston. I love helping individuals reach their highest performance in any sport they choose to pursue. With over ten years of experience, I’m a believer in listening to the body, being mindful of your own unique training cycles and pushing yourself to distinguish between physical and mental exhaustion when striving for success."
          InstructorColor="black"
        />
        <InstructorsOne
          InstructorImg={InstImg2}
          InstructorImgAlt="JEFF-img"
          InstructorName="Jess Swoleake"
          InstructorDesc="Jess has been a Certified Group Fitness Instructor for over 25 years, “Teaching is not a job for me, it's a fun way to get to work out and interact with a great group of people, I love my students and the positive energy they bring to class”. She's taught a variety of classes, for a broad range of participants, including teaching in Okinawa, Japan. She teaches Boot Camp, Circuit, Cycle, Step, and Strength & Cardio. She believes there is never a bad day at the gym, working out is not just looking good on the outside, it's feeling great on the inside. Don't miss out on opportunities to be the best you,"
          InstructorColor="#713F11"
        />
        <InstructorsOne
          InstructorImg={InstImg3}
          InstructorImgAlt="HELLO-img"
          InstructorName="Ryan Green"
          InstructorDesc="Hi I'm Ryan and I'm a certified personal trainer, health counselor, and life coach. My goal is to empower individuals to take charge of their lives, by introducing them to the important connection between physical health and mental well-being. I'm passionate about helping my clients reach their goals and develop healthy living habits to maintain long-term success."
          InstructorColor="#4870D7"
        />
        <InstructorsOne
          InstructorImg={InstImg4}
          InstructorImgAlt="GEORGE-img"
          InstructorName="George Newmon"
          InstructorDesc="Greetings, I'm George, a certified personal trainer and sports performance coach with over 10 years of experience in the field. With an emphasis on holistic health, I provide my clients with individualized, comprehensive plans to reach their personal fitness goals and maintain long-term success."
          InstructorColor="#8869BA"
        />
      </div>
    </div>
  );
};

export default InstructorsMid;
