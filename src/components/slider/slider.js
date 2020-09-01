import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slider.css';

const Slider = ({ slides }) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      emulateTouch
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={5000}
    >
      {slides.map((slide, index) => {
        return (
          <div key={`slide_${index}`} className="single-slide">
            <img src={slide} alt="Slide" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
