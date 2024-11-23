import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useDarkMode } from "../DarkModeContext"; // Use the custom hook for dark mode
import { CiCloudMoon } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

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

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 right-0 w-full z-[20] h-[64px] transition-colors duration-500 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          {/* Portfolio link */}
          <Link to="/" className="text-3xl font-bold flex-grow">
            Portfolio
          </Link>

          {/* Container for hamburger and dark mode buttons (aligned to the right) */}
          <div className="flex items-center space-x-4 ml-auto">
           
            {/* Dark Mode Toggle Button */}
            <motion.button
              className="p-2 rounded-full"
              onClick={() => {
                setIsPressed(true); // Set press state to true on click
                toggleDarkMode(); // Toggle dark mode
                setTimeout(() => setIsPressed(false), 200); // Reset press state after a short delay
              }}
              whileTap={{ scale: 0.6 }} // Apply scale animation when pressed
            >
              {isDarkMode ? (
                <CiBrightnessDown size={30} />
              ) : (
                <CiCloudMoon size={30} />
              )}
            </motion.button>
             {/* Hamburger Icon for Sidebar (on all screen sizes) */}
             <button
              className="p-2 block z-[30]"
              onClick={toggleSidebar}
            >
              <CiMenuFries size={30} />
            </button>

          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 right-0 h-full z-[20] shadow-lg overflow-hidden ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
        initial={{ x: "100%" }} // Sidebar starts off-screen (translate X by 100% of its width)
        animate={{
          x: isSidebarOpen
            ? 0 // Sidebar is fully visible
            : isMobile
            ? "100%" // On mobile, translate it off the screen by 100vw
            : "25vw", // On desktop, translate it off the screen by 25vw
        }}
        exit={{
          x: "100%", // Ensure the sidebar exits off-screen (translate X by 100% of its width)
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        style={{
          width: isMobile ? "100vw" : "25vw", // Set the width based on mobile or desktop
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl z-[40]"
          onClick={toggleSidebar}
        >
          <VscClose />
        </button>

        <div className="flex flex-col items-center mt-12">
          {/* Links Wrapper with Staggered Animation */}
          <motion.div
            className="space-y-4 h-screen"
            initial="hidden"
            animate={isSidebarOpen ? "visible" : "hidden"} // Fade in when opened, fade out when closed
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{
              staggerChildren: 0.1, // Slow down the stagger to create a smoother effect
              duration: 0.5, // Increase the duration to make the fade-in smoother
              ease: "easeInOut", // Smooth out the transition with easing/ Total duration for the fade-in
            }}
          >
            {/* Links */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <Link to="/" className="py-2 px-4 text-xl">Home</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <Link to="/about" className="py-2 px-4 text-xl">About</Link>
            </motion.div>

            {/* Work Dropdown */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <div className="relative py-2 px-4 text-xl cursor-pointer" onClick={toggleDropdown}>
                Work
                {isDropdownOpen && (
                  <motion.div
                    className={`absolute left-0 top-12 w-full transition-all ${
                      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                    }`}
                    initial={{ height: 0 }}
                    animate={{
                      height: isDropdownOpen ? "auto" : 0, // Smoothly animate height to show/hide content
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <Link to="/koopid" className="py-2 px-4 block text-xl">Koopid</Link>
                    <Link to="/dialpad" className="py-2 px-4 block text-xl">Dialpad</Link>
                    <Link to="/nsls" className="py-2 px-4 block text-xl">NSLS</Link>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Adjusted Design Link to Be Pushed Down */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              animate={{ marginTop: isDropdownOpen ? "10rem" : "0" }} // Push down the design link when dropdown is open
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Link to="/designs" className="py-2 px-4 text-xl">Designs</Link>
            </motion.div>

            {/* "Let's Chat" Button */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <button className="mt-auto mb-4 py-2 px-4 text-xl bg-blue-500 text-white rounded-full">
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
