import React, { useState } from "react";
import { Link } from "react-scroll";
import { Field, Form } from "react-final-form";
import PhoneInput from "react-phone-number-input";

import Button from "../Button";

import "./index.scss";

const GetVaccinationToday = () => {
  const [number, setNumber] = useState("");

  const getTodayVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };
  return (

    <div className="get-vaccine-today-container">
      <div className="vaccine-today-wrapper">
        <div className="vaccine-today-form-wrapper">
          <span className="vaccination-today-intro">
            Get your vaccine
            registration today
          </span>

          <Form
            onSubmit={getTodayVaccine}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="patient-name">
                  {({ input, meta }) => (
                    <div className="reg-today-input">
                      <label htmlFor="patient-name">Patient’s Full Name</label>
                      <input type="text" {...input} placeholder="Full Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="mobile-number">
                  {({ input, meta }) => (
                    <div className="reg-today-input">
                      <label htmlFor="mobile-number">Mobile Number</label>
                      <span>
                        Notifications for appointment and reminders will be sent to this
                        provided number
                      </span>
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        onChange={setNumber}
                        value={number}
                        {...input}
                        placeholder="Phone number"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Button title="Submit" type="submit" className="reg-today-btn" />
              </form>
            )}
          />
          <div className="already-check">
            <span>Already registered ?</span>
            <Link to="check-status" smooth duration={1000}>Check your status</Link>
          </div>
        </div>

        <div className="dasdas">
          <span>[dasd[asd</span>
        </div>
      </div>
    </div>
  );
};

export default GetVaccinationToday;
