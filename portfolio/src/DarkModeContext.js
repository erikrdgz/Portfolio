import React, { createContext, useState, useContext } from "react";

// Create a context
const DarkModeContext = createContext();

// Create a provider to wrap your app with
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
