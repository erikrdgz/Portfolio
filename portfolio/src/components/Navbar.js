import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useDarkMode } from "../DarkModeContext"; // Use the custom hook for dark mode
import { CiCloudMoon } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";
import AnimatedLink from "./animation/AnimatedLink";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open state
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if it's a mobile screen
    const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the dark mode state and toggle function
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar

    // Listen for window resizing and update `isMobile` state accordingly
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 right-0 w-full z-[20] h-[64px] transition-colors duration-500
                ${isDarkMode ? "text-white" : "text-black"}
                ${hasScrolled ? (isDarkMode ? "glass-card--thick rounded-b-xl" : "glass-card--thick rounded-b-xl") : "bg-transparent"}`}
            >
                <div className="px-4 pt-2 flex justify-between items-center relative">
                    <Link to="/" className="text-3xl font-bold ml-2">
                        <LogoSvg
                            className={`${isMobile ? "h-5 w-5" : "h-8 w-8"} `}
                            style={{ fill: isDarkMode ? "white" : "black" }}
                        />
                    </Link>
                    <a href="/" className="absolute left-1/2 transform -translate-x-1/2 hidden md:block text-md hover:text-cyan-400">
                        Erik Rodriguez Portfolio
                    </a>
                    <div className="flex items-center space-x-4 ml-auto">
                        <motion.button
                            className={`${isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"
                                } p-2 rounded-md hover:shadow-lg transition-shadow duration-500`}
                            onClick={toggleDarkMode}
                            whileTap={{ scale: 0.6 }}
                        >
                            {isDarkMode ? <CiBrightnessDown size={isMobile ? 24 : 30} /> : <CiCloudMoon size={isMobile ? 24 : 30} />}
                        </motion.button>
                        <button
                            className={`${isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"
                                } p-2 rounded-md hover:shadow-lg transition-shadow duration-500`}
                            onClick={toggleSidebar}
                        >
                            <IoMdMenu size={isMobile ? 24 : 30} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <motion.div
                className={`fixed top-0 right-0 h-full z-[20] shadow-lg overflow-hidden ${isDarkMode ? "glass-card--thick text-white" : "glass-card--thick text-black"
                    }`}
                    initial={{ x: isMobile ? 0 : "100%", y: isMobile ? "-100%" : 0 }} 
                    animate={{ x: isMobile ? 0 : (isSidebarOpen ? 0 : "100%"), y: isMobile ? (isSidebarOpen ? 0 : "-100%") : 0 }} 
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{
                    width: isMobile ? "100vw" : "18vw",
                    top: isMobile ? "0" : "0", // Ensure correct positioning
                    right: isMobile ? "0" : "0", // Right side for desktop
                  }}
            >
                <button
                    className={`absolute top-4 right-4 text-3xl rounded-xl ${isDarkMode ? "hover:bg-neutral-800" : "bg-white"}`}
                    onClick={toggleSidebar}
                >
                    <VscClose />
                </button>
                <div className="flex flex-col text-left justify-between px-10 lg:px-14 h-full mt-12">
                    <motion.div
                        className="space-y-1 h-full flex flex-col "
                        initial="hidden"
                        animate={isSidebarOpen ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{
                            staggerChildren: 0.09,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                    >
                        {/* Case Study Links */}
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About" },
                            { path: "/koopid", label: "Koopid" },
                            { path: "/dialpad", label: "Dialpad" },
                            { path: "/nsls", label: "NSLS" },
                            { path: "/designs", label: "Designs" },
                        ].map(({ path, label }) => (
                            <motion.div
                                key={label}
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="py-1"
                            >
                                {/* <Link
                                    to={path}
                                    className={` text-xl  transition-all duration-300 hover:text-orange-500  ${isDarkMode ? "text-white" : "text-black"
                                        }`}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {label}
                                </Link> */}

                                <AnimatedLink onClick={() => setIsSidebarOpen(false)} route={path} title={label} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

        </>
    );
};

export default Navbar;
