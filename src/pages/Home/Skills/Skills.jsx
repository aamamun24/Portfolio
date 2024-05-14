import Container from '../../../components/Container';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';
import { technologies } from '../../../constants';
import { textVariant } from '../../../utils/motion';
import SkillCanvas from './SkillCanvas';

const Skills = () => {
    return (
        <section className="my-10" id='skills'>
            <Container>
                <motion.div variants={textVariant()}>
                    <SectionTitle title='Skills.' />
                </motion.div>

                <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
                    {technologies.map(technology => (
                        <div className="w-28 h-28" key={technology.name}>
                            <SkillCanvas icon={technology.icon} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
