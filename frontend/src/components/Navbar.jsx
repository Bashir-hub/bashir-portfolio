// ============================================================
// Navbar.jsx — Navigation Bar Component
// Fixed at the top of the screen on all pages.
// Contains logo, nav links, and a "Hire Me" CTA button.
// Turns opaque when the user scrolls down (scroll effect).
// ============================================================

import React, { useState, useEffect } from "react";

// --- Inline styles ---
// Keeping styles inside the component makes it self-contained.
// Each key is a JS object representing CSS properties.
const styles = {
  // Outer nav bar wrapper
  nav: (scrolled) => ({
    position: "fixed", // Sticks to top of screen
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Sits above all other elements
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.1rem 5vw",
    background: scrolled
      ? "rgba(10,10,10,0.95)" // Darker when user scrolls
      : "rgba(10,10,10,0.5)", // Semi-transparent at top
    backdropFilter: "blur(16px)", // Frosted glass effect
    borderBottom: scrolled
      ? "1px solid rgba(255,92,0,0.2)"
      : "1px solid transparent",
    transition: "all 0.35s ease", // Smooth transition on scroll
  }),

  // Logo text — "BSI."
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "#FF5C00",
    letterSpacing: "-0.02em",
    cursor: "pointer",
  },

  // Horizontal list of nav links
  navLinks: {
    display: "flex",
    gap: "2.2rem",
    listStyle: "none",
  },

  // Individual nav link anchor
  navLink: {
    fontSize: "0.82rem",
    color: "#999",
    textDecoration: "none",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    transition: "color 0.2s",
    fontWeight: 400,
  },

  // "Hire Me" button in the nav
  ctaBtn: {
    fontSize: "0.82rem",
    fontWeight: 600,
    background: "#FF5C00",
    color: "#fff",
    padding: "0.55rem 1.3rem",
    borderRadius: "40px",
    textDecoration: "none",
    transition: "opacity 0.2s",
    fontFamily: "'DM Sans', sans-serif",
  },

  // Mobile menu button (hamburger icon) — hidden on desktop
  mobileMenuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
};

function Navbar() {
  // Track whether the user has scrolled down
  // This lets us change the navbar appearance on scroll
  const [scrolled, setScrolled] = useState(false);

  // Track hover state for nav links
  const [hoveredLink, setHoveredLink] = useState(null);

  // useEffect runs code AFTER the component loads in the browser
  useEffect(() => {
    // This function checks scroll position
    const handleScroll = () => {
      // If user scrolled more than 50px, set scrolled to true
      setScrolled(window.scrollY > 50);
    };

    // Attach the scroll listener to the browser window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove listener when component unmounts
    // (prevents memory leaks)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array = run only once when component first loads

  // List of navigation links
  // Each item has a label (visible text) and href (section ID to scroll to)
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={styles.nav(scrolled)}>
      {/* --- Logo --- */}
      {/* Clicking the logo scrolls back to the top */}
      <a href="#hero" style={styles.logo}>
        BSI.
      </a>

      {/* --- Navigation Links --- */}
      {/* Maps over the navItems array to create each link */}
      <ul style={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{
                ...styles.navLink,
                // Change color to orange when hovered
                color: hoveredLink === item.label ? "#FF5C00" : "#999",
              }}
              onMouseEnter={() => setHoveredLink(item.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* --- Hire Me Button --- */}
      <a href="#contact" style={styles.ctaBtn}>
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;
