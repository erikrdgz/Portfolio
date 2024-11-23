import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Use the custom hook for dark mode

const Card = ({ title, desc, role, tags, bgColor }) => {
  const { isDarkMode } = useDarkMode(); // Get dark mode state

  return (
    <div className="cursor-pointer">
      <div
        className={`relative overflow-hidden ${bgColor} flex flex-col w-full aspect-square`}
      >
        {/* Image on top */}
        <div
          className="w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/500/500')", // Placeholder image
          }}
        ></div>

        {/* Card details underneath */}
        <div className="p-4 flex flex-col">
          {/* Title */}
          <p
            className={`${isDarkMode ? "text-white" : "text-black"} text-2xl md:text-5xl font-bold mb-4`}
          >
            {title}
          </p>
          <hr className="border-black my-4" />

          {/* Problem */}
          {desc && (
            <div className="grid grid-cols-12 mb-2">
              <p
                className={`${isDarkMode ? "text-white" : "text-black"} text-sm col-span-8`}
              >
                <strong>Summary:</strong> {desc}
              </p>
            </div>
          )}

     

          {/* Role */}
          {role && (
            <div className="grid grid-cols-12 my-2">
              <p
                className={`${isDarkMode ? "text-white" : "text-black"} text-sm col-span-8`}
              >
                <strong>Role:</strong> {role}
              </p>
            </div>
          )}

          {/* Tags */}
          {tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${
                    isDarkMode ? " text-white" : " text-black"
                  }  py-2 text-xs rounded-full`}
                >
                  {tag + " " + "+" + " "}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
