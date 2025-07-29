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

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger delay for child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className={`banner-container ${
        isDarkMode ? "" : ""
      } transition-colors duration-500`}
      style={{ padding: "20px 0" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      variants={containerVariants}
    >
      <motion.div
        className={`grid lg:grid-cols-6 grid-cols-2 gap-4 py-12 lg:py-20 items-center justify-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center py-6"
            style={{
              margin: "auto",
            }}
            variants={itemVariants} // Attach the item animation
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
