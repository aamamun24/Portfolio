import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import SectionTitle from "../../../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import EarthCanvas from "./EarthCanvas";

const Contact = () => {
    const formRef = useRef()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_qw2sfgg',
            'template_6m1ssrp',
            {
                'from_name': form.name,
                'to_name': 'Abdullah Al Mamun',
                'from_email': form.email,
                'to_email': 'bdmamun100@gmail.com',
                message: form.message
            },
            'XZ3VHVqFvMZ3Ku8CY'
        )
            .then(() => {
                setLoading(false)
                alert('Thanks for your message, I will get back as soon as possible')

                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
            }), error => {
                setLoading(false)
                console.log(error);
                alert('something went wrong')
            }
    }

    return (
        <div id="contact">
            <Container>
                <div className="lg:mt-12 flex flex-col-reverse lg:flex-row gap-10 overflow-hidden">
                    <motion.div
                        variants={slideIn('left', 'tween', 0.2, 1)}
                        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                    >
                        <SectionTitle title={'Contact.'} />

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-12 flex flex-col gap-8"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your email?"
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Message</span>
                                <textarea
                                    rows={7}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What do you want to say?"
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>

                    {/* <motion.div
                        variants={slideIn('right', 'tween', 0.2, 1)}
                        className="lg:flex-1 lg:h-auto md:h-[550px] h-96 "
                    >
                        <EarthCanvas />
                    </motion.div> */}
                </div>
            </Container>
        </div>
    );
};

export default Contact;