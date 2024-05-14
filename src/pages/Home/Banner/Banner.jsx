import { TypeAnimation } from 'react-type-animation';
import Container from '../../../components/Container';
import Button from '../../../components/Button';

import myPhoto from '../../../assets/Mamun.png';
import resume from '../../../assets/Resume of Abdullah Al Mamun.pdf'

const Banner = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen" id='hero'>
            <Container>
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-center pt-20">
                    <div className='flex flex-row gap-5 flex-1'>
                        <div className='flex flex-col items-center mt-5'>
                            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                            <div className='w-1 h-40 sm:h-80 violet-gradient' />
                        </div>
                        <div className='mt-5'>
                            <h1 className='font-bold text-2xl md:text-5xl text-white'>Hi, I&apos;m <span className='text-[#915eff]'>Abdullah Al Mamun</span></h1>
                            <div className='my-4'>
                                <TypeAnimation
                                    sequence={[
                                        'Font-end developer.',
                                        1000,
                                        'Comfortable in backend.',
                                        1000,
                                    ]}
                                    speed={50}
                                    style={{ fontSize: '24px', color: 'white', fontWeight: 500 }}
                                    repeat={Infinity}
                                />
                            </div>
                            <a href={resume} download="Resume of Mamun.pdf">
                                <Button text='Download Resume' />
                            </a>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <img className='' src={myPhoto} alt="Photo of Mamun" />
                    </div>
                </div>
            </Container>

        </div>

    );
};

export default Banner;