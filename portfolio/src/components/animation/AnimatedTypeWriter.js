import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";

const AnimatedTypeWriter = ({ text, animationDelay = 0.1 }) => {
  // Ensure useMemo is always called
  const characters = useMemo(() => (text ? Array.from(text) : []), [text]);
  const { isDarkMode } = useDarkMode();

  // Validate text after calling hooks
  if (!text) {
    console.warn("AnimatedTypeWriter requires a 'text' prop.");
    return null; // Avoid rendering if no text is passed
  }

  return (
    <section className="w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="container w-full px-6 sm:px-10 md:px-10 text-center">
        <motion.h2
          className={`text-lg sm:text-3xl md:text-4xl xl:text-5xl font-bold whitespace-normal ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 30, z: -100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                z: 0,
                transition: {
                  delay: index * animationDelay,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
};

export default AnimatedTypeWriter;
