import React from "react";
import Slider from "react-slick";

import feedbacks from "./feedbacks";
import sliderSettings from "./sliderSettings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const FeedbackSlider = () => (
  <Slider {...sliderSettings}>
    {feedbacks.map(({
      id,
      name,
      country,
      photo,
      text,
    }) => (
      <div key={id} className="feedback-wrapper">
        <div className="feedback-container">
          <div className="feedback-user-info">
            <img src={photo} alt="user" />
            <div>
              <span>{name}</span>
              <span>{country}</span>
            </div>
          </div>

          <span>{text}</span>
        </div>
      </div>
    ))}
  </Slider>
);

export default FeedbackSlider;
