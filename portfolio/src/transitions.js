import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./DarkModeContext"; // Assuming you have a DarkModeContext
import { ReactComponent as LogoSvg } from "./assets/images/logo.svg"

const transition = (OgComponent) => {
  return (props) => {
    const { isDarkMode } = useDarkMode(); // Access dark mode state

    // Set colors dynamically based on dark mode
    const textColor = isDarkMode ? "#fff" : "#000"; // White text for dark mode, black for light mode
    const backgroundColor = isDarkMode ? "#000" : "#fff"; // Dark background for dark mode, white for light mode

    return (
      <>
        {/* The Main Content (OgComponent) */}
        <OgComponent {...props} />

        {/* Slide-in Animation with Text */}
        <motion.div
          key="slide-in"
          className="slide-in flex items-center justify-center z-[19]"
          style={{ backgroundColor: backgroundColor }} // Apply dynamic background color
          initial={{ scaleY: 0 }} // Initially hidden
          animate={{ scaleY: 0 }} // Stay hidden during transition
          exit={{ scaleY: 1 }} // Expand to full size on exit
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2  }}
        >
          <div className="text-center">
            <LogoSvg
              className="h-10 w-10 d-block"
              style={{ fill: isDarkMode ? 'white' : 'black' }} // Dynamically set fill color
            />
            <br/>
            <p className={`${isDarkMode ? "text-white" : "text-black"} d-block`}>Loading..</p>
          </div>
          
        </motion.div>

        {/* Slide-out Animation with Text */}
        <motion.div
          key="slide-out"
          className="slide-out flex items-center justify-center z-[19]"
          style={{ backgroundColor: backgroundColor }} // Apply dynamic background color
          initial={{ scaleY: 1 }} // Initially visible
          animate={{ scaleY: 0 }} // Shrink to hidden on transition
          exit={{ scaleY: 0 }} // Stay hidden after transition
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <LogoSvg
              className="h-10 w-10"
              style={{ fill: isDarkMode ? 'white' : 'black' }} // Dynamically set fill color
            />
            <br/>
            <p className={`${isDarkMode ? "text-white" : "text-black"} d-block`}>Loading..</p>
          </div>
        </motion.div>
      </>
    );
  };
};

export default transition;
