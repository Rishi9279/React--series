import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Plans from "./components/Plans";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Float from "./components/Float";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#222",
        
      }}>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "12px 16px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        }}>
        {isDark ? "☀" : "🌙"}
      </button>
      <Navbar />

      <Hero />
      <About />
      <Plans />
      <Calculator />
      <Contact />
      <Footer />
      <Float />
    </div>
  );
};

export default App;
