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
              With more than two years of experience as a backend engineer, I
              specialize in navigating the intricacies of digital systems to
              ensure seamless functionality. Currently, I'm engaged in refining
              backend architecture at Refyne India, where my focus lies in
              optimizing processes for efficiency and reliability. 🚀
              <br />
              <br />
              My approach to problem-solving is grounded in practicality, where
              I thrive on dissecting complex challenges and crafting effective
              solutions. Whether it's fine-tuning algorithms or optimizing
              database operations, I'm dedicated to delivering results that
              exceed expectations.
              <br />
              <br />
              Beyond my professional pursuits, I find relaxation and inspiration
              in the immersive worlds of video games. From epic quests to
              immersive narratives, I'm drawn to the endless possibilities and
              adventures that await within virtual realms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
