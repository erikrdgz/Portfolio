import React from "react";

export default function GlassmorphicButton({ isDarkMode, className = "", children, ...props }) {
  const base =
    "transition-all duration-300 rounded-full relative  px-4 py-3 h-14 flex justify-center items-center w-40 md:w-60 font-semibold text-base md:text-lg focus:outline-none ";

  const light =
    "text-cyan-400 bg-white border-white shadow-md hover:shadow-sm hover:text-cyan-500 ";

  const dark =
    "text-cyan-300 bg-neutral-900 border-white/20 shadow-md hover:shadow-sm hover:bg-black hover:border-cyan-400";

  return (
    <button
      className={`${base} ${isDarkMode ? dark : light} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
