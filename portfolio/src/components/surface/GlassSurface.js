import React, { forwardRef } from "react";

const GlassSurface = forwardRef(
  (
    {
      children,
      className = "",
      style = {},
      blur = "blur-md", // Tailwind blur class
      bgOpacity = "bg-white/10", // or bg-white/30, etc.
      border = true,
      padding = "p-4",
      rounded = "rounded-2xl",
      shadow = "shadow-xl",
    },
    ref
  ) => {
    const baseClasses = [
      "backdrop-blur",
      blur,
      bgOpacity,
      rounded,
      shadow,
      padding,
      "relative",
      "border",
      "border-white/20",
      "transition-all",
      "duration-300",
      className,
    ];

    if (!border) {
      baseClasses.splice(baseClasses.indexOf("border"), 1);
      baseClasses.splice(baseClasses.indexOf("border-white/20"), 1);
    }

    return (
      <div ref={ref} className={baseClasses.join(" ")} style={style}>
        {/* Optional highlight effect */}
        <div className="absolute inset-0 bg-white/5 rounded-[inherit] pointer-events-none" />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

export default GlassSurface;
