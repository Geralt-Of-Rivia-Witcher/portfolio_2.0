import React from "react";
import Grid from "@mui/material/Grid";

import "./projects.styles.css";

const EachProject = (props) => {
  const hasLive = !!props.project_link_2;
  return (
    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
      <article className="project-card glass-card">
        <div className="project-media" aria-hidden>
          {/* gradient / placeholder — can be replaced with image */}
        </div>
        <div className="project-body">
          <h4 className="project-title">{props.project_name}</h4>
          <p className="project-desc">{props.project_description}</p>

          <div className="project-meta">
            <div className="project-tags">
              <span className="tag">Open Source</span>
              {hasLive && <span className="tag">Live</span>}
            </div>

            <div className="project-actions">
              <a
                className="btn"
                href={props.project_link_1}
                target="_blank"
                rel="noreferrer"
                aria-label={`${props.project_name} GitHub`}
              >
                <i className="fab fa-github" />
                <span className="btn-text">Code</span>
              </a>

              {hasLive && (
                <a
                  className="btn ghost"
                  href={props.project_link_2}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${props.project_name} Live demo`}
                >
                  <i className="fas fa-external-link-alt" />
                  <span className="btn-text">Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Grid>
  );
};

export default EachProject;
