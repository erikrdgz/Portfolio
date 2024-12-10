import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress = 100, color = "#008080", bgColor = "#e0e0e0" }) => {
  return (
    <div
      className="w-full h-1 rounded-sm overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        className="h-full rounded-sm"
        style={{ backgroundColor: color }}
        initial={{ width: "0%" }}
        whileHover={{ width: `${progress}%` }}
        animate={{ originX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ProgressBar;
