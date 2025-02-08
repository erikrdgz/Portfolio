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
      className={`${isDarkMode ? "bg-black text-white border-neutral-900" : "bg-white text-black"
        } border-t-2 py-16 px-6 mt-auto transition-colors duration-500 w-full`}
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
              className="text-6xl lg:text-8xl text-orange-500  font-bold relative mb-7"
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
                className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <CiMail className="text-xl" />
                <span>Email me: erikrdgz2@gmail.com</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/erikrdgz2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/erikrdgz2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* Right Section (Navigation Links Stacked) */}
        <nav className="flex flex-col text-md md:text-sm space-y-6">
          <p className={`${isDarkMode ? "border-b-2 border-neutral-800" : "border-neutral-200 border-b-2"} pb-4`}>Navigate</p>

          {/* Home & About (Stacked) */}
          <div className="flex flex-col space-y-2">
            
            <AnimatedLink route={"/"} title={"Home"} />
            <AnimatedLink route={"/about"} title={"About"} />
            
          </div>

          {/* Case Studies (Stacked) */}
          <div className="flex flex-col space-y-2 mt-0">
            <span className="font-semibold">Case Study</span>
            <ul className="space-y-2 pl-2 text-gray-400">
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
        <p>&copy; 2024 Erik Rodriguez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
