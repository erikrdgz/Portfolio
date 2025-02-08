import { motion, useAnimationFrame } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedNumber = ({ value, isPercentage = false, duration = 2 }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const start = 0; // Starting value
    const end = value; // Target value
    const increment = (end - start) / (duration * 60); // Increment per frame (assuming 60 FPS)
    let frame = 0;

    const updateValue = () => {
      frame++;
      const progress = Math.min(frame / (duration * 60), 1); // Ensure we don't go over 100%
      setCurrentValue(start + progress * (end - start));

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    updateValue();
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl lg:text-6xl font-semibold text-orange-500"
    >
      {currentValue.toFixed(isPercentage ? 0 : 2)}
      {isPercentage && "%"}
    </motion.div>
  );
};

export default AnimatedNumber;
