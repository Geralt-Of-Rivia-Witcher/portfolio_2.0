import React from "react";

import "./navbar.styles.css";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand navbar-light fixed-top"
            id="navbar"
        >
            <div className="navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#intro">
                            Intro
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
