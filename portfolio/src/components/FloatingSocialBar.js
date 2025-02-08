import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const FloatingSocialBar = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "bg-neutral-950 " : "bg-white"} transition-colors duration-500 rounded-md fixed bottom-0 right-4 flex flex-row gap-2 z-40`}>
      {[
        { icon: <FaEnvelope />, link: "mailto:erikrdgz2@gmail.com", label: "Email" },
        { icon: <FaGithub />, link: "https://github.com/erikrdgz", label: "GitHub" },
        { icon: <FaLinkedin />, link: "https://linkedin.com/in/erikrdgz", label: "LinkedIn" }
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg p-2 rounded transition-all 
                      ${isDarkMode ? "text-white" : "text-blac"}
                      ${isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white hover:shadow-md"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingSocialBar;
