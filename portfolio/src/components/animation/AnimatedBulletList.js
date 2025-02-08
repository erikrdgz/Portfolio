import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";

const AnimatedBulletList = ({ heading, number, paragraph, items, endingParagraph }) => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={` ${isDarkMode ? "" : ""} w-full p-4 py-8 pt-8`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`${isDarkMode ? "text-white" : "text-black"} text-2xl md:text-4xl xl:text-4xl mb-4 md:py-4 md:mb-2 md:px-6`}
            >
                <span className="text-orange-500">{number}</span>{heading}
            </motion.h2>
            {paragraph && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`${isDarkMode ? "text-neutral-200" : "text-black"} text-md md:text-md xl:text-sm md:px-6 md:py-2`}
                >
                    {paragraph}
                </motion.p>
            )}
            {items && items.length > 0 && (
                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2, ease: "easeInOut", },
                        },
                    }}
                    className="space-y-4 md:p-6 py-4"
                >
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="flex items-center space-x-4"
                        >
                            {item.icon && (
                                <div className="flex-shrink-0 w-6 h-16 md:w-12 md:h-12 flex items-center justify-center">
                                    <item.icon className="text-md md:text-md text-orange-500" />
                                </div>
                            )}
                            <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-800"} flex-1 text-sm`}>
                                <span className={`${isDarkMode ? "text-white" : "text-black"} font-semibold `}>{item.header}:</span> <br/>{item.description}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
            {endingParagraph && (
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`${isDarkMode ? "text-white" : "text-black"} text-md md:text-lg xl:text-sm pt-4 md:px-6 md:py-2`}
                >
                    <p>{endingParagraph}</p>
                </motion.div>
            )}
            
        </div>
    );
};

export default AnimatedBulletList;
