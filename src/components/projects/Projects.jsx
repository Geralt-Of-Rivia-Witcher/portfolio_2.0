import React from "react";
import Grid from "@mui/material/Grid";

import EachProject from "./EachProject";
import { project_list } from "../../const";
import "./projects.styles.css";

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-div">
        <div className="projects-header">
          <h3 id="projects-heading">Selected Work</h3>
          <p className="projects-sub">
            Backend-heavy products built for reliability, clarity, and speed.
          </p>
        </div>

        <Grid container spacing={3} className="project-grid">
          {project_list.map((each_project, index) => (
            <EachProject
              key={index}
              project_name={each_project.project_name}
              project_description={each_project.project_description}
              stack={each_project.stack}
              highlight={each_project.highlight}
              project_link_1={each_project.project_link_1}
              project_link_2={each_project.project_link_2}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
