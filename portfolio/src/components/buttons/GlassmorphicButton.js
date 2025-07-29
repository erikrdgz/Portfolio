import React from "react";

export default function GlassmorphicButton({ isDarkMode, className = "", children, ...props }) {
  const base =
    "transition-all duration-300 rounded-lg px-4 py-3 h-14 flex justify-center items-center w-40 md:w-60 font-semibold text-base md:text-lg focus:outline-none border border-white/30 backdrop-blur-0";

  const light =
    "text-cyan-400 bg-black/5 hover:text-cyan-500 hover:border-cyan-500 hover:bg-white/5 hover:backdrop-blur-md";
  const dark =
    "text-cyan-300 hover:text-cyan-300 hover:border-cyan-400 hover:bg-white/5 hover:backdrop-blur-md";

  return (
    <button
      className={`${base} ${isDarkMode ? dark : light} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
