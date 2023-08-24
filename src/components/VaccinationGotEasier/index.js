import React from "react";

import Schedule from "./Schedule";

import Header from "../Header";
import Button from "../Button";
import vaccine from "../../assets/vaccine-container.png";
import virus from "../../assets/coronavirus.png";
import doctors from "../../assets/doctors.png";

import "./index.scss";

const VaccinationGotEasier = () => (
  <div className="introduction" id="top">
    <Header />

    <div className="introduction-info-container">
      <div className="introduction-info">
        <span>Get Vaccinated. Boost your Immune System</span>
        <div className="introduction-phrase">
          <h1>
            COVID-19 Vaccination
            Got Easier With,
          </h1>
          <span>Vaccination.ng</span>
        </div>

        <span className="introduction-info-help">
          Vaccination.ng will help you find the nearest
          centre for vaccination, in all 36 states in Nigeria.
        </span>
        <div className="introduction-btns">
          <Button title="Get Vaccine" className="get-vaccine-btn" type="button" />
          <Button title="Help Center" className="help-btn" type="button" />
        </div>
      </div>

      <div className="vaccine-block">
        <img src={vaccine} alt="vaccine" className="vaccine-block-img" />
        <div className="vaccine-viruses">
          <img src={virus} alt="scientist" />
          <img src={virus} alt="virus" />
        </div>
        <div className="doctors">
          <img src={doctors} alt="doctors" />
          <div>
            <span>20+</span>
            <span>Specialists</span>
          </div>
        </div>
      </div>
    </div>

    <Schedule />
  </div>
);

export default VaccinationGotEasier;
