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

import SplineViewer from "../components/SplineViewer";

import dialPadImageUrl from "../assets/images/dialpad-card.svg";
import nslsImageUrl from "../assets/images/nsls-card.svg";


const Koopid = () => {
    const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
    const location = useLocation();

    const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
    const textColor = isDarkMode ? "text-white" : "text-black";

    const challengeList = [
        {
            header: "User Experience",
            description: "Clunky design was hindering the effectiveness of agents when running multiple conversations at once.",
            icon: BiRightArrow,
        },
        {
            header: "Design",
            description: "While Koopid's products were immensely useful tools, their design needed an update that established brand recognition and were more effective in getting users where they needed to be.",
            icon: BiRightArrow,
        },
        {
            header: "Hubspot",
            description: "Due to the current state of the products, our team saw a huge backlog of issues all relating to either an experience or design issue that would often snowball into more tickets down the road.",
            icon: BiRightArrow,
        },
    ];

    const journeyList = [
        {
            header: "User Interviews",
            description: "Observing real-world workflows revealed challenges like redundant clicks, disorganized interfaces, and the inability to work effectively on mobile devices. These insights painted a clear picture of their needs: simplicity, speed, and flexibility.",
            icon: BiRightArrow,
        },
        {
            header: "Stakeholder Feedback",
            description: "Product leaders shared their vision of reducing task time and building a scalable platform that could adapt to future demands. This alignment ensured we balanced immediate user needs with strategic business goals.",
            icon: BiRightArrow,
        },
        {
            header: "Who Uses What",
            description: "Agents, the core user of the Agent Desktop, needed the platform to be responsive and less clunky, the user interviews proved to us that their workflow was heavily hindered by CSS bugs and some needed design improvements. Supervisors and Admins used the portal the most, while end users (customers) used the chatbot, almost all products had responsive issues but the meat of it for the portal was the UX side of the coin.",
            icon: BiRightArrow,
        },
    ];


    const collabList = [
        {
            header: "Sprint Leadership",
            description: "Led design and development sprints, ensuring clear communication between design and engineering teams, aligning on priorities and deadlines.",
            icon: BiRightArrow,
        },
        {
            header: "Cross-functional Collaboration",
            description: "Developed iterative prototypes to test interface features with both agents and customers early and often,",
            icon: BiRightArrow,
        },
        {
            header: "Engineering Collaboration",
            description: "Worked closely with engineers to ensure design feasibility, balancing design vision with technical constraints and performance considerations.",
            icon: BiRightArrow,
        },
        {
            header: "Iterative Development",
            description: "Ensured continuous iteration on design and functionality, using feedback from agents and stakeholders to refine the product and ensure it met user needs.",
            icon: BiRightArrow,
        },
        {
            header: "Design Systems",
            description: "Worked with engineers to integrate and scale design components, enabling faster iterations and seamless development.",
            icon: BiRightArrow,
        }
    ];

    const designList = [

        {
            header: "Ideation & Concept Exploration",
            description: "Started the design process with brainstorming sessions and low-fidelity wireframes to explore different design solutions. These early concepts were tested and refined, laying the groundwork for more polished iterations.",
            icon: BiRightArrow,
        },
        {
            header: "Collaborative Design Refinement",
            description: "Worked closely with stakeholders and cross-functional teams to iterate on design ideas. Consistently tested and refined prototypes, gathering feedback to ensure designs met user needs and aligned with business goals.",
            icon: BiRightArrow,
        },
        {
            header: "User-Centered Iteration",
            description: "Focused on refining designs through user-centered iteration. Continuously improved user flows, interactions, and visual elements based on user feedback from prototypes and usability testing.",
            icon: BiRightArrow,
        },
        {
            header: "Design System & Consistency",
            description: "Developed and maintained a scalable design system that ensured visual consistency and usability across the product. Collaborated with teams to integrate reusable components, speeding up iteration cycles and improving product cohesion.",
            icon: BiRightArrow,
        }
    ];
    const impactList = [
        {
            header: "Improved Design Collaboration",
            description: "Led design sprints that increased cross-functional collaboration, resulting in a 35% reduction in decision-making time and a 20% faster time-to-market for design initiatives.",
            icon: BiRightArrow,
        },
        {
            header: "User-Centered Prototyping",
            description: "Created and tested low-fidelity prototypes, reducing design revisions by 40% and increasing user testing feedback efficiency by 54%. This approach saved an estimated 200+ development hours in the initial design phase.",
            icon: BiRightArrow,
        },
        {
            header: "Enhanced Iterative Design Process",
            description: "Refined designs through rapid iterations, leading to a 25% increase in user satisfaction scores and a 15% improvement in task completion rates during usability testing.",
            icon: BiRightArrow,
        },
        {
            header: "Streamlined Design Systems",
            description: "Implemented design systems that cut design handoff time by 30% and reduced visual inconsistencies across the product by 60%, leading to improved overall product cohesion and brand consistency.",
            icon: BiRightArrow,
        },
        {
            header: "Increased Stakeholder Alignment",
            description: "Facilitated bi-weekly design reviews with stakeholders, resulting in a 40% faster approval cycle and reducing last-minute design changes by 25%. This improved overall project delivery timelines by 15%.",
            icon: BiRightArrow,
        }
    ];

    const resultList = [
        {
            header: "Collaboration & Communication",
            description: "Working with such a talented team was a great pleasure, although we all had our strengths in this project, the cross department collaboration helped influence many decisions whether they be design or a development approach.",
            icon: BiRightArrow,
        },
        {
            header: "Goal Oriented",
            description: "Having an acquisition goal is no easy feat, there are many things that go wrong in the tech space and we have all missed dreaded deadlines that can sometimes be demoralizing. Communicating effectively and preparing for those gotcha moments is crucial to staying on target.",
            icon: BiRightArrow,
        },
        {
            header: "Scrap What Doesn't Work Early",
            description: "My approach at certain aspects of the design and codebase was to gut whatever was not working for us, the monolith of Html and CSS was way too large to edit and tweak, my decision to rebuild the UI on react aided in our development speed.",
            icon: BiRightArrow,
        },
        {
            header: "Don't Guess, Validate",
            description: "Often times we feel like we need to design something perfectly the first time around, I learned to validate my work more often than not by testing it in various scenarios or with different user groups.",
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
                <div className="flex order-2 lg:order-1 items-center justify-center relative  py-8 p-4 md:p-6 lg:px-12">

                    <div className="z-[2]  ">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: "easeInOut", // more subtle ease
                            }}
                            viewport={{ once: true }}
                            className={`${isDarkMode ? "" : "text-neutral-800"} text-6xl xl:text-7xl font-bold`}
                        >
                            Koopid
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
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
                            className="text-sm md:text-md my-4"
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
                                    transition={{ duration: 0.5, delay: 1.7 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className={`${isDarkMode ? "text-orange-500" : "text-orange-500"} font-semibold md:text-xl mb-3 `}>My Role</h4>
                                    <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-800"}  md:text-md`}>Product Designer, Lead UX Designer and Developer</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className={`${isDarkMode ? "text-orange-500" : "text-orange-500"} font-semibold md:text-xl mb-3 `}>Duration</h4>
                                    <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-800"}  md:text-md`}>6 Months</p>
                                </motion.div>



                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className={`${isDarkMode ? "text-orange-500" : "text-orange-500"} font-semibold md:text-xl mb-3 `}>My Team</h4>
                                    <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-800"}  md:text-md`}>Product Manager, Engineering Lead, Front End Developers, and QA</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className={`${isDarkMode ? "text-orange-500" : "text-orange-500"} font-semibold md:text-xl mb-3 `}>Industry</h4>
                                    <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-800"}  md:text-md`}>A.I. Telecommunications</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>




                </div>

                {/* Image Section */}
                <div className="relative flex order-1 lg:order-2 bg-blue-100">
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

                    />
                </div>
            </section>



            {/* OVERVIEW*/}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 lg:py-24`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center">

                    <AnimatedBulletList
                        heading="Overview"
                        paragraph="Koopid’s Products were a lifeline for telecommunications giants like Avaya, Vonage, and Puzzle. Yet, agents and admins alike struggled with tools that had grown cumbersome—their outdated interface, inefficient workflows, and lack of responsiveness slowed users down. Agents faced daily frustrations, from repetitive tasks to navigating cluttered screens, hindering their ability to perform efficiently. Koopid aimed to transform their core products into seamless, scalable, and user-friendly experiences, paving the way for long-term product innovation. Key takeaways:"
                        number="1. "
                        items={challengeList}

                    />
                </div>

                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center px-6  p-4`}>

                    <motion.img
                        src={isDarkMode ? legacyUIDark : legacyUILight}
                        className={`${isDarkMode ? "border-white" : "border-black"} 
                w-full 
                sm:w-full md:w-full lg:w-full
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
                    className="text-center p-4 flex justify-center align-center"
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
                    <div>
                        <img
                            className="mb-4 rounded-lg"
                            src={koopidJourney}



                        />
                        <p>Example: Agent Journey</p>
                    </div>

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
                            tasks: "Profile Management + Platform Onboarding + Workflow Creation",
                        },
                        {
                            avatar: av2,
                            title: "Supervisor",
                            description:
                                "Supervisors were mainly in charge of medium updates to user data, product data, and creating lower level workflows. Supervisors used data gathered from Agents to create more efficient automation workflows and alleviate bottlenecks for Admins.",
                            tasks: "Agent Supervision + Sentiment Revision + Conflict Resolution",
                        },
                        {
                            avatar: av3,
                            title: "Agent",
                            description:
                                "Agents made up the primary user base and were instrumental in gathering data for Admins and Supervisors to assist in the creation of automated responses. They primarily worked on the Agent Desktop dealing with customers and answering customer inquiries.",
                            tasks: "Agent Desktop Conversations",
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


            {/* DESIGN */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-[90vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Bringing Ideas to Life: From Wireframes to Final Design"
                        paragraph="Complex features don't need to be complicated to use, I aimed to uplift and improve the design while maintaining some product familiarity. The creation process is my favorite as this is where I collaborated the most with stakeholders, agents and my team. My process normally consists of these core concepts:"
                        number="3. "
                        items={designList}
                    />
                </div>

                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : "bg-white"} flex items-center justify-center p-4`}>
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

                        <p>Example: Wireframe</p>
                    </motion.div>

                </div>
            </section>


            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Staggered animation for each child */}
                    <motion.div
                        className="p-1"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1, // Delay between each element
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <FlippableCard
                            beforeImage={desktopBALegacy}
                            afterImage={desktopBAFinal}
                            title="Agent Desktop"
                        />
                    </motion.div>

                    <motion.div
                        className="p-1"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2, // Adjust delay for staggered effect
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <FlippableCard
                            beforeImage={chatbotBALegacy}
                            afterImage={chatbotBAFinal}
                            title="Chatbot"
                        />
                    </motion.div>

                    <motion.div
                        className="p-1"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3, // Further delay for the third card
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <FlippableCard
                            beforeImage={portalBALegacy}
                            afterImage={portalBAFinal}
                            title="Portal"
                        />
                    </motion.div>
                </div>
            </section>

            <section className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} grid grid-cols-1 gap-4 md:px-12 lg:px-56 px-4 py-16`}>
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
            </section>

            {/* COLLABORATION */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-full`}
            >
                {/* Column 9 */}
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center p-4`}>
                    <motion.img
                        src={hubspot}
                        className="w-full rounded  object-cover"
                        initial={{
                            opacity: 0,
                            // clipPath: "inset(0% 100% 0% 0%)",
                        }}
                        whileInView={{
                            opacity: 1,
                            // clipPath: "inset(0% 0% 0% 0%)",
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Column 10 */}
                <div className="flex items-center justify-center">
                    <AnimatedBulletList
                        heading="Turning Vision into Reality: Collaborative Development & Execution"
                        paragraph="Taking the reins as lead designer, I didn’t just focus on crafting the perfect user experience — I was deeply involved in every phase of the project, ensuring that design and development were tightly woven together. From sprint planning to final deployment, I worked hand-in-hand with engineers to bring the vision to life, navigating the complexities of integrating design with functionality. My role extended beyond just design, as I helped architect the development process, fostering an environment of constant feedback and iteration. This approach ensured we stayed aligned with both user needs and technical requirements, ultimately leading to a seamless product launch."
                        number="4. "
                        items={collabList}
                    />
                </div>
            </section>


            {/* VALIDATION*/}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-[90vh]`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Outcome &amp; Impact"
                        paragraph="The redesign of Koopid's product suite launched with an overwhelming sucess, this not only aleviated all the touchpoints we were aiming for, this got us in front of investors eager to discuss an aqusition. In Q1 of 2021 Koopid was aquired by Dialpad who had just recently announced their 2B dollar valuation."
                        number="5. "
                        items={impactList}
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
                    />
                </div>
            </section>

            {/* Section 7 */}


            {/* RESULTS */}
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
                    />
                </div>
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Looking Back"
                        paragraph="This project reinforced the value of collaboration and user-centered design in driving impactful results. By addressing core usability issues and implementing a scalable design approach, I was able to contribute to both immediate improvements and long-term product vision. The experience also deepened my expertise in balancing user needs with technical constraints and stakeholder goals."
                        number="6. "
                        items={resultList}
                    />
                </div>
            </section>

            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >

                <AnimatedTypeWriter
                    text="OTHER WORK"

                    animationDelay={0.08}
                />

            </section>
            <section id="more work" className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} grid gap-4 grid-cols-1 md:grid-cols-2  py-12 lg:py-20 p-4 md:px-12`}>
                <div className={`${isDarkMode ? " " : ""} transition-colors duration-500  w-full rounded-lg`}>


                    <a href="/Dialpad" className=" text-center rounded-md items-center flex justify-center  ">
                        <div className="h-full w-full">
                            <p className="py-4 text-xl">
                                Explore Dialpad's UI Merger
                            </p>
                            <img src={dialPadImageUrl} className="block rounded-md h-full object-contain mx-auto" />
                        </div>
                    </a>
                </div>

                <div className={`${isDarkMode ? " " : ""} transition-colors duration-500  w-full rounded-lg`}>
                    <a href="/Nsls" className=" text-center rounded-md items-center flex justify-center  ">
                        <div className="h-full w-full">
                            <p className="py-4 text-xl">
                                Explore NSLS's New App
                            </p>
                            <img src={nslsImageUrl} className="block rounded-md h-full object-contain mx-auto" />
                        </div>
                    </a>
                </div>
            </section>


        </>
    );
};

export default transition(Koopid);
