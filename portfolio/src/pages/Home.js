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

import { ReactComponent as KoopidSVG } from "../assets/images/koopid-case-img.svg";
import { ReactComponent as DialpadSVG } from "../assets/images/dialpad-case-img.svg";
import { ReactComponent as NslsSVG } from "../assets/images/nsls-case-img.svg";
import { LuGalleryHorizontal } from "react-icons/lu";

import { HiArrowUpRight } from "react-icons/hi2";
import Carousel from "../components/Carousel";

import ProjectLayout from "../components/Layout/ProjectLayout";




const Home = () => {
    const { isDarkMode } = useDarkMode();

    const backgroundColor = (card) => {
        switch (card) {
            case "Koopid":
                return isDarkMode ? "bg-black" : "bg-white";
            case "Dialpad":
                return isDarkMode ? "bg-black" : "bg-white";
            case "NSLS":
                return isDarkMode ? "bg-black" : "bg-white";
            default:
                return isDarkMode ? "bg-black" : "bg-white";
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
            tags: ["UX Design", "UI Design", "Web Design" ,"Design System", "Mobile Design", "User Research", "Usability Testing", "Creative Direction", "React Development", "App Architecture"],
            SvgImage: KoopidSVG,

        },
        {
            title: "Dialpad",
            desc: "Fragmented communication tools across platforms.",
            role: "Senior Product Designer - Created cross-platform design frameworks.",
            tags: ["SaaS", "Collaboration Tools", "UX Optimization"],
            SvgImage: DialpadSVG,
        },
        {
            title: "NSLS",
            desc: "Outdated member portal reducing engagement.",
            role: "Senior Product Designer - Spearheaded user research initiatives.",
            tags: ["EdTech", "User Portal", "UX Research"],
            SvgImage: NslsSVG,
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
                <div className="flex items-center md:px-7 z-10 md:h-[70vh]">
                    <div className="">
                        <AnimatedHeader isDarkMode={isDarkMode} />

                        <motion.p
                            className={`${isDarkMode ? "text-white" : "text-black"} text-md md:text-2xl lg:text-3xl py-4 lg:py-10`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }} // Delay paragraph animation
                        >
                            Hi, I'm Erik a product designer, ux designer, react dev, and overall technologist that loves to make difficult things easier for users.
                        </motion.p>

                        {/* Delay the grid's animation and stagger the cell entrance */}
                        <motion.div
                            className="grid grid-cols-2 grid-rows-1 gap-1 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }} // Wait for the paragraph to finish
                        >
                            {/* Cells with staggered animation */}
                            <motion.div
                                className="pl-0 p-2  "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.4, // Delay first cell after the paragraph
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    <span className=" block font-semibold">Design</span><br></br>
                                    <FaFigma size={18} className="inline mr-2" title="Figma" />
                                    <RxSketchLogo size={18} className="inline mr-2" title="Sketch" />
                                    <PiFramerLogo size={18} className="inline mr-2" title="Framer" />
                                    <DiPhotoshop size={18} className="inline mr-2" title="Photoshop" />
                                    <DiIllustrator size={18} className="inline mr-2" title="Illustrator" />
                                    <LiaAdobe size={18} className="inline mr-2" title="Adobe" />


                                </p>
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    Professional 7+ years<br></br>
                                    Denver, Co
                                </p>
                            </motion.div>
                            <motion.div
                                className="pl-0 p-2  "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.6, // Delay second cell a bit after the first
                                    duration: 0.5,
                                }}
                            >
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    <span className=" block font-semibold">Development</span><br></br>
                                    <LiaHtml5 size={18} className="inline mr-2" title="HTML" />
                                    <TiCss3 size={18} className="inline mr-2" title="CSS" />
                                    <TbBrandBootstrap size={18} className="inline mr-2" title="Bootstrap" />
                                    <RiTailwindCssFill size={18} className="inline mr-2" title="Tailwind" />
                                    <IoLogoJavascript size={18} className="inline mr-2" title="JavaScript" />
                                    <FaReact size={18} className="inline mr-2" title="React" />
                                </p>
                                <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm py-2`}>
                                    DOL<br></br>
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
                            className="w-full h-full object-cover"
                            initial={{
                                opacity: 0, // Start fully hidden
                                clipPath: "inset(0% 100% 0% 0%)", // Clip animation start
                            }}
                            animate={{
                                opacity: 1, // Fully visible
                                clipPath: "inset(0% 0% 0% 0%)", // Clip animation end
                            }}
                            transition={{
                                duration: 1, // Length of animation
                                ease: "easeInOut", // Smooth easing
                                delay: 0.8, // Wait before animation starts
                            }}
                            style={{
                                willChange: "clip-path, opacity", // Optimize performance
                            }}
                        />
                    </div>
                </div>

            </motion.section>

            <motion.section
                className="w-full pt-40 pb-28"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
                }}
            >
                <div className="container w-full px-6">
                    <motion.h2
                        className={` text-lg md:text-3xl text-center  ${isDarkMode ? "text-white" : "text-black"}`}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
                        }}
                    >
                        Here are some projects that reflect my diverse expertise in product design and collaboration with engineering, project managers, and users.
                    </motion.h2>
                </div>
            </motion.section>

            {/* Cards Section */}
            {/* <div className="w-full  flex items-center justify-center py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            custom={index}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center w-full "
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
                                    SvgImage={card.SvgImage}
                                    bgColor={backgroundColor(card.title)}
                                    className="w-full h-full"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div> */}





            <ProjectLayout

                title="Koopid"
                position="UX Designer &amp; Developer"
                year="2020-2021"
                summary="As UX Designer and Developer, I spearheaded the redesign of Koopid’s core products—Chatbot, Agent Desktop, and Portal—focusing on creating a cohesive and user-centric product line. By aligning with cross-functional teams and leveraging user research, we enhanced the overall user experience and improved agent workflows, laying the groundwork for Koopid’s aquirement."
                link="/Koopid"
                image={<KoopidSVG />}
                skills={["UX Design", "UI Design", "Web Design" ,"Design System", "Mobile Design", "User Research", "Usability Testing", "Creative Direction", "React Development", "App Architecture"]}
            />

            <ProjectLayout
                title="Dialpad"
                position="Product Designer"
                year="2021-2022"
                summary="As a Product Designer, I led the integration of Koopid’s core products into Dialpad, collaborating closely with the design system team to contribute valuable elements from Koopid’s design language. I oversaw the seamless merging of designs, ensuring consistency and alignment across products. This role also involved cross-team collaboration to refine and enhance both Dialpad and the newly integrated Koopid offerings, improving user experiences and product cohesion."
                link="/Dialpad"
                image={<DialpadSVG />}
                skills={["UX Design", "UI Design", "Design System", "Mobile Design", "User Research", "Usability Testing", "React Development", "App Architecture"]}
            />

            <ProjectLayout

                title="NSLS"
                position="Sr. Product Designer"
                year="2022-2023"
                summary="As a Senior Product Designer, I spearheaded the research and redesign of NSLS’s onboarding workflow. The challenge was to transform a cumbersome and tedious process into an efficient, user-friendly experience. Through comprehensive research and user feedback, I streamlined the onboarding process, creating a clear, concise flow that improved user engagement and reduced friction, ultimately enhancing the overall user experience."
                link="/Nsls"
                image={<NslsSVG />}
                skills={["UX Design", "UI Design", "Web Design" ,"Design System", "Mobile Design", "User Research", "Usability Testing"]}
            />


            <Banner />




        </div>
    );
};

export default transition(Home);
