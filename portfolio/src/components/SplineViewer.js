import React from "react";
import { motion } from "framer-motion";

const SplineViewer = ({ splineUrl, divColor }) => {
  return (
    <motion.div
      className="relative w-full aspect-w-1 xl:h-full h-[75vh] aspect-h-1 flex justify-center items-center px-4"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 1.4, ease: "easeInOut", delay: 0.6 }}
    >
      {/* Absolute colored div */}
      <div
        className="absolute bottom-0 right-7 w-40 h-16 z-10"
        style={{ backgroundColor: divColor }}
      ></div>

      {/* Spline iframe */}
      <iframe
        src={splineUrl}
        title="Spline Scene"
        className="object-contain w-full h-full rounded-xl z-0"
        frameBorder="0"
      />
    </motion.div>
  );
};

export default SplineViewer;
