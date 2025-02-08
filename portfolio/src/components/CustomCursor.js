import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update the cursor position on mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor (Blue Ball) */}
      <motion.div
        className="cursor"
        style={{
          position: "relative",
          left: cursorPosition.x - 1, // Offset by half of the ball's width to center it
          top: cursorPosition.y - 1, // Offset by half of the ball's height to center it
          width: "20px", // Size of the ball
          height: "20px", // Size of the ball
          borderRadius: "50%", // Makes it a circle
          backgroundColor: "#1e91d6", // Blue color
          pointerEvents: "none", // Prevents it from blocking other elements
          zIndex: 9999,
        }}
        animate={{
          x: cursorPosition.x - 1,
          y: cursorPosition.y - 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
};

export default CustomCursor;
