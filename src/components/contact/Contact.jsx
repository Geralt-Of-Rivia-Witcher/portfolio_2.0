import React from "react";

import "./contact.styles.css";

const Contact = () => {
  return (
    <footer id="contact">
      <div id="contacts-div">
        <p className="footer-message">
          Interested in collaborating or hiring? Send a note to my email or
          reach out on LinkedIn. I'm always open to interesting backend problems
          or new game recommendations.
        </p>
        <div id="icons-div">
          <a href="mailto:singhsiddhantkumar@gmail.com">
            <i className="fas fa-at fa-4x icon gmail-icon"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/siddhant-kumar-singh-/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-4x icon linkedin-icon"></i>
          </a>

          <a
            href="https://github.com/Geralt-Of-Rivia-Witcher"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-4x icon github-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
