// ============================================================
// About.jsx — About Me Section Component
// Shows a photo placeholder, bio paragraphs, and keyword tags.
// Replace the placeholder with your actual photo later.
// ============================================================

import React from "react";

function About() {
  // --- List of keyword tags shown below the bio ---
  // These help clients quickly see your expertise areas
  const tags = [
    "Django REST Framework",
    "Machine Learning",
    "IoT Development",
    "Python",
    "React",
    "AI Integration",
    "Data Analysis",
    "Embedded Systems",
  ];

  // --- Inline Styles ---

  const sectionStyle = {
    padding: "6rem 5vw",
    background: "#0D0D0D", // Slightly lighter than the hero background
  };

  // Two-column layout: photo on left, text on right
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr", // Right column is wider
    gap: "5rem",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  // --- Photo column styles ---
  const imgWrapStyle = {
    position: "relative", // Needed for the badge overlay
  };

  // The grey box where your photo goes
  // Replace this entire div with an <img> tag once you have a photo
  const photoPlaceholderStyle = {
    width: "100%",
    aspectRatio: "1 / 1", // Perfect square
    background: "#161616",
    border: "1px solid rgba(255,92,0,0.18)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
  };

  // Circular initials avatar (like a profile picture placeholder)
  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #FF5C00, #FFB800)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.7rem",
    fontWeight: 800,
    color: "#fff",
  };

  // Orange badge that overlaps the bottom-right corner of the photo
  const badgeStyle = {
    position: "absolute",
    bottom: "-16px",
    right: "-16px",
    background: "#FF5C00",
    color: "#fff",
    borderRadius: "14px",
    padding: "0.75rem 1.2rem",
    fontSize: "0.8rem",
    fontWeight: 700,
    boxShadow: "0 10px 30px rgba(255,92,0,0.4)",
    lineHeight: 1.4,
  };

  // --- Text column styles ---

  const textColStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const headingStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
    fontWeight: 800,
    color: "#F0EDE6",
    marginBottom: "1.4rem",
    lineHeight: 1.15,
  };

  const paraStyle = {
    fontSize: "0.95rem",
    color: "#888",
    lineHeight: 1.9,
    marginBottom: "1rem",
  };

  // Wrapper for the keyword tags
  const tagsWrapStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "1.6rem",
  };

  // Individual tag pill
  const tagStyle = {
    background: "rgba(255,92,0,0.08)",
    border: "1px solid rgba(255,92,0,0.22)",
    color: "#FF5C00",
    fontSize: "0.75rem",
    fontWeight: 500,
    padding: "0.38rem 1rem",
    borderRadius: "20px",
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={gridStyle}>
        {/* === LEFT COLUMN: Photo === */}
        <div style={imgWrapStyle}>
          {/* Photo placeholder — replace this block with:
              <img src="/images/bashir.jpg" alt="Bashir Sani Ibrahim"
                   style={{width:'100%', borderRadius:'20px'}} />
                    // <div style={avatarStyle}>BSI</div>
              once you add your photo to /public/images/ */}

          <div style={photoPlaceholderStyle}>
            <span style={{ fontSize: "0.82rem", color: "#444" }}>
              <img
                src="/images/my_Photo_2.jpg"
                alt="Bashir Sani Ibrahim"
                style={{ width: "100%", borderRadius: "20px" }}
              />
            </span>
          </div>

          {/* Floating badge overlapping the photo */}
          <div style={badgeStyle}>
            🚀 Open to Projects
            <br />
            <span
              style={{ fontWeight: 400, fontSize: "0.72rem", opacity: 0.85 }}
            >
              Let's build something great
            </span>
          </div>
        </div>

        {/* === RIGHT COLUMN: Bio Text === */}
        <div style={textColStyle}>
          {/* Small orange label above heading */}
          <span className="section-tag">About Me</span>

          {/* Section heading */}
          <h2 style={headingStyle}>
            Developer. Engineer.
            <br />
            Problem Solver.
          </h2>

          {/* Bio paragraphs — personalise these with your real story */}
          <p style={paraStyle}>
            I'm{" "}
            <strong style={{ color: "#F0EDE6", fontWeight: 600 }}>
              Bashir Sani Ibrahim
            </strong>{" "}
            — a passionate Full-Stack Developer and AI Engineer based in
            Nigeria, with deep expertise in Python, Django, and Machine
            Learning. I specialise in building end-to-end intelligent systems
            that bridge the gap between software and the physical world through
            IoT.
          </p>

          <p style={paraStyle}>
            Whether it's crafting a robust Django REST API, training a machine
            learning model, designing a smart IoT device, or shipping a mobile
            app powered by AI — I bring ideas to life with clean,
            well-documented, maintainable code.
          </p>

          <p style={paraStyle}>
            I'm currently available for freelance projects globally via Fiverr
            and direct client engagement. I love solving hard problems and
            collaborating with teams to deliver software that genuinely makes an
            impact.
          </p>

          {/* Keyword tags — quick visual summary of your skills */}
          <div style={tagsWrapStyle}>
            {tags.map((tag) => (
              <span key={tag} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles — stacks to single column on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #about .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
