import React from "react";
import "./style.scss";

const Footer = props => {
  const { copyright } = props;
  return <footer>{copyright}</footer>;
};

export default Footer;
