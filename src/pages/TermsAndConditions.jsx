import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily access and use our website for personal, non-commercial purposes. This is the grant of a license, not a transfer of title. Under this license, you may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or services obtained from this website."
    },
    {
      title: "Service Description",
      content: "We provide web development, digital marketing, and related services. While we strive to ensure the highest quality of service, we do not warrant that the service will be uninterrupted, timely, secure, or error-free. We reserve the right to modify or discontinue any service without notice."
    },
    {
      title: "Intellectual Property",
      content: "All content, including but not limited to text, graphics, logos, images, and software, is the property of Bizfy and is protected by copyright and other intellectual property laws. Any unauthorized use may violate copyright, trademark, and other laws."
    },
    {
      title: "User Obligations",
      content: "You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      title: "Payment Terms",
      content: "For services requiring payment, you agree to provide accurate billing information and authorize us to charge the specified fees. All fees are non-refundable unless otherwise specified in writing. Prices for services are subject to change upon notice."
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
            Terms & Conditions
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
              Welcome to Bizfy. These Terms and Conditions govern your use of our website and services. Please read these terms carefully before using our services. By using our services, you agree to comply with and be bound by these terms.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-gray-800/50"
            >
              <h2 className="text-xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {term.title}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                {term.content}
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
          <h2 className="text-2xl font-light mb-4 text-blue-400">Questions About Our Terms?</h2>
          <p className="text-gray-400 font-light mb-4">
            If you have any questions about these Terms & Conditions, please contact us at:
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

export default TermsAndConditions; 