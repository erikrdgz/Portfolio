import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./DarkModeContext"; // Assuming you have a DarkModeContext
import { ReactComponent as LogoSvg } from "./assets/images/logo.svg";

const transition = (OgComponent) => {
  return (props) => {
    const { isDarkMode } = useDarkMode(); // Access dark mode state
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(() => {
      const handleNavigation = () => setHasNavigated(true);

      if (!sessionStorage.getItem("hasVisited")) {
        sessionStorage.setItem("hasVisited", "true"); // Mark as visited
      } else {
        setHasNavigated(true); // Enable transitions after first load
      }

      window.addEventListener("popstate", handleNavigation);
      return () => window.removeEventListener("popstate", handleNavigation);
    }, []);

    // Set colors dynamically based on dark mode
    const backgroundColor = isDarkMode ? "#000" : "#fff";

    return (
      <>
        {/* The Main Content (OgComponent) */}
        <OgComponent {...props} />

        {/* Render transitions only after first navigation */}
        {hasNavigated && (
          <>
            {/* Slide-in Animation */}
            <motion.div
              key="slide-in"
              className="slide-in flex items-center justify-center z-[19]"
              style={{ backgroundColor }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="text-center">
                <LogoSvg
                  className="h-10 w-10 d-block"
                  style={{ fill: isDarkMode ? "white" : "black" }}
                />
                <br />
                <p className={`${isDarkMode ? "text-white" : "text-black"} d-block`}>Loading..</p>
              </div>
            </motion.div>

            {/* Slide-out Animation */}
            <motion.div
              key="slide-out"
              className="slide-out flex items-center justify-center z-[19]"
              style={{ backgroundColor }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center">
                <LogoSvg
                  className="h-10 w-10"
                  style={{ fill: isDarkMode ? "white" : "black" }}
                />
                <br />
                <p className={`${isDarkMode ? "text-white" : "text-black"} d-block`}>Loading..</p>
              </div>
            </motion.div>
          </>
        )}
      </>
    );
  };
};

export default transition;
