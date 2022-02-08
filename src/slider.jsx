import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from "./buttons";

const Slider = ({ people, index, addIndex, minusIndex }) => {
  return (
    <div>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        //Here is like: if its the first person,
        //when the map go over the last person on the last, put it as lastSlide
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <Buttons addIndex={addIndex} minusIndex={minusIndex} index={index} />
    </div>
  );
};

export default Slider;
