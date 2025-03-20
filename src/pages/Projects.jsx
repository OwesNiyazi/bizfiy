import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const projectData = [
  {
    title: "Education Platform",
    description: "AI-powered learning management system with personalized curriculum and real-time analytics.",
    image: "/Our Projects/Aschool.jpg",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive analytics and automated reporting.",
    image: "/Our Projects/b2b.jpg",
    link: "#"
  },
  {
    title: "Process Automation",
    description: "End-to-end workflow automation system with AI-driven decision making and optimization.",
    image: "/Our Projects/Sriver.jpg",
    link: "#"
  },
  {
    title: "Career Navigator",
    description: "AI career guidance platform with skill assessment and personalized development paths.",
    image: "/Our Projects/yukti.jpg",
    link: "#"
  },
  {
    title: "Legal Tech Solution",
    description: "Automated legal document processing and analysis system with compliance tracking.",
    image: "/Our Projects/EleagalShala.jpg",
    link: "#"
  },
  {
    title: "Startup Accelerator",
    description: "Integrated platform for startup management, resource allocation, and growth tracking.",
    image: "/Our Projects/Aspace.jpg",
    link: "#"
  },
  {
    title: "SkillPrep",
    description: "AI-powered employability assessment tool helping colleges evaluate and enhance student job readiness through personalized skill gap analysis.",
    image: "/Our Projects/8.jpg",
    link: "#"
  }
];

// Duplicate the projects for infinite scroll effect
const infiniteProjectData = [...projectData, ...projectData];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  // Create smooth scrolling animation
  const transform = useTransform(
    scrollXProgress,
    [0, 1],
    [0, -scrollWidth * 0.5]
  );

  const smoothTransform = useSpring(transform, {
    damping: 30,
    stiffness: 15,
    mass: 1.5
  });

  return (
    <div className="min-h-screen bg-[#01111f] text-white py-20 relative overflow-hidden">
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

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Explore our innovative solutions that drive digital transformation
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            ←
          </motion.div>
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ x: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            →
          </motion.div>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div 
          ref={containerRef}
          className="overflow-x-scroll scrollbar-hide relative"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <motion.div
            className="flex gap-8 px-8 min-w-max"
            style={{ x: smoothTransform }}
          >
            {infiniteProjectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative w-[400px] h-[300px] rounded-lg overflow-hidden border border-gray-800/30 backdrop-blur-sm bg-[#03223e]/30 flex-shrink-0"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01111f] via-[#01111f]/70 to-transparent opacity-90" />
                </div>

                <motion.div
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                  initial={false}
                  animate={{
                    y: hoveredIndex === index ? 0 : 60,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <motion.h3 
                    className="text-2xl font-light mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-4 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-light"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Futuristic Overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYwQTVGQSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// Add this to your CSS/Tailwind setup
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
