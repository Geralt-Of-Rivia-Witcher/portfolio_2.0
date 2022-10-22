import React from "react";
import { Waves } from "loading-animations-react";

import "./loading.styles.css";

const Loading = () => {
    return (
        <div className="loading-animation-div">
            <div className="loading-animation">
                <Waves waveColor="white" backgroundColor="#000" />
            </div>
        </div>
    );
};

export default Loading;
