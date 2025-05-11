const ProjectCard = ({ project, onDetailsClick }) => {
    return (
        <div className="bg-black-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-4">{project.description}</p>
            </div>
            <button
                onClick={onDetailsClick}
                className="mt-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
                View Details
            </button>
        </div>
    );
};

export default ProjectCard;