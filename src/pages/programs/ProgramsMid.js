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
          ProgramsDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. In ornare quam viverra orci sagittis eu."
        />
        <ProgramsOne
          ProgramsImg={ProgramsWrestlingImg}
          ProgramsImgAlt="ProgramsWrestling-img"
          ProgramsTitle="WRESTLING"
          ProgramsDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. In ornare quam viverra orci sagittis eu."
        />
        <ProgramsOne
          ProgramsImg={ProgramsKidsClassImg}
          ProgramsImgAlt="ProgramsKidsClass-img"
          ProgramsTitle="KIDS CLASSES"
          ProgramsDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. In ornare quam viverra orci sagittis eu."
        />
        <ProgramsOne
          ProgramsImg={ProgramsYogaImg}
          ProgramsImgAlt="ProgramsYoga-img"
          ProgramsTitle="YOGA CRAP"
          ProgramsDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. In ornare quam viverra orci sagittis eu."
        />
      </div>
    </div>
  );
};

export default ProgramsMid;
