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
      className={`relative flex items-center px-4 py-2 rounded-md transition-colors duration-200 hover:text-cyan-400 ${ isDarkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-50"} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} 
    >
      {title}
      <span
        className={`ml-1 text-cyan-400 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"
        }`}
      >
        <FiArrowRight />
      </span>
    </Link>
  );
};

export default AnimatedLink;
