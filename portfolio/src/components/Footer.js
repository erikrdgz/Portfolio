import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the hook to access dark mode state

const Footer = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state from context

  return (
    <footer
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } p-4 mt-auto transition-colors duration-500`}
    >
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } p-4 mt-auto transition-colors duration-500`}
      >
        <p>&copy; 2024 Erik Rodríguez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
