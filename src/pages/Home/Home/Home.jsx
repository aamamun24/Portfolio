import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About/>
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;