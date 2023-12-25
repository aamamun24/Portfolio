import { Link } from 'react-scroll';
import myPhoto from '../../../../public/Mamun.png';
import Container from '../../../components/Container';
import SectionTitle from '../../../components/SectionTitle';
import { fadeIn, textVariant } from '../../../utils/motion';
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='' id="about">
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title='About Me.' />
                </motion.div>

                <div className='flex flex-col md:flex-row-reverse gap-6 justify-between items-center'>
                    <div className='flex-1'>
                        <motion.p
                            variants={fadeIn('', '', 0.1, 1)}
                            className='mt-4 text-secondary max-w-3xl leading-8'
                        >
                            Greetings! I'm a motivated MERN stack enthusiast dedicated to shaping the digital landscape. Fueled by a passion for creating dynamic and user-friendly web applications, I thrive on challenges and continuous learning. Let's collaborate and bring innovative ideas to life!
                        </motion.p>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                            <button className='bg-[#FF6464] py-2 px-4 text-lg text-white mt-5 font-medium rounded-full'>
                                Contact
                            </button>
                        </Link>
                    </div>

                    <div className='flex-1'>
                        <img className='' src={myPhoto} alt="Photo of Mamun" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;