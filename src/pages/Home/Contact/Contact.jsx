import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_qw2sfgg",
                "template_6m1ssrp",
                {
                    from_name: form.name,
                    to_name: "Abdullah Al Mamun",
                    from_email: form.email,
                    to_email: "bdmamun100@gmail.com",
                    message: form.message,
                },
                "XZ3VHVqFvMZ3Ku8CY"
            )
            .then(() => {
                setLoading(false);
                alert("Thank you for reaching out! I will get back to you as soon as possible.");
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <div id="contact" className="relative py-8">
            <Container>
                <SectionTitle title={"Contact."} />
                <div className="mt-8 flex flex-col lg:flex-row justify-between gap-10">
                    {/* Left Section: Contact Info */}
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className="lg:w-1/2 text-secondary"
                    >
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Let's Connect!
                        </h2>
                        <p className="text-lg mb-6">
                            Whether you're looking to collaborate, have a question, or just want to say hello, feel free to reach out. I'm always open to discussing new opportunities and ideas.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
                            <p className="text-secondary text-lg">bdmamun100@gmail.com</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
                            <p className="text-secondary text-lg">+8801794798000</p>
                        </div>

                        <div>
                            <h3 className="text-white text-xl font-semibold mb-2">Social Media</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/aamamun24/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary hover:text-white transition duration-300"
                                >
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                                <a
                                    href="https://facebook.com/aamamun24"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary hover:text-white transition duration-300"
                                >
                                    <i className="fab fa-facebook text-2xl"></i>
                                </a>
                                <a
                                    href="https://instagram.com/aamamun24"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary hover:text-white transition duration-300"
                                >
                                    <i className="fab fa-instagram text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section: Contact Form */}
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className="lg:w-1/2 bg-black-100 p-8 rounded-lg shadow-lg"
                    >

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-6"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2">Message</span>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none"
                                ></textarea>
                            </label>
                            <button
                                type="submit"
                                className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>

                        </form>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;