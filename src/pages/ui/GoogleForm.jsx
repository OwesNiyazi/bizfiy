import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
};

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

const SuccessAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#03223e]/90 p-8 rounded-2xl flex flex-col items-center gap-4 border border-gray-800/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Rocket Animation */}
        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: [-50, -100],
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeOut"
            }
          }}
        >
          <div className="text-4xl">🚀</div>
          {/* Rocket Trail */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0],
              transition: {
                duration: 2,
                ease: "easeOut"
              }
            }}
            style={{
              background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.5), transparent)"
            }}
          />
        </motion.div>

        {/* Success Checkmark */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { delay: 0.2 }
          }}
        >
          <motion.div
            className="w-8 h-4 border-r-4 border-b-4 border-green-500 -mt-1"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ 
              rotate: 45,
              opacity: 1,
              transition: { 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }
            }}
          />
        </motion.div>
        <motion.p
          className="text-white font-light text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: { delay: 0.6 }
          }}
        >
          Message Sent Successfully!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    Contact: "",
    Email: "",
    General: ""
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const formData = new FormData(form.current);
    const phone = formData.get("Contact");
    const email = formData.get("Email");
    const firstName = formData.get("FirstName");
    const lastName = formData.get("LastName");
    const message = formData.get("Message");

    let isValid = true;
    const newErrors = { Contact: "", Email: "", General: "" };

    if (!validatePhone(phone)) {
      newErrors.Contact = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!validateEmail(email)) {
      newErrors.Email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    try {
      setIsSubmitting(true);
      
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!SCRIPT_URL) {
        throw new Error('Google Apps Script URL is not configured');
      }

      // Create a URL object to handle query parameters
      const url = new URL(SCRIPT_URL);
      
      // Add a timestamp to prevent caching
      url.searchParams.append('timestamp', new Date().getTime());

      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          timestamp: new Date().toISOString()
        })
      });

      // With no-cors mode, we won't get a readable response
      // Instead, we'll consider a completed request as success
      if (response.type === 'opaque') {
        setShowSuccess(true);
        form.current.reset();
        setErrors({ Contact: "", Email: "", General: "" });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 2500);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      let errorMessage = "Failed to submit form. ";
      
      if (error.message.includes('Google Apps Script URL')) {
        errorMessage += "Configuration error. Please contact support.";
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage += "Network error. Please check your connection and try again.";
      } else if (error.message.includes('Invalid response format')) {
        errorMessage += "Server returned an invalid response. Please try again later.";
      } else {
        errorMessage += error.message || "Please try again later.";
      }
      
      setErrors(prev => ({
        ...prev,
        General: errorMessage
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSuccess && <SuccessAnimation />}
      </AnimatePresence>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 w-full max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div variants={inputVariants}>
            <input
              type="text"
              name="FirstName"
              placeholder="First Name"
              required
              className="w-full px-4 py-3 bg-[#03223e]/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              required
              className="w-full px-4 py-3 bg-[#03223e]/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
            />
          </motion.div>
        </div>

        <motion.div variants={inputVariants}>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 bg-[#03223e]/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
          />
          {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
        </motion.div>

        <motion.div variants={inputVariants}>
          <input
            type="tel"
            name="Contact"
            placeholder="Contact Number"
            required
            className="w-full px-4 py-3 bg-[#03223e]/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
          />
          {errors.Contact && <p className="text-red-500 text-sm mt-1">{errors.Contact}</p>}
        </motion.div>

        <motion.div variants={inputVariants}>
          <textarea
            name="Message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-3 bg-[#03223e]/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 resize-none"
          />
        </motion.div>

        {errors.General && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center"
          >
            {errors.General}
          </motion.p>
        )}

        <motion.div variants={inputVariants} className="flex justify-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`
              px-8 py-3 text-lg font-light rounded-full
              bg-gradient-to-r from-blue-500/20 to-purple-500/20
              border border-blue-500/30
              hover:border-purple-500/50
              text-white
              transition-all duration-300
              backdrop-blur-sm
              relative
              overflow-hidden
              group
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            variants={buttonVariants}
            whileHover={!isSubmitting ? "hover" : {}}
            whileTap={!isSubmitting ? "tap" : {}}
          >
            <motion.span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <motion.span
                    className="inline-block"
                    animate={{ 
                      x: [0, 5, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ✨
                  </motion.span>
                </>
              )}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.form>
    </>
  );
};

export default ContactForm;
