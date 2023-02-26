import React from "react";
import HomeOne from "../../components/HomeOne";
import classes from "../../main.module.css";
import { FaUserFriends } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { AiOutlineTrophy } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import HomeTwo from "../../components/HomeTwo";
import BJJImg from "../../images/BJJ-image.png";
import WrestlingImg from "../../images/Wrestling-image.png";
import KidsClassesImg from "../../images/Kids-Classes-image.png";
import YogaImg from "../../images/Yoga-image.png";
import TopicBG from "../../images/Topic-Background-image.png";
import TopicImg from "../../images/Topic-image.png";
import ButtonMore from "../../components/buttons/ButtonMore";

const HomeMid = () => {
  return (
    <div className={classes["main-containers"]}>
      <div className={classes["home-mid-container"]}>
        <div className={classes["home-welcome"]}>
          <div className={classes["home-mid-one"]}>
            <h3>WELCOME TO THE CLUB</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <ButtonMore buttonText="Read More" />
            </div>
          </div>
          <div className={classes["home-mid-two"]}>
            <div>
              <HomeOne
                title="MAKE FRIENDS"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={<FaUserFriends size="100px" />}
              />
              <HomeOne
                title="GET IN SHAPE"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={<GiWeightLiftingUp size="100px" />}
              />
            </div>
            <div>
              <HomeOne
                title="COMPETE"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={<AiOutlineTrophy size="100px" />}
              />
              <HomeOne
                title="GET CREATIVE"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={<HiOutlineLightBulb size="100px" />}
              />
            </div>
          </div>
        </div>
        {/* <ButtonSign buttonText="JOIN TODAY" /> */}
        <div className={classes["home-programs"]}>
          <div>
            <hr />
            <hr />
          </div>
          <h1>PROGRAMS</h1>
          <div>
            <hr />
            <hr />
          </div>
        </div>
        <div className={classes["home-programs-container"]}>
          <HomeTwo
            programImg={BJJImg}
            programImgAlt="BJJ-Img"
            programType="BRAZILIAN JIU JITSU"
            programExtra="Gi and No Gi"
            programDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HomeTwo
            programImg={WrestlingImg}
            programImgAlt="Wrestling-Img"
            programType="WRESTLING"
            programExtra="Styles"
            programDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HomeTwo
            programImg={KidsClassesImg}
            programImgAlt="Kid-Classes-Img"
            programType="KIDS CLASSSES"
            programExtra="Gi and No Gi"
            programDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HomeTwo
            programImg={YogaImg}
            programImgAlt="Yoga-Img"
            programType="YOGA OR SOMETHING"
            programExtra="Dinosaur"
            programDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <ButtonMore buttonText="READ MORE ABOUT CLASSES" />

        <div className={classes["topic-container"]}>
          <img
            className={classes["topic-img-1"]}
            src={TopicBG}
            alt="topic-bg-img"
          />
          <div className={classes["topic-low"]}>
            <div className={classes["topic-box"]}>
              <h3>TOPIC</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet volutpat consequat mauris nunc. Eu consequat ac felis donec
                et odio pellentesque diam.
              </p>
            </div>
            <img
              className={classes["topic-img"]}
              src={TopicImg}
              alt="topic-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
