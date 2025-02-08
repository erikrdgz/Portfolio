import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CircleButton = ({ href }) => {
    return (
        <motion.div
            // Or use motion.button if you prefer
            whileHover={{ scale: 1.1, rotate: -45 }}
            whileTap={{ scale: 0.95 }}
            className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 focus:outline-none"
        >
            <Link to={href}>
                <MdOutlineArrowForward size={24} />
            </Link>
        </motion.div>
    );
};

export default CircleButton;
