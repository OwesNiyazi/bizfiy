import { useEffect } from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  })
};

const gradientVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const AgencyHero = () => {
  return (
    <div id='about' className="bg-[#01111f] min-h-screen flex items-center justify-start py-20 px-8 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          variants={gradientVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"
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

        <div className="space-y-8 relative">
          <div className="text-[2rem] md:text-[3.5rem] font-light text-white leading-tight">
            <motion.div 
              className="mb-6 overflow-hidden"
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <motion.div variants={textVariants} custom={0}>
                We're a{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-light">
                  full-service
                </span>{' '}
                AI Consulting &{' '}
                <motion.span
                  className="inline-block align-middle"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mb-6 overflow-hidden"
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <motion.div variants={textVariants} custom={1}>
                Developer Partner
              </motion.div>
            </motion.div>

            <motion.div 
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <motion.div variants={textVariants} custom={2}>
                We turn businesses into{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-light">
                  AI-driven
                </span>{' '}
                industry leaders{' '}
                <motion.span
                  className="inline-block align-middle"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1]
                  }}
                >
                  ✨
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
          >
            <motion.p 
              className="text-gray-400 text-lg md:text-xl font-light max-w-3xl relative"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Empowering businesses with cutting-edge AI solutions that drive innovation and growth
            </motion.p>
          </motion.div>

          {/* Tech Pattern Overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYwQTVGQSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgencyHero;
