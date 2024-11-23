import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Koopid from "./pages/Koopid";
import Dialpad from "./pages/Dialpad";
import NSLS from "./pages/Nsls";
import "./App.css";

// Import the DarkModeProvider to wrap the app
import { DarkModeProvider } from "./DarkModeContext";

// Import AnimatePresence for page transition animations
import { AnimatePresence } from "framer-motion";

const App = () => {

  const location = useLocation();

  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow pt-[64px]"> {/* Adjust pt-[64px] to match the navbar height */}
        <AnimatePresence mode="wait"> {/* Wrap the Routes to handle transition on page exit */}
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/Koopid" element={<Koopid />} />
              <Route path="/Dialpad" element={<Dialpad />} />
              <Route path="/NSLS" element={<NSLS />} />
            </Routes>
            </AnimatePresence>
        </div>
       
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
