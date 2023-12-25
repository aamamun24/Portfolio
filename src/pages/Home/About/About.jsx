import { Link } from 'react-scroll';
import myPhoto from '../../../../public/Mamun.png';
import Container from '../../../components/Container';

const About = () => {
    return (
        <div className='bg-[#607B96] py-20' id="about">
            <Container>
                <h2 className='text-5xl text-center text-white font-bold mb-6'>About <span className='text-[#FF6464]'>Me.</span></h2>
                <div className='flex flex-col md:flex-row-reverse gap-6 justify-between items-center'>
                    <div className='flex-1'>
                        <p className='text-lg text-white'>
                            Greetings! I'm a motivated MERN stack enthusiast dedicated to shaping the digital landscape. Fueled by a passion for creating dynamic and user-friendly web applications, I thrive on challenges and continuous learning. Let's collaborate and bring innovative ideas to life!
                        </p>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                            <button className='bg-[#FF6464] py-2 px-4 text-lg text-white mt-5 font-medium rounded-full'>
                                Contact
                            </button>
                        </Link>

                    </div>
                    <div className='flex-1'>
                        <img className='rounded-full bg-pink-500' src={myPhoto} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;