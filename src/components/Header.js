// Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 550) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <Link to="/home" className="link icon-box"><img className="icon" src="/assets/icon.png"></img>Daniel Goresht</Link>
      <div className="link-container">
        <Link to="/projects" className="link special-link">Projects</Link>
        <Link to="/about" className="link special-link">About</Link>
      </div>
    </div>
  );
};

export default Header;
