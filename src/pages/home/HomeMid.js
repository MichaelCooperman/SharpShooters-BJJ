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
          <div className={classes["home-mid-row"]}>
            <div className={classes["home-mid-one"]}>
              <h3>WELCOME TO THE CLUB</h3>
              <p>
                Whether you’re new to fitness or an accomplished athlete, our
                coaches are highly trained and certified to help you set goals,
                teach proper form to prevent injury, and design training
                programs that include basic barbell exercises, Brazilian Jiu
                Jitsu, wrestling, gymnastics, and a long list of bodyweight
                movements.
              </p>
              <div>
                <ButtonMore buttonText="Read More" />
              </div>
            </div>
            <img src={TopicImg} alt="home-top-img" />
          </div>
          <div className={classes["home-mid-two"]}>
            <div>
              <HomeOne
                title="MAKE FRIENDS"
                desc="Getting fit should be FUN, varied, and done with friends. There is power in being part of a community of like-minded individuals that supports us, shares our experiences, and celebrates our successes."
                image={<FaUserFriends size="100px" />}
              />
              <HomeOne
                title="GET IN SHAPE"
                desc="Whether you're looking to just be fit for life, or reignite your competitive fire, we are experienced at providing solutions to meet you where you are with your health and fitness and get you the results you deserve."
                image={<GiWeightLiftingUp size="100px" />}
              />
            </div>
            <div>
              <HomeOne
                title="COMPETE"
                desc="Show your competitive side. Looking to show off your BJJ, Wrestling, or Gymnastic skills this is the place for you! We compete all country wide and have some the of most high ranking competitions. "
                image={<AiOutlineTrophy size="100px" />}
              />
              <HomeOne
                title="GET CREATIVE"
                desc="There's no one right way to training. Your goals are unique, which is why we offer a variety of program options. Whether you're looking to just get fit, get strong, or fuel your competitive fire, we have a program for you. "
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
            programDesc="A predominantly ground-based martial art, using the principals of leverage, angles, pressure and timing, as well as knowledge of the human anatomy, in order to achieve a non-violent submission of one's opponent."
          />
          <HomeTwo
            programImg={WrestlingImg}
            programImgAlt="Wrestling-Img"
            programType="WRESTLING"
            programExtra="Styles"
            programDesc=" Sport practiced in various styles by two competitors, involving forcing an opponent to touch the ground with some part of the body other than his feet; forcing him into a certain position, usually supine (on his back); or holding him in that position for a minimum length of time."
          />
          <HomeTwo
            programImg={KidsClassesImg}
            programImgAlt="Kid-Classes-Img"
            programType="KIDS CLASSSES"
            programExtra="Gi and No Gi"
            programDesc="A form of martial arts that offers many mental and physical health benefits for kids. If you are looking for a fun activity to build your child's development, look no further than BJJ. You'll see your kids' Jiu-Jitsu benefits in no time."
          />
          <HomeTwo
            programImg={YogaImg}
            programImgAlt="Gymnastics-Img"
            programType="Gymnastics"
            programExtra="Yoga"
            programDesc="A type of sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination, and endurance. The movements involved in gymnastics contribute to the development of the arms, legs, shoulders, back, chest, and abdominal muscle groups."
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
