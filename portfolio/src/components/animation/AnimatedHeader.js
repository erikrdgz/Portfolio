import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHeadline = ({ isDarkMode }) => {
  const words = ["Product Designer", "UX Designer", "React Developer", "Technologist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const wordVariant = {
    enter: { rotateX: "90deg", opacity: 0, scale: 1.02 },
    center: {
      rotateX: "0deg",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      rotateX: "-90deg",
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.h1
      className={`${isDarkMode ? "text-white" : "text-black"} text-4xl md:text-6xl lg:text-7xl font-bold`}
      style={{
        perspective: "1000px",
        height: "1.5em",
        overflow: "hidden",
        willChange: "transform, opacity",
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            variants={wordVariant}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              display: "block",
              transformOrigin: "left bottom",
              position: "absolute",
              width: "100%",
              backfaceVisibility: "hidden",
            }}
          >
            {words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  marginRight: letter === " " ? "0.5em" : 0,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.h1>
  );
};

export default AnimatedHeadline;
