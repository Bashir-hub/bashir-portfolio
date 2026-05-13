// ============================================================
// Contact.jsx — Contact Section Component
// Contains contact info on the left and a form on the right.
// The form sends data to the Django REST API backend.
// When a client submits the form, their message is saved
// to your Django database and you can read it in /admin.
// ============================================================

import React, { useState } from "react";

// axios is a library for making HTTP requests (like fetch but better)
// Install it with: npm install axios
import axios from "axios";

// --- Contact Info Items ---
// Rendered on the left side of the section
const contactInfo = [
  { icon: "📧", label: "Email", value: "bashiribrahimsani6@email.com" },
  { icon: "📍", label: "Location", value: "Nigeria · Available Globally" },
  { icon: "⏰", label: "Response", value: "Within 24 hours" },
  { icon: "💼", label: "Freelance", value: "Available Now" },
];

function Contact() {
  // --- Form State ---
  // This object holds the values of every input field.
  // When the user types, we update this state.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Track form submission status
  // 'idle'     → form is ready to submit
  // 'loading'  → request is in progress
  // 'success'  → message sent successfully
  // 'error'    → something went wrong
  const [status, setStatus] = useState("idle");

  // Store error message text if submission fails
  const [errorMsg, setErrorMsg] = useState("");

  // --- Handle Input Changes ---
  // This single function handles ALL input fields.
  // e.target.name matches the `name` attribute of each input.
  // e.target.value is whatever the user typed.
  const handleChange = (e) => {
    // Spread (...) keeps all existing fields, then overwrites only the changed one
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- Handle Form Submission ---
  // Called when the user clicks "Send Message"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop the browser from refreshing the page

    setStatus("loading"); // Show loading state on button
    setErrorMsg("");

    try {
      // POST request to Django backend API
      // This sends the form data as JSON to your Django contact endpoint
      // Make sure Django is running on port 8000!
      await axios.post("http://localhost:8000/api/contact/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // If successful, show the success message
      setStatus("success");

      // Clear all form fields after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // If something went wrong, show an error message
      setStatus("error");
      setErrorMsg(
        error.response?.data?.message ||
          "Something went wrong. Please try again or email me directly.",
      );
    }
  };

  // --- Styles ---

  const sectionStyle = {
    padding: "6rem 5vw",
    background: "#0D0D0D",
  };

  // Two-column grid: info on left, form on right
  const wrapStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: "5rem",
    alignItems: "start",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  // --- Left column: contact info ---

  const infoColStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const infoHeadStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#F0EDE6",
    marginBottom: "0.8rem",
  };

  const infoParaStyle = {
    fontSize: "0.9rem",
    color: "#777",
    lineHeight: 1.8,
    marginBottom: "2rem",
  };

  // Individual contact item row (icon + text)
  const infoItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "1rem",
  };

  // Circle icon box
  const iconBoxStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "11px",
    background: "rgba(255,92,0,0.1)",
    border: "1px solid rgba(255,92,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    flexShrink: 0,
  };

  const infoTextStyle = {
    fontSize: "0.88rem",
    color: "#ccc",
  };

  const infoLabelStyle = {
    fontSize: "0.72rem",
    color: "#555",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    marginBottom: "2px",
  };

  // Green Fiverr badge button
  const fiverrStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "2rem",
    background: "#1DBF73",
    color: "#fff",
    padding: "0.65rem 1.4rem",
    borderRadius: "40px",
    fontSize: "0.85rem",
    fontWeight: 700,
    textDecoration: "none",
    transition: "opacity 0.2s",
    alignSelf: "flex-start",
  };

  // --- Right column: contact form ---

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  };

  // Side-by-side inputs (name + email)
  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  };

  const groupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const labelStyle = {
    fontSize: "0.75rem",
    color: "#777",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
  };

  // Shared style for all input/textarea fields
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "0.78rem 1rem",
    color: "#F0EDE6",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };

  // Submit button — changes appearance based on current status
  const submitBtnStyle = {
    background: status === "success" ? "#1DBF73" : "#FF5C00", // Green on success
    color: "#fff",
    border: "none",
    borderRadius: "40px",
    padding: "0.9rem 2.2rem",
    fontSize: "0.9rem",
    fontWeight: 700,
    cursor: status === "loading" ? "not-allowed" : "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "opacity 0.2s, transform 0.2s, background 0.3s",
    opacity: status === "loading" ? 0.7 : 1,
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  // Helper: what text to show inside the submit button
  const btnLabel = () => {
    if (status === "loading") return "Sending...";
    if (status === "success") return "✓ Message Sent!";
    return "Send Message →";
  };

  return (
    <section id="contact" style={sectionStyle}>
      {/* Section header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 2.5rem" }}>
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-desc">
          Have a project in mind? Send me a message and I'll reply within 24
          hours. Available for freelance work globally.
        </p>
      </div>

      {/* Two-column contact layout */}
      <div style={wrapStyle}>
        {/* === LEFT: Contact Info === */}
        <div style={infoColStyle}>
          <h3 style={infoHeadStyle}>Contact Information</h3>
          <p style={infoParaStyle}>
            Ready to build your next Django app, ML system, or IoT device? I'm
            available for freelance projects of all sizes.
          </p>

          {/* Loop over contact info items */}
          {contactInfo.map((item) => (
            <div key={item.label} style={infoItemStyle}>
              <div style={iconBoxStyle}>{item.icon}</div>
              <div>
                <div style={infoLabelStyle}>{item.label}</div>
                <div style={infoTextStyle}>{item.value}</div>
              </div>
            </div>
          ))}

          {/* Fiverr link — update href with your actual Fiverr profile URL */}
          <a
            href="https://fiverr.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            style={fiverrStyle}
          >
            🎯 Hire Me on Fiverr
          </a>
        </div>

        {/* === RIGHT: Contact Form === */}
        {/* onSubmit calls our handleSubmit function */}
        <form style={formStyle} onSubmit={handleSubmit}>
          {/* Name + Email — side by side */}
          <div style={rowStyle}>
            <div style={groupStyle}>
              <label style={labelStyle}>Your Name</label>
              <input
                style={inputStyle}
                type="text"
                name="name" // Must match formData key
                value={formData.name} // Controlled input
                onChange={handleChange} // Update state on typing
                placeholder="John Doe"
                required
              />
            </div>
            <div style={groupStyle}>
              <label style={labelStyle}>Email Address</label>
              <input
                style={inputStyle}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@email.com"
                required
              />
            </div>
          </div>

          {/* Subject field */}
          <div style={groupStyle}>
            <label style={labelStyle}>Subject</label>
            <input
              style={inputStyle}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Django API · IoT Device · ML Model..."
              required
            />
          </div>

          {/* Message textarea */}
          <div style={groupStyle}>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, budget, and timeline..."
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            style={submitBtnStyle}
            disabled={status === "loading"}
          >
            {btnLabel()}
          </button>

          {/* Error message — shown if API call fails */}
          {status === "error" && (
            <p
              style={{
                fontSize: "0.82rem",
                color: "#FF5C00",
                marginTop: "6px",
              }}
            >
              ⚠ {errorMsg}
            </p>
          )}

          {/* Small note about the backend */}
          <p style={{ fontSize: "0.73rem", color: "#444", marginTop: "6px" }}>
            Your message will be replied within 24 hours of a day, keep
            patience.
          </p>
        </form>
      </div>

      {/* Responsive: stack columns on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #contact .contact-wrap { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
