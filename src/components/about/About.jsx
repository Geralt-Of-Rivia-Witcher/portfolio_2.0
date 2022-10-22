import React from "react";

import image from "../../image/siddhant.png";
import "./about.styles.css";

const About = () => {
    return (
        <section id="about-me">
            <div className="about-me-div">
                <h3 id="about-me-heading">About me</h3>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 d-flex align-items-center">
                        <img src={image} alt="me" className="my-image" />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <strong className="about-me-sub-heading">
                            Programmer by day, Gamer by Night!
                        </strong>
                        <p className="about-me-description">
                            I enjoy taking complex problems and finding a
                            solution. I love the logic and structure of coding
                            and always strive to write elegant and efficient
                            code. I love challenges and thus I enjoy solving
                            problems on websites like Codeforces.
                            <br />
                            <br />
                            I'm a MERN Stack Developer skilled in{" "}
                            <span className="html-word">HTML</span>,{" "}
                            <span className="css-word">CSS</span>,{" "}
                            <span className="javascript-word">JavaScript</span>,{" "}
                            <span className="java-word">Java</span> along with{" "}
                            <span className="react-word">React</span>,{" "}
                            <span className="node-word">Node.js</span> and{" "}
                            <span className="mongodb-word">mongoDB</span>.
                            <br />
                            <br />I don't know anything about Friends or The
                            Office, but I can talk hours and hours about The
                            Marvel Universe and The Witcher 3. Whenever I'm not
                            coding, you'll find me getting lost in the virtual
                            world of Video Games 🎮.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
