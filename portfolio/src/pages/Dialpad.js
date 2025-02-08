import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

import { RxSlash } from "react-icons/rx";

import dialpadDesktop from '../assets/images/dialpad-header-bg.png';
import dialPadMessenger from '../assets/images/dialpad-messenger.png';
import dialPadChatbot from '../assets/images/dialpad-chat-bot.png';
import dialPadTransition from '../assets/images/dialpad-transition.png';

import dialpadFinal from "../assets/images/dialpad-results.png";
import dialpadChatscreen from "../assets/images/dialpad-callscreen.png";

import collab from "../assets/images/collab-dialpad 1.png"

import koopidCaseImg from "../assets/images/koopid-card.png";
import AnimatedBulletList from "../components/animation/AnimatedBulletList";

import { BiRightArrow } from "react-icons/bi";
import AnimatedTypeWriter from "../components/animation/AnimatedTypeWriter";
import nslsImageUrl from "../assets/images/nsls-card.png";

import dialpad1 from "../assets/images/dialpad-img-1.png";
import dialpad2 from "../assets/images/dialpad-img-2.png";
import dialpad3 from "../assets/images/dialpad-img-3.png";
import dialpad4 from "../assets/images/dialpad-img-4.png";



const Dialpad = () => {
    const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
    const location = useLocation();

    const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
    const textColor = isDarkMode ? "text-white" : "text-black";

    const challengeList = [
        {
            header: "Design Unification",
            description: "Koopid’s UI needed to be adapted to Dialpad’s design system, ensuring consistency while preserving essential functionalities.",
            icon: BiRightArrow,
        },
        {
            header: "Componentization",
            description: "Redundant and hardcoded UI elements had to be refined into reusable components that aligned with Dialpad’s structured design system.",
            icon: BiRightArrow,
        },
        {
            header: "Code Omission & Simplification",
            description: "Certain Koopid features required removal or redesign to fit Dialpad’s ecosystem, ensuring a seamless integration without unnecessary complexity.",
            icon: BiRightArrow,
        },
    ];


    const journeyList = [
        {
            header: "Assessing Design Compatibility",
            description: "A deep dive into Koopid and Dialpad's design systems revealed inconsistencies in components, spacing, and interaction patterns. Standardizing these elements was crucial for a seamless integration.",
            icon: BiRightArrow,
        },
        {
            header: "Aligning with Stakeholders",
            description: "Product leaders prioritized maintaining Dialpad’s design principles while preserving Koopid’s core functionalities. This required strategic decisions on what to keep, adapt, or remove.",
            icon: BiRightArrow,
        },
        {
            header: "Componentizing for Scalability",
            description: "To streamline development, I broke down Koopid’s UI into reusable components that fit within Dialpad’s existing system. This modular approach improved efficiency and ensured long-term maintainability.",
            icon: BiRightArrow,
        },
    ];



    const collabList = [
        {
            header: "Integrating into a Large Design Team",
            description: "Joined an established design team, aligning with existing workflows, processes, and design standards while contributing to ongoing initiatives.",
            icon: BiRightArrow,
        },
        {
            header: "Cross-Pod Collaboration",
            description: "Worked across multiple product pods, ensuring consistency and cohesion while adapting to different team structures and priorities.",
            icon: BiRightArrow,
        },
        {
            header: "Engineering Partnerships",
            description: "Collaborated closely with engineers to refine implementation details, address feasibility constraints, and ensure smooth handoffs.",
            icon: BiRightArrow,
        },
        {
            header: "Stakeholder Demos & Feedback",
            description: "Presented work to product managers, engineers, and leadership, gathering feedback to refine and align the integration with business objectives.",
            icon: BiRightArrow,
        }
    ];

    const designList = [
        {
            header: "Wireframing & Concept Exploration",
            description: "Created extensive low-fidelity wireframes to explore layout structures and interaction patterns, ensuring a smooth transition between Koopid and Dialpad design philosophies.",
            icon: BiRightArrow,
        },
        {
            header: "Component Migration & Editing",
            description: "Refactored and migrated design components to align with Dialpad’s design language, ensuring consistency while eliminating redundant elements.",
            icon: BiRightArrow,
        },
        {
            header: "Revising Design System Specifications",
            description: "Updated component specifications and documentation to ensure proper usage across teams, refining spacing, typography, and interaction guidelines for a more cohesive experience.",
            icon: BiRightArrow,
        },
        {
            header: "Contributing to the Design System",
            description: "Added and refined reusable components within the design system, improving scalability and efficiency for future product iterations.",
            icon: BiRightArrow,
        }
    ];

    const impactList = [
        {
            header: "Successful Product Integration",
            description: "Seamlessly merged Koopid’s design components into Dialpad’s ecosystem, ensuring a consistent experience across platforms while reducing redundant UI elements by 35%.",
            icon: BiRightArrow,
        },
        {
            header: "Established Koopid Components in Dialpad’s Design System",
            description: "Migrated and standardized key Koopid UI elements into Dialpad’s design system, reducing future design inconsistencies by 60% and improving scalability for new features.",
            icon: BiRightArrow,
        },
        {
            header: "Met Key Project Deadlines",
            description: "Delivered design updates on schedule, enabling engineering teams to meet development milestones and reducing project delays by 30%.",
            icon: BiRightArrow,
        },
        {
            header: "Ongoing Contributions to Dialpad’s Design System",
            description: "Continued refining and expanding Dialpad’s design system post-integration, ensuring long-term maintainability and improving design-to-development handoff efficiency by 25%.",
            icon: BiRightArrow,
        },
        {
            header: "Enhanced Cross-Team Collaboration",
            description: "Facilitated smooth communication between Dialpad and former Koopid teams, leading to a 40% reduction in misalignment issues and a more cohesive design execution process.",
            icon: BiRightArrow,
        }
    ];


    const resultList = [
        {
            header: "From Little to Big",
            description: "Merging a small team to a massive teams taught me the importance of active communication. It wasn’t just about getting everyone on the same page—it was about understanding different team cultures and learning how to mesh different working styles. The collaboration we had between design, engineering, and product was key to overcoming silos and getting everyone aligned on the big picture.",
            icon: BiRightArrow,
        },
        {
            header: "Adapting to New Expectations",
            description: "When you're merging teams and products, the expectations can shift constantly. There were moments when it felt like we were constantly adjusting to new requirements or priorities. The key takeaway here was learning how to stay flexible, keep the communication lines open, and keep pushing forward even when things felt uncertain.",
            icon: BiRightArrow,
        },
        {
            header: "Embrace the Complexity, Simplify Where You Can",
            description: "The complexity of merging two product ecosystems was intense. But I learned quickly that while you can't avoid complexity, you can simplify where it matters. Removing redundancies, streamlining designs, and focusing on creating a unified experience helped keep the project moving forward without getting bogged down.",
            icon: BiRightArrow,
        },
        {
            header: "Evolving the Design System",
            description: "One of the biggest challenges during the merger was integrating Koopid's components into Dialpad’s design system. The process wasn't easy, but it forced me to revisit the design system and think about how we could make it more flexible and scalable. It was all about refining specifications, aligning components, and making sure everything was cohesive under one umbrella.",
            icon: BiRightArrow,
        }
    ];



    const userVariant = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseMove = (e, index) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setActiveIndex(index);
        setTilt({ x: x, y: -y });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setActiveIndex(null);
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
                                duration: 0.3,
                                delay: 0.3,
                                ease: "easeInOut", // more subtle ease
                            }}
                            viewport={{ once: true }}
                            className={`${isDarkMode ? "" : "text-neutral-800"} text-6xl xl:text-7xl font-bold`}
                        >
                            Dialpad
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.6,
                                ease: "easeInOut", // subtle ease
                            }}
                            viewport={{ once: true }}
                            className="text-2xl xl:text-5xl py-4 pb-8 font-medium"
                        >
                            Merger Integration and Design
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1,
                                ease: "easeInOut", // smoother transition with no bounce
                            }}
                            viewport={{ once: true }}
                            className="text-sm md:text-md my-4"
                            style={{ lineHeight: 1.5 }}
                        >
                            After the successful acquisition of Koopid, now as a new Dialpad Product Designer, I was tasked with the duty to integrate the Koopid Product Suite into Dialpad's robust ecosystem. This meant from design to code, I needed to mesh these two amazing products into one efficient solution we could scale from.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.2,
                                ease: "easeInOut", // smooth fade-in effect for the grid
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 pt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 1 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Role</h4>
                                    <p className="md:text-md">Product Designer</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 1.1 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">Duration</h4>
                                    <p className="md:text-md">4 Months</p>
                                </motion.div>



                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 1.2 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Team</h4>
                                    <p className="md:text-md">Product Manager, Engineering Lead, Front End Developers, and QA</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 1.3 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">Industry</h4>
                                    <p className="md:text-md">A.I. &amp; Video Conference Technology</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>




                </div>

                {/* Dialpad Desktop Image Section */}
                <div className="relative flex order-1 lg:order-2 bg-indigo-500">
                    <motion.img
                        src={dialpadDesktop}
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
                        paragraph="Dialpad bought Koopid, now what? Well merging 3 distinct products into a well established company is no small feat, we knew there was going to be a lot of refactoring, adding and outright deleting certain things on the Koopid side. In this project I aimed to ease the transitioning for both design and development teams."
                        number="1. "
                        items={challengeList}

                    />
                </div>

                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center px-6  p-4`}>

                    <motion.img
                        src={isDarkMode ? dialPadMessenger : dialPadMessenger}
                        className={`${isDarkMode ? "" : ""} 
                w-full 
                sm:w-full md:w-full lg:w-full
                h-auto object-contain `}
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


            {/* Taking Inventory Section */}
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
                            src={dialPadChatbot}



                        />
                        <p>Chatbot Transformation Stages</p>
                    </div>

                </motion.div>

                {/* Text Section */}
                <div className="flex items-start justify-center">
                    <AnimatedBulletList
                        heading="Taking Inventory"
                        paragraph='When it comes to mushing two things together the better you are organized the better it will go. Sure somethings are a kind of a "hindsight is 20/20" but I wanted to avoid refactoring more than I needed to. I knew I had components and a white labeling solution ready to go but I needed to take a deep look at the inventory from both the design side and development side to ensure no stone was left unturned. '
                        endingParagraph='After taking a good look at what needed to go where it was time to start the jigsaw puzzle and modify and destory some of my creations (sad).'
                        number="2. "
                        items={journeyList}
                    />
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
                        heading="The Refactoring Begins"
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
                            src={dialPadTransition}


                        />

                        <p>Desktop Transformation Stages</p>
                    </motion.div>

                    {/* <motion.img
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
                    /> */}

                </div>
            </section>

            {/* 4 Image Section */}
            <section className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-4 md:py-20`}>
                {[dialpad1, dialpad2, dialpad3, dialpad4].map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded "
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.img
                            src={img}
                            className="w-full h-full object-cover rounded-md shadow-lg"
                            style={{
                                transform: activeIndex === index ? `perspective(600px) rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)` : 'none',
                                transition: "transform 0.1s",
                            }}
                        />
                    </motion.div>
                ))}
            </section>



            {/* COLLABORATION */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-full py-4 md:py-20`}
            >
                {/* Column 9 */}
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center p-4`}>
                    <motion.img
                        src={collab}
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
                    // style={{
                    //     willChange: "clip-path, opacity",
                    // }}
                    />
                </div>

                {/* Column 10 */}
                <div className="flex items-center justify-center">
                    <AnimatedBulletList
                        heading="Learning To Work With A Large Team"
                        paragraph="After the refactoring process of the design and codebase, I now needed to know where everything goes and who owns what section what. Transitioning from a single owner to mutliple sure can pull you in many directions, but communicating with my peers and leadership allowed me to place everything where it needed to be and get the appropriate approvals."
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
                        paragraph="Merging a product suite unscathed is not a common occurance, and while it might not of been totally without its bumps and bruises I believe this to be a success story when dealing with such complex interfaces and back ends. The artificial intelligence space moves quickly and when your preparation is combined with organization and communication, it is a testament of what can be achieved in a short amount of time."
                        number="5. "
                        items={impactList}
                    />
                </div>
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={dialpadFinal}
                        className="w-full h-full object-contain"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
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


            {/* RESULTS */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-full`}
            >
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={dialpadChatscreen}
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
                        heading="Looking Back"
                        paragraph="This project showed me how important it is to taking the preliminary steps when it comes to forward thinking, sure you can't see everything coming but that doesn't mean you should take a deal with it later approach. Although I considered myself relatively prepared prior to the project, I did learn a lot from my peers in other ways to organize myself and improve my processes and input into larger design teams and discussions."
                        number="6. "
                        items={resultList}
                    />
                </div>


            </section>


            {/* Other Work */}
            <section
                className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} p-4 md:px-12`}
            >

                <AnimatedTypeWriter
                    text="OTHER WORK"

                    animationDelay={0.08}
                />

            </section>

            {/* Next Projects */}
            <section id="more work" className={`${isDarkMode ? "text-white bg-black" : "text-black bg-white"} grid gap-4 grid-cols-1 md:grid-cols-2  py-12 lg:py-20 p-4 md:px-12`}>


                 <div className={`${isDarkMode ? " " : ""} transition-colors duration-500  w-full rounded-lg`}>


                 <a href="/Koopid" className=" text-center rounded-md items-center flex justify-center  ">
                        <div className="h-full w-full">
                            <p className="py-4 text-xl">
                                Explore Koopid's Product Redesign
                            </p>
                            <img src={koopidCaseImg} className="block rounded-md h-full object-contain mx-auto" />
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

export default transition(Dialpad);
