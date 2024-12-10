import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useDarkMode } from "../DarkModeContext"; // Use the custom hook for dark mode
import { CiCloudMoon } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if it's a mobile screen
    const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the dark mode state and toggle function
    const [isPressed, setIsPressed] = useState(false); // Track the press state of the dark mode button

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown

    // Listen for window resizing and update `isMobile` state accordingly
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 right-0 w-full z-[20] h-[64px] transition-colors duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
                    }`}
            >
                <div className="px-4 pt-2 flex justify-between items-center">
                    <Link to="/" className="text-3xl font-bold flex-grow">
                        ER
                    </Link>
                    <div className="flex items-center space-x-4 ml-auto">
                        <motion.button
                            className={`${isDarkMode ? "hover:bg-neutral-800 " : "hover:bg-white "} p-2 rounded-md hover:shadow-lg  transition-shadow duration-500`}
                            onClick={() => {
                                setIsPressed(true); // Set press state to true on click
                                toggleDarkMode(); // Toggle dark mode
                                setTimeout(() => setIsPressed(false), 200); // Reset press state after a short delay
                            }}
                            whileTap={{ scale: 0.6 }} // Apply scale animation when pressed
                        >
                            {isDarkMode ? <CiBrightnessDown size={30} /> : <CiCloudMoon size={30} />}
                        </motion.button>
                        <button
                            className={`${isDarkMode ? "hover:bg-neutral-800 " : "hover:bg-white "} p-2 rounded-md hover:shadow-lg  transition-shadow duration-500 block z-[20]`}
                            onClick={toggleSidebar}
                        >
                            <CiMenuFries size={30} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <motion.div
                className={`fixed top-0 right-0 h-full z-[20] shadow-lg overflow-hidden ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
                    }`}
                initial={{ x: "100%" }}
                animate={{
                    x: isSidebarOpen ? 0 : isMobile ? "100%" : "25vw",
                }}
                exit={{
                    x: "100%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                }}
                style={{
                    width: isMobile ? "100vw" : "25vw",
                }}
            >
                <button
                    className="absolute top-4 right-4 text-3xl z-[40]"
                    onClick={toggleSidebar}
                >
                    <VscClose />
                </button>

                <div className="flex flex-col text-center justify-between h-full mt-12">
                    {/* Links Wrapper with Staggered Animation */}
                    <motion.div
                        className="space-y-4 h-full flex flex-col justify-evenly"
                        initial="hidden"
                        animate={isSidebarOpen ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{
                            staggerChildren: 0.1,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Links */}
                        <motion.div
                            className="relative"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(true)}
                        >
                            <motion.div
                                className="inline-flex items-center w-full"
                                initial={{ x: 0 }}
                                animate={{ x: isHovered ? -5 : 0 }} // Adjusts the position of the text on hover
                                transition={{ type: "spring", stiffness: 150, damping: 20 }} // Adds spring animation
                            >
                                <Link to="/" className="py-6 text-2xl font-semibold w-full">
                                    Home
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <Link to="/about" className="py-6 text-2xl font-semibold">
                                About
                            </Link>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <Link to="/Koopid" className="py-6 text-2xl font-semibold">
                                Work
                            </Link>
                        </motion.div>

                        {/* Design Link */}
                        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <Link to="/designs" className="py-6 text-2xl font-semibold">
                                Designs
                            </Link>
                        </motion.div>

                        {/* "Let's Chat" Button */}
                        <motion.div
                            className={`${isDarkMode ? "bg-teal-200 text-black" : "bg-teal-500 text-white"}`}
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <button className="my-2 py-3 px-6 text-2xl   rounded-full">
                                Let's Chat
                            </button>
                        </motion.div>

                        {/*End  Links */}

                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
