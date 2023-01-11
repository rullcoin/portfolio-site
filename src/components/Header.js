import PropTypes from "prop-types";
import React from "react";

const Header = () => {
  const toggleMode = () => {
    document.documentElement.classList.toggle("dark-theme");
  };

  return (
    <div class="toggle-switch">
      <div className="header-left flex-center">
        <a href="1">Home</a>
        <a href="2">About</a>
      </div>
      <div className="header-right flex-center">
        <a href="3">Projects</a>
        <a href="4">Contact</a>
        <div className="checkbox-container">
          <label className="btn-toggle">
            <input type="checkbox" onClick={toggleMode} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
