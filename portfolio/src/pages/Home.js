import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import Card from "../components/Card";
import heroImage from "../assets/images/erikr-bg-green.png";
import transition from "../transitions";
import Banner from "../components/Banner";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import AnimatedHeader from "../components/animation/AnimatedHeader";

import { FaBootstrap, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { RxSketchLogo } from "react-icons/rx";
import { PiFramerLogo } from "react-icons/pi";

import { LiaAdobe, LiaHtml5 } from "react-icons/lia";

import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TiCss3 } from "react-icons/ti";




const Home = () => {
    const { isDarkMode } = useDarkMode();

    const backgroundColor = (card) => {
        switch (card) {
            case "Koopid":
                return isDarkMode ? "bg-red-700" : "bg-red-300";
            case "Dialpad":
                return isDarkMode ? "bg-green-700" : "bg-green-300";
            case "NSLS":
                return isDarkMode ? "bg-blue-700" : "bg-blue-300";
            default:
                return isDarkMode ? "bg-gray-800" : "bg-gray-100";
        }
    };

    const heroControls = useAnimation();
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { threshold: 0.5 });

    useEffect(() => {
        if (isHeroInView) {
            heroControls.start("visible");
        } else {
            heroControls.start("hidden");
        }
    }, [isHeroInView, heroControls]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.3,
            },
        }),
    };

    const heroVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: -100, transition: { duration: 0.8 } },
    };

    const cardData = [
        {
            title: "Koopid",
            desc: "Clunky design and slow responsiveness in agent workflows.",
            role: "Product Designer - Led design system development.",
            tags: ["UX Design", "Web App", "Design System"],
        },
        {
            title: "Dialpad",
            desc: "Fragmented communication tools across platforms.",
            role: "Senior Product Designer - Created cross-platform design frameworks.",
            tags: ["SaaS", "Collaboration Tools", "UX Optimization"],
        },
        {
            title: "NSLS",
            desc: "Outdated member portal reducing engagement.",
            role: "Senior Product Designer - Spearheaded user research initiatives.",
            tags: ["EdTech", "User Portal", "UX Research"],
        },
    ];

    return (
        <div
            className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex flex-col px-2 transition-colors duration-500`}
        >
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="w-full min-h-[100vh] md:min-h-[60vh] lg:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 relative"
                initial="visible"
                animate={heroControls}
                variants={heroVariants}
            >
                <div className="flex items-center px-7 z-10 h-[70vh]">
                    <div>
                        <AnimatedHeader isDarkMode={isDarkMode} />

                        <motion.p
                            className={`${isDarkMode ? "text-white" : "text-black"} text-base md:text-2xl lg:text-3xl py-4 lg:py-10`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }} // Delay paragraph animation
                        >
                            Hi, I'm Erik a product designer, ux designer, react dev, and overall technologist that loves to make difficult things easier for users.
                        </motion.p>

                        {/* Delay the grid's animation and stagger the cell entrance */}
                        <motion.div
                            className="grid grid-cols-2 grid-rows-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }} // Wait for the paragraph to finish
                        >
                            {/* Cells with staggered animation */}
                            <motion.div
                                className="pl-0 p-2 h-18 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.4, // Delay first cell after the paragraph
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    <span className=" block">Design</span><br></br>
                                    <FaFigma size={18} className="inline mr-2" title="Figma" />
                                    <RxSketchLogo size={18} className="inline mr-2" title="Sketch" />
                                    <PiFramerLogo size={18} className="inline mr-2" title="Framer" />
                                    <DiPhotoshop size={18} className="inline mr-2" title="Photoshop" />
                                    <DiIllustrator size={18} className="inline mr-2" title="Illustrator" />
                                    <LiaAdobe size={18} className="inline mr-2" title="Adobe" />


                                </p>
                            </motion.div>
                            <motion.div
                                className="pl-0 p-2 h-18 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.7, // Delay second cell a bit after the first
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                <span className=" block">Development</span><br></br>
                                    <LiaHtml5 size={18} className="inline mr-2" title="HTML" />
                                    <TiCss3 size={18} className="inline mr-2" title="CSS" />
                                    <TbBrandBootstrap size={18} className="inline mr-2" title="Bootstrap" />
                                    <RiTailwindCssFill size={18} className="inline mr-2" title="Tailwind" />
                                    <IoLogoJavascript size={18} className="inline mr-2" title="JavaScript" />
                                    <FaReact size={18} className="inline mr-2" title="React" />
                                </p>
                            </motion.div>
                            <motion.div
                                className="pl-0 p-2 h-18 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 2, // Delay third cell further
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    Professional 7+ years<br></br>
                                    Denver, Co
                                </p>
                            </motion.div>
                            <motion.div
                                className="pl-0 p-2 h-18 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 2.3, // Delay fourth cell last
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    US Department of Labor<br></br>
                                    Certified Software Developer
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <div className="relative w-full h-full">
                        <motion.img
                            src={heroImage}
                            className="w-full h-full object-cover mask-image"
                            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            transition={{ duration: 1, ease: "easeIn", delay: 0.8 }}
                        />
                    </div>
                </div>
            </motion.section>



            {/* Cards Section */}
            <div className="w-full md:h-[40vh] lg:h-[80vh] flex items-center justify-center py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            custom={index}
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex items-center justify-center w-full"
                        >
                            <Link
                                to={`/${card.title.toLowerCase()}`}
                                className="block w-full h-full"
                            >
                                <Card
                                    title={card.title}
                                    desc={card.desc}
                                    role={card.role}
                                    tags={card.tags}
                                    bgColor={backgroundColor(card.title)}
                                    className="w-full h-full"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Banner />
        </div>
    );
};

export default transition(Home);
