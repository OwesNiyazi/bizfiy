import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const Footer = () => {
    return (
        <div className="flex flex-col min-h-[80vh] bg-[#01111f] text-white py-8 sticky z-[120]">
            {/* Header Section */}
            <motion.div 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16 px-8"
            >
                <motion.h2 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {Array.from("Let's talk Business").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h2>
                <motion.a
                    href="mailto:info@bizfy.in"
                    className="text-4xl relative inline-block text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    info<span className="text-blue-500">@</span>bizfy.in
                </motion.a>
            </motion.div>

            {/* Footer Section */}
            <footer className="mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 border-t border-gray-700 pt-8">
                    {/* Contact Info Column */}
                    <div className="flex flex-col gap-2">
                        <p className="text-blue-500">© 2024</p>
                        <motion.a 
                            href="mailto:info@bizfy.in" 
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            info@bizfy.in
                        </motion.a>
                        <motion.a 
                            href="tel:+918878789891" 
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            +91 88787-89891
                        </motion.a>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <ScrollLink 
                            to="services" 
                            smooth={true} 
                            duration={500} 
                            className="hover:text-[#0E62A6] cursor-pointer"
                        >
                            Services
                        </ScrollLink>
                        <ScrollLink 
                            to="process" 
                            smooth={true} 
                            duration={500} 
                            className="hover:text-[#0E62A6] cursor-pointer"
                        >
                            Process
                        </ScrollLink>
                        <ScrollLink 
                            to="projects" 
                            smooth={true} 
                            duration={500} 
                            className="hover:text-[#0E62A6] cursor-pointer"
                        >
                            Projects
                        </ScrollLink>
                        <a 
                            href="https://www.linkedin.com/company/bizfysolutions/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#0E62A6]"
                        >
                            Careers
                        </a>
                    </div>

                    {/* Credits Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <Link to="/about" className="hover:text-[#0E62A6]">About Us</Link>
                        <ScrollLink 
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            className="hover:text-[#0E62A6] cursor-pointer"
                        >
                            Contact Us
                        </ScrollLink>
                        <Link to="/privacy-policy" className="hover:text-[#0E62A6]">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-[#0E62A6]">Terms & Conditions</Link>
                    </div>

                    {/* Social Links Column */}
                    <div className="flex flex-col gap-2 border-t md:border-none pt-4 md:pt-0">
                        <a 
                            href="https://www.linkedin.com/company/bizfysolutions/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#0E62A6]"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="https://www.instagram.com/bizfysolutions" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#0E62A6]"
                        >
                            Instagram
                        </a>
                        <a 
                            href="https://www.facebook.com/bizfysolutions" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#0E62A6]"
                        >
                            Facebook
                        </a>
                        <a 
                            href="https://x.com/bizfysolutions?s=09" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#0E62A6]"
                        >
                            X
                        </a>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-[#01111f] to-transparent py-12">
                    <motion.div 
                        className="flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#01111f] via-transparent to-transparent" />
                                <img 
                                    src="/white logo-02.png" 
                                    alt="Brand-logo" 
                                    className="w-full opacity-80 transition-opacity duration-300 hover:opacity-100"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
