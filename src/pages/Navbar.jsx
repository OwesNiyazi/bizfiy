import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    }
  }
};

const linkVariants = {
  hover: {
    scale: 1.05,
    color: "#60A5FA",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavLinks = [
    { name: "home", target: "hero" },
    { name: "process", target: "process" },
    { name: "services", target: "services" },
    { name: "projects", target: "projects" }
  ];

  const pageLinks = [];

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-[98%] mx-auto left-0 right-0 flex justify-between items-center px-8 py-2 h-[70px] backdrop-blur-md bg-[#01111f]/80 border-b border-gray-800/50 text-white z-50 rounded-[0_0_40px_40px] mt-2"
    >
      {/* Logo */}
      <div className="navbar-logo">
        <RouterLink to="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all cursor-pointer duration-300"
          >
            <img
              src="/white logo-02.png"
              alt="Logo"
              className="object-contain w-fit h-10"
            />
          </motion.span>
        </RouterLink>
      </div>

      {/* Menu Icon */}
      <motion.div 
        className="block lg:hidden cursor-pointer"
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mb-1.5"
        />
        <motion.div
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mb-1.5"
        />
        <motion.div
          animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </motion.div>

      {/* Navlinks */}
      <div
        className={`mx-20 absolute transform right-0 top-[70px] sm:backdrop-blur-md backdrop-blur-md bg-[#01111f]/90 lg:bg-transparent lg:static lg:flex lg:flex-row lg:gap-5 lg:items-center lg:py-0 py-4 px-6 flex-col text-center w-[80%] lg:w-auto transition-all duration-300 border-l border-b border-gray-800/50 lg:border-0 rounded-bl-[40px] ${
          isMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        {/* Main Navigation Links */}
        {isHome && mainNavLinks.map((item, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            variants={linkVariants}
          >
            <ScrollLink
              to={item.target}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              onClick={toggleMenu}
              className="text-white text-2xl lg:text-sm sm:px-2 py-1 transition-colors cursor-pointer font-light relative group"
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </ScrollLink>
          </motion.div>
        ))}

        {/* Page Links */}
        {pageLinks.map((item, index) => (
          <motion.div
            key={`page-${index}`}
            whileHover="hover"
            variants={linkVariants}
          >
            <RouterLink
              to={item.path}
              onClick={toggleMenu}
              className="text-white text-2xl lg:text-sm sm:px-2 py-1 transition-colors cursor-pointer font-light relative group"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </RouterLink>
          </motion.div>
        ))}
      </div>

      {/* Project Button */}
      <motion.div 
        className="hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {isHome ? (
          <ScrollLink 
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
          >
            <motion.button
              className="px-6 py-2 text-sm font-light text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Project with Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.button>
          </ScrollLink>
        ) : (
          <RouterLink to="/#contact">
            <motion.button
              className="px-6 py-2 text-sm font-light text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Project with Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.button>
          </RouterLink>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
