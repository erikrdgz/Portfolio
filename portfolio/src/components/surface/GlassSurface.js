import React from "react";

const GlassSurface = ({
  size = "medium",        // small | medium | large
  rounded = true,
  className = "",
  children,
  ...rest
}) => {
  return (
    <div
      className={`
        glass-container 
        ${rounded ? "glass-container--rounded" : ""} 
        glass-container--${size} 
        ${className}
      `}
      {...rest}
    >
      <div className="glass-filter" />
      <div className="glass-overlay" />
      <div className="glass-specular" />
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
