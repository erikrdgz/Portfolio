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
      transitionProperty: {
        'colors': 'background-color, color', // Ensure smooth transition for color changes
      },
    },
  },
  darkMode: 'class', // Enable dark mode with the "class" strategy
  plugins: [],
};
