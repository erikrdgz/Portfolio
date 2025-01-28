import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

import { RxSlash } from "react-icons/rx";

import koopidDesktop from '../assets/images/koopid-desktop.svg';
import hubspot from '../assets/images/hubspot.svg';
import legacyUi from '../assets/images/koopid-legacy-ui.svg';

import legacyUILight from '../assets/images/Legacy-UI-Light.png';
import legacyUIDark from '../assets/images/Legacy-UI-Dark.png';

import koopidJourney from '../assets/images/koopid-journey.png';
import koopidWireframe from '../assets/images/koopid-wireframe.png';

import av1 from "../assets/images/admin.png"
import av2 from "../assets/images/supervisor.png"
import av3 from "../assets/images/agent.png"
import koopidFinal from "../assets/images/koopid-design-solution.svg";
import koopidKnowledge from "../assets/images/koopid-knowledge.svg";

import koopidAdminLegacy from "../assets/images/koopid-admin-legacy.png";
import koopidAdminFinal from "../assets/images/koopid-admin-portal-final.png";
import AnimatedBulletList from "../components/animation/AnimatedBulletList";
import UserCard from "../components/UserCard";

import { FaUserCheck, FaDesktop, FaRobot, } from "react-icons/fa";

import { BiRightArrow } from "react-icons/bi";
import AnimatedTypeWriter from "../components/animation/AnimatedTypeWriter";
import FlippableCard from "../components/FlippableCard";

import desktopBALegacy from "../assets/images/agent-desktop-ba-legacy.png"
import desktopBAFinal from "../assets/images/agent-desktop-ba-final.png"

import chatbotBALegacy from "../assets/images/chatbot-ba-legacy.png";
import chatbotBAFinal from "../assets/images/chat-ba-final.png";

import portalBALegacy from "../assets/images/portal-ba-legacy.png";
import portalBAFinal from "../assets/images/portal-ba-final.png";


const Koopid = () => {
    const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
    const location = useLocation();

    const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
    const textColor = isDarkMode ? "text-white" : "text-black";


    const journeyList = [
        {
            header: "Agent Interviews",
            description: "Observing real-world workflows revealed challenges like redundant clicks, disorganized interfaces, and the inability to work effectively on mobile devices. These insights painted a clear picture of their needs: simplicity, speed, and flexibility.",
            icon: BiRightArrow,
        },
        {
            header: "Stakeholder Feedback",
            description: "Product leaders shared their vision of reducing task time and building a scalable platform that could adapt to future demands. This alignment ensured we balanced immediate user needs with strategic business goals.",
            icon: BiRightArrow,
        },
        {
            header: "Agents",
            description: "The core user of the Agent Desktop, needed the platform to be responsive and less clunky, the user interviews proved to us that their workflow was heavily hindered by CSS bugs and some needed design improvements.",
            icon: BiRightArrow,
        },
    ];


    const challengesList = [
        {
            header: "Defining Objectives",
            description: "Streamline workflows, ensure mobile responsiveness for end users and maintaining flexibility for the agents, create a unified design system for efficiency.",
            icon: BiRightArrow,
        },
        {
            header: "Wireframes & Prototypes",
            description: "Developed iterative prototypes to test interface features with both agents and customers early and often,",
            icon: BiRightArrow,
        },
        {
            header: "Design System Integration",
            description: "Consolidated design components enabling faster development and easier scalability.",
            icon: BiRightArrow,
        },
        {
            header: "Stakeholder Collaboration",
            description: "Presented designs in regular feedback sessions to align across teams while ensuring project deadlines were met.",
            icon: BiRightArrow,
        }
    ];


    const userVariant = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            {/* Section 1 */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 pt-20 py-12 md:pt-16 md:py-0 lg:h-[100vh]`}
            >
                {/* Text Section */}
                <div className="flex order-2 md:order-1 items-center justify-center relative  py-8 p-4 md:p-6 lg:px-12">

                    <div className="z-[2]  ">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: "easeInOut", // more subtle ease
                            }}
                            viewport={{ once: true }}
                            className="text-6xl xl:text-7xl font-bold"
                        >
                            Koopid
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.6,
                                ease: "easeInOut", // subtle ease
                            }}
                            viewport={{ once: true }}
                            className="text-2xl xl:text-5xl py-4 pb-8 font-medium"
                        >
                            Product Suite Redesign
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1,
                                ease: "easeInOut", // smoother transition with no bounce
                            }}
                            viewport={{ once: true }}
                            className="text-lg md:text-md my-4"
                            style={{ lineHeight: 1.5 }}
                        >
                            Koopid, an A.I. telecommunications company, was in need of a makeover and a solidified process for scaling design. From creating a component library to establishing a dynamic white-labeling solution, I led the design effort and user experience across the entire Koopid product line.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.2,
                                ease: "easeInOut", // smooth fade-in effect for the grid
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 pt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">Duration</h4>
                                    <p className="md:text-md">6 Months</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.7 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Role</h4>
                                    <p className="md:text-md">Product Designer & UX Lead</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-2 w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Team</h4>
                                    <p className="md:text-md">Product Manager, Engineering Lead, Front End Developers, and QA</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>




                </div>

                {/* Image Section */}
                <div className="relative flex order-1 md:order-2 bg-blue-100">
                    <motion.img
                        src={koopidDesktop}
                        className="w-full h-full xl:h-auto object-contain xl:absolute xl:bottom-0 xl:right-0" // Adjust the image to fill its container
                        initial={{
                            opacity: 0, // Start fully hidden
                            //clipPath: "inset(0% 0% 0% 100%)", // Clip animation start
                        }}
                        animate={{
                            opacity: 1, // Fully visible
                            //clipPath: "inset(0% 0% 0% 0%)", // Clip animation end
                        }}
                        transition={{
                            duration: 1, // Length of animation
                            ease: "easeInOut", // Smooth easing
                            delay: 0.4, // Wait before animation starts
                        }}
                    // style={{
                    //     willChange: "clip-path, opacity", 
                    // }}
                    />
                </div>
            </section>



            {/* Section 2 */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 lg:py-24`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center">

                    <AnimatedBulletList
                        heading="The Challenge"
                        paragraph="Koopid’s Agent Desktop was a lifeline for telecommunications giants like Avaya, Vonage, and Puzzle. Yet, agents struggled with a tool that had grown cumbersome—its outdated interface, inefficient workflows, and lack of responsiveness slowed them down. Agents faced daily frustrations, from repetitive tasks to navigating cluttered screens, hindering their ability to perform efficiently. Koopid aimed to transform this core product into a seamless, scalable, and user-friendly experience, paving the way for long-term product innovation."
                        number="1. "

                    />
                </div>

                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center p-4`}>
                    <motion.img
                        src={isDarkMode ? legacyUIDark : legacyUILight}
                        className={`${isDarkMode ? "border-white" : "border-black"} 
                w-full 
                sm:w-3/4 md:w-2/3 lg:w-full
                h-auto object-contain border-2`}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                        viewport={{ once: true }}
                    />
                </div>

            </section>


            {/* Section 3 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 p-4 py-8`}
            >








                <motion.div
                    className="text-center p-4"
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    viewport={{ once: true }}
                >
                    <img
                        className="mb-4 rounded-lg"
                        src={koopidJourney}



                    />
                    <p>Example: Agent Journey</p>
                </motion.div>












                {/* Text Section */}
                <div className="flex items-start justify-center">
                    <AnimatedBulletList
                        heading="The Journey: Understanding the Problem"
                        paragraph="Every redesign begins with listening. To unearth the core issues, I collaborated with agents and stakeholders to dig deep into the product's pain points."
                        endingParagraph="Through these insights, we identified a critical mission: streamline agent workflows, modernize the interface, and lay the foundation for a robust design system."
                        number="2. "
                        items={journeyList}
                    />
                </div>
            </section>

            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >

                <AnimatedTypeWriter
                    text="KEY PLAYERS"

                    animationDelay={0.08}
                />

            </section>


            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >
                {/* Grid Layout for Desktop and Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Map over the persona data */}
                    {[
                        {
                            avatar: av1,
                            title: "Admin",
                            description:
                                "Administrators had the highest user level and were able to set global changes to the product instance. Admins were a key demographic both from a company standpoint and as a user as most of the time Admins were also stakeholders in the product development, such as whitelabeling or branding.",
                            tasks: "Profile Management, Platform Onboarding, Workflow Creation",
                        },
                        {
                            avatar: av2,
                            title: "Supervisor",
                            description:
                                "Supervisors were mainly in charge of medium updates to user data, product data, and creating lower level workflows. Supervisors used data gathered from Agents to create more efficient automation workflows and alleviate bottlenecks for Admins.",
                            tasks: "Profile Management, Platform Onboarding, Workflow Creation",
                        },
                        {
                            avatar: av3,
                            title: "Agent",
                            description:
                                "Agents made up the primary user base and were instrumental in gathering data for Admins and Supervisors to assist in the creation of automated responses. They primarily worked on the Agent Desktop dealing with customers and answering customer inquiries.",
                            tasks: "Profile Management, Platform Onboarding, Workflow Creation",
                        },
                    ].map((persona, index) => (
                        <motion.div
                            key={index}
                            className="p-4 rounded-lg "
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2, // Stagger each card by its index
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }} // Animates only the first time it's in view
                        >
                            <UserCard
                                avatar={persona.avatar}
                                title={persona.title}
                                description={persona.description}
                                tasks={persona.tasks}
                                isDarkMode={isDarkMode}
                                userVariant={userVariant}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>














            {/* Section 4 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-[90vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Design Process"
                        paragraph="Using the insights from research, I drove a collaborative design process:"
                        number="3. "
                        items={challengesList}
                    />
                </div>

                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : "bg-white"} flex items-center justify-center p-4`}>
                    <motion.img
                        src={koopidAdminFinal}
                        className="w-full   border rounded-lg shadow-md"
                        initial={{
                            opacity: 0,
                            y: 50,  // Start below the viewport
                            //scale: 0.95,  // Start slightly smaller
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,  // Move to original position
                            //scale: 1,  // Scale up to its normal size
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                    />

                </div>
            </section>
            <section className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} grid grid-cols-1 gap-4 md:px-12 lg:px-56 px-4 py-4`}>

                <motion.div
                    className="text-center"
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.8,
                    }}
                    viewport={{ once: true }}
                >

                    <img
                        className="mb-4 rounded-lg"
                        src={koopidWireframe}


                    />

                    <p>Example: Mid Stage Journey</p>
                </motion.div>
            </section>

            {/* Section 5 */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 md:grid-cols-2 xl:h-[70vh]`}
            >
                {/* Column 9 */}
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={hubspot}
                        className="w-full h-full object-cover"
                        initial={{
                            opacity: 0,
                            clipPath: "inset(0% 100% 0% 0%)",
                        }}
                        whileInView={{
                            opacity: 1,
                            clipPath: "inset(0% 0% 0% 0%)",
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                        viewport={{ once: true }}
                    // style={{
                    //     willChange: "clip-path, opacity",
                    // }}
                    />
                </div>

                {/* Column 10 */}
                <div className="flex items-center justify-center">
                    <AnimatedBulletList
                        heading="Collaboration & Execution"
                        paragraph="Collaboration was critical to this project’s success:"
                        number="4. "
                        items={challengesList}
                    />
                </div>
            </section>


            {/* Section 6 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-[90vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Outcome &amp; Impact"
                        paragraph="The redesigned Koopid Agent Desktop delivered measurable results:"
                        number="5. "
                        items={challengesList}
                    />
                </div>
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={koopidFinal}
                        className="w-full h-full object-contain"
                        initial={{
                            opacity: 0,
                            clipPath: "inset(100% 0% 0% 0%)",
                        }}
                        animate={{
                            opacity: 1,
                            clipPath: "inset(0% 0% 0% 0%)",
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                    // style={{
                    //     willChange: "clip-path, opacity",
                    // }}
                    />
                </div>



            </section>

            {/* Section 7 */}


            {/* Section 8 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-[90vh]`}
            >
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={koopidKnowledge}
                        className="w-full h-full object-contain"
                        initial={{
                            opacity: 0,
                            y: 50,

                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.6,
                        }}
                    // style={{
                    //     willChange: "clip-path, opacity",
                    // }}
                    />
                </div>
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Results"
                        paragraph="This project reinforced the value of collaboration and user-centered design in driving impactful results. By addressing core usability issues and implementing a scalable design approach, I was able to contribute to both immediate improvements and long-term product vision. The experience also deepened my expertise in balancing user needs with technical constraints and stakeholder goals."
                        number="6. "
                        items={challengesList}
                    />
                </div>


            </section>

            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12 grid grid-cols-1 md:grid-cols-3`}
            >
                <div className="p-1">
                    <FlippableCard
                        beforeImage={desktopBALegacy}
                        afterImage={desktopBAFinal}
                        title="Agent Desktop"
                    />
                </div>

                <div className="p-1">
                    <FlippableCard
                        beforeImage={chatbotBALegacy}
                        afterImage={chatbotBAFinal}
                        title="Chatbot"
                    />
                </div>

                <div className="p-1">
                    <FlippableCard
                        beforeImage={portalBALegacy}
                        afterImage={portalBAFinal}
                        title="Portal"
                    />
                </div>


            </section>

            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >

                <AnimatedTypeWriter
                    text="VIEW OTHER PROJECTS"

                    animationDelay={0.08}
                />

            </section>


        </>
    );
};

export default transition(Koopid);
