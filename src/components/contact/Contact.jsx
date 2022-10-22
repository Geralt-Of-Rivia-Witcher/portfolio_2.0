import React from "react";

import "./contact.styles.css";

const Contact = () => {
    return (
        <footer id="contact">
            <div id="contacts-div">
                <p className="footer-message">
                    If you have any questions about my projects, want to get
                    some work done or just want to talk about video games, feel
                    free to contact me :)
                    <br />
                    <br />
                    Below are my social media handles.
                </p>
                <div id="icons-div">
                    <a href="mailto:singhsiddhantkumar@gmail.com">
                        <i className="fas fa-at fa-4x icon gmail-icon"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/siddhant.exe_/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram fa-4x icon instagram-icon"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/siddhant-kumar-singh-/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin fa-4x icon linkedin-icon"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/siddhant.kumarsingh.1/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook fa-4x icon facebook-icon"></i>
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
