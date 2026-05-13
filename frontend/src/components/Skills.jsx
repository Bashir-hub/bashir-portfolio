// ============================================================
// Skills.jsx — Technical Skills Section Component
// Shows a grid of skill cards, each with an icon,
// name, description, and an animated progress bar.
// ============================================================

import React, { useEffect, useRef, useState } from "react";

// --- Skills Data ---
// Each object represents one skill card.
// To add or remove skills, just edit this array.
const skillsData = [
  {
    icon: "🐍",
    title: "Python Programming",
    desc: "Core language for backend development, automation, data processing, scripting, and AI/ML pipelines.",
    level: 92, // Percentage shown on the progress bar
    label: "Expert", // Text label next to the percentage
  },
  {
    icon: "🌐",
    title: "Django Framework",
    desc: "Building REST APIs, authentication systems, admin dashboards, and full-stack web applications.",
    level: 88,
    label: "Advanced",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    desc: "Model training, scikit-learn, TensorFlow, Pandas, data pipelines, and deploying ML models to APIs.",
    level: 80,
    label: "Proficient",
  },
  {
    icon: "⚡",
    title: "IoT Development",
    desc: "Arduino, Raspberry Pi, sensor integration, embedded firmware, MQTT protocol, and cloud connectivity.",
    level: 85,
    label: "Advanced",
  },
  {
    icon: "⚛️",
    title: "React Frontend",
    desc: "Building component-based UIs with hooks, state management, and REST API integrations.",
    level: 72,
    label: "Intermediate",
  },
  {
    icon: "📱",
    title: "AI Mobile Apps",
    desc: "Mobile applications powered by AI backends — image recognition, NLP chatbots, smart recommendations.",
    level: 65,
    label: "Intermediate",
  },
  {
    icon: "🗄️",
    title: "Databases",
    desc: "PostgreSQL, SQLite, and MySQL — schema design, ORM with Django, query optimisation.",
    level: 78,
    label: "Proficient",
  },
  {
    icon: "🔧",
    title: "REST APIs & DRF",
    desc: "Django REST Framework: serializers, viewsets, JWT auth, pagination, filtering, and API documentation.",
    level: 86,
    label: "Advanced",
  },
];

// --- Single Skill Card Component ---
// Receives one skill object as props and renders the card.
function SkillCard({ skill }) {
  // Track whether progress bar animation has started
  const [animate, setAnimate] = useState(false);

  // useRef creates a reference to the DOM element (the card div)
  // We use this to detect when the card enters the screen
  const cardRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver fires when an element enters/exits the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] is our card element
        if (entries[0].isIntersecting) {
          // Card is visible — trigger the bar animation
          setAnimate(true);
          // Stop observing once animation has started
          observer.disconnect();
        }
      },
      { threshold: 0.3 }, // Fire when 30% of the card is visible
    );

    // Start observing the card element
    if (cardRef.current) observer.observe(cardRef.current);

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect();
  }, []);

  // --- Card Styles ---
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    background: "#111111",
    border: hovered
      ? "1px solid rgba(255,92,0,0.55)" // Glows orange on hover
      : "1px solid rgba(255,255,255,0.06)",
    borderRadius: "16px",
    padding: "1.7rem",
    transition: "border-color 0.25s, transform 0.25s",
    transform: hovered ? "translateY(-5px)" : "translateY(0)", // Float up
    position: "relative",
    overflow: "hidden",
  };

  // Orange top border line that slides in on hover
  const topLineStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "#FF5C00",
    transform: hovered ? "scaleX(1)" : "scaleX(0)", // Expand from left
    transformOrigin: "left",
    transition: "transform 0.35s ease",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    display: "block",
  };

  const titleStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.02rem",
    fontWeight: 700,
    color: "#F0EDE6",
    marginBottom: "0.5rem",
  };

  const descStyle = {
    fontSize: "0.82rem",
    color: "#666",
    lineHeight: 1.7,
    marginBottom: "1.2rem",
  };

  // Grey background track for the progress bar
  const barBgStyle = {
    height: "4px",
    background: "rgba(255,255,255,0.07)",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "6px",
  };

  // The actual coloured progress bar
  // Width transitions from 0% to skill.level% when animated
  const barFillStyle = {
    height: "4px",
    background: "linear-gradient(90deg, #FF5C00, #FFB800)", // Orange → gold
    borderRadius: "4px",
    width: animate ? `${skill.level}%` : "0%", // Animates in
    transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth easing
  };

  const pctStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.72rem",
    color: "#FF5C00",
    marginTop: "4px",
  };

  return (
    <div
      ref={cardRef} // Attach IntersectionObserver ref
      style={cardStyle}
      onMouseEnter={() => setHovered(true)} // Track hover state
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orange top line that slides in on hover */}
      <div style={topLineStyle} />

      {/* Skill icon emoji */}
      <span style={iconStyle}>{skill.icon}</span>

      {/* Skill name */}
      <div style={titleStyle}>{skill.title}</div>

      {/* Short description */}
      <p style={descStyle}>{skill.desc}</p>

      {/* Progress bar background track */}
      <div style={barBgStyle}>
        {/* Animated progress fill */}
        <div style={barFillStyle} />
      </div>

      {/* Label and percentage below the bar */}
      <div style={pctStyle}>
        <span>{skill.label}</span>
        <span>{skill.level}%</span>
      </div>
    </div>
  );
}

// --- Main Skills Section Component ---
function Skills() {
  const sectionStyle = {
    padding: "6rem 5vw",
    background: "#0A0A0A",
  };

  // Responsive grid — 3 columns on desktop, fewer on smaller screens
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <section id="skills" style={sectionStyle}>
      {/* Section header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 2.5rem" }}>
        <span className="section-tag">Technical Skills</span>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-desc">
          A blend of backend power, AI intelligence, and hardware integration —
          here's the core toolkit I bring to every project.
        </p>
      </div>

      {/* Grid of skill cards */}
      <div style={gridStyle}>
        {/* Loop over each skill and render a SkillCard */}
        {skillsData.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
