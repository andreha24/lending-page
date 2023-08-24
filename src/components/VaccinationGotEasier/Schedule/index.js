import React from "react";
import { Field, Form } from "react-final-form";

import clock from "../../../assets/clock.png";
import mapPin from "../../../assets/map-pin.svg";
import shield from "../../../assets/shield.svg";
import calendar from "../../../assets/calendar.svg";
import Button from "../../Button";

import "./index.scss";

const Schedule = () => {
  const scheduleVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
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
                    <img src={mapPin} alt="map-pointer" />
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
                    <img src={calendar} alt="date" />
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
                    <img src={shield} alt="vaccine-type" />
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
  );
};

export default Schedule;
