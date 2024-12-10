import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { useDarkMode } from "../../DarkModeContext";

// Masks for the reveal effect
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ProjectLayout = ({
  title,
  position,
  year,
  summary,
  link,
  skills = [],
  image,
  color,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const safeSkills = Array.isArray(skills) ? skills : [];
  const { isDarkMode } = useDarkMode();
  return (
    <section className="xl:h-[85vh] my-8">
      <div className="grid grid-cols-5 xl:grid-rows-2 h-full">
        {/* Block 1 */}
        <div className="col-span-5 xl:col-span-3 xl:row-span-2 xl:col-start-1 xl:row-start-3 overflow-hidden  lg:h-full">
          <div className={`border ${isDarkMode ? 'border-white' : 'border-black'} relative  pb-4 md:pb-0`}>
            {/* Title Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
              viewport={{ once: true }}
            >
              <p
                className={`${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} text-4xl xl:text-8xl inline-block py-4 px-8 xl:px-32 uppercase font-bold`}
                id="title"
              >
                {title}
              </p>
            </motion.div>

            {/* Position Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl  xl:text-4xl py-8 px-4  xl:px-32`}
              id="position"
            >
              <p>{position}</p>
            </motion.div>

            {/* Year Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute bottom-20 right-0"
            >
              <p className={`-rotate-90 text-${isDarkMode ? 'gray-300' : 'black'} text-lg xl:text-3xl font-bold`} id="year">
                {year}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Block 2 */}
        <Link
          to={link}
          className="col-span-5 relative lg:col-span-3 lg:row-span-3 lg:row-start-2 xl:col-span-2 xl:row-span-4 xl:col-start-4 xl:row-start-1 aspect-square transform transition-transform duration-300  h-full w-full"
        >
          {/* Box with Arrow */}
          <div
            className={`${isDarkMode ? "bg-white text-black" : "bg-black text-white"} absolute top-0 right-0 w-16 h-16 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10`}
          >
            <HiArrowUpRight fontSize={24} />
          </div>

          {/* SVG Mask Animation */}
          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className={`absolute inset-0 border ${isDarkMode ? 'border-white' : 'border-black'} z-0 card-container`}
          >
            {React.cloneElement(image, {
              className: 'absolute inset-0 w-full h-full object-cover bg-svg-default',
              onLoad: () => setIsLoaded(true),
            })}
          </motion.div>
        </Link>

        {/* Block 3 */}
        <div className="col-span-5 lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-2 xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-1">
          <div className={`border ${isDarkMode ? 'border-white' : 'border-black'} p-4 md:px-12 flex items-start justify-center h-full`}>
            <div>
              {/* Summary Animation */}
              <motion.p
                id="summary"
                className={`pb-8 text-${isDarkMode ? 'gray-300' : 'black'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {summary}
              </motion.p>

              {/* Button Animation */}
              <motion.div
                id="button"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Link
                  to={link}
                  className={`text-${isDarkMode ? 'gray-300' : 'black'} font-bold text-teal-400 transition-colors duration-300 text-2xl xl:text-4xl`}
                >
                  View Case Study
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Block 4 */}
        <div className="col-span-5 lg:col-span-2 lg:col-start-4 xl:col-span-1 lg:row-start-4 xl:row-span-2 xl:col-start-3 xl:row-start-1">
          <div className={`border ${isDarkMode ? 'border-white' : 'border-black'} p-4 md:p-8 flex items-start justify-start h-full`}>
            <div className="h-full">
              <motion.ul
                className={`list-none text-${isDarkMode ? 'gray-300' : 'black'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
                }}
              >
                {safeSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -20 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLayout;
