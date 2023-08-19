import React from "react";
import { Field, Form } from "react-final-form";

import Header from "../Header";
import Button from "../Button";
import vaccine from "../../assets/vaccine-container.png";
import virus from "../../assets/coronavirus.png";
import doctors from "../../assets/doctors.png";
import clock from "../../assets/clock.png";

import "./index.scss";

const VaccinationGotEasier = () => {
  const scheduleVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
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
          <img src={vaccine} alt="vaccine" />
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

      <div className="schedule-container" id="schedule">
        <div className="schedule-introduction">
          <img src={clock} alt="clock" />
          <span>Schedule your Vaccination</span>
        </div>

        <div className="schedule-reg">
          <Form
            onSubmit={scheduleVaccine}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="schedule-reg-form">
                <Field name="location">
                  {({ input, meta }) => (
                    <div className="schedule-reg-block">
                      <img src="/calendar.png" alt="map-pointer" />
                      <div>
                        <label htmlFor="location">
                          Location
                        </label>
                        <input type="text" {...input} />
                      </div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="date">
                  {({ input, meta }) => (
                    <div className="schedule-reg-block">
                      <img src="/calendar.png" alt="date" />
                      <div>
                        <label htmlFor="date">
                          Date
                        </label>
                        <input type="text" {...input} />
                      </div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="vaccine-type">
                  {({ input, meta }) => (
                    <div className="schedule-reg-block">
                      <img src="/calendar.png" alt="vaccine-type" />
                      <div>
                        <label htmlFor="vaccine-type">
                          Vaccine Type
                        </label>
                        <input type="text" {...input} />
                      </div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Button title="Submit" className="reg-btn" type="submit" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default VaccinationGotEasier;
