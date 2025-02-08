import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedTitle = () => {
  const [isLineWidthComplete, setIsLineWidthComplete] = useState(false);
  const [isLineHeightComplete, setIsLineHeightComplete] = useState(false);

//   // Trigger height animation after width animation completes
//   useEffect(() => {
//     if (isLineWidthComplete) {
//       setTimeout(() => {
//         setIsLineHeightComplete(true);
//       }, 900); // Delay height animation to ensure width animation completes first
//     }
//   }, [isLineWidthComplete]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      {/* Title Fade-in Animation */}
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Product
      </motion.h1>
      <motion.div className="relative">
        {/* Designer Title Fade-in Animation */}
        <motion.h1
          className="text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Designer
        </motion.h1>

        {/* First Animation: Line growing in width (from left to right) */}
        <motion.div
          className="absolute left-0 bottom-0 bg-orange-500 w-full"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isLineWidthComplete ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ height: "1px", zIndex: 1 }}
          whileInView={{
            scaleX: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          onAnimationComplete={() => setIsLineWidthComplete(true)} // Trigger next animation after width animation completes
        />

        {/* Second Animation: Line growing in height */}
        <motion.div
          className="absolute left-0 bottom-0 bg-orange-500 w-full"
          initial={{ height: "1px" }}
          animate={{ height: isLineHeightComplete ? "30px" : "1px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ zIndex: 1 }}
          whileInView={{
            height: isLineHeightComplete ? "30px" : "1px",
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedTitle;
