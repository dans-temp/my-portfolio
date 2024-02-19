// Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{currentYear} © Daniel Goresht</p>
      <div className="social-links">
        <a href="https://github.com/dans-temp"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daniel-goresht-91618a101/"><FaLinkedin /></a>
        <a href="https://www.facebook.com/dan.goresht/"><FaFacebook /></a>
      </div>
    </footer>
  );
};

export default Footer;