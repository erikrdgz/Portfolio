import React, { useEffect, useRef, memo } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

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

import LatestWorkSection from "../components/section/LatestWorkSection";
import GlassSurface from "../components/surface/GlassSurface";
import LiquidGlass from "../components/surface/LiquidGlass";

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

  const desktopSectionRef = useRef(null);
  const isDesktopInView = useInView(desktopSectionRef, {
    amount: 0.5,
    once: true,
  });

  const pageTransitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const MemoizedCaseStudyCard = memo(ExpandableCaseStudyCard);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className={`relative z-10 ${isDarkMode ? "text-white" : "text-black"
          } transition-colors duration-500`}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={location.pathname}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={pageTransitionVariants}
            className="w-full flex flex-col"
          >
            <HeroSection isDarkMode={isDarkMode} />
            <SkillsSection isDarkMode={isDarkMode} />

            <LatestWorkSection />


            <section className="px-4 md:px-6 lg:px-9">
            
              <MemoizedCaseStudyCard
                isDarkMode={isDarkMode}
                mobileImg={isDarkMode ? nslsImage : nslsImageLight}
                divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                company="National Society of Leadership and Success"
                href="/Nsls"
                projectName="Mobile App"
                splineUrl="https://my.spline.design/nslscopy-31a173977968de5bf31d3727eba973a1/"
                title="Connecting students together through a robust mobile app"
                description="Post-course peer engagement was nearly nonexistent; students completed modules but skipped meaningful community interaction. We tackled this by designing a mobile app that made engagement feel natural, accessible, and social, turning passive posts into real peer connection."
                detailedDescription="A detailed description that explains the full case study."
                chips={[
                  "Senior Product Designer",
                  "8 Months",
                  "Higher Education Technology",
                ]}
                buttonLink="/Nsls"
                number1={73}
                paragraph1="Of users had transitioned to the mobile app"
                isPercentage1={true}
                number2={41}
                paragraph2="Positive forum activity surge"
                isPercentage2={true}
                number3={62}
                paragraph3="Course completion rates increase"
                isPercentage3={true}
              />

              <MemoizedCaseStudyCard
                isDarkMode={isDarkMode}
                mobileImg={isDarkMode ? dialpadImage : dialpadImageLight}
                divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                company="Dialpad"
                href="/Dialpad"
                projectName="Design Unification"
                splineUrl="https://my.spline.design/studiodisplaymockup-9508385c4955206e0e3bd5c0de3013f9/"
                title="Unifying Experiences at Scale"
                description="Tasked with integrating Koopid’s robust tools into Dialpad’s platform, I reimagined the UX and design system to transform multiple standalone products into a cohesive suite bridging two ecosystems without compromising usability or speed."
                detailedDescription="A detailed description that explains the full case study."
                chips={[
                  "Product Designer",
                  "4 Months",
                  "A.I. & Video Conference Technology",
                ]}
                buttonLink="/Dialpad"
                number1={35}
                paragraph1="Effective in reducing redundant UI elements"
                isPercentage1={true}
                number2={60}
                paragraph2="Reducing future design inconsistencies"
                isPercentage2={true}
                number3={25}
                paragraph3="Improving design-to-development handoff efficiency"
                isPercentage3={true}
              />

              <MemoizedCaseStudyCard
                isDarkMode={isDarkMode}
                mobileImg={isDarkMode ? KoopidImage : KoopidImageLight}
                divColor={isDarkMode ? "#0a0a0a" : "#fff"}
                company="Koopid"
                href="/Koopid"
                projectName="Comprehensive Design"
                splineUrl="https://my.spline.design/iphone14procopy-8670d31454ba5292b39464d8bcf198b4/"
                title="Transforming data into user friendly design"
                description="Led the end-to-end design unification of a multi-product AI platform in the telecom space aligning branding, UX, and interaction patterns to create a seamless experience that ultimately helped position the company for acquisition."
                detailedDescription="A detailed description that explains the full case study."
                chips={[
                  "Lead UX Designer & Developer",
                  "6 Months",
                  "AI Telecommunications",
                ]}
                buttonLink="/Koopid"
                className="duration-500 transition-colors"
                number1={35}
                paragraph1="Reduction in decision-making time"
                isPercentage1={true}
                number2={68}
                paragraph2="Increase in user satisfaction scores"
                isPercentage2={true}
                number3={54}
                paragraph3="Increasing user testing feedback efficiency"
                isPercentage3={true}
              />
            </section>
            <section className="py-48">
              <AnimatedTypeWriter
                text=" COMPANIES I WORKED WITH"
                isDarkMode={isDarkMode}
                animationDelay={0.08}
              />
              <Banner />
            </section>


          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
