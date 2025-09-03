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

import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import { AnimatePresence } from "framer-motion";
import FloatingSocialBar from "./components/FloatingSocialBar";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
// import CustomCursor from "./components/CustomCursor";

import sand from "./assets/images/sand.jpg";
import sandLight from "./assets/images/sand-light.png";

import ParallaxBackground from "./components/ParallaxBackground";

import { Analytics } from "@vercel/analytics/react"

// Wrapper component to apply dynamic background
const AppLayout = () => {
  const location = useLocation();
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* ✅ Add this outside the main layout to act as background */}
      <ParallaxBackground image={isDarkMode ? sand : sandLight} />

      <div className="min-h-screen flex flex-col relative z-10">
        <ScrollToTop />
        {/* <CustomCursor /> */}
        <Navbar />

        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/Koopid" element={<Koopid />} />
              <Route path="/Dialpad" element={<Dialpad />} />
              <Route path="/NSLS" element={<NSLS />} />
              <Route path="/Designs" element={<Designs />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
        <FloatingSocialBar />
      </div>
    </>
  );
};

const App = () => (
  <DarkModeProvider>
    <AppLayout />
     <Analytics />
  </DarkModeProvider>
);

export default App;
