import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-black-100 p-6 rounded-lg shadow-lg w-full max-w-lg relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-white text-2xl absolute top-4 right-4 hover:text-red-500 transition"
                >
                    ✕
                </button>

                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />

                {/* Project Title */}
                <h3 className="text-white text-xl font-bold mb-4 text-center">
                    {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-secondary text-base mb-4 text-center">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    <h4 className="text-white text-lg font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition text-center"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-lg hover:opacity-90 transition text-center"
                    >
                        GitHub Repo
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;