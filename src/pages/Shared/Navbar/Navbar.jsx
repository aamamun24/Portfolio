import Container from "../../../components/Container";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const navLinks = <>
        <li><Link to="hero" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>About</Link></li>
        <li><Link to="skills" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>Skills</Link></li>
        <li><Link to="project" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>Project</Link></li>
        <li><Link to="education" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>Education</Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={500} className='text-lg pb-1 hover:border-b-2 border-[#FEA55F] cursor-pointer'>Contact</Link></li>
    </>

    return (
        <div className="fixed w-full bg-[#011221] bg-opacity-25">
            <Container>
                <div className="flex items-center justify-between">
                    <Link to='hero' spy={true} smooth={true} duration={500} className="text-[#FF6464] text-4xl font-bold cursor-pointer">Mamun</Link>

                    {/* medium screen */}
                    <ul className="hidden md:flex gap-6 text-white py-4">
                        {navLinks}
                    </ul>

                    {/* responsive for small devices */}
                    <div className="md:hidden">
                        <p onClick={toggleMenu} className="text-3xl text-white">Pmenu</p>
                        {isOpen && (
                            <ul className="absolute top-0 right-0 mt-12 bg-[#11071F] rounded-md p-4">
                                {navLinks}
                            </ul>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;