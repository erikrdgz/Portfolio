import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useDarkMode } from "../../DarkModeContext";

const AnimatedLink = ({ route, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useDarkMode();

  return (
    <Link
      to={route}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex items-center px-4 py-2 rounded-md
        transition-colors duration-300 ease-in-out
        ${isHovered ? "text-white" : ""}
      `}
      style={{ fontWeight: 'inherit', fontSize: 'inherit', color: isHovered ? 'white' : undefined }}
    >
      {/* Background sliding in */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-0
          bg-cyan-400
          rounded-md
          transition-all duration-300 ease-in-out
          pointer-events-none
          ${isHovered ? "w-28" : "w-0"}
        `}
        style={{ left: 0, top: 0, bottom: 0, position: "absolute", zIndex: 0 }}
      />

      {/* Text and arrow wrapper */}
      <span
        className="relative flex items-center space-x-1 z-10"
        style={{ fontWeight: 'inherit', fontSize: 'inherit' }}
      >
        <span>{title}</span>
        <span
          className={`
            text-white
            inline-block w-[1em] h-[1em]
            transition-all duration-300 ease-out
            ${isHovered ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"}
          `}
          style={{ visibility: "visible" }}
        >
          <FiArrowRight />
        </span>
      </span>
    </Link>
  );
};

export default AnimatedLink;
