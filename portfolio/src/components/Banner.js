import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

import dialpadLogo from "../assets/images/logos/dialpad-ai-logo.png";
import nslsLogo from "../assets/images/logos/NSLS.png";
import mistyLogo from "../assets/images/logos/misty-robotics-logo.png";
import techtonicLogo from "../assets/images/logos/techtonic-logo.png";
import ifccLogo from "../assets/images/logos/ifcc-logo.png";
import koopidLogo from "../assets/images/logos/koopid-logo.png";

const Banner = () => {
  const { isDarkMode } = useDarkMode();

  const logos = [
    dialpadLogo,
    nslsLogo,
    mistyLogo,
    techtonicLogo,
    ifccLogo,
    koopidLogo,
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="banner-container transition-colors duration-500 py-4 lg:py-8 px-4 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className={`grid grid-cols-2 lg:grid-cols-3 gap-4 py-12 lg:py-20 items-center justify-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center h-40 md:h-64 p-4 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 shadow-md transition-all"
            variants={itemVariants}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                height: "60px",
                maxWidth: "100px",
                objectFit: "contain",
                filter: isDarkMode ? "none" : "invert(100%)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Banner;
