import { useRef, useEffect } from "react";

const GlareHover = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#00ffff",
  glareOpacity = 0.15,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 2000,
  className = "",
  style = {},
}) => {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  // Convert hex to rgba with glareOpacity
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    const el = overlayRef.current;
    const container = containerRef.current;

    // Initial background position off-screen to left/top
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.style.transition = `background-position ${transitionDuration}ms ease-in-out`;

    const runAnimation = () => {
      el.style.backgroundPosition = "100% 100%, 0 0";
      // Reset to start after transitionDuration + small delay so it can loop on hover
      setTimeout(() => {
        if (el) el.style.backgroundPosition = "-100% -100%, 0 0";
      }, transitionDuration + 100);
    };

    // Intersection Observer to auto-run animation when in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [transitionDuration]);

  // On hover, trigger the same animation
  const handleMouseEnter = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.backgroundPosition = "100% 100%, 0 0";
    setTimeout(() => {
      if (el) el.style.backgroundPosition = "-100% -100%, 0 0";
    }, transitionDuration + 100);
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
      hsla(0,0%,0%,0) 60%,
      ${rgba} 70%,
      hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
  };

  return (
    <div
      ref={containerRef}
      className={`relative grid place-items-center overflow-hidden border cursor-pointer ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        border: `1px solid ${borderColor}`,
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
