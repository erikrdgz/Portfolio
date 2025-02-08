import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import transition from "../transitions";

// Import all images dynamically from the designs folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../assets/images/designs", false, /\.(png|jpe?g|svg)$/));

const Designs = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // State for the current image tilt
  const [activeIndex, setActiveIndex] = useState(null); // Track which image is being hovered over

  const closeModal = () => setSelectedImage(null); // Function to close the modal

  // Function to handle image tilt based on mouse position
  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // X-axis tilt
    const y = (e.clientY - top) / height - 0.5; // Y-axis tilt

    // Set the tilt values only for the hovered image
    setActiveIndex(index);
    setTilt({ x: x, y: -y }); // Invert tilt to tilt towards cursor
  };

  // Function to reset tilt when mouse leaves
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setActiveIndex(null);
  };

  return (
    <section className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} pt-20 py-12 md:pt-24 p-8 flex flex-col items-center overflow-hidden`}>
      {/* Title and Paragraph */}
      <div className="text-center mb-8">
        <motion.h1
          className="text-4xl md:text-9xl font-bold pt-24 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          UI Designs
        </motion.h1>
        <motion.p
          className={`${isDarkMode ? "text-neutral-400" : "text-neutral-900"} max-w-7xl text-lg md:text-lg mb-8`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Explore a curated collection of creative designs that showcase my passion for detail and innovation. I like to exercise my creative muscle and quickly create some interfaces to later study and better attempt to understand the creative flow in my head.
        </motion.p>
      </div>

      {/* Image Gallery */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Stagger the children with a 0.2s delay
            },
          },
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded "
            initial={{ opacity: 0, y: 50 }} // Start off-screen, moving up
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            viewport={{ once: true }} // Trigger when the image is in the viewport
            transition={{
              delay: index * 0.1, // Stagger delay for each image
              type: "spring", // Use spring physics for the animation
              stiffness: 500, // Set stiffness for the spring effect
              damping: 25, // Set damping to control how bouncy the animation is
            }}
            onClick={() => setSelectedImage(src)} // Set the selected image on click
          >
            <motion.div
              className="w-full h-full"
              onMouseMove={(e) => handleMouseMove(e, index)} // Pass the index
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={`Design ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer rounded shadow-lg"
                style={{
                  transform: activeIndex === index ? `perspective(600px) rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)` : 'none',
                  transition: "transform 0.1s", // Smooth transition for tilt
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-3xl font-bold"
            >
              &times;
            </button>

            {/* Image with animation */}
            <motion.img
              src={selectedImage}
              alt="Selected Design"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default transition(Designs);
