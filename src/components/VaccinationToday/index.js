import React from "react";
import { Field, Form } from "react-final-form";

import Button from "../Button";

import "./index.scss";

const VaccinationToday = () => {
  const checkTodayVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="vaccination-today-container" id="check-status">
      <Form
        onSubmit={checkTodayVaccine}
        render={({ handleSubmit }) => (
          <div className="check-result-wrapper">
            <div className="check-result">
              <span>Check your COVID-19 result on our Database</span>
              <form onSubmit={handleSubmit} className="check-form">
                <div>
                  <Field name="person-name">
                    {({ input, meta }) => (
                      <>
                        <input type="text" {...input} placeholder="Name" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </>
                    )}
                  </Field>
                  <Field name="nik-number">
                    {({ input, meta }) => (
                      <>
                        <input type="text" {...input} placeholder="Nik Number" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </>
                    )}
                  </Field>
                  <Button title="Check" type="submit" className="check-vaccine-btn" />
                </div>
                <span>
                  Need a certificate for your COVID-19 result? Please click
                  <a href="/">here</a>
                </span>
              </form>
            </div>
          </div>
        )}
      />

      <div className="why-today">
        <div className="why-today-intro">
          <span>
            Why get vaccinated
            today?
          </span>
          <span>
            Magna adipiscing at elit at ornare lectus nibh lorem.
            Ac, sed ac lorem pellentesque vestibulum risus matti.
            In molestie condimentum malesuada non.
          </span>
        </div>

        <div className="vaccination-reasons">
          <div className="main-reason">
            <img src="/img/big-shield.png" alt="shield" />
            <h2>
              Protects your immune
              system against viruses
            </h2>
            <span>
              Velit ut consectetur mauris, orci amet,
              faucibus.
            </span>
            <span>
              Sit turpis fringilla ipsum pretium,
              dictum. Dolor eget vel nulla lorem ac.
            </span>
            <Button className="read-more-btn-blue" type="button" title="Read More" />
          </div>

          <div className="secondary-reasons">
            <div>
              <img src="/img/humans-maket.png" alt="peoples" />
              <span>
                Minimize the spread
                of the Virus
              </span>
              <Button className="read-more-btn-grey" type="button" title="Read More" />
            </div>

            <div>
              <img src="/img/temperature.png" alt="temperature" />
              <span>
                Protect yourself
              </span>
              <Button className="read-more-btn-grey" type="button" title="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationToday;
