import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Marquee from "react-fast-marquee";

import moderna from "../../assets/vaccines-type/moderna.svg";
import pfizer from "../../assets/vaccines-type/pfizer.svg";
import astraZeneca from "../../assets/vaccines-type/astra-zeneca.svg";
import sinovac from "../../assets/vaccines-type/sinovac.svg";

import "./index.scss";

const VaccinesTypeSlider = () => {
  const vaccineImages = [moderna, pfizer, astraZeneca, sinovac];

  return (
    <Marquee className="vaccines-type" gradientWidth={200} gradient>
      <div className="vaccines-type__wrapper">
        {vaccineImages.map((elem, index) => (
          <img src={elem} key={index} alt="vaccine" />
        ))}
      </div>
    </Marquee>
  );
};

export default VaccinesTypeSlider;
