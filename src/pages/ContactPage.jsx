import GoogleForm from "./ui/GoogleForm";
import { motion } from "framer-motion";

// import ProjectEstimatorForm from "./ProjectEstimatorForm";

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

const ContactPage = () => {
  return (
    <div
      id="contact"
      className="py-16 flex flex-col justify-center items-center bg-transparent text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <motion.div 
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16 w-full relative"
      >
        <motion.h2 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {Array.from("Get in Touch").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Connect with us to discuss your next AI project
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-0 w-full max-w-6xl p-4 relative">
        <motion.div 
          className="space-y-6 font-4xl w-2/3 pl-5 sm:pl-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="pb-4 border-b border-gray-500/30 backdrop-blur-sm bg-[#03223e]/30 p-4 rounded-lg">
            <p className="text-gray-400 font-light mb-2">Office</p>
            <p className="text-white font-light">204, C.S Naidu Arcade, Old Palasiya</p>
            <p className="text-white font-light">Indore, Madhya Pradesh</p>
            <p className="text-white font-light">India, 452001</p>
          </div>
          <div className="pb-4 border-b border-gray-500/30 backdrop-blur-sm bg-[#03223e]/30 p-4 rounded-lg">
            <p className="text-gray-400 font-light mb-2">Email</p>
            <a
              href="mailto:info@bizfy.in"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 transition-opacity"
            >
              info@bizfy.in <span>↗</span>
            </a>
          </div>
          <div className="pb-4 border-b border-gray-500/30 backdrop-blur-sm bg-[#03223e]/30 p-4 rounded-lg">
            <p className="text-gray-400 font-light mb-2">Phone</p>
            <a
              href="tel:+918878789891"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 transition-opacity"
            >
              +91 88787-89891 <span>↗</span>
            </a>
          </div>
        </motion.div>
        {/* <ProjectEstimatorForm /> */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <GoogleForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
