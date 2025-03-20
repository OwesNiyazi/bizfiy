import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. We may also use your information to personalize your experience and provide customer support."
    },
    {
      title: "Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in providing our services, or when required by law."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your information."
    },
    {
      title: "Cookie Policy",
      content: "We use cookies and similar tracking technologies to improve your browsing experience on our website. You can control cookie settings through your browser preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-[#01111f] text-white pt-[100px] pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-gray-800/50">
            <p className="text-gray-400 font-light leading-relaxed">
              At Bizfy, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-gray-800/50"
            >
              <h2 className="text-xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {policy.title}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl backdrop-blur-md bg-blue-500/5 border border-blue-500/10 text-center"
        >
          <h2 className="text-2xl font-light mb-4 text-blue-400">Contact Us</h2>
          <p className="text-gray-400 font-light mb-4">
            If you have any questions about our Privacy Policy, please contact us at:
          </p>
          <motion.a
            href="mailto:info@bizfy.in"
            className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            info@bizfy.in
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 