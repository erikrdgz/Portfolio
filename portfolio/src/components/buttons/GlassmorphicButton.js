import React from "react";

export default function GlassmorphicButton({ isDarkMode, className = "", children, ...props }) {
  const base =
    "transition-all duration-300 rounded-full relative  px-4 py-3 h-14 flex justify-center items-center w-40 md:w-60 font-semibold text-base md:text-lg focus:outline-none ";

  const light =
    "text-cyan-400 bg-white border-white border-2  bg-white/50 hover:bg-white/90 hover:text-cyan-500 ";

const dark =
  "text-cyan-300 border-[2px] border-white/30 shadow-md bg-white/10 hover:bg-white/20 hover:shadow-sm ";



  return (
    <button
      className={`${base} ${isDarkMode ? dark : light} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
