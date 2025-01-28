import { motion } from "framer-motion";
import CircleButton from "../buttons/CircleButton";
import { useDarkMode } from "../../DarkModeContext";

const CaseStudyCard = ({
    imageSrc,
    title,
    description,
    chips = [],
    buttonLink,
    
}) => {
    const { isDarkMode } = useDarkMode();
    return (
        <section className="grid grid-cols-1 md:grid-cols-2  py-12 px-9">
            {/* Image Section */}
            <div>
                <div
                    className={`${
                        isDarkMode ? "" : ""
                    } flex items-end justify-center`}
                >
                    <motion.img
                        src={imageSrc}
                        className="object-contain max-w-[650px] max-h-[650px] border rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="h-full flex items-center justify-start">
                <div className="pt-4 md:px-4">
                    <h2 className="text-5xl lg:text-9xl font-bold pb-4 lg:pb-9">{title}</h2>
                    <p className="text-xl md:text-base lg:text-3xl mb-8 md:mb-6 lg:mb-12 leading-loose">
                        {description}
                    </p>
                    <div className="my-4 mb-6 flex flex-wrap gap-2">
                        {chips.map((chip, index) => (
                            <span
                                key={index}
                                className={`${isDarkMode ? "text-gray-600 " : "text-gray-700"}  px-4 py-2  text-xsm lg:text-base`}
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                    <CircleButton href={buttonLink} />
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCard;
