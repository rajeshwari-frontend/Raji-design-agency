"use client";
import { useState } from "react";
 
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };
 
  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };
 
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };
 
  return (
    <section className="contact" id="contact">
      <div className="contact-bg-shape" />
 
      <div className="contact-inner">
        <div className="contact-left">
          <span className="section-tag">— Get In Touch</span>
          <h2 className="contact-title">
            Let&apos;s build <br />
            <span className="accent">something great</span>
          </h2>
          <p className="contact-sub">
            Ready to elevate your brand? Drop us a message and we&apos;ll get
            back to you within 24 hours.
          </p>
          <div className="contact-info">
            {[
              { icon: "✉", label: "Email", val: "hello@pixelcraft.studio" },
              { icon: "◎", label: "Location", val: "Chennai, India" },
              { icon: "✦", label: "Availability", val: "Open for projects" },
            ].map((item) => (
              <div key={item.label} className="info-row">
                <span className="info-icon">{item.icon}</span>
                <div>
                  <span className="info-label">{item.label}</span>
                  <span className="info-val">{item.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        <div className="contact-right">
          {submitted ? (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We&apos;ll be in touch very soon.</p>
              <button className="btn-reset" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
                Send another
              </button>
            </div>
          ) : (
            <div className="form">
              <div className="form-row">
                <div className={`field ${errors.name ? "field-error" : ""}`}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className={`field ${errors.email ? "field-error" : ""}`}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
              </div>
              <div className={`field ${errors.message ? "field-error" : ""}`}>
                <label>Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                {errors.message && <span className="err">{errors.message}</span>}
              </div>
              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner" />
                ) : (
                  <>Send Message <span className="btn-arrow">→</span></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
 
      <div className="footer-bar">
        <span>© 2026 PixelCraft Studio. All rights reserved.</span>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>
      </div>
 
 </section>
  );
}