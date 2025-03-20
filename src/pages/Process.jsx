/* eslint-disable react/jsx-key */
import { MessageSquare } from 'lucide-react';
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
};

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's explore your needs together, combining your insights with fresh perspectives to uncover the best solutions.",
      content: (
        <div className="flex flex-col justify-center items-center gap-4 border border-gray-500/30 rounded-lg h-full backdrop-blur-sm bg-[#03223e]/30">
          <img src="/Our Process/5.jpg " alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
    {
      number: "02",
      title: "Analysis",
      description: "We'll develop a precise strategy that fits your resources and goals - practical plans backed by clear reasoning.",
      content: (
        <div className="h-full grid grid-cols-2 place-content-center sm:grid-cols-3 md:grid-cols-3 auto-rows-max gap-4 p-4 border border-gray-500/30 rounded-lg backdrop-blur-sm bg-[#03223e]/30">
          {[ <MessageSquare />, "🌐", "⚙️", "🚀", "📝", "💬"].map((icon, index) => (
            <div key={index} className="flex items-center justify-center bg-[#043254]/50 text-gray-400 p-4 rounded-md border border-gray-700/30 backdrop-blur-sm">
              {icon}
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "03",
      title: "Execution",
      description: "Time for action. We'll transform our carefully crafted plans into tangible results that drive meaningful change",
      content: (
        <div className="bg-[#03223e]/30 rounded-lg overflow-hidden border border-gray-500/30 backdrop-blur-sm">
          <img src="/Our Process/6.jpg " alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#01111f] text-white p-8 mt-12 sm:p-8 relative overflow-hidden">
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
        className="text-center mb-16 relative"
      >
        <motion.h2 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {Array.from("Our Process").map((letter, index) => (
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
          Our systematic approach to delivering innovative AI solutions
        </motion.p>
      </motion.div>

      <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 border border-gray-500/30 rounded-lg flex flex-col justify-end backdrop-blur-sm bg-[#03223e]/30 hover:bg-[#03223e]/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
          >
            <div className='h-full w-full'>{step.content}</div>
            <h2 className="text-2xl font-light mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {step.number}. {step.title}
            </h2>
            <p className="text-gray-400 mt-4 text-base font-light leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
