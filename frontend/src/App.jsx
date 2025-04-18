import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GroceryScout from "./components/GroceryScout";
import BobaDream from "./components/BobaDream";
import "./styles/global.css";
import BudgetApp from "./components/BudgetApp";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grocery-scout" element={<GroceryScout />} />
          <Route path="/boba-dream" element={<BobaDream />} />
          <Route path="/budget-app" element={<BudgetApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
