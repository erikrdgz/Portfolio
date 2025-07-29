import React from "react";

export default function NeumorphicButton({ isDarkMode, className = "", children, ...props }) {
  const base =
    "transition-all duration-200 rounded-lg px-2 py-3 h-14 flex justify-center w-40 md:w-60 font-semibold text-base md:text-lg focus:outline-none";
  const light =
    "bg-[#f0f0f3] text-cyan-600 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]";
  const dark =
    "bg-[#18191c] text-cyan-300 shadow-[8px_8px_16px_#101114,-8px_-8px_16px_#23242a] hover:shadow-[inset_4px_4px_8px_#101114,inset_-4px_-4px_8px_#23242a]";

  return (
    <button
      className={`${base} ${isDarkMode ? dark : light} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 