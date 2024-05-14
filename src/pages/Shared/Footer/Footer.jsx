import Container from "../../../components/Container";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black py-6">
            <Container>
                <div className="flex gap-4 items-center justify-center">
                    <a href="https://www.facebook.com/aamamun.360"><FaFacebookF className="text-5xl text-white p-3 border border-gray-500 hover:border-white rounded-full"></FaFacebookF></a>
                    <a href="https://github.com/aamamun24"><FaGithub className="text-5xl text-white p-3 border border-gray-500 hover:border-white rounded-full"></FaGithub></a>
                    <a href="https://www.linkedin.com/in/aamamun24/"><FaLinkedin className="text-5xl text-white p-3 border border-gray-500 hover:border-white rounded-full"></FaLinkedin ></a>
                </div>
                <p className="text-gray-300 text-center mt-2"><span>&copy; {new Date().getFullYear()} Abdullah Al Mamun. All right reserved</span></p>
            </Container>
        </footer>
    );
};

export default Footer;