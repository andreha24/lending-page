import React from "react";
import Slider from "react-slick";

import sliderSettings from "./sliderSettings";

import moderna from "../../assets/vaccines-type/moderna.svg";
import pfizer from "../../assets/vaccines-type/pfizer.svg";
import astraZeneca from "../../assets/vaccines-type/astra-zeneca.svg";
import sinovac from "../../assets/vaccines-type/sinovac.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const VaccinesTypeSlider = () => {
  const vaccineImages = [moderna, pfizer, astraZeneca, sinovac];

  return (
    <Slider {...sliderSettings}>
      {vaccineImages.map((elem, index) => (
        <img src={elem} key={index} alt="vaccine" />
      ))}
    </Slider>
  );
};

export default VaccinesTypeSlider;
