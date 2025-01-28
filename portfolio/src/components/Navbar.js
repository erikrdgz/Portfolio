import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useDarkMode } from "../DarkModeContext"; // Use the custom hook for dark mode
import { CiCloudMoon } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";

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
                ${hasScrolled ? (isDarkMode ? "bg-black" : "bg-white") : "bg-transparent"}`}
            >
                <div className="px-4 pt-2 flex justify-between items-center relative">
                    <Link to="/" className="text-3xl font-bold ml-2">
                        <LogoSvg
                            className="h-10 w-10"
                            style={{ fill: isDarkMode ? "white" : "black" }}
                        />
                    </Link>
                    <p className="absolute left-1/2 transform -translate-x-1/2 hidden md:block text-md">
                        Erik Rodriguez Portfolio
                    </p>
                    <div className="flex items-center space-x-4 ml-auto">
                        <motion.button
                            className={`${
                                isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"
                            } p-2 rounded-md hover:shadow-lg transition-shadow duration-500`}
                            onClick={toggleDarkMode}
                            whileTap={{ scale: 0.6 }}
                        >
                            {isDarkMode ? <CiBrightnessDown size={30} /> : <CiCloudMoon size={30} />}
                        </motion.button>
                        <button
                            className={`${
                                isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"
                            } p-2 rounded-md hover:shadow-lg transition-shadow duration-500`}
                            onClick={toggleSidebar}
                        >
                            <IoMdMenu size={30} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <motion.div
                className={`fixed top-0 right-0 h-full z-[20] shadow-lg overflow-hidden ${
                    isDarkMode ? "bg-neutral-950 text-white" : "bg-white text-black"
                }`}
                initial={{ x: "100%" }}
                animate={{ x: isSidebarOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{ width: isMobile ? "100vw" : "25vw" }}
            >
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={toggleSidebar}
                >
                    <VscClose />
                </button>
                <div className="flex flex-col text-center justify-between h-full mt-12">
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
                        {/* Menu Links */}
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About" },
                            { path: "/Koopid", label: "Work" },
                            { path: "/designs", label: "Designs" },
                        ].map(({ path, label }) => (
                            <motion.div
                                key={label}
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            >
                                <Link
                                    to={path}
                                    className={`py-6 text-2xl font-semibold transition-all duration-300 ${
                                        isDarkMode
                                            ? "hover:[text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff]"
                                            : "hover:[text-shadow:0_0_2px_#e4e4e4,0_0_4px_#e4e4e4]"
                                    }`}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            className={`${
                                isDarkMode ? "text-orange-500" : "text-orange-500"
                            }`}
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        >
                            <button
                                className={`my-2 py-3 px-6 text-2xl rounded-full bg-transparent text-orange-500 transition-all duration-300`}
                            >
                                Let's Chat
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
