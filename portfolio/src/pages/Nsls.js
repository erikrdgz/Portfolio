import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

const NSLS = () => {
  const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
  const location = useLocation();
  
  const bgColor = location.state?.bgColor || (isDarkMode ? "bg-blue-700" : "bg-blue-300");
  const textColor = isDarkMode ? "text-white" : "text-black";

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>

    <motion.div

        className={`${bgColor} ${textColor} transition-colors duration-500 p-4 `}
    >
        <h2 className="text-4xl font-bold">Nsls Content</h2>
        <p>This is the content of the Nsls page. You can add detailed information here.</p>
    </motion.div>

    <div>
        {/* Section 1 */}
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-red-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 1</h2>
            </motion.div>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-red-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 2</h2>
            </motion.div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-blue-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 3</h2>
            </motion.div>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-blue-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 4</h2>
            </motion.div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex h-96"
        >
            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-green-500  flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 5</h2>
            </motion.div>
            <motion.div
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-green-900  flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 6</h2>
            </motion.div>
        </motion.section>

        {/* Section 4 */}
        <motion.section
            initial={{ rotate: -15 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-yellow-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 7</h2>
            </motion.div>
            <motion.div
                initial={{ rotate: 15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-yellow-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 8</h2>
            </motion.div>
        </motion.section>

        {/* Section 5 */}
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-purple-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 9</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-purple-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 10</h2>
            </motion.div>
        </motion.section>

        {/* Section 6 */}
        <motion.section
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-pink-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 11</h2>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2  bg-pink-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 12</h2>
            </motion.div>
        </motion.section>

        {/* Section 7 */}
        <motion.section
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className=" flex h-96"
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-teal-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 13</h2>
            </motion.div>
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-teal-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 14</h2>
            </motion.div>
        </motion.section>

        {/* Section 8 */}
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex h-96"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-purple-500 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 15</h2>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-1/2 bg-purple-900 flex items-center justify-center"
            >
                <h2 className="text-white text-2xl">Column 16</h2>
            </motion.div>
        </motion.section>
    </div>
    );




</>
  );
};

export default transition(NSLS);
