import React from "react";
import "./style.scss";

const Input = props => {
  const { label, className, type } = props;

  return (
    <label className={className}>
      <span>{label}</span>
      {type === "textarea" ? (
        <textarea {...props} autoComplete="off" />
      ) : (
        <input {...props} autoComplete="off" />
      )}
    </label>
  );
};

export default Input;
