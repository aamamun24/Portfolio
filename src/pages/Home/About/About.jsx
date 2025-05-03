import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import EarthCanvas from "../Contact/EarthCanvas";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";

const About = () => {
    return (
        <section id="about" className="relative">
            <Container>
                <SectionTitle title={"About Me."} />

                <div className="mt-5 flex flex-col-reverse lg:flex-row items-center gap-10">
                    {/* Left Section: Text */}
                    <motion.div
                        variants={fadeIn("left", "spring", 0.5, 0.75)}
                        className="lg:w-1/2 text-secondary text-lg leading-relaxed"
                    >
                        <p>
                            Hi, I'm <span className="text-white font-bold">Abdullah Al Mamun</span>, a passionate developer with a love for creating
                            beautiful and functional web applications. I specialize in modern web technologies like Next JS, Express, Mongoose, Node JS, Tailwind CSS. My goal is to deliver exceptional user experiences through clean and efficient code.
                        </p>
                        <p className="mt-4">
                            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my
                            knowledge with the developer community.
                        </p>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="lg:w-1/2 h-[400px]"
                    >
                        <EarthCanvas />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default About;