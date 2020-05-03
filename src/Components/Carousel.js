import React from "react";
import Slide from "./Slide";

const Carousel = ({ slides = [], translate }) => {
  return (
    <div className="wrapper">
      <div className="carousel">
        {slides
          .slice()
          .reverse()
          .map((slide) => (
            <Slide key={slide.id} {...slide} />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
