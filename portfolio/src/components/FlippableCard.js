import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const FlippableCard = ({ beforeImage, afterImage, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useDarkMode(); // Get dark mode state

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={`${isDarkMode ? "" : ""}  p-4 rounded flex flex-col items-center justify-center w-full h-full mx-auto`}>
      
      {/* Card Container */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isFlipped ? (
            <motion.div
              key="after"
              className="absolute inset-0 w-full h-full rounded-lg overflow-hidden flex items-center justify-center"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={afterImage}
                alt="Redesign"
                className="w-auto h-auto max-w-full max-h-full object-contain  rounded-lg"
              />
            </motion.div>
          ) : (
            <motion.div
              key="before"
              className="absolute inset-0 w-full h-full rounded-md overflow-hidden flex items-center justify-center"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={beforeImage}
                alt="Legacy"
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h3
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-xl font-semibold mb-5 text-center`}
      >
        {title}
      </h3>
      {/* Button */}
      <button
        onClick={handleFlip}
        className="mt-4 px-6 py-2 rounded-lg text-cyan-400 text-sm sm:text-base font-medium hover:text-cyan-300 focus:ring-transparent focus:outline-none transition-all duration-300"
      >
        {isFlipped ? "View Legacy" : "View Redesign"}
      </button>
    </div>
  );
};

export default FlippableCard;
