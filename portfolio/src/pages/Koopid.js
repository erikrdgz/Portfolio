import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../transitions";
import { useDarkMode } from "../DarkModeContext";

const Koopid = () => {
  const { isDarkMode } = useDarkMode();
  const location = useLocation();
  
  const bgColor = location.state?.bgColor || (isDarkMode ? "bg-red-700" : "bg-red-300");
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.5 }}
      className={`${bgColor} ${textColor} transition-colors duration-500 p-4 `}
    >
      <h2 className="text-4xl font-bold">Koopid Content</h2>
      <p>This is the content of the Koopid page. You can add detailed information here.</p>
    </motion.div>
  );
};

export default transition(Koopid);
