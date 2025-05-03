import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";

const Education = () => {
    return (
        <section id="education" className="relative py-12">
            <Container>
                <SectionTitle title={"Education."} />

                <div className="mt-10 flex flex-col gap-8">
                    {/* Education Item */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.5, 0.75)}
                        className="bg-black-100 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-white text-2xl font-semibold">
                            Bachelor of Arts (Honours) in English
                        </h3>
                        <p className="text-secondary text-lg mt-2">
                            Tongi Government College, National University of Bangladesh
                        </p>
                        <p className="text-secondary text-md mt-1">Graduated: 2022</p>
                        <p className="text-secondary text-md mt-4 leading-relaxed">
                            My education has equipped me with strong communication skills, critical thinking abilities, and a deep understanding of literature and language. These skills have been instrumental in shaping my approach to problem-solving and creativity in software development.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Education;