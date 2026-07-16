"use client";

import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; <span className="footer-year">{year}</span> Robin Mia. Built for clarity.</p>
        <div className="footer-links">
          <a href="mailto:robin424123@gmail.com">Email</a>
          <a href="https://github.com/mrun1corn" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/robin-unicorn" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
