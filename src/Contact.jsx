import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to connect with me for opportunities, projects, or collaborations.
        </p>

        <div className="contact-info">
          <p>📧 Email: vmadhukathir2003@gmail.com</p>
          <p>📱 Phone: +91 9489430613</p>
          <p>📍 Tirchirappalli, Tamil Nadu</p>
        </div>
<div className="social-links">
  <a
    href="https://www.linkedin.com/in/madhumidha2305"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/Madhu-hub23"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
</div>
      </div>
    </div>
  );
}

export default Contact;