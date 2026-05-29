// ============================================================
// Footer.jsx — Footer Component
// Clean version — Admin Portal button removed.
// Admin accesses dashboard directly via:
// https://bashir-portfolio-production.up.railway.app/admin/
// ============================================================

import React from "react";

// Social media links — update with your real URLs
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Bashir-hub", icon: "💻" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bashir-ibrahim-sani-576944260/",
    icon: "🔗",
  },
  { label: "Fiverr", href: "https://www.fiverr.com/bashir0189/", icon: "🎯" },
  { label: "Twitter", href: "https://x.com/Bashir_0189/", icon: "🐦" },
];

// Footer navigation links
const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  // Current year — updates automatically
  const year = new Date().getFullYear();

  // ── Styles ──

  const footerStyle = {
    background: "#060606",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    padding: "3rem 5vw 2rem",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "2rem",
    maxWidth: "1100px",
    margin: "0 auto",
    paddingBottom: "2.5rem",
    marginBottom: "2rem",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  };

  const logoStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#FF5C00",
    marginBottom: "0.5rem",
  };

  const taglineStyle = {
    fontSize: "0.83rem",
    color: "#444",
    maxWidth: "260px",
    lineHeight: 1.7,
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const colTitleStyle = {
    fontSize: "0.72rem",
    color: "#FF5C00",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 600,
    marginBottom: "4px",
  };

  const footerLinkStyle = {
    fontSize: "0.85rem",
    color: "#555",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const socialLinkStyle = {
    fontSize: "0.85rem",
    color: "#555",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "color 0.2s",
  };

  const bottomRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const copyrightStyle = {
    fontSize: "0.78rem",
    color: "#333",
  };

  return (
    <footer style={footerStyle}>
      <style>{`
        .footer-nav-link:hover    { color: #FF5C00 !important; }
        .footer-social-link:hover { color: #FF5C00 !important; }
      `}</style>

      {/* ── Top Row ── */}
      <div style={topRowStyle}>
        {/* Brand column */}
        <div>
          <div style={logoStyle}>BSI.</div>
          <p style={taglineStyle}>
            Full-Stack Developer & AI Engineer building intelligent systems with
            Django, Python, ML, and IoT.
          </p>
        </div>

        {/* Navigation column */}
        <div style={colStyle}>
          <div style={colTitleStyle}>Navigation</div>
          {footerNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="footer-nav-link"
              style={footerLinkStyle}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social links column */}
        <div style={colStyle}>
          <div style={colTitleStyle}>Connect</div>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              style={socialLinkStyle}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div style={bottomRowStyle}>
        <p style={copyrightStyle}>
          © {year} Bashir Sani Ibrahim · All Rights Reserved
        </p>
        <p style={copyrightStyle}>
          Built with React + Django · Designed with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
