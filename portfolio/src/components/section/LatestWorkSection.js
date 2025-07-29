// components/section/LatestWorkSection.js

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const LatestWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section
      className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="latest-work-heading"
    >
      <div className="container w-full px-6 sm:px-10 md:px-10 text-center">
        <motion.h2
          id="latest-work-heading"
          ref={ref}
          className="text-4xl md:text-7xl xl:text-9xl font-bold text-cyan-400 whitespace-nowrap flex justify-center gap-4 md:gap-8 w-full select-none"
          style={{ lineHeight: 1.1 }}
        >
          <motion.span
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: "-10vw" }
            }
            transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
          >
            LATEST
          </motion.span>
          <motion.span
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: "10vw" }
            }
            transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
          >
            WORK
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};

export default LatestWorkSection;
