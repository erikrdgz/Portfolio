import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

const Dialpad = () => {
  const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
  const location = useLocation();
  
  const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.5 }}
      className={`${bgColor} ${textColor} transition-colors duration-500 p-4 `}
    >
      <h2 className="text-4xl font-bold">Dialpad Content</h2>
      <p>This is the content of the Koopid page. You can add detailed information here.</p>
    </motion.div>
  );
};

export default transition(Dialpad);
