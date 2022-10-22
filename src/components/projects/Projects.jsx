import React from "react";
import Grid from "@mui/material/Grid";

import EachProject from "./EachProject";
import { project_list } from "../../const";
import "./projects.styles.css";

const Projects = () => {
    return (
        <section id="projects">
            <div id="projects-div">
                <h3 id="projects-heading">Projects</h3>
                <Grid container spacing={3}>
                    {project_list.map((each_project, index) => {
                        return (
                            <EachProject
                                key={index}
                                project_name={each_project.project_name}
                                project_description={
                                    each_project.project_description
                                }
                                project_link_1={each_project.project_link_1}
                                project_link_2={each_project.project_link_2}
                                class={each_project.class}
                            />
                        );
                    })}
                </Grid>
            </div>
        </section>
    );
};

export default Projects;
