// ============================================================
// Services.jsx — Services Section Component
// Lists the services you offer to freelance clients.
// Each service card has a number, title, and description.
// ============================================================

import React, { useState } from "react";

// --- Services Data ---
// Edit this array to change, add, or remove services.
// These are displayed to potential Fiverr and direct clients.
const servicesData = [
  {
    number: "01",
    title: "Django Web Development",
    desc: "Full-stack web apps and REST APIs using Django & Django REST Framework. Includes database design, JWT authentication, admin dashboards, deployment, and API documentation.",
    icon: "🌐",
  },
  {
    number: "02",
    title: "AI & Machine Learning Solutions",
    desc: "Custom ML models, data analysis pipelines, prediction systems, NLP tools, image classification, and seamless AI integration into existing web or mobile backends.",
    icon: "🤖",
  },
  {
    number: "03",
    title: "IoT System Design & Build",
    desc: "Design and build smart IoT devices — Arduino/Raspberry Pi systems, sensor networks, embedded firmware, real-time dashboards, and MQTT-based cloud connectivity.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "AI-Powered Mobile Apps",
    desc: "Mobile applications powered by intelligent AI backend services — image recognition, conversational AI chatbots, smart recommendations, and real-time ML inference.",
    icon: "📱",
  },
  {
    number: "05",
    title: "Python Automation & Scripts",
    desc: "Custom Python scripts for automation, web scraping, data processing, report generation, scheduled tasks, and third-party API integrations — saving you hours of manual work.",
    icon: "🐍",
  },
  {
    number: "06",
    title: "Technical Consulting",
    desc: "Architecture advice, code review, stack selection, and strategic guidance for startups and development teams building AI, IoT, or web-based products from scratch.",
    icon: "🔍",
  },
];

// --- Single Service Card Component ---
function ServiceCard({ service }) {
  // Track hover state for visual feedback
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    background: "#111111",
    border: hovered
      ? "1px solid rgba(255,92,0,0.45)"
      : "1px solid rgba(255,255,255,0.06)",
    borderRadius: "18px",
    padding: "2.2rem 1.8rem",
    transition: "border-color 0.25s, transform 0.25s",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    cursor: "default",
  };

  // Large decorative number (faint, in the background)
  const numStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "3rem",
    fontWeight: 800,
    // Changes from very faint to more visible orange on hover
    color: hovered ? "rgba(255,92,0,0.3)" : "rgba(255,92,0,0.12)",
    lineHeight: 1,
    marginBottom: "1rem",
    transition: "color 0.25s",
  };

  // Row showing the icon and title together
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0.7rem",
  };

  const iconStyle = {
    fontSize: "1.3rem",
  };

  const titleStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#F0EDE6",
  };

  const descStyle = {
    fontSize: "0.85rem",
    color: "#666",
    lineHeight: 1.75,
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large faint number in the top-left */}
      <div style={numStyle}>{service.number}</div>

      {/* Icon + service title row */}
      <div style={headerStyle}>
        <span style={iconStyle}>{service.icon}</span>
        <div style={titleStyle}>{service.title}</div>
      </div>

      {/* Service description */}
      <p style={descStyle}>{service.desc}</p>
    </div>
  );
}

// --- Main Services Section Component ---
function Services() {
  const sectionStyle = {
    padding: "6rem 5vw",
    background: "#0D0D0D", // Slightly lighter than main background
  };

  // Auto-filling 3-column grid
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "1.4rem",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <section id="services" style={sectionStyle}>
      {/* Section header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 2.5rem" }}>
        <span className="section-tag">What I Offer</span>
        <h2 className="section-title">Services</h2>
        <p className="section-desc">
          From smart AI backends to intelligent hardware — here's exactly how I
          can make your next project a success.
        </p>
      </div>

      {/* Services grid */}
      <div style={gridStyle}>
        {servicesData.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
