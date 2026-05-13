// ============================================================
// Hero.jsx — Hero / Landing Section Component
// This is the first thing visitors see — full screen.
// Contains your name, title, tagline, CTA buttons, and stats.
// ============================================================

import React, { useEffect, useState } from "react";

function Hero() {
  // Controls whether content has faded in yet
  // We use this to trigger a CSS animation on page load
  const [visible, setVisible] = useState(false);

  // After the component loads, trigger the fade-in animation
  useEffect(() => {
    // Small delay makes the animation feel intentional
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // --- Styles ---
  const sectionStyle = {
    minHeight: "100vh", // Full viewport height
    display: "flex",
    alignItems: "center",
    padding: "8rem 5vw 5rem",
    position: "relative",
    overflow: "hidden", // Clip background shapes
    background: "#0A0A0A",
  };

  // Large glowing circle — top right decorative element
  const circle1Style = {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "rgba(255,92,0,0.10)",
    filter: "blur(100px)", // Soft blur creates glow effect
    top: "-120px",
    right: "-150px",
    pointerEvents: "none", // Can't be clicked — decorative only
  };

  // Smaller circle — bottom left
  const circle2Style = {
    position: "absolute",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    background: "rgba(255,184,0,0.06)",
    filter: "blur(80px)",
    bottom: "-60px",
    left: "-80px",
    pointerEvents: "none",
  };

  // Content wrapper — controls fade-in animation
  const contentStyle = {
    maxWidth: "700px",
    position: "relative", // Sits above background circles
    zIndex: 2,
    opacity: visible ? 1 : 0, // Hidden until visible = true
    transform: visible ? "translateY(0)" : "translateY(28px)", // Slides up
    transition: "opacity 0.8s ease, transform 0.8s ease", // Smooth animation
  };

  // "Available for Freelance" badge at the top
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255,92,0,0.12)",
    border: "1px solid rgba(255,92,0,0.3)",
    color: "#FF5C00",
    fontSize: "0.72rem",
    fontWeight: 600,
    padding: "0.45rem 1.1rem",
    borderRadius: "40px",
    marginBottom: "1.8rem",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
  };

  // The animated green dot inside the badge
  const dotStyle = {
    width: "7px",
    height: "7px",
    background: "#FF5C00",
    borderRadius: "50%",
    animation: "pulse 1.8s infinite", // CSS keyframe defined in App.css
  };

  // Main heading H1
  const h1Style = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)", // Responsive font size
    fontWeight: 800,
    lineHeight: 1.06,
    letterSpacing: "-0.03em",
    marginBottom: "1.5rem",
    color: "#F0EDE6",
  };

  // Orange highlighted text in the heading
  const spanStyle = {
    color: "#FF5C00",
  };

  // Subtitle / description paragraph
  const subStyle = {
    fontSize: "1.05rem",
    color: "#999",
    lineHeight: 1.8,
    maxWidth: "530px",
    marginBottom: "2.4rem",
  };

  // Wrapper for the two CTA buttons
  const btnsStyle = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "3.5rem",
  };

  // Stats row at the bottom of the hero
  const statsStyle = {
    display: "flex",
    gap: "2.8rem",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.07)",
    flexWrap: "wrap",
  };

  // Individual stat number
  const statNumStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    color: "#FF5C00",
    lineHeight: 1,
  };

  // Stat label below the number
  const statLabelStyle = {
    fontSize: "0.75rem",
    color: "#555",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginTop: "4px",
  };

  return (
    <section id="hero" style={sectionStyle}>
      {/* --- Decorative Background Circles --- */}
      <div style={circle1Style} />
      <div style={circle2Style} />

      {/* --- Main Content --- */}
      <div style={contentStyle}>
        {/* Availability Badge */}
        <div style={badgeStyle}>
          <span style={dotStyle} />
          Available for Freelance
        </div>

        {/* Main Heading — your name and title */}
        <h1 style={h1Style}>
          Hi, I'm
          <br />
          <span style={spanStyle}>
            Bashir Sani
            <br />
            Ibrahim
          </span>
        </h1>

        {/* Short professional description */}
        <p style={subStyle}>
          Full-Stack Developer & AI Engineer specialising in Django, Machine
          Learning, and IoT systems. I build intelligent, data-driven solutions
          that work in the real world.
        </p>

        {/* Call-to-Action Buttons */}
        <div style={btnsStyle}>
          {/* Primary button — leads to projects section */}
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          {/* Secondary button — leads to contact section */}
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </div>

        {/* Stats Row — numbers that build social proof */}
        <div style={statsStyle}>
          <div>
            <div style={statNumStyle}>3+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </div>

          <div>
            <div style={statNumStyle}>20+</div>
            <div style={statLabelStyle}>Projects Delivered</div>
          </div>

          <div>
            <div style={statNumStyle}>5★</div>
            <div style={statLabelStyle}>Client Rating</div>
          </div>

          <div>
            <div style={statNumStyle}>100%</div>
            <div style={statLabelStyle}>Job Success</div>
          </div>
        </div>
      </div>

      {/* CSS keyframe for the pulsing dot animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
