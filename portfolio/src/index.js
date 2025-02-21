import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
          <Route path="/*" element={<App/>}></Route>
      </Routes>
   </Router>
  </React.StrictMode>
);

reportWebVitals();