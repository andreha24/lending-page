import React from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-scroll";
// eslint-disable-next-line import/no-unresolved
import logo from "assets/logo.png";
// eslint-disable-next-line import/no-unresolved
import vaccine from "assets/vaccine-container.png";
// eslint-disable-next-line import/no-unresolved
import virus from "assets/coronavirus.png";
// eslint-disable-next-line import/no-unresolved
import doctors from "assets/doctors.png";
// eslint-disable-next-line import/no-unresolved
import clock from "assets/clock.png";

import Button from "./components/Button";

import "./App.scss";

function App() {
  const scheduleVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const checkTodayVaccine = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <>
      <Link to="top" smooth duration={1000} className="go-top-btn">
        <img src="/img/up-arrow.png" alt="up-arrow" />
      </Link>
      <div className="introduction" id="top">
        <header>
          <div className="logo-block">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li><Link to="home" smooth duration={1000}>Home</Link></li>
            <li><Link to="services" smooth duration={1000}>Services</Link></li>
            <li><Link to="schedule" smooth duration={1000}>Schedule</Link></li>
            <li><Link to="contacts" smooth duration={1000}>Contact us</Link></li>
          </ul>
          <Button className="check-status-btn" title="Check Status" type="button" />
        </header>

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

      <div className="vaccines-types">
        <img src="/img/moderna.png" alt="vaccine" />
        <img src="/img/pfizer.png" alt="vaccine" />
        <img src="/img/astra-zeneca.png" alt="vaccine" />
        <img src="/img/sinovac.png" alt="vaccine" />
      </div>

      <div className="vaccination-today-container">
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
    </>
  );
}

export default App;
