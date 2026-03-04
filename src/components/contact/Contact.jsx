import React from "react";

import "./contact.styles.css";

const Contact = () => {
  return (
    <footer id="contact">
      <div id="contacts-div" className="container-wide glass-card">
        <h3 className="contact-heading">Let&apos;s Build Something Solid</h3>
        <p className="footer-message">
          Open to backend engineering roles, impactful product teams, and
          collaboration on technically interesting systems.
        </p>
        <div id="icons-div">
          <a
            className="social-link"
            href="mailto:singhsiddhantkumar@gmail.com"
            aria-label="Email Siddhant"
          >
            <i className="fas fa-at icon gmail-icon"></i>
            <span>Email</span>
          </a>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/siddhant-kumar-singh-/"
            target="_blank"
            rel="noreferrer"
            aria-label="Siddhant on LinkedIn"
          >
            <i className="fab fa-linkedin icon linkedin-icon"></i>
            <span>LinkedIn</span>
          </a>

          <a
            className="social-link"
            href="https://github.com/Geralt-Of-Rivia-Witcher"
            target="_blank"
            rel="noreferrer"
            aria-label="Siddhant on GitHub"
          >
            <i className="fab fa-github icon github-icon"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
