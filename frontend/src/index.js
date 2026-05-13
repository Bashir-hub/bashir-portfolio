// ============================================================
// index.js — Application Entry Point
// This connects your React app to public/index.html
// React injects everything into <div id="root"> in index.html
// ============================================================

import React from "react";
import ReactDOM from "react-dom/client";

// Import global CSS — applies to the whole website
import "./App.css";

// Import the root App component
// We write './App.jsx' with the full extension to avoid "Module not found" errors
import App from "./App.jsx";

// Find the <div id="root"> in public/index.html
// and mount the entire React app into it
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
