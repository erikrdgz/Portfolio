import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";

const AnimatedBulletList = ({ heading, number, items }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={` ${isDarkMode ? "":""} w-full`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        
        transition={{ duration: 0.5 }}
        className={`${isDarkMode ? "bg-zinc-950 text-white" : "bg-zinc-100 text-black"} text-2xl md:text-4xl xl:text-6xl py-8 mb-6`}
      >
        
        <span className="text-teal-400 p-4">{number}</span>{heading}
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
       
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="space-y-4 p-8"
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center space-x-4"
          >
            <item.icon  className=" text-9xl md:text-4xl" />
            <p>{item.text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default AnimatedBulletList;
