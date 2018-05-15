import React from "react";
import "./Footer.css";
import github from "./github.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>by Ildi Bilali </p>
      <a href="https://github.com/sgfhg12">
        <img src={github} />
      </a>
    </div>
  );
};

export default Footer;
