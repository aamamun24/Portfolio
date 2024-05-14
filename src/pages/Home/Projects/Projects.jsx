import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import { projects } from "../../../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="project">
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title='Project.' />
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;