import { useState } from "react";
import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import { projects } from "../../../constants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="project" className="mt-16">
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title="Projects." />
                </motion.div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                            onDetailsClick={() => handleOpenModal(project)}
                        />
                    ))}
                </div>

                {/* Modal for Project Details */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={handleCloseModal}
                    />
                )}
            </Container>
        </section>
    );
};

export default Projects;