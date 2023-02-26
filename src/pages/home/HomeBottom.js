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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            volutpat consequat mauris nunc. Eu consequat ac felis donec et odio
            pellentesque diam.
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
