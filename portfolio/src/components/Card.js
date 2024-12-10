import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Custom hook for dark mode
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const Card = ({ title, desc, role, tags, bgColor, image, SvgImage }) => {
    const { isDarkMode } = useDarkMode(); // Get dark mode state

    return (
        <div className="relative cursor-pointer group">
            {/* Card Container */}
            <div
                className={`relative ${bgColor} flex flex-col w-full aspect-square transform transition-transform duration-300 group-hover:scale-95 card-container`}
            >
                {/* Hover Box */}
                <div
                    className={`${isDarkMode ? "bg-white text-black":"bg-black text-white"} absolute top-0 right-0 w-16 h-16  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50`}
                >
                    
                    <HiArrowUpRight fontSize={24}/>
                </div>

                {/* SVG Image on top */}
                {SvgImage && (
                    <motion.div
                        className="w-full h-full flex items-center justify-center relative z-10"
                    >
                        <SvgImage />
                    </motion.div>
                )}

                {/* Card details underneath */}
                <div className="p-4 flex flex-col relative z-10">
                    {/* Title */}
                    <p
                        className={`${isDarkMode ? "text-white" : "text-black"
                            } text-2xl md:text-5xl font-bold mb-4`}
                    >
                        {title}
                    </p>

                    {/* Problem */}
                    {desc && (
                        <div className="grid grid-cols-12 mb-2">
                            <p
                                className={`${isDarkMode ? "text-white" : "text-black"
                                    } text-sm col-span-8`}
                            >
                                <strong>Problem:</strong> {desc}
                            </p>
                        </div>
                    )}

                    {/* Role */}
                    {role && (
                        <div className="grid grid-cols-12 my-2">
                            <p
                                className={`${isDarkMode ? "text-white" : "text-black"
                                    } text-sm col-span-8`}
                            >
                                <strong>Role:</strong> {role}
                            </p>
                        </div>
                    )}

                    {/* Tags */}
                    {tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`${isDarkMode ? "text-white" : "text-black"
                                        } py-2 text-xs rounded-full`}
                                >
                                    {tag + " " + "+" + " "}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
