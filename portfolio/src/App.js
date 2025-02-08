import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Koopid from "./pages/Koopid";
import Dialpad from "./pages/Dialpad";
import NSLS from "./pages/Nsls";
import Designs from "./pages/Designs";
import About from "./pages/About";
import "./App.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import the DarkModeProvider to wrap the app
import { DarkModeProvider } from "./DarkModeContext";

// Import AnimatePresence for page transition animations
import { AnimatePresence } from "framer-motion";
import FloatingSocialBar from "./components/FloatingSocialBar";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

import CustomCursor from "./components/CustomCursor";


const App = () => {

  const location = useLocation();

  return (
    <DarkModeProvider>
       <ScrollToTop /> 
       {/* <CustomCursor/> */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow "> {/* Adjust pt-[64px] to match the navbar height */}
        <AnimatePresence mode="wait"> {/* Wrap the Routes to handle transition on page exit */}
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/Koopid" element={<Koopid />} />
              <Route path="/Dialpad" element={<Dialpad />} />
              <Route path="/NSLS" element={<NSLS />} />
              <Route path="/Designs" element={<Designs/>} />
              <Route path="/About" element={<About/>} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
            </AnimatePresence>
        </div>
        <Footer />
        <FloatingSocialBar/>       
        
      </div>
    </DarkModeProvider>
  );
};

export default App;
