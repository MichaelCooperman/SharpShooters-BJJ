import React, { useState, useEffect } from "react";
import classes from "../main.module.css";
import sliderData from "../silderdata";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {
  const [testimonials] = useState(sliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = testimonials.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, testimonials]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className={classes["slider-center"]}>
      {testimonials.map((item, indexPeople) => {
        const { id, image, name, title, quote } = item;
        let position = classes["nextSlide"];
        if (indexPeople === index) {
          position = classes["activeSlide"];
        }
        if (
          indexPeople === index - 1 ||
          (index === 0 && indexPeople === testimonials.length - 1)
        ) {
          position = classes["lastSlide"];
        }
        return (
          <article className={position} key={id}>
            <div>
              <img src={image} alt={name} className={classes["person-img"]} />
              <h4>{name}</h4>
            </div>
            <div>
              <h5 className={classes["title"]}>{title}</h5>
              <p className={classes["text"]}>{quote}</p>
            </div>
          </article>
        );
      })}
      <button className={classes["prev"]} onClick={() => setIndex(index - 1)}>
        <BsArrowLeft size="25px" className={classes["fa-arrow-left"]} />
      </button>
      <button className={classes["next"]} onClick={() => setIndex(index + 1)}>
        <BsArrowRight size="25px" className={["fa-arrow-right"]} />
      </button>
    </div>
  );
};

export default Slider;
