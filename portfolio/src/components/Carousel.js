import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from './Layout/ProjectLayout'; // Import your dynamic layout component

import { ReactComponent as KoopidSVG } from "../assets/images/koopid-case-img.svg";
import { ReactComponent as DialpadSVG } from "../assets/images/dialpad-case-img.svg";
import { ReactComponent as NslsSVG } from "../assets/images/nsls-case-img.svg";

const Carousel = () => {
  const projects = [
    {
      title: 'Koopid',
      position: 'Product Designer',
      year: '2020',
      summary: 'Porem ipsum dolor sit amet, consectetur adipiscing elit...',
      link: '/koopid-case-study',
      image: <KoopidSVG />,
      skills: ['React', 'Figma', 'User Research'],
    },
    {
      title: 'Dialpad',
      position: 'UX Engineer',
      year: '2021',
      summary: 'Aliquam convallis leo eget turpis suscipit aliquet...',
      link: '/dialpad-case-study',
      image: <DialpadSVG />,
      skills: ['React', 'Figma', 'User Research'],
    },
    {
      title: 'NSLS',
      position: 'UI Designer',
      year: '2022',
      summary: 'Curabitur tristique tortor at vestibulum pharetra...',
      link: '/nsls-case-study',
      image: <NslsSVG />,
      skills: ['React', 'Figma', 'User Research'],
    },
  ];

  // Set up scroll tracking
  const { scrollXProgress } = useScroll();
  const scrollPosition = useTransform(scrollXProgress, [0, 1], [0, -(projects.length - 1) * 100]);

  return (
    <div className="overflow-x-scroll flex snap-x w-full">
      {/* Wrapper for the scrollable content */}
      <motion.div
        className="flex"
        
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-screen snap-start" // Each slide takes full width of the viewport
            initial={{ opacity: 0, x: 100 }} // Start from the right side
            whileInView={{ opacity: 1, x: 0 }} // Move to the center when in view
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <ProjectLayout
              title={project.title}
              position={project.position}
              year={project.year}
              summary={project.summary}
              link={project.link}
              image={project.image}
              skills={project.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
