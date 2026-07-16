import React from "react";
import LottiePlayer from "./LottiePlayer";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-panel">
        <div className="contact-visual-side">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let's make the next system easier to run.</h2>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <LottiePlayer
              src="/assets/contact-animation.json"
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            />
          </div>
        </div>
        <div className="contact-action-side">
          <p className="contact-lead">
            For C++ development, server admin, network support, or infrastructure roles, reaching out is the first step.
          </p>
          <div className="contact-buttons">
            <a className="contact-btn email" href="mailto:robin424123@gmail.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>Email Me</span>
            </a>
            <a className="contact-btn phone" href="tel:+8801716708463">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>+8801716708463</span>
            </a>
            <a className="contact-btn github" href="https://github.com/mrun1corn" target="_blank" rel="noopener">
              <i className="fa fa-github-alt" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
            <a className="contact-btn linkedin" href="https://linkedin.com/in/robin-unicorn" target="_blank" rel="noopener">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </a>
            <a className="contact-btn facebook" href="https://facebook.com/mrun1orn" target="_blank" rel="noopener">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
