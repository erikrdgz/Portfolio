import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the custom hook for dark mode
import transition from "../transitions";

import nslsDesktop from '../assets/images/nsls-header-bg.png';
import nslsCourses from "../assets/images/nsls-courses.png";
import nslsModules from "../assets/images/nsls-modules.png";
import nslsFeed from "../assets/images/nsls-community-phone.png";
import nslsImpact from "../assets/images/nsls-community-people.png";
import appScreens from "../assets/images/App-Screens.png";
import nslsJourney from "../assets/images/feature-journey.png";

import koopidCaseImg from "../assets/images/koopid-card.svg";

import AnimatedBulletList from "../components/animation/AnimatedBulletList";

import { BiRightArrow } from "react-icons/bi";
import AnimatedTypeWriter from "../components/animation/AnimatedTypeWriter";


import dialPadImageUrl from "../assets/images/dialpad-card.svg";


const Nsls = () => {
    const { isDarkMode } = useDarkMode(); // Use the dark mode state from context
    const location = useLocation();

    const bgColor = location.state?.bgColor || (isDarkMode ? "bg-black" : "bg-white");
    const textColor = isDarkMode ? "text-white" : "text-black";

    const challengeList = [
        {
            header: "User Experience",
            description: "Design a mobile-first experience that not only resolved accessibility issues but also enhanced the core functionality of the platform",
            icon: BiRightArrow,
        },
        {
            header: "Community",
            description: "We knew we wanted students to connect more on the app and in real life events.",
            icon: BiRightArrow,
        },
        {
            header: "Consolidating",
            description: "Due to the current user experience, we had many students navigation through many edtech platforms we were levergaing and wanted an all in one spot for students to inhabit.",
            icon: BiRightArrow,
        },
    ];

    const journeyList = [
        {
            header: "Mobile Friction",
            description: "68% of our users attempted to access the web app on their phones, but the experience was clunky and unoptimized, leading to a high bounce rate of 47%.",
            icon: BiRightArrow,
        },
        {
            header: "Community Engagement Decline:",
            description: "Forum interactions had dropped by 23% over six months, indicating a lack of incentive to participate.",
            icon: BiRightArrow,
        },
        {
            header: "Learning Accessibility Gaps",
            description: "Users expressed frustration in accessing educational resources, with 40% abandoning courses before completion due to poor navigation.",
            icon: BiRightArrow,
        },
    ];


    const collabList = [
        {
            header: "Active Users",
            description: "Wanted a more fluid way to engage in discussions and stay updated with relevant content.",
            icon: BiRightArrow,
        },
        {
            header: "Inactive Users",
            description: "Cited difficulty in using the web app on their phones as the primary reason they disengaged.",
            icon: BiRightArrow,
        },
        {
            header: "new Users",
            description: "Expressed interest in structured learning paths but found the platform difficult to navigate.",
            icon: BiRightArrow,
        },

    ];

    const designList = [

        {
            header: "Community-Centric Mobile App",
            description: "Introduced a personalized feed showcasing discussions, updates, and relevant content. Implemented real-time notifications to keep users engaged without overwhelming them.",
            icon: BiRightArrow,
        },
        {
            header: "Revamped Learning Experience",
            description: "Developed bite-sized, mobile-friendly courses with progress tracking. Improved navigation with a tabbed interface, allowing users to seamlessly switch between learning modules and discussions.",
            icon: BiRightArrow,
        },
        {
            header: "Accessibility & Usability Improvements",
            description: "Dark mode and text resizing options for better readability. Voice-to-text functionality for posting and engaging in discussions on the go.",
            icon: BiRightArrow,
        },

    ];
    const impactList = [
        {
            header: "Mobile Adoption",
            description: "Within three months, 75% of users had transitioned to the mobile app as their primary access point.",
            icon: BiRightArrow,
        },
        {
            header: "Increased Community Engagement",
            description: " Forum activity surged by 41%, and average session time increased by 35%.",
            icon: BiRightArrow,
        },
        {
            header: "Course Completion Rates",
            description: "Course completion rates improved from 27% to 62% after implementing a streamlined learning experience.",
            icon: BiRightArrow,
        },
    ];

    const resultList = [
        {
            header: "User Research is Paramount",
            description: "Our approach was guided by data and direct user feedback, ensuring our solutions addressed real pain points.",
            icon: BiRightArrow,
        },
        {
            header: "Accessibility Equals Growth",
            description: "By making the platform more accessible, we naturally saw an increase in user engagement and retention.",
            icon: BiRightArrow,
        },
        {
            header: "teration Drives Success",
            description: "Prototyping and user testing helped us refine the app before launch, ensuring a smooth transition and positive reception.",
            icon: BiRightArrow,
        },

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
                            N.S.L.S.
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
                            Crafting A Place To Connect
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
                            The National Society of Leadership and Success (or NSLS) noticed they had plenty of students in their courses but very little traction on the community aspect of the web and mobile app, this feature was intended to bring students into forumns and events to conenct in person and online yet the average online forum had 2-3 users per course. We saw the need to create a more robust environment and due to the school system's timeline we knew we had to act quickly.
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
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Role</h4>
                                    <p className="md:text-md">Senior Product Designer</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">Duration</h4>
                                    <p className="md:text-md">8 Months</p>
                                </motion.div>



                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">My Team</h4>
                                    <p className="md:text-md">Product Manager, Engineering Lead, Front End Developers, and QA</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                    viewport={{ once: true }}
                                    className="col-span-1 md:col-span-1 w-full"
                                >
                                    <h4 className="font-semibold md:text-xl mb-3 text-orange-500">Industry</h4>
                                    <p className="md:text-md">Higher Education Technology</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>




                </div>

                {/* Image Section */}
                <div className="relative flex order-1 lg:order-2 bg-red-950">
                    <motion.img
                        src={nslsDesktop}
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
                        paragraph="NSLS web app had long been the primary touchpoint for our users, offering a robust set of features that helped them connect, share insights, and grow within their respective communities. However, as our user base expanded, we noticed a troubling pattern—engagement was stagnating, and accessibility concerns were becoming more apparent. Users were struggling to navigate the web experience on mobile devices, and as a result, participation in community discussions and learning opportunities had declined."
                        number="1. "
                        items={challengeList}

                    />
                </div>

                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center px-6  p-4`}>

                    <motion.img
                        src={nslsCourses}
                        className={`${isDarkMode ? "" : ""} 
                w-full 
                sm:w-full md:w-full lg:w-3/5
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
                            src={nslsJourney}



                        />
                        <p>Feature Journey</p>
                    </div>

                </motion.div>

                {/* Text Section */}
                <div className="flex items-start justify-center">
                    <AnimatedBulletList
                        heading="Gathering Initial Information"
                        paragraph="Through analytics and user feedback, we uncovered key issues that prevented our users from fully engaging with our platform:"
                        endingParagraph="It became evident that if we wanted to foster growth, we needed to meet users where they were on their mobile devices with an experience tailored to their needs"
                        number="2. "
                        items={journeyList}
                    />
                </div>
            </section>





            {/* DESIGN */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 lg:h-full py-10 lg:py-20`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Understanding Our Students"
                        paragraph="To gain deeper insights, we conducted interviews with 12 active users and 8 inactive users to understand their frustrations and expectations:"
                        number="3. "
                        items={collabList}
                        endingParagraph="One recurring theme emerged: users wanted a centralized, intuitive, and mobile-friendly experience that would allow them to interact with their community and learn at their own pace."
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
                            className="mb-4 rounded-lg lg:w-3/4"
                            src={nslsModules}


                        />

                        <p>Example: Modules</p>
                    </motion.div>



                </div>
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
                        src={nslsFeed}
                        className="w-full rounded  object-cover lg:w-3/4"
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
                        heading="Bringing People Together Through Design"
                        paragraph="With our research in hand, we focused on three major design enhancements:"
                        number="4. "
                        items={designList}
                        endingParagraph="We employed an iterative design process, testing prototypes with select users before refining interactions to ensure a frictionless experience."
                    />
                </div>
            </section>


            {/* VALIDATION*/}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-full`}
            >
                {/* Text Section */}
                <div className="flex items-center justify-center ">
                    <AnimatedBulletList
                        heading="Outcome &amp; Impact"
                        paragraph="The launch of the mobile app marked a turning point for user engagement and accessibility:"
                        number="5. "
                        items={impactList}
                        endingParagraph="The data validated our efforts users not only embraced the mobile-first approach but actively engaged in ways they hadn’t before."
                    />
                </div>
                {/* Image Section */}
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={nslsImpact}
                        className="w-full h-full object-contain p-4 lg:w-3/4 rounded-lg"
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


            {/* RESULTS */}
            <section
                className={` ${isDarkMode ? "text-white bg-black " : "text-black bg-white "
                    } grid grid-cols-1 lg:grid-cols-2 xl:h-[90vh]`}
            >
                <div className={` ${isDarkMode ? "" : ""} flex items-center justify-center`}>
                    <motion.img
                        src={appScreens}
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
                        paragraph="Reflecting on this journey, a few key takeaways stood out:"
                        number="6. "
                        items={resultList}
                        endingParagraph="This case study reinforced a vital lesson—great design isn’t just about aesthetics; it’s about creating solutions that empower users. By focusing on accessibility and community-driven engagement, we transformed our platform into a space where users could connect, learn, and grow effortlessly."
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


                    <a href="/Koopid" className=" text-center rounded-md items-center flex justify-center  ">
                        <div className="h-full w-full">
                            <p className="py-4 text-xl">
                                Explore Koopid's Product Redesign
                            </p>
                            <img src={koopidCaseImg} className="block rounded-md h-full object-contain mx-auto" />
                        </div>

                    </a>

                </div>
            </section>


        </>
    );
};

export default transition(Nsls);
