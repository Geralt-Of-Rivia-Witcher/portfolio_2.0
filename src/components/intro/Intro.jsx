import React from "react";

import "./intro.styles.css";

const Intro = () => {
  return (
    <section id="intro">
      <div id="intro-div" className="container-wide">
        <p className="intro-chip">Siddhant Kumar Singh · Backend Engineer</p>
        <h1 className="heading">
          I build resilient backend systems that stay fast under real-world
          load.
        </h1>
        <p className="sub-heading">
          I optimize services, improve performance, and ship reliable backend
          products with measurable impact.
        </p>
        <div className="cta-row">
          <a href="#projects" className="cta">
            Projects
          </a>
          <a href="#contact" className="cta ghost">
            Let&apos;s Work Together
          </a>
        </div>
        <div className="intro-metrics glass-card">
          <div>
            <span className="metric-value">2+ Years</span>
            <span className="metric-label">Backend Engineering</span>
          </div>
          <div>
            <span className="metric-value">5+</span>
            <span className="metric-label">Production Services</span>
          </div>
          <div>
            <span className="metric-value">Ownership</span>
            <span className="metric-label">Execution Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
