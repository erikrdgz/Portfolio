import { motion } from "framer-motion";
import { useDarkMode } from "../../DarkModeContext";
import { FaReact } from "react-icons/fa";

const HeroSection = () => {
  const { isDarkMode } = useDarkMode();

  // Animation variants for the two words
  const productVariant = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut", delay: 0.6 },
    },
  };

  const designerVariant = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut", delay: 0.65 },
    },
  };


  return (
    <div className={`relative flex h-screen transition-all duration-500`}>
      <div className="flex items-center justify-center w-full h-full overflow-hidden px-9">
        <div className="w-full md:grid md:grid-cols-2 md:gap-8">
          <div className="flex md:justify-center items-center md:items-end">
            <motion.div
              className="flex flex-col items-center md:items-start justify-center pb-9 md:pb-0"
            // You can add stagger here if you want group control
            >
              <h1
                className={`${isDarkMode ? "text-white" : "text-black"} font-bold text-6xl md:text-7xl xl:text-9xl leading-tight`}
              >
                <motion.span
                  variants={productVariant}
                  initial="initial"
                  animate="animate"
                  style={{ display: "block", position: "relative", willChange: "transform" }}
                >
                  Product
                </motion.span>
                <motion.span
                  variants={designerVariant}
                  initial="initial"
                  animate="animate"
                  style={{ display: "block", position: "relative", willChange: "transform" }}
                  className="text-cyan-400"
                >
                  Designer
                </motion.span>
              </h1>
            </motion.div>
          </div>

          {/* Right Column - Paragraph */}
          <div className="flex justify-center items-end md:justify-start md:items-end md:mt-0">
            <div className="w-full md:w-10/12">
              <motion.p
                className={`${isDarkMode ? "text-white" : "text-black"
                  } md:text-left text-lg md:text-md lg:text-md xl:text-xl`}
                initial={{ opacity: 0, x: -4 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.7 },
                }}
              >
                Welcome, I’m Erik, a product designer based in Denver. I’m passionate about
                creating digital products that are easy to use and enjoyable to interact
                with. I roll up my sleeves to design and code, making sure every detail
                supports a great user experience. Whether working on the design or the
                development side, I focus on building solutions that truly work.
                <br />
                <span className="text-sm mt-4 flex items-center gap-1">
                  Fun fact — I coded this with React{" "}
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  >
                    <FaReact className="text-[#61DBFB]" />
                  </motion.span>
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
