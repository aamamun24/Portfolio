import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { github } from "../../../assets"
import { fadeIn } from "../../../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-96 w-full'
            >
                <div className="relative w-full h-60">
                    <img src={image} alt={name} className="w-full rounded-2xl h-full object-cover" />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, '_blank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={github} alt={github} className="h-1/2 w-1/2" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="flex justify-between">
                        <h3 className="text-white text-2xl font-bold">{name}</h3>
                        <button
                            onClick={() => window.open(live_link, '_blank')}
                            className="violet-gradient text-white text-sm font-medium py-1 px-3 rounded-md"
                        >Visit</button>
                    </div>
                    <p className="text-secondary text-sm text-justify mt-2">{description}</p>
                </div>

                {/* TODO */}
                {/* <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <p key={tag.name} className={`${tag.color} text-sm`}>{tag.name}</p>
                    ))}
                </div> */}
            </Tilt>
        </motion.div>
    )
}

export default ProjectCard