import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";

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
      "ASP.net, C#",
      "Wordpress",
      "PHP",
      "Git",
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
      "Agile Methodologies",
    ],
  },
];


export default function SkillsSection() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="flex flex-col items-center  gap-12 px-6 lg:h-[50vh]">
      {/* Skills Columns (Responsive Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-start  gap-4 md:gap-6 lg:gap-8 w-full max-w-screen-lg mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 w-full"
          >
            {/* Title */}
            <motion.h3
              className= {`text-base font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.2 * index } },
              }}
            >
              {skill.title}
            </motion.h3>

            {/* List Items */}
            <motion.ul
              className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4 + 0.2 * index,
                  },
                },
              }}
            >
              {skill.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  className="translate-x-[-10px] text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
