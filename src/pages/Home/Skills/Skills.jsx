import Container from '../../../components/Container';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiFirebase } from "react-icons/si";

const Skills = () => {
    const skillsList = [
        { name: 'HTML', icon: 'FaHtml5' },
        { name: 'CSS', icon: 'FaCss3Alt ' },
        { name: 'JavaScript', icon: 'IoLogoJavascript' },
        { name: 'Tailwind CSS', icon: 'BiLogoTailwindCss' },
        { name: 'React', icon: 'FaReact ' },
        { name: 'MongoDB', icon: 'DiMongodb' },
        { name: 'Express', icon: 'SiExpress' },
        { name: 'Node.js', icon: 'FaNodeJs' },
        { name: 'Firebase', icon: 'SiFirebase' },
        { name: 'Git', icon: 'FaGitAlt ' },
    ];

    return (
        <section className="bg-gray-100 py-10">
            <Container>
                <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skillsList.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-blue-200"
                        >
                            <i className={`${skill.icon} text-3xl mb-2`}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
