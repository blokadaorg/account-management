import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--primary--outline",
  "btn--primary--inactive",
  "btn--secondary--inactive"
];

const SIZES = [
  "btn--small", 
  "btn--medium", 
  "btn--large"
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

  return (
    <button
      className={`${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};