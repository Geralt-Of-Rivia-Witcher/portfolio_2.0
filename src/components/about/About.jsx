import React from "react";

import image from "../../image/siddhant.png";
import "./about.styles.css";

const About = () => {
  return (
    <section id="about-me">
      <div className="about-me-div container-wide">
        <h3 id="about-me-heading">About Me</h3>
        <div className="about-layout">
          <div className="about-image-wrap glass-card">
            <img src={image} alt="Siddhant Kumar Singh" className="my-image" />
          </div>

          <div className="about-content glass-card">
            <strong className="about-me-sub-heading">
              Backend Engineer with a product-first mindset
            </strong>
            <p className="about-me-description">
              I build maintainable backend systems and internal tooling that
              help teams ship faster with fewer incidents. My work emphasizes
              reliability, observability, and simple architecture decisions that
              scale over time.
            </p>
            <p className="about-me-description">
              At Refyne India, I focus on service resilience and performance
              improvements while shipping features used by real customers. I
              enjoy collaborating across product and engineering to close the
              loop from idea to impact.
            </p>

            <div className="about-highlights">
              <span>Service Architecture</span>
              <span>Performance Tuning</span>
              <span>Distributed Systems</span>
              <span>Developer Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
