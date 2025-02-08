module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        koopid: {
          light: "#F56565",
          dark: "#C53030",
        },
        dialpad: {
          light: "#48BB78",
          dark: "#2F855A",
        },
        nsls: {
          light: "#4299E1",
          dark: "#3182CE",
        },
        button: {
          light: "#2B6CB0",
          dark: "#63B3ED",
        },
        background: {
          light: "#EDF2F7",
          dark: "#2D3748",
        },
        text: {
          light: "#2D3748",
          dark: "#E2E8F0",
        },
      },
      fontSize: {
        "10xl": "10.5rem", // 168px
        "11xl": "13rem",   // 208px
        "12xl": "16rem",   // 256px
        "13xl": "20rem",   // 320px
        "14xl": "25rem",   // 400px
        "15xl": "31rem",   // 496px
      },
      transitionProperty: {
        colors: "background-color, color, fill", // Ensure smooth transition for fill changes
      },
    },
  },
  darkMode: "class", // Enable dark mode with the "class" strategy
  
  variants: {
    extend: {
      fill: ["hover", "group-hover"], // Add hover and group-hover support for SVG fill
    },
  },
};
