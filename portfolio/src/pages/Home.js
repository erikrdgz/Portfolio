import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"; // Ensure correct imports
import Banner from "../components/Banner";
import ExpandableCaseStudyCard from "../components/Layout/ExpandableCaseStudyCard";
import { ReactComponent as KoopidSVG } from "../assets/images/koopid-case-img.svg";
import KoopidImage from "../assets/images/koopid-card.svg";
import dialpadImage from "../assets/images/dialpad-card.svg";
import nslsImage from "../assets/images/nsls-card.svg";
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
            <AnimatePresence mode="wait">
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

                    {/* Case Study Cards */}
                    <section className="px-2 md:px-2 lg:px-9">
                        <ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={KoopidImage}
                            // divColor="#004C84"
                            divColor={isDarkMode ? "#000" : "#fff"}
                            company="Koopid"
                            splineUrl="https://my.spline.design/iphone14procopy-8670d31454ba5292b39464d8bcf198b4/"
                            title="Unifying a product suite into a cohesive experience, landing an acquisition"
                            description="An AI company in the telecommunication space needed help establishing a cohesive design, branding, and a smooth user experience across their product line."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Product Designer & Developer', 'Lead UX Designer', '6 Months', 'AI Telecommunications']}
                            buttonLink="/Koopid"
                            className="duration-500 transition-colors"
                            number1={68} // Animated number
                            paragraph1="Decrease in time on task"
                            isPercentage1={true} // Display as percentage
                            number2={4.6} // Animated number
                            paragraph2="User satisfaction rate"
                            isPercentage2={false} // Display as regular number
                            number3={34} // Animated number
                            paragraph3="Decrease in user support tickets"
                            isPercentage3={true} // Display as regular number
                        />

                        <ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={dialpadImage}
                            divColor={isDarkMode ? "#000" : "#fff"}
                            company="Dialpad"
                            splineUrl="https://my.spline.design/studiodisplaymockup-9508385c4955206e0e3bd5c0de3013f9/"
                            title="Merging an existing product into a comprehensive product suite"
                            description="After a successful aquisition, Dialpad needed to bring in Koopid's robust products into their suite while avoiding technical debt and seamlessly integrating both user experiences, that's where I stepped in."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Product Designer', '4 Months', 'Video Conference Technology']}
                            buttonLink="/Koopid"
                            number1={95} // Animated number
                            paragraph1="Customer satisfaction rate."
                            isPercentage1={true} // Display as percentage
                            number2={150} // Animated number
                            paragraph2="Projects completed."
                            isPercentage2={false} // Display as regular number
                            number3={3.5} // Animated number
                            paragraph3="Average project rating."
                            isPercentage3={false} // Display as regular number
                        />


                        <ExpandableCaseStudyCard
                            isDarkMode={isDarkMode}
                            mobileImg={nslsImage}
                            divColor={isDarkMode ? "#000" : "#fff"}
                            company="NSLS"
                            splineUrl="https://my.spline.design/animatedmockupiphone14pro-47f44f59f5e57d40918474619c009b55/"
                            title="Creating an exciting community feature for higher education"
                            description="Memebership dropoff is not to be taken lightly, so by adding a community feature to coincide with users' need to connect, we revitalized a lacking feature that turned into one of the more succesfull usages of the app."
                            detailedDescription="A detailed description that explains the full case study."
                            chips={['Senior Product Designer', '8 Months', 'Higher Education Technology']}
                            buttonLink="/Koopid"
                            number1={95} // Animated number
                            paragraph1="Customer satisfaction rate."
                            isPercentage1={true} // Display as percentage
                            number2={150} // Animated number
                            paragraph2="Memebership dropoff is not to be taken lightly, so by adding a community feature to coincide with users' need to connect, we revitalized a lacking feature that turned into one of the more succesfull usages of the app."
                            isPercentage2={false} // Display as regular number
                            number3={3.5} // Animated number
                            paragraph3="Average project rating."
                            isPercentage3={false} // Display as regular number
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
