import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const UserCard = ({ avatar, title, description, tasks, isDarkMode, userVariant }) => {
  return (
    <motion.div
      className={`${isDarkMode ? "bg-neutral-950" : "bg-white"} flex flex-col items-center py-4 md:p-4 rounded-lg shadow-md`} // flex-col for mobile and tablet, flex-row for desktop
      variants={userVariant}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt={`${title} Avatar`}
        className="w-16 h-16 rounded-full object-cover  md:mb-0 md:mr-4" // mb-4 for spacing on mobile, mb-0 on desktop
      />
      {/* User Info */}
      <div className="flex flex-col p-4 md:px-8">
        <h3 className="text-xl font-semibold text-center my-4">{title}</h3>
        <p className="text-sm pb-4"><span className="text-orange-500">Key Tasks:</span> {tasks}</p>
        <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-600"} mb-4 text-sm`}>{description}</p>
        
      </div>
    </motion.div>
  );
};

export default UserCard;
