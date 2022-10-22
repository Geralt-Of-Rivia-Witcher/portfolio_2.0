import { useState } from "react";

import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
    const [loading, setLoading] = useState(true);
    const is_mobile = window.innerWidth <= 768;

    return (
        <>
            {!is_mobile && loading ? <Loading /> : null}

            <Navbar />
            <Intro setLoading={setLoading} />
            <Projects />
            <About />
            <Contact />
        </>
    );
};

export default App;
