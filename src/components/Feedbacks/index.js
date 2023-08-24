import React from "react";
import { Field, Form } from "react-final-form";

import FeedbackSlider from "./FeedbackSlider";

import { ReactComponent as SendMail } from "../../assets/send.svg";

import "./index.scss";

const Feedbacks = () => {
  const sendMessage = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="feedbacks-container" id="feedbacks">
      <div className="feedback-intro">
        <span className="feedback-name">FEEDBACK</span>
        <h2>What our Patients Think</h2>
        <div>
          <span>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.</span>
          <span>Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</span>
        </div>
      </div>

      <FeedbackSlider />

      <div className="quote-wrapper" id="contact">
        <div className="quote-container">
          <span>Get a quote</span>
          <span>Please do enter your email address below</span>

          <Form
            onSubmit={sendMessage}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <input {...input} placeholder="your email" />
                      <div>
                        <SendMail type="button" />
                      </div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
