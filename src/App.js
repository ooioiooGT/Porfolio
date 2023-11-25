import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Footer";
import Project from "./Components/Project";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<Project /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
