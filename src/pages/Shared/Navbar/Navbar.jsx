import { useState } from "react";
import { Link } from "react-scroll";

import logo from "../../../assets/logo.png";

import { MdClose, MdMenu } from "react-icons/md";
import Container from "../../../components/Container";

const Navbar = () => {
    const [active, setActive] = useState("hero");
    const [toggle, setToggle] = useState(true);

    const navLinks = (
        <>
            <li>
                <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "hero" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("hero")}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "about" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("about")}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "skills" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("skills")}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "project" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("project")}
                >
                    Project
                </Link>
            </li>
            <li>
                <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "education" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("education")}
                >
                    Education
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${active === "contact" ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer`}
                    onClick={() => setActive("contact")}
                >
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <nav className="z-20 py-5 top-0 bg-primary fixed w-full">
            <Container>
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
                        <p className="text-white text-lg font-bold cursor-pointer flex">
                            Mamun&nbsp;<span className="lg:block hidden">| Web Developer</span>
                        </p>
                    </Link>

                    {/* Medium screen */}
                    <ul className="list-none hidden sm:flex flex-row sm:gap-6 lg:gap-10">
                        {navLinks}
                    </ul>


                    {/* small screen */}
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <p
                            className='text-white text-2xl font-bold cursor-pointer'
                            onClick={() => { setToggle(!toggle) }}
                        >
                            {toggle ? <MdMenu /> : <MdClose />}
                        </p>
                        <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;