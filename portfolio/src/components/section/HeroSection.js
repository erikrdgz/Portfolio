import { motion } from "framer-motion";
import sand from "../../assets/images/sand.jpg";
import sandLight from "../../assets/images/sand-light.png";
import { useDarkMode } from "../../DarkModeContext";


const HeroSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`relative flex h-screen transition-all duration-500 bg-cover bg-bottom`}
      style={{
        backgroundImage: `url(${isDarkMode ? sand : sandLight})`, // use imported images
      }}
    >


     

      {/* Content */}
      <div className="flex items-center justify-center w-full h-full overflow-hidden px-9">
        <div className="w-full md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column - Title */}
          <div className="flex md:justify-center items-center md:items-end">
            <motion.div
              className="flex items-start md:items-end justify-center md:justify-start pb-9 md:pb-0"

            >
              <h1
                className={`${isDarkMode ? "text-white" : "text-black"} font-bold text-6xl md:text-7xl xl:text-9xl`}
              >
                {/* "Product" */}
                <span
                >
                  Product
                </span>
                <br />
                {/* "Designer" */}
                <span
                  className="text-cyan-400"
                >
                  Designer
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Right Column - Paragraph */}
          <div className="flex justify-center items-end md:justify-start md:items-end md:mt-0">
            <div className="w-full md:w-10/12">
              <motion.p
                className={`${isDarkMode ? "text-white" : "text-black"} md:text-left text-lg md:text-md lg:text-md xl:text-xl`}

              >
                Welcome, I’m Erik a product designer passionate about blending user experience, thoughtful design, and innovative solutions. Based in Denver, I focus on crafting digital products that are both intuitive to use and a joy to engage with, whether as a designer, strategist, or leader.
              </motion.p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
