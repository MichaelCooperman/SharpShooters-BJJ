import React from "react";
import classes from "../../main.module.css";
import Space1 from "../../images/Space1-img.png";
import Space2 from "../../images/Space2-img.png";
import Space3 from "../../images/Space3-img.png";
import Space4 from "../../images/Space4-img.png";
import Space5 from "../../images/Space5-img.png";

const HomeBottom = () => {
  return (
    <div className={classes["home-bottom-container"]}>
      <div className={classes["home-bottom"]}>
        <div className={classes["home-programs"]}>
          <div>
            <hr />
            <hr />
          </div>
          <h1>THE SPACE</h1>
          <div>
            <hr />
            <hr />
          </div>
        </div>
        <div className={classes["space-top"]}>
          <p>
            Sharp Shooters has a brand new gym opening up this summer! Stocked
            with the best available equipment on the market. Opening with a
            massive BJJ matting section enough for 100 people to be
            participating at once. Along with that there are 2 changing rooms, 2
            bathrooms and a sauna! As for weights we have up to 150lb dumbells
            and up to 100lb plates. Our space is for everyone to use. We now
            have a indoor basketball room and pool room. Sharp Shooters gym will
            be open all day and night. We have allocated more than enough room
            for parking so that will never have to be a thought when coming to
            our gym. If you are looking for one of the best gyms in the area
            this is the spot! Sign up now online and enroll today!
          </p>
          <img
            className={classes["space-1-img"]}
            src={Space1}
            alt="Space1-img"
          />
        </div>
        <div className={classes["space-images"]}>
          <img className={classes["space-img"]} src={Space2} alt="Space2-img" />
          <img className={classes["space-img"]} src={Space3} alt="Space3-img" />
          <img className={classes["space-img"]} src={Space4} alt="Space4-img" />
          <img className={classes["space-img"]} src={Space5} alt="Space5-img" />
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
