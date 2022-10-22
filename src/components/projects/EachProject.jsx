import React from "react";
import Grid from "@mui/material/Grid";

import "./projects.styles.css";

const EachProject = (props) => {
    return (
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className={props.class}>
                <h5 className="card-title">{props.project_name}</h5>
                <p className="card-text">
                    {props.project_description}
                    <br />
                    <br />
                    <a
                        href={props.project_link_1}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    {props.project_link_2 ? (
                        <a
                            href={props.project_link_2}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-chrome fa-3x chrome-icon"></i>
                        </a>
                    ) : null}
                </p>
            </div>
        </Grid>
    );
};

export default EachProject;
