import React from "react";
import "./Badge.css";

const STYLES = [
  "bdg--primary--solid",
];

const SIZES = [
  "btn--small",
];

export const Badge = ({
  children,
  type,
  badgeStyle,
  badgeSize
}) => {
  const checkBadgeStyle = STYLES.includes(badgeStyle)
    ? badgeStyle
    : STYLES[0];

  const checkBadgeSize = SIZES.includes(badgeSize) 
    ? badgeSize 
    : SIZES[0];

  return (
    <badge
      className={`${checkBadgeStyle} ${checkBadgeSize}`}
      type={type}
    >
      {children}
    </badge>
  );
};