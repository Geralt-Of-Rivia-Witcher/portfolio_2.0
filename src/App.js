import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Background from "./components/background/Background";

const App = () => {
    return (
        <>
            <Background />

            <Navbar />
            <Intro />
            <Projects />
            <About />
            <Contact />
        </>
    );
};

export default App;
