// Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file for styling

const Header = ({ sticky }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const offset1 = window.scrollY;
    if(sticky || offset1 > 550)
    {
      setIsSticky(true);
    }
    
    const handleScroll = () => {
      setIsSticky(true);
      const offset = window.scrollY;
      if (offset > 550 || sticky) {
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

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setClicked(!clicked); 
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className={`${isSticky ? "filler-pad" : ""}`}></div>
      <div className={`header ${isSticky ? "sticky" : ""}`}>
        <Link to="/home" className="link icon-box"><img className="icon" src="assets/icon.png"></img><div className="header-name">Dan Goresht</div></Link>
        <div className="link-container">
          <Link to="/projects" className="link special-link hide-mobile">Projects</Link>
          <Link to="/about" className="link special-link hide-mobile">About</Link>

          <div className={`hamburger ${clicked ? "clicked" : ""}`} onClick={toggleDropdown}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className={`dropdown-menu ${menuVisible ? "show" : ""}`}>
            <Link to="/home" className="link special-link">Home</Link>
            <Link to="/projects" className="link special-link">Projects</Link>
            <Link to="/about" className="link special-link">About</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
