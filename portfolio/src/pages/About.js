import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import transition from "../transitions";
import me from "../assets/images/Erik-about.png";
import resume from "../assets/Resume-2025.pdf";

const About = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <section className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 pt-20 py-12 md:pt-24 p-8 flex flex-col items-center lg:h-[100vh]`}>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={me}
                            alt="About us"
                            className="  w-full max-w-sm md:max-w-2xl"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-8xl font-bold mb-8">About Me</h2>
                        <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-500"} my-4 text-sm md:text-md`}>


                            Hey, I'm Erik! I'm a product designer from Chicago, IL, currently living in Denver, CO. I've always been both a tech nerd and an art kid, and I knew I wanted to bridge the two together. That passion led me to Denver, where I pursued my dream. I started my journey here as a software engineer through the first U.S. Department of Labor-sponsored Software Engineering program at Techtonic Academy. I was trained in full-stack development, but over the years, I gravitated toward the front-end side, allowing me to merge my technical skills with my design expertise.
                        </p>
                        <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-500"} my-4 text-sm md:text-md`}>
                            In terms of experience, I’ve had the privilege of working with a wide range of companies, from small local design shops to billion-dollar corporations. Each place has presented its own exciting challenges, and I’ve always appreciated the collaborative opportunities that help drive projects forward. I thrive on tackling complex problems and creating design solutions that address them effectively. My unique expertise in both design and development enables me to bridge the gap between the two disciplines, making collaboration smoother and more efficient.
                        </p>
                        <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-500"} my-4 text-sm md:text-md`}>
                            Outside of work, you’ll find me snowboarding in the winter and enjoying rooftop patios with friends and family in the summer. My dog, Banksy, keeps me plenty busy with his antics. I also love playing guitar, drawing, 3D modeling, animating, designing, painting, learning new instruments, and diving into sci-fi books.
                        </p>
                        <a
                            href={resume}
                            download
                            className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
                        >
                            Download My Resume
                        </a>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};
export default transition(About);
