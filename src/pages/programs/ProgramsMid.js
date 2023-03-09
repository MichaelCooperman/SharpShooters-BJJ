import React from "react";
import ProgramsOne from "../../components/ProgramsOne";
import classes from "../../main.module.css";
import ProgramsBJJImg from "../../images/Programs-img1.png";
import ProgramsWrestlingImg from "../../images/Programs-img2.png";
import ProgramsKidsClassImg from "../../images/Programs-img3.png";
import ProgramsYogaImg from "../../images/Programs-img4.png";
import ButtonPop from "../../components/buttons/ButtonPop";

const ProgramsMid = (props) => {
  return (
    <div className={classes["main-containers"]}>
      <div className={classes["sign-button"]}>
        <ButtonPop onClick={props.onOpen} btnText="SIGN UP FOR A TRIAL HERE" />
      </div>
      <div className={classes["programs-container"]}>
        <ProgramsOne
          ProgramsImg={ProgramsBJJImg}
          ProgramsImgAlt="ProgramsBJJ-img"
          ProgramsTitle="BRAZILIAN JIUJITSU"
          ProgramsDesc="Brazilian Jiu Jitsu (BJJ) is a grappling-based martial art that has evolved from Japan, through Brazil and now to the United States. Incorporating the gi or kimono, BJJ involves taking down the opponent, controlling them, and ultimately submitting them through the application of joint locks and strangulations. BJJ is often referred to as the gentle art due to preferring technique over strength and is arguably the most effective ground grappling style. People of all walks of life practice and thrive at training BJJ."
        />
        <ProgramsOne
          ProgramsImg={ProgramsWrestlingImg}
          ProgramsImgAlt="ProgramsWrestling-img"
          ProgramsTitle="WRESTLING"
          ProgramsDesc="Wrestling is a sport or contest in which two unarmed individuals struggle hand to hand with each other attempting to subdue or unbalance the other. Wrestling may consists of professional or amateur wrestlers. Widely recognized as the world's oldest competitive sport, amateur wrestling has featured in every Olympic games since its ancient conception."
        />
        <ProgramsOne
          ProgramsImg={ProgramsKidsClassImg}
          ProgramsImgAlt="ProgramsKidsClass-img"
          ProgramsTitle="KIDS CLASSES"
          ProgramsDesc="BJJ offers children an improved development of their character, mind, body, and spirit. When this martial art is started at a young age, students quickly adopt the creed of the BJJ and form their schedule around attendance and execution of the exercises."
        />
        <ProgramsOne
          ProgramsImg={ProgramsYogaImg}
          ProgramsImgAlt="ProgramsYoga-img"
          ProgramsTitle="Gymnastics"
          ProgramsDesc="Fitness and body control are also achieved through gymnastics. Children who undergo training gymnastics understand that for their bodies to function well and to carry out gymnastics in routine they must give proper rest and nutrition to their bodies. Body control comes to their internal self at an early age and also puts them at reduced risk of obesity and other health disorders that affect children with sedentary lifestyle and unhealthy eating habits. Gymnasts maintain a proper body alignment with the type of activities they perform and also correct posture essential for good health."
        />
      </div>
    </div>
  );
};

export default ProgramsMid;
