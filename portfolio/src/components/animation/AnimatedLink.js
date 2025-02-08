import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const AnimatedLink = ({ route, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={route}
      className="relative flex items-center py-2 transition-colors duration-200 hover:text-orange-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} 
    >
      {title}
      <span
        className={`ml-1 text-orange-500 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"
        }`}
      >
        <FiArrowRight />
      </span>
    </Link>
  );
};

export default AnimatedLink;
