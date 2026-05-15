// ============================================================
// Projects.jsx — Portfolio Projects Section Component
// Displays a grid of your best projects with thumbnail,
// title, description, tech stack pills, and a category badge.
//
// HOW TO ADD YOUR OWN PROJECTS:
// 1. Add a new object to the projectsData array below.
// 2. Add your project image to /public/images/ folder.
// 3. Update the imgSrc field with your image path.
// ============================================================

import React, { useState } from "react";

// --- Projects Data ---
// Replace these placeholder projects with your REAL projects!
// Each project object has:
//   title    - Project name
//   desc     - Short description (2-3 sentences)
//   tech     - Array of technology names
//   category - Badge shown on the thumbnail (e.g. "ML", "IoT")
//   emoji    - Emoji shown in the thumbnail placeholder
//   bg       - Background colour of the thumbnail
//   imgSrc   - Path to your screenshot (add image to /public/images/)
const projectsData = [
  {
    title: "AI Crop Disease Detector",
    desc: "Deep learning model that detects crop diseases from leaf images with 94% accuracy. Deployed via Django REST API and integrated into a mobile app for farmers.",
    tech: ["Python", "TensorFlow", "Django", "REST API", "OpenCV"],
    category: "Machine Learning",
    emoji: "🤖",
    bg: "rgba(255,92,0,0.07)",
    imgSrc: null, // Set to '/images/project1.png' when you add your screenshot
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Smart Home IoT Dashboard",
    desc: "Full IoT system using Raspberry Pi to monitor and control home devices in real time. Features a React dashboard and Django backend with MQTT messaging.",
    tech: ["Raspberry Pi", "Django", "React", "MQTT", "PostgreSQL"],
    category: "IoT",
    emoji: "⚡",
    bg: "rgba(255,184,0,0.07)",
    imgSrc: null,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI Health Assistant App",
    desc: "Mobile application with an AI-powered symptom checker and personalised health recommendations, backed by a Django API and trained NLP model.",
    tech: ["Python", "Django", "NLP", "scikit-learn", "Mobile"],
    category: "AI + Mobile",
    emoji: "📱",
    bg: "rgba(29,191,115,0.07)",
    imgSrc: null,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Learning Management System",
    desc: "Web system built with Django for Addressing the poor student academic performance, generating PDF reports, and providing analytics for school administrators. A research Project Developed for Undergraduate Study",
    tech: ["Django", "Python", "SQLite", "HTML/CSS", "Chart.js"],
    category: "Django",
    emoji: "📊",
    bg: "rgba(100,100,255,0.07)",
    imgSrc: null,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Automated Plant Watering System",
    desc: "Arduino-based IoT device that monitors soil moisture and automatically waters plants. Data is sent to a Django API and visualised on a web dashboard.",
    tech: ["Arduino", "C++", "Django", "MQTT", "React"],
    category: "IoT",
    emoji: "🌱",
    bg: "rgba(0,200,100,0.07)",
    imgSrc: null,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce Product Recommender",
    desc: "Machine learning recommendation engine built with collaborative filtering. Integrated into a Django backend to serve personalised product suggestions via API.",
    tech: ["Python", "scikit-learn", "Django", "Pandas", "REST API"],
    category: "Machine Learning",
    emoji: "🛒",
    bg: "rgba(255,50,100,0.07)",
    imgSrc: null,
    liveUrl: "#",
    codeUrl: "#",
  },
];

// --- Single Project Card Component ---
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    background: "#111111",
    border: hovered
      ? "1px solid rgba(255,92,0,0.45)"
      : "1px solid rgba(255,255,255,0.06)",
    borderRadius: "18px",
    overflow: "hidden",
    transition: "transform 0.25s, border-color 0.25s",
    transform: hovered ? "translateY(-6px)" : "translateY(0)",
  };

  // Thumbnail area — shows either your screenshot or the emoji placeholder
  const thumbStyle = {
    height: "190px",
    background: project.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.2rem",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    position: "relative", // Needed for the badge overlay
    overflow: "hidden",
  };

  // Category badge in the top-right of the thumbnail
  const badgeStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "rgba(255,92,0,0.9)",
    color: "#fff",
    fontSize: "0.68rem",
    fontWeight: 700,
    padding: "4px 12px",
    borderRadius: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const bodyStyle = {
    padding: "1.5rem",
  };

  const titleStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.02rem",
    fontWeight: 700,
    color: "#F0EDE6",
    marginBottom: "0.55rem",
  };

  const descStyle = {
    fontSize: "0.83rem",
    color: "#666",
    lineHeight: 1.7,
    marginBottom: "1.2rem",
  };

  // Row of technology pills at the bottom
  const techRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "1.2rem",
  };

  const techPillStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#aaa",
    fontSize: "0.7rem",
    padding: "3px 10px",
    borderRadius: "20px",
  };

  // Row of action links (Live Demo + Code)
  const linksStyle = {
    display: "flex",
    gap: "10px",
  };

  const linkStyle = (primary) => ({
    fontSize: "0.78rem",
    fontWeight: 600,
    padding: "0.45rem 1.1rem",
    borderRadius: "20px",
    border: primary ? "none" : "1px solid rgba(255,255,255,0.15)",
    background: primary ? "#FF5C00" : "transparent",
    color: primary ? "#fff" : "#888",
    cursor: "pointer",
    transition: "opacity 0.2s",
    textDecoration: "none",
  });

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* --- Thumbnail --- */}
      <div style={thumbStyle}>
        {/* Show screenshot if provided, otherwise show emoji */}
        {project.imgSrc ? (
          <img
            src={project.imgSrc}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span>{project.emoji}</span>
        )}
        {/* Category badge */}
        <div style={badgeStyle}>{project.category}</div>
      </div>

      {/* --- Card Body --- */}
      <div style={bodyStyle}>
        <div style={titleStyle}>{project.title}</div>
        <p style={descStyle}>{project.desc}</p>

        {/* Technology pills */}
        <div style={techRowStyle}>
          {project.tech.map((t) => (
            <span key={t} style={techPillStyle}>
              {t}
            </span>
          ))}
        </div>

        {/* Links to live demo and source code */}
        <div style={linksStyle}>
          <a href={project.liveUrl} style={linkStyle(true)}>
            Live Demo ↗
          </a>
          <a href={project.codeUrl} style={linkStyle(false)}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Main Projects Section Component ---
function Projects() {
  const sectionStyle = {
    padding: "6rem 5vw",
    background: "#0A0A0A",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <section id="projects" style={sectionStyle}>
      {/* Section header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 2.5rem" }}>
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">
          A selection of real-world projects that showcase my skills across AI,
          Django, IoT, and mobile development. Replace these with your actual
          work!
        </p>
      </div>

      {/* Projects grid */}
      <div style={gridStyle}>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
