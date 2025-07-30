import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the hook to access dark mode state
import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";
import AnimatedLink from "./animation/AnimatedLink";


const Footer = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state from context

  return (
    <footer
      className={`${isDarkMode ? " text-white border-neutral-500" : " text-black"
        } border-t py-16 px-6 mt-auto transition-colors duration-500 w-full`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-6">
        {/* Left Section (Copyright & Contact) */}
        <div className="text-xs text-gray-500 text-left pb-4">
          <motion.div
            className="flex flex-col items-start space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            {/* Header */}
            <motion.div
              className="text-6xl lg:text-8xl text-cyan-400 font-bold relative mb-7"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              GET IN <br /> TOUCH{" "}
              <span className="absolute inline-block px-0">
                <HiMiniArrowUpRight />
              </span>
            </motion.div>

            {/* Contact Links */}
            <motion.div className="flex flex-col space-y-3 mt-4">
              {/* Email */}
              <motion.a
                href="mailto:erikrdgz2@gmail.com"
                className="group relative overflow-hidden flex items-center space-x-2 text-lg text-cyan-400 hover:text-white transition-all duration-300 font-bold rounded-md py-1 px-3"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                {/* Animated background */}
                <span
                  className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-cyan-400 z-0 pointer-events-none"
                  style={{ borderRadius: '0.375rem' }}
                  aria-hidden="true"
                />
                {/* Icon and text */}
                <span className="relative z-10 flex items-center space-x-2">
                  <CiMail className="text-xl" />
                  <span>Send Email</span>
                </span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/erikrdgz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center space-x-2 text-lg text-blue-700 hover:text-white transition-all duration-300 font-bold rounded-md py-1 px-3"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span
                  className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-blue-700 z-0 pointer-events-none"
                  style={{ borderRadius: '0.375rem' }}
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/erikrdgz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center space-x-2 text-lg text-purple-500 hover:text-white transition-all duration-300 font-bold rounded-md py-1 px-3"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span
                  className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-purple-500 z-0 pointer-events-none"
                  style={{ borderRadius: '0.375rem' }}
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* Right Section (Navigation Links Stacked) */}
        <nav className="flex flex-col justify-center text-md md:text-sm ">
          
            <h4 className="relative z-10 font-semibold text-xl mb-4">Navigate</h4>
          {/* Home & About (Stacked) */}
          <div className="flex flex-col space-y-2">
            
            <AnimatedLink route={"/"} title={"Home"} />
            <AnimatedLink route={"/about"} title={"About"} />
            
          </div>

          {/* Case Studies (Stacked) */}
          <div className="flex flex-col  mt-0">
            <p className="relative z-10 font-semibold text-md my-4 pl-4">Case Studies</p>
            <ul className="space-y-2 pl-6 ">
              <li>
              <AnimatedLink  route={"/koopid"} title={"Koopid"} />
              </li>
              <li>
              <AnimatedLink route={"/dialpad"} title={"Dialpad"} />
              </li>
              <li>
              <AnimatedLink route={"/nsls"} title={"NSLS"} />
              </li>
            </ul>
          </div>

          {/* Designs (Stacked) */}
          <div className="flex flex-col">
          <AnimatedLink route={"/designs"} title={"Designs"} />
          </div>
        </nav>
      </div>

      <div className="text-xs text-gray-500 w-full text-center mt-32">
        <p>&copy; 2025 Erik Rodriguez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
