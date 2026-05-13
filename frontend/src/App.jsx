// ============================================================
// App.jsx — Root Component
// Brings together all sections of Bashir's portfolio.
// Each section is its own component in the /components folder.
// ============================================================

import React from "react";

// Import all section components with explicit .jsx extensions
// This prevents "Module not found" errors on some setups
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Import global styles
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Fixed navigation bar */}
      <Navbar />

      {/* All page sections stacked vertically */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
