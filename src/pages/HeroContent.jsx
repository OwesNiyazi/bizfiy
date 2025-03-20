import "@fontsource/roboto";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

const HeroContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full p-5 font-roboto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl mb-6 leading-[1.1] break-words px-2 md:text-7xl sm:text-2xl"
      >
        Unlock the <span className="italic font-pop">future</span> with{" "}
        <span className="italic font-pop">AI</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-normal mb-8 px-2 leading-relaxed md:text-xl md:font-light sm:text-sm hidden sm:block"
      >
        We are <span className="italic font-pop">Bizfy Solutions</span>, an
        engineering team that designs and{" "}
        <span className="italic font-pop">builds Custom AI </span>solutions and
        experiences.
      </motion.p>
      <motion.div 
        initial="initial"
        animate="animate"
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            to="services"
            smooth={true}
            duration={800}
            onClick={toggleMenu}
            className="inline-block px-8 py-3 text-lg font-light rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
          >
            <span className="relative z-10">Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            to="contact"
            smooth={true}
            duration={800}
            onClick={toggleMenu}
            className="inline-block px-8 py-3 text-lg font-light rounded-full border border-gray-800 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Contact us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
