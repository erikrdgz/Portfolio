import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = ({ image }) => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Parallax moves max 20% of viewport height
  const y = useTransform(scrollY, [0, viewportHeight * 5], [0, -viewportHeight * 0.2]);

  return (
    <motion.div
      style={{
        y,
        backgroundImage: `url(${image})`,
        height: viewportHeight * 1.2,
      }}
      className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
    />
  );
};

export default ParallaxBackground;
