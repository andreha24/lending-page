import React from "react";
import PropTypes from "prop-types";

function Button({
  className, title, onClick, type,
}) {
  return (
  // eslint-disable-next-line react/button-has-type
    <button className={className} onClick={onClick} type={type}>{title}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
