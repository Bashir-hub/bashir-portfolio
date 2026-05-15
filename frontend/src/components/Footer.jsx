// ============================================================
// Footer.jsx — Footer with Admin Login Modal
//
// HOW IT WORKS (simplified & reliable):
// 1. Admin clicks "🔐 Admin Portal" button in the footer
// 2. A login modal pops up asking for username + password
// 3. On submit — Django Admin opens in a new tab directly
// 4. Django handles the actual authentication on its own page
//
// WHY THIS APPROACH:
// Trying to verify credentials from React causes CSRF and
// cross-origin cookie issues with Django. The most reliable
// approach is to let Django Admin handle its own login.
// The modal here just serves as a professional-looking gate
// before redirecting — the real security is Django's own login.
// ============================================================

import React, { useState } from "react";

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

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// AdminLoginModal Component
// A styled popup that collects username + password, then
// opens Django Admin in a new tab — Django handles the rest.
// ============================================================
function AdminLoginModal({ onClose }) {
  // Stores what the admin types into the form fields
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Toggles password visibility (show / hide)
  const [showPassword, setShowPassword] = useState(false);

  // Update the correct field as the admin types
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Called when the admin clicks "Access Dashboard"
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Open Django Admin login page in a new browser tab.
    // Django will show its own login form pre-filled with nothing —
    // but since you run createsuperuser, just log in there directly.
    // Django remembers your session after first login automatically.
    window.open(
      "https://bashir-portfolio-production.up.railway.app/admin/",
      "_blank",
    );
    // Close the modal after opening admin
    onClose();
  };

  // Close modal when clicking the dark backdrop (outside the box)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div onClick={handleBackdropClick} style={backdropStyle}>
      {/* Keyframe animations injected once */}
      <style>{`
        @keyframes fadeIn  {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .admin-input:focus {
          border-color : #FF5C00 !important;
          outline      : none;
        }
        .admin-submit-btn:hover {
          opacity   : 0.88 !important;
          transform : translateY(-2px) !important;
        }
        .eye-btn:hover { color: #FF5C00 !important; }
        .close-btn:hover {
          background : rgba(255,255,255,0.12) !important;
          color      : #fff !important;
        }
      `}</style>

      {/* The modal box */}
      <div style={modalStyle}>
        {/* Orange glow line along the top edge of the modal */}
        <div style={accentLineStyle} />

        {/* X button — closes the modal */}
        <button
          className="close-btn"
          onClick={onClose}
          style={closeBtnStyle}
          title="Close"
        >
          ✕
        </button>

        {/* Lock icon */}
        <div style={iconWrapStyle}>🔐</div>

        {/* Title and subtitle */}
        <h2 style={titleStyle}>Admin Portal</h2>
        <p style={subtitleStyle}>
          Enter your credentials to access the dashboard
        </p>

        {/* Login form */}
        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Username field */}
          <div style={groupStyle}>
            <label style={labelStyle}>Username</label>
            <input
              className="admin-input"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="username"
              required
              style={inputStyle}
            />
          </div>

          {/* Password field with show / hide toggle */}
          <div style={groupStyle}>
            <label style={labelStyle}>Password</label>
            <div style={inputWrapStyle}>
              <input
                className="admin-input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                style={{ ...inputStyle, paddingRight: "3rem" }}
              />
              {/* Eye icon — toggles password visibility */}
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide password" : "Show password"}
                style={eyeBtnStyle}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Info note — explains that Django handles actual auth */}
          <p style={noteStyle}>
            ℹ️ Django Admin will verify your credentials securely.
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="admin-submit-btn"
            style={submitStyle}
          >
            🔓 Access Dashboard
          </button>
        </form>

        {/* Footer note inside modal */}
        <p style={modalFooterStyle}>Bashir Sani Ibrahim · Django Admin Panel</p>
      </div>
    </div>
  );
}

// ── Modal Styles (defined outside component to keep JSX clean) ──

const backdropStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.78)",
  backdropFilter: "blur(7px)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  animation: "fadeIn 0.2s ease",
};

const modalStyle = {
  background: "#111111",
  border: "1px solid rgba(255, 92, 0, 0.25)",
  borderRadius: "20px",
  padding: "2.5rem 2rem 1.8rem",
  width: "100%",
  maxWidth: "400px",
  position: "relative",
  boxShadow: "0 30px 70px rgba(0,0,0,0.7)",
  animation: "slideUp 0.3s ease",
};

const accentLineStyle = {
  position: "absolute",
  top: 0,
  left: "10%",
  right: "10%",
  height: "2px",
  background: "linear-gradient(90deg, transparent, #FF5C00, transparent)",
  borderRadius: "0 0 4px 4px",
};

const closeBtnStyle = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  background: "rgba(255,255,255,0.06)",
  border: "none",
  color: "#777",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s, color 0.2s",
};

const iconWrapStyle = {
  width: "58px",
  height: "58px",
  borderRadius: "16px",
  background:
    "linear-gradient(135deg, rgba(255,92,0,0.18), rgba(255,184,0,0.08))",
  border: "1px solid rgba(255,92,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  margin: "0 auto 1.2rem",
};

const titleStyle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "1.35rem",
  fontWeight: 800,
  color: "#F0EDE6",
  textAlign: "center",
  marginBottom: "0.3rem",
};

const subtitleStyle = {
  fontSize: "0.83rem",
  color: "#555",
  textAlign: "center",
  marginBottom: "1.8rem",
  lineHeight: 1.6,
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const groupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const labelStyle = {
  fontSize: "0.74rem",
  color: "#777",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  fontWeight: 600,
};

const inputWrapStyle = {
  position: "relative",
};

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "0.78rem 1rem",
  color: "#F0EDE6",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const eyeBtnStyle = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  color: "#555",
  cursor: "pointer",
  fontSize: "1rem",
  padding: 0,
  transition: "color 0.2s",
};

const noteStyle = {
  fontSize: "0.76rem",
  color: "#444",
  textAlign: "center",
  lineHeight: 1.6,
  marginTop: "-0.2rem",
};

const submitStyle = {
  background: "linear-gradient(135deg, #FF5C00, #ff7a2e)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "0.9rem",
  fontSize: "0.92rem",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif",
  transition: "opacity 0.2s, transform 0.2s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "100%",
  marginTop: "0.2rem",
};

const modalFooterStyle = {
  textAlign: "center",
  fontSize: "0.7rem",
  color: "#2a2a2a",
  marginTop: "1.2rem",
};

// ============================================================
// Footer — Main Footer Component
// ============================================================
function Footer() {
  const year = new Date().getFullYear();

  // Controls whether the admin modal is open
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Admin login modal — only rendered when showModal is true */}
      {showModal && <AdminLoginModal onClose={() => setShowModal(false)} />}

      <footer style={footerWrapStyle}>
        {/* Top row — brand, nav, socials */}
        <div style={topRowStyle}>
          {/* Brand column */}
          <div>
            <div style={logoStyle}>BSI.</div>
            <p style={taglineStyle}>
              Full-Stack Developer & AI Engineer building intelligent systems
              with Django, Python, ML, and IoT.
            </p>

            {/* Admin Portal trigger button */}
            <button
              onClick={() => setShowModal(true)}
              style={adminTriggerStyle}
              title="Admin access"
            >
              🔐 Admin Portal
            </button>
          </div>

          {/* Navigation column */}
          <div style={colStyle}>
            <div style={colTitleStyle}>Navigation</div>
            {footerNav.map((item) => (
              <a key={item.label} href={item.href} style={footerLinkStyle}>
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
                style={socialLinkStyle}
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row — copyright */}
        <div style={bottomRowStyle}>
          <p style={copyrightStyle}>
            © {year} Bashir Sani Ibrahim · All Rights Reserved
          </p>
          <p style={copyrightStyle}>
            Built with React + Django · Designed with ❤️
          </p>
        </div>
      </footer>
    </>
  );
}

// ── Footer Styles ──

const footerWrapStyle = {
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
  marginBottom: "1rem",
};

const adminTriggerStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  background: "rgba(255,92,0,0.08)",
  border: "1px solid rgba(255,92,0,0.22)",
  color: "rgba(255,92,0,0.8)",
  fontSize: "0.73rem",
  fontWeight: 600,
  padding: "0.38rem 1rem",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.2s",
  fontFamily: "'DM Sans', sans-serif",
  letterSpacing: "0.04em",
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
};

const socialLinkStyle = {
  fontSize: "0.85rem",
  color: "#555",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "8px",
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

export default Footer;
