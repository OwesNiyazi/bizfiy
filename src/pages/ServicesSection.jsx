// import { AreaChart, Area, ResponsiveContainer } from "recharts";
// import { Bot, Frame, Database } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // const data = [
  //   { name: "Jan", value: 40 },
  //   { name: "Feb", value: 30 },
  //   { name: "Mar", value: 45 },
  //   { name: "Apr", value: 35 },
  //   { name: "May", value: 55 },
  //   { name: "Jun", value: 40 },
  //   { name: "Jul", value: 50 },
  // ];

  const services = [
    {
      title: "Custom Software Development",
      description:
        "Deliver custom software solutions, from web and mobile apps to enterprise-grade systems, ensuring exceptional performance, seamless integration, business alignment.",
      content: (
        <div className="border border-gray-500/30 rounded-lg backdrop-blur-sm bg-[#03223e]/30">
          <img src="/Our Services/Subscription Tier.jpg" alt="" className="rounded-lg"/>
        </div>
      ),
    },
    {
      title: "Gen AI Marketing & Content",
      description:
        "Create engaging, AI-powered content and marketing campaigns that resonate with your audience while maintaining brand authenticity.",
      content: (
        <div className="border border-gray-500/30 rounded-lg flex h-full justify-center items-center backdrop-blur-sm bg-[#03223e]/30">
          <img src="/Our Services/7.jpg" alt="" className="rounded-lg"/>
        </div>
      ),
    },
    {
      title: "Custom LLM Deployments",
      description:
        "Design and implement customized language models tailored to your specific business requirements and industry needs.",
      content: (
        <div className="h-full border border-gray-500/30 rounded-lg backdrop-blur-sm bg-[#03223e]/30">
          <img src="/Our Services/8.jpg" alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
    {
      title: "AI Consultation & Outsourcing",
      description:
        "Get expert guidance and dedicated resources to develop and execute your AI strategy from concept to implementation.",
      content: (
        <div className="relative h-full border border-gray-500/30 rounded-lg backdrop-blur-sm bg-[#03223e]/30">
          <img src="/Our Services/9.jpg" alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#01111f] h-full px-8 py-16 relative overflow-hidden">
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

      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Our Services
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Empowering businesses with cutting-edge AI solutions
        </p>
      </div>

      <div
        className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 relative"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-500/30 rounded-lg flex flex-col justify-end backdrop-blur-sm bg-[#03223e]/30 hover:bg-[#03223e]/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
          >
            {service.content}
            <h2 className="text-2xl font-light mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {service.title}
            </h2>
            <p className="text-gray-400 mt-4 text-base font-light leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
