import React from "react";
import PropTypes from "prop-types";
import { Form as FinalForm } from "react-final-form";

const Form = ({ children, onSubmit }) => (
  <FinalForm
    onSubmit={onSubmit}
    render={() => (
      { children }
    )}
  />
);

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
