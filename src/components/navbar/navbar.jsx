import React from "react";

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="site-navbar fixed-top" id="navbar">
      <div className="nav-inner container-wide">
        <div className="nav-brand"></div>
        <div className="nav-links">
          <a className="nav-link" href="#intro">
            Intro
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#about-me">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
