import React from "react";

const LiquidGlass = ({ children, className = "", isDarkMode = false,  }) => {
  return (
    <div className={`relative overflow-hidden ${className} `}>
      {/* Glass distortion effect */}
      <div
        className={`absolute inset-0 `}
        style={{
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
          
        }}
      ></div>

      {/* Tint overlay */}
      <div
        className={`absolute inset-0 `}
        style={{
           border: "2px solid rgba(255,255,255,0.6)",
           borderRadius: "inherit",
          background: isDarkMode
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0)",
        }}
      ></div>

      {/* Shine / highlight effect */}
      <div
        className={`absolute inset-0 `}
       style={{
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: "2px",
    borderImage: "linear-gradient(-20deg, rgba(0,0,0,0.4), rgba(255,255,255,0.4)) 1",
  }}
      ></div>

      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* SVG filter (hidden) */}
      <svg style={{ display: "none" }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="5" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
};


export default LiquidGlass;
