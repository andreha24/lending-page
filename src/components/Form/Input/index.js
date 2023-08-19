import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

const Input = ({ name }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div>dsadsa</div>
    )}
  </Field>
);

Input.propTypes = {
  name: PropTypes.string,
};

export default Input;
