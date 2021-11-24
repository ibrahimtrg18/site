import React from "react";
import "./style.scss";

const Badge = props => {
  const { children } = props;

  return <div className="badge">{children}</div>;
};

export default Badge;
