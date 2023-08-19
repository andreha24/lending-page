import React from "react";
import Slider from "react-slick";

import sliderSettings from "./sliderSettings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const VaccinesTypeSlider = () => (
  <Slider {...sliderSettings}>
    <img src="/img/moderna.png" alt="vaccine" />
    <img src="/img/pfizer.png" alt="vaccine" />
    <img src="/img/astra-zeneca.png" alt="vaccine" />
    <img src="/img/sinovac.png" alt="vaccine" />
    <img src="/img/moderna.png" alt="vaccine" />
    <img src="/img/pfizer.png" alt="vaccine" />
    <img src="/img/astra-zeneca.png" alt="vaccine" />
    <img src="/img/sinovac.png" alt="vaccine" />
  </Slider>
);

export default VaccinesTypeSlider;
