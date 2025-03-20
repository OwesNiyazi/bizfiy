import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#01111f] text-white pt-[100px] pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Bizfy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Empowering businesses with innovative digital solutions and cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="p-8 rounded-2xl backdrop-blur-md bg-blue-500/5 border border-blue-500/10">
            <h2 className="text-2xl font-light mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              To revolutionize digital experiences through innovative solutions, empowering businesses to thrive in the digital age. We strive to deliver excellence in every project, ensuring our clients stay ahead in their competitive landscape.
            </p>
          </div>
          <div className="p-8 rounded-2xl backdrop-blur-md bg-purple-500/5 border border-purple-500/10">
            <h2 className="text-2xl font-light mb-4 text-purple-400">Our Vision</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              To be the leading force in digital transformation, setting new standards in web development and digital solutions. We envision a future where every business can harness the full potential of digital technology.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality in every project we undertake."
              },
              {
                title: "Integrity",
                description: "Building trust through transparency and honest communication with our clients."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-gray-800/50"
              >
                <h3 className="text-xl font-light mb-3 text-blue-400">{value.title}</h3>
                <p className="text-gray-400 font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Jane Smith",
                position: "Technical Director",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Mike Johnson",
                position: "Creative Director",
                image: "https://via.placeholder.com/150"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-gray-800/50"
              >
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-blue-500/30">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-light mb-2">{member.name}</h3>
                <p className="text-blue-400 font-light">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 