import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from "../DarkModeContext"; // Assuming you're using the custom DarkModeContext

const Banner = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state
  
  const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"]; // Now with 6 logos

  // Set colors dynamically based on dark mode
  const backgroundColor = isDarkMode ? "#000" : "#fff"; // Dark background for dark mode
  const textColor = isDarkMode ? "#fff" : "#000"; // White text for dark mode, black for light mode

  return (
    <div
      className="banner-container transition-colors duration-500"
      style={{
        overflow: "hidden",
        backgroundColor: backgroundColor, // Apply dynamic background color
        padding: "10px 0"
      }}
    >
      <motion.div
        className="banner  py-10"
        style={{
          display: "flex",  // Use flexbox for horizontal layout
          justifyContent: "space-evenly",  // Evenly space the logos
          whiteSpace: "nowrap",  // Prevent text from wrapping
        }}
        animate={{
          x: ["100%", "-100%"], // Scroll from right to left
        }}
        transition={{
          repeat: Infinity,  // Infinite loop
          repeatType: "loop", // Loop the animation
          duration: 24, // Speed of scroll
          ease: "linear", // Constant speed
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="banner-item"
            style={{
              fontSize: "1.5rem", 
              fontWeight: "bold", 
              color: textColor, // Apply dynamic text color
              padding: "0 10px",  // Add padding to create some space around each logo
            }}
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
