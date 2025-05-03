import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import { projects } from "../../../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="project">
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title='Projects.' />
                </motion.div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;