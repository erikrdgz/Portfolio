import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import CircleButton from "../buttons/CircleButton";
import GlassmorphicButton from "../buttons/GlassmorphicButton";
import { useDarkMode } from "../../DarkModeContext";
// import transition from "../../transitions";
import SplineViewer from "../SplineViewer";
import AnimatedNumber from "../animation/AnimatedNumber"; // Import the AnimatedNumber component
import { RiArrowDropDownLine } from "react-icons/ri";

const ExpandableCaseStudyCard = React.memo(({
    imageSrc,
    projectName,
    href,
    splineUrl,
    company,
    title,
    description,
    detailedDescription,
    chips = [],
    buttonLink,
    mobileImg,
    divColor,
    number1,
    paragraph1,
    number2,
    paragraph2,
    number3,
    paragraph3,
    isPercentage1 = false, // New prop to control if number1 is a percentage
    isPercentage2 = false, // New prop to control if number2 is a percentage
    isPercentage3 = false, // New prop to control if number3 is a percentage
}) => {
    const { isDarkMode } = useDarkMode();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <section
            className={`${isExpanded
                ? isDarkMode
                    ? "bg-neutral-900 rounded-lg "
                    : "shadow-md rounded-lg border border-cyan-400"
                : ""
                } transition-colors duration-500 md:my-8 relative overflow-hidden py-6 rounded-xl glass-card my-4`}
        >
            {/* Default (Collapsed) View */}
            <motion.div
                className="grid grid-cols-1  lg:grid-cols-2 py-4 pb-4 px-2 md:px-4 lg:px-9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Image Section */}
                <div className="flex justify-center items-center order-1 lg:order-2">
                    {/* Conditional Rendering for SplineViewer or Mobile Image */}
                    <div className="hidden lg:hidden">
                        <motion.img
                            src={mobileImg}
                            alt="Mobile View"
                            className="object-contain rounded-lg shadow-sm w-screen transition duration-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                    <div className={`${isDarkMode ? " " : " "} transition-colors duration-500 block lg:block w-full h-full   rounded-lg`}>
                        <SplineViewer splineUrl={splineUrl} divColor={divColor} href={href} projectName={projectName} />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex items-end justify-start order-2 lg:order-1">
                    <div className="pt-4 px-2 md:px-8">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                            className={`${isDarkMode ? "text-cyan-400" : "text-cyan-400"
                                } text-lg md:text-base lg:text-2xl mt-8 mb-4 md:mb-4 lg:mb-4 leading-loose transition-colors duration-500`}
                        >
                            {company}
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                            className={`${isDarkMode ? "text-white" : "text-black"
                                } text-2xl lg:text-4xl xl:text-5xl pb-4 lg:pb-9`}
                        >
                            {title}
                        </motion.h2>
                       
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                            className={`${isDarkMode ? "text-gray-300" : "text-gray-700"
                                } text-sm md:text-sm lg:text-xl xl:text-xl mb-8 md:mb-6 lg:mb-8 leading-loose transition-colors duration-500`}
                        >
                            {description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                            className="mb-6 flex flex-wrap gap-2"
                        >
                            {chips.map((chip, index) => (
                                <span
                                    key={index}
                                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"
                                        } pr-4 py-2 text-sm  lg:text-sm transition-colors duration-500`}
                                >
                                    {chip}
                                </span>
                            ))}
                        </motion.div>


                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                            className="flex gap-4"
                        >
                            <GlassmorphicButton
                                isDarkMode={isDarkMode}
                                onClick={toggleExpand}
                                className="mx-0"
                            >
                                {isExpanded ? (
                                    <span className={`${isDarkMode ? "text-cyan-300" : "text-cyan-400"}`}>
                                        Close{" "}
                                        <RiArrowDropDownLine className="inline text-3xl -rotate-180" />
                                    </span>
                                ) : (
                                    <span className={`${isDarkMode ? "text-cyan-400" : "text-cyan-400"}`}>
                                        At a glance{" "}
                                        <RiArrowDropDownLine className="inline text-3xl" />
                                    </span>
                                )}
                            </GlassmorphicButton>
                            <div className="flex items-center mx-auto justify-center">
                                <CircleButton href={buttonLink} />
                            </div>

                           
                        </motion.div>

                    </div>
                </div>
            </motion.div>

            {/* Expanded View (Show More Content) */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 600, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }} // Exit animation
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="py-8 lg:py-16 lg:px-9">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 lg:px-9 ">
                                <div className="text-center">
                                    <AnimatedNumber value={number1} isPercentage={isPercentage1} duration={0.5} />
                                    <p className="text-md xl:text-lg pt-4 font-light">{paragraph1}</p>
                                </div>
                                <div className="text-center">
                                    <AnimatedNumber value={number2} isPercentage={isPercentage2} duration={0.5} />
                                    <p className="text-md xl:text-lg pt-4 font-light">{paragraph2}</p>
                                </div>
                                <div className="text-center">
                                    <AnimatedNumber value={number3} isPercentage={isPercentage3} duration={0.5} />
                                    <p className="text-md xl:text-lg pt-4 font-light">{paragraph3}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
});

export default ExpandableCaseStudyCard;