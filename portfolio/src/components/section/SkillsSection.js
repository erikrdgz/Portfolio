import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";
import { useEffect, useState } from "react";

import LiquidGlass from "../surface/LiquidGlass";

const skills = [
  {
    title: "Design Strategy",
    items: [
      "UX & Product Strategy",
      "Cross-functional Collaboration",
      "Scalable Design Systems",
      "DesignOps & Team Enablement",
      "User Research & Discovery",
      "Data-informed Design Decisions",
      "Prototyping for Alignment & Validation",
    ],
  },
  {
    title: "Design Tools",
    items: [
      "Figma",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "Framer",
      "Spline 3D",
      "InDesign",
      "Webflow",
    ],
  },
  {
    title: "Development",
    items: [
      "HTML, CSS, JS",
      "Tailwind, Bootstrap",
      "React",
      "Wordpress",
      "PHP",
      "ASP.net, C#",
      "Git",
      "AWS",
    ],
  },
  {
    title: "Experience",
    items: [
      "7+ Years of Experience",
      "SaaS",
      "B2B & B2C",
      "Telecommunications",
      "Artificial Intelligence",
      "EdTech",
      "Robotics",
      "Agile Methodologies",
    ],
  },
];

// Utility hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}


export default function SkillsSection() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useIsMobile();

  // Animation parameters
  const titleVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: isMobile ? 0.3 : 0.4,
      },
    },
  };

  const listVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.06 : 0.12,
        delayChildren: isMobile ? 0.05 : 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: isMobile ? -6 : -10, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: isMobile ? 0.25 : 0.4,
      },
    },
  };

  return (
    <section className="flex flex-col items-center lg:mb-28 gap-12 px-4 lg:px-6 lg:h-[50vh]">
      {/* Skills Columns (Responsive Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start  gap-4 md:gap-6 lg:gap-8 w-full max-w-screen-xl mx-auto">
        {skills.map((skill, index) => (
          <LiquidGlass className="rounded-3xl" isDarkMode={isDarkMode}>
          <motion.div
            key={skill.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 w-full p-4  rounded-lg"
          >
            {/* Title */}
            <motion.h3
              className= {`text-lg font-bold border-b  ${isDarkMode ? "text-white border-white" : "text-gray-800 border-gray-800"}`}
              variants={titleVariant}
            >
              {skill.title}
            </motion.h3>

            {/* List Items */}
            <motion.ul
              className={`space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
              variants={listVariant}
            >
              {skill.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  className="translate-x-[-5px] text-base"
                  variants={itemVariant}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          </LiquidGlass>
        ))}
      </div>
    </section>
  );
}
