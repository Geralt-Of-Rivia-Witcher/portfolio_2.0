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
              Backend engineer • Open-source contributor
            </strong>
            <p className="about-me-description">
              I build reliable backend systems and APIs with a focus on
              performance, observability, and maintainability. With 2+ years of
              hands-on experience, I currently work on backend architecture at
              Refyne India—streamlining services, improving resilience, and
              shipping features that move the needle.
              <br />
              <br /> I prefer pragmatic solutions: small, well-tested components
              that scale. When I’m not debugging code or tuning queries, you’ll
              find me refining side projects, experimenting with tooling, or
              deep into a gaming campaign — optimizing strategies or teaming up
              with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
