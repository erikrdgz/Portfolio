import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

import koopidDesktop from '../assets/images/koopid-desktop.svg';
import hubspot from '../assets/images/hubspot.svg';
import legacyUi from '../assets/images/koopid-legacy-ui.svg';
import av1 from "../assets/images/admin.png"
import av2 from "../assets/images/supervisor.png"
import av3 from "../assets/images/agent.png"
import koopidFinal from "../assets/images/koopid-design-solution.svg";
import koopidKnowledge from "../assets/images/koopid-knowledge.svg";

import AnimatedBulletList from "../components/animation/AnimatedBulletList";

import { FaUserCheck, FaDesktop, FaRobot } from "react-icons/fa";

const Koopid = () => {
    const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
    const location = useLocation();

    const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
    const textColor = isDarkMode ? "text-white" : "text-black";


    const projectGoalList = [
        {
            text: "Enhance User Experience: Fix existing UI issues across all products to create a seamless and intuitive experience.",
            icon: FaUserCheck,
        },
        {
            text: "Increase Agent Efficiency: Streamline workflows in the Agent Desktop to reduce time on task and allow agents to manage conversations more effectively.",
            icon: FaDesktop,
        },
        {
            text: "Train AI Model: Implement systems within the Portal to analyze conversation sentiment, ratings, and conflict data, enabling continuous AI training for improved chatbot responses.",
            icon: FaRobot,
        },
    ];

    const challengesList = [
        {
            text: "UI Consistency: Each product had a unique interface, leading to confusion and inefficiencies for agents and supervisors.",
            icon: FaUserCheck,
        },
        {
            text: "Time on Task: Complex workflows in the Agent Desktop resulted in extended response times and reduced agent productivity.",
            icon: FaDesktop,
        },
        {
            text: "Data Integration for AI Training: The lack of streamlined data and analytics in the Portal limited the ability to effectively train the chatbot model.",
            icon: FaRobot,
        },
        {
            text: "Feedback Loop: No centralized platform for gathering and acting on feedback from agents, supervisors, and end-users.",
            icon: FaRobot,
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
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-[100vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center p-4 md:p-6 lg:px-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl xl:text-6xl mb-8 font-bold"
                        >
                            Koopid Products Redesign
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-2xl mb-4"
                        >
                            Koopid, an A.I. telecommunications company, needed a comprehensive redesign of all of its current products in an effort to increase brand recognition and efficiency across all platforms.
                        </motion.p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex bg-blue-300">
                    <motion.img
                        src={koopidDesktop}
                        className="w-full h-full xl:h-auto object-contain xl:absolute xl:bottom-0 xl:right-0" // Adjust the image to fill its container
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
            </section>



            {/* Section 2 */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-[70vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center">
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className={`${isDarkMode ? "bg-zinc-950 text-white" : "bg-zinc-100 text-black"
                                } text-2xl md:text-4xl xl:text-6xl mb-6 p-8`}
                        >
                            <span className="text-teal-400 p-4">1.</span> Summary
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-2xl mb-4 p-4"
                        >
                            Comprehensive redesign of Koopid’s core products (Chatbot, Agent Desktop, and Portal) aimed at improving the end-to-end customer support experience. Goals included optimizing UI, enhancing agent efficiency, reducing time on task, and refining the AI model through data-driven workflows.
                        </motion.p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex items-center justify-center p-4 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                            <div className="w-full">
                                <h4 className="font-semibold md:text-2xl mb-3 text-teal-400">Duration</h4>
                                <p className="md:text-lg">6 Months</p>
                            </div>
                            <div className="w-full">
                                <h4 className="font-semibold md:text-2xl mb-3 text-teal-400">My Role</h4>
                                <p className="md:text-lg">Product Designer & UX Lead</p>
                            </div>
                            <div className="col-span-1 md:col-span-2 w-full">
                                <h4 className="font-semibold md:text-2xl mb-3 text-teal-400">My Team</h4>
                                <p className="md:text-lg">Product Manager, Engineering Lead, Front End Developers, and QA</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>


            {/* Section 3 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-[90vh] py-8`}
            >
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={hubspot}
                        className="w-full h-full object-cover"
                        initial={{
                            opacity: 0,
                            clipPath: "inset(0% 100% 0% 0%)",
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
                        style={{
                            willChange: "clip-path, opacity",
                        }}
                    />
                </div>

                {/* Text Section */}
                <div className="flex items-start justify-center">
                    <AnimatedBulletList
                        heading="Project Goals"
                        number="2. "
                        items={projectGoalList}
                    />
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
                        heading="Challenges"
                        number="3. "
                        items={challengesList}
                    />
                </div>

                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={legacyUi}
                        className="w-full h-full object-contain"
                        initial={{
                            opacity: 0,
                            clipPath: "inset(0% 100% 0% 0%)",
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
                        style={{
                            willChange: "clip-path, opacity",
                        }}
                    />
                </div>
            </section>


            {/* Section 5 */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 md:grid-cols-2 xl:h-[70vh]`}
            >
                {/* Column 9 */}
                <div className=" flex items-center justify-center p-4">
                    <motion.section
                        className="flex flex-col space-y-4"
                        initial="initial"
                        whileInView="animate"
                        variants={{
                            initial: {},
                            animate: {
                                transition: {
                                    staggerChildren: 0.3, // Delay between each child animation
                                },
                            },
                        }}
                        
                    >
                        {/* User Persona 1 */}
                        <motion.div
                            className="flex items-center p-4 border rounded-lg shadow-md"
                            variants={userVariant}
                        >
                            {/* Avatar */}
                            <img
                                src={av1}
                                alt="User 1"
                                className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            {/* User Info */}
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Admin</h3>
                                <p className="">Short summary about User 1's persona, interests, or relevant information.</p>
                            </div>
                        </motion.div>

                        {/* User Persona 2 */}
                        <motion.div
                            className="flex items-center p-4 border rounded-lg shadow-md"
                            variants={userVariant}
                        >
                            {/* Avatar */}
                            <img
                                src={av2}
                                alt="User 2"
                                className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            {/* User Info */}
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Supervisor</h3>
                                <p className="">Short summary about User 2's persona, interests, or relevant information.</p>
                            </div>
                        </motion.div>

                        {/* User Persona 3 */}
                        <motion.div
                            className="flex items-center p-4 border rounded-lg shadow-md"
                            variants={userVariant}
                        >
                            {/* Avatar */}
                            <img
                                src={av3}
                                alt="User 3"
                                className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            {/* User Info */}
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Agent</h3>
                                <p className="">Short summary about User 3's persona, interests, or relevant information.</p>
                            </div>
                        </motion.div>
                    </motion.section>

                </div>

                {/* Column 10 */}
                <div className="flex items-center justify-center">
                    <AnimatedBulletList
                        heading="Research &amp; Insights"
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
                        heading="Design Solutions"
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
                            clipPath: "inset(0% 100% 0% 0%)",
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
                        style={{
                            willChange: "clip-path, opacity",
                        }}
                    />
                </div>
                

               
            </section>

            {/* Section 7 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-1 `}
            >
                 {/* Image Section */}
                 <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={koopidKnowledge}
                        className="w-full h-full object-contain"
                        initial={{
                            opacity: 0,
                            clipPath: "inset(0% 100% 0% 0%)",
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
                        style={{
                            willChange: "clip-path, opacity",
                        }}
                    />
                </div>
               
            </section>

            {/* Section 8 */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-[90vh]`}
            >
                 {/* Text Section */}
                 <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Results"
                        number="6. "
                        items={challengesList}
                    />
                </div>
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Impact"
                        number="7. "
                        items={challengesList}
                    />
                </div>

               
            </section>
        </>
    );
};

export default transition(Koopid);
