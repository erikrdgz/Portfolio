import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const SplineViewer = ({ splineUrl, imageUrl, href, projectName }) => {
  const { isDarkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen width detection
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div className="relative w-full aspect-w-1 h-[50vh] md:h-[65vh] lg:h-full lg:h-[65vh] flex aspect-h-1 lg:flex justify-center items-center px-4  ">
      {/* Conditional Rendering for Mobile */}
      {isMobile ? (
        <div
          className={`absolute bottom-0 right-0 w-48 h-16 z-10 flex justify-center items-center rounded-br-lg rounded-tl-3xl  ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{projectName}</span>
        </div>
      ) : (
        // Original link for tablet and up
       <div
  className="absolute bottom-0 right-0 w-48 h-16 z-10 flex justify-center items-center rounded-full bg-cyan-400 transition-shadow duration-300 shadow-[0_4px_12px_rgba(34,211,238,0.5)] hover:shadow-[0_2px_6px_rgba(34,211,238,0.25)]"
>
  <a
    href={href}
    className="flex items-center gap-2 text-white transition-transform duration-300 z-40 w-full h-full font-bold justify-center"
  >
    Explore <HiMiniArrowUpRight className="stroke-[1]" />
  </a>
</div>

      )}

      {/* Spline Viewer for Larger Screens */}
      <iframe
        src={splineUrl}
        title="Spline Scene"
        className="object-contain w-full h-full rounded-xl z-0 block lg:block"
        frameBorder="0"
      />
    </motion.div>
  );
};

export default SplineViewer;
