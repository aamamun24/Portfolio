import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import { projects } from "../../../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="projects">
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title='Project.' />
                </motion.div>

                <div className="mt-10 flex flex-col sm:flex-row justify-evenly gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Projects;