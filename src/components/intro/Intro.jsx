import React from "react";
import Spline from "@splinetool/react-spline";

import "./intro.styles.css";

const Intro = (props) => {
    return (
        <section id="intro">
            <div id="intro-div">
                <h1 className="heading">
                    Hey!
                    <br /> I'm Siddhant
                </h1>
                <br />
                <p className="sub-heading">
                    A programmer and a <strong>MERN</strong> Stack Developer.
                </p>
                {window.innerWidth > 768 ? (
                    <div className="robot">
                        <Spline
                            scene="https://prod.spline.design/pISt2swXwZjPT8YZ/scene.splinecode"
                            lookAt={MouseEvent}
                            onLoad={() => {
                                props.setLoading(false);
                            }}
                        />
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Intro;
