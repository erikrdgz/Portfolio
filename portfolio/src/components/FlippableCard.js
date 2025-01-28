import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const FlippableCard = ({ beforeImage, afterImage, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useDarkMode(); // Get dark mode state

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={`${isDarkMode ? "bg-neutral-950" : "shadow-md"}  p-4 rounded flex flex-col items-center justify-center w-full h-full mx-auto`}>
      
      {/* Card Container */}
      <div className="relative w-full aspect-square perspective">
        <AnimatePresence mode="wait">
          {isFlipped ? (
            <motion.div
              key="after"
              className="absolute inset-0 w-full h-full rounded-lg  overflow-hidden"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={afterImage}
                alt="Redesign"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key="before"
              className="absolute inset-0 w-full h-full rounded-lg  overflow-hidden"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={beforeImage}
                alt="Legacy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h3
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-xl font-semibold mb-5  text-center`}
      >
        {title}
      </h3>
      {/* Button */}
      <button
        onClick={handleFlip}
        className="mt-4 px-6 py-2 rounded-lg text-orange-500 text-sm sm:text-base font-medium hover:text-orange-400  focus:ring-transparent focus:outline-none transition-all duration-300"
      >
        {isFlipped ? "View Legacy" : "View Redesign"}
      </button>
    </div>
  );
};

export default FlippableCard;
