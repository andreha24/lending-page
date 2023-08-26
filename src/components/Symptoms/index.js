import React from "react";

import symptomsInfo from "./symptomsInfo";

import { ReactComponent as Virus } from "../../assets/coronavirus.svg";

import "./index.scss";

const Symptoms = () => (
  <div className="symptoms-container">
    <div className="symptoms-intro">
      <span>Covid-19 Prevention</span>
      <h2>
        <span>COVID-19</span>
        {" "}
        Symptoms
      </h2>
      <div>
        <span>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.</span>
        <span>Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</span>
      </div>
    </div>

    <div className="symptoms-details">
      {symptomsInfo.map(({ wrapperClassName, childClassName, children }, index) => (
        <div className={wrapperClassName} key={index}>
          {children.map((elem) => (
            <div className={childClassName}>
              <Virus />
              <span>{ elem }</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Symptoms;
