import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"; // Ensure correct imports
import Banner from "../components/Banner";
import ExpandableCaseStudyCard from "../components/Layout/ExpandableCaseStudyCard";
import KoopidImage from "../assets/images/koopid-card.svg";
import KoopidImageLight from "../assets/images/Mobile-koopid-light.svg";
import dialpadImage from "../assets/images/dialpad-card.svg";
import dialpadImageLight from "../assets/images/Mobile-dialpad-light.svg";
import nslsImage from "../assets/images/nsls-card.svg";
import nslsImageLight from "../assets/images/Mobile-nsls-light.svg";
import HeroSection from "../components/section/HeroSection";
import SkillsSection from "../components/section/SkillsSection";
import AnimatedTypeWriter from "../components/animation/AnimatedTypeWriter";


const Home = () => {
    const { isDarkMode } = useDarkMode();
    const location = useLocation();
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

    const pageTransitionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <div
            className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex flex-col transition-colors duration-500`}
        >
            {/* Wrap the page content in AnimatePresence */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={location.pathname} // Ensure key is dynamic with the pathname
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={pageTransitionVariants}
                    className="w-full flex flex-col"
                >
                    {/* Hero Section */}
                    <HeroSection isDarkMode={isDarkMode} />
                    <SkillsSection isDarkMode={isDarkMode} />

                    {/* Latest Work Section */}
                    <section className="w-full flex items-center justify-center h-[30vh] md:h-[50vh] overflow-hidden">
                        <div className="container w-full px-6 sm:px-10 md:px-10 text-center">
                            <motion.h2
                                className={`text-4xl md:text-7xl xl:text-9xl ${isDarkMode ? "text-white" : "text-black"} whitespace-nowrap`}
                            >
                                {Array.from("LATEST WORK").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block font-bold"
                                        initial={{ opacity: 0, y: 30, z: -100 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            z: 0,
                                            transition: {
                                                delay: index * 0.1,
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20,
                                                duration: 0.04,
                                            },
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                        </div>
                    </section>
                    {/* <AnimatedTitle/> */}

                    {/* Case Study Cards */}
                    <section className="px-2 md:px-2 lg:px-9">
                    <ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={isDarkMode ? nslsImage: nslsImageLight}
                            divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                            company="NSLS"
                            href="/Nsls"
                            projectName="Mobile App"
                            splineUrl="https://my.spline.design/nslscopy-31a173977968de5bf31d3727eba973a1/"
                            title="Creating an exciting community feature for higher education"
                            description="Post-course peer engagement was nearly nonexistent students completed modules but skipped meaningful community interaction. We tackled this by designing a mobile app that made engagement feel natural, accessible, and social, turning passive posts into real peer connection."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Senior Product Designer', '8 Months', 'Higher Education Technology']}
                            buttonLink="/Nsls"
                            number1={75} // Animated number
                            paragraph1="Of users had transitioned to the mobile app"
                            isPercentage1={true} // Display as percentage
                            number2={41} // Animated number
                            paragraph2="Forum activity surge"
                            isPercentage2={true} // Display as regular number
                            number3={62} // Animated number
                            paragraph3="Course completion rates"
                            isPercentage3={true} // Display as regular number
                        />
                       

                        <ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={isDarkMode ? dialpadImage: dialpadImageLight}
                            divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                            company="Dialpad"
                             href="/Dialpad"
                             projectName="Design Unification"
                            splineUrl="https://my.spline.design/studiodisplaymockup-9508385c4955206e0e3bd5c0de3013f9/"
                            title="Unifying Experiences at Scale"
                            description="Tasked with integrating Koopid’s robust tools into Dialpad’s platform, I reimagined the UX and design system to transform multiple standalone products into a cohesive, scalable suite—bridging two ecosystems without compromising usability or speed."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Product Designer', '4 Months', 'A.I. & Video Conference Technology']}
                            buttonLink="/Dialpad"
                            number1={35} // Animated number
                            paragraph1="Reducing redundant UI elements"
                            isPercentage1={true} // Display as percentage
                            number2={60} // Animated number
                            paragraph2="Reducing future design inconsistencies"
                            isPercentage2={true} // Display as regular number
                            number3={25} // Animated number
                            paragraph3="Improving design-to-development handoff efficiency"
                            isPercentage3={true} // Display as regular number
                        />


                       

<ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={isDarkMode ? KoopidImage: KoopidImageLight}
                            // divColor="#004C84"
                            divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                            company="Koopid"
                             href="/Koopid"
                             projectName="Comprehensive Design"
                            splineUrl="https://my.spline.design/iphone14procopy-8670d31454ba5292b39464d8bcf198b4/"
                            title="Crafting Cohesion That Drove Acquisition"
                            description="Led the end-to-end design unification of a multi-product AI platform in the telecom space aligning branding, UX, and interaction patterns to create a seamless experience that ultimately helped position the company for acquisition."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Lead UX Designer & Developer',  '6 Months', 'AI Telecommunications']}
                            buttonLink="/Koopid"
                            className="duration-500 transition-colors"
                            number1={35} // Animated number
                            paragraph1="Reduction in decision-making time"
                            isPercentage1={true} // Display as percentage
                            number2={25} // Animated number
                            paragraph2="Increase in user satisfaction scores"
                            isPercentage2={true} // Display as regular number
                            number3={54} // Animated number
                            paragraph3="Increasing user testing feedback efficiency"
                            isPercentage3={true} // Display as regular number
                        />
                    </section>


                    <AnimatedTypeWriter
                        text=" COMPANIES I WORKED WITH"
                        isDarkMode={isDarkMode}
                        animationDelay={0.08}
                    />
                    <Banner />

                    <section className="px-2 md:px-2 lg:px-9">

                    </section>


                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Home;
