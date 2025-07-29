import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import { CiCloudMoon, CiBrightnessDown } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";
import AnimatedLink from "./animation/AnimatedLink";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
          ${hasScrolled ? "glass-card--thick rounded-b-xl" : "bg-transparent"}`}
      >
        <div className="px-4 pt-2 flex justify-between items-center relative">
          <Link to="/" className="text-3xl font-bold ml-2">
            <LogoSvg
              className={`${isMobile ? "h-5 w-5" : "h-8 w-8"}`}
              style={{ fill: isDarkMode ? "white" : "black" }}
            />
          </Link>

          <a
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 hidden md:block text-md hover:text-cyan-400"
          >
            Erik Rodriguez Portfolio
          </a>

          <div className="flex items-center space-x-4 ml-auto">
            <motion.button
              className={`
                glass-button
                ${isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"} 
                hover:shadow-lg transition duration-500
                w-12 h-12 rounded-full flex items-center justify-center
              `}
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.6 }}
            >
              {isDarkMode ? (
                <CiBrightnessDown size={isMobile ? 24 : 30} />
              ) : (
                <CiCloudMoon size={isMobile ? 24 : 30} />
              )}
            </motion.button>

            <button
              className={`
                glass-button
                ${isDarkMode ? "hover:bg-neutral-800" : "hover:bg-white"} 
                hover:shadow-lg transition duration-500
                w-12 h-12 rounded-full flex items-center justify-center
              `}
              onClick={toggleSidebar}
            >
              <IoMdMenu size={isMobile ? 24 : 30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 right-0 h-full z-[20] shadow-lg overflow-hidden ${
          isDarkMode ? "glass-card--frosted-dark  text-white" : "glass-card--frosted text-black"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        style={{
          width: isMobile ? "100vw" : "18vw",
          top: 0,
          right: 0,
        }}
      >
        <button
          className={`
            glass-button
            absolute top-4 right-4
            text-3xl p-2
            rounded-full
            ${isDarkMode ? "hover:bg-neutral-800" : "bg-white"}
          `}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          onClick={toggleSidebar}
        >
          <VscClose />
        </button>

        <div className="flex flex-col text-left justify-between px-10 lg:px-14 h-full mt-12">
          <motion.div
            className="space-y-1 h-full flex flex-col"
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
