import React, { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:kimaniian273@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact - Ian Kimani | Software Engineer"
        description="Get in touch with Ian Kimani for software engineering opportunities, offline-first systems, and technical consultations."
        url="https://iankimani.me/contact"
      />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="content" className="site-main">
          <div className="page-header">
            <h1 className="page-header__title">Contact</h1>
            <p className="page-header__desc">
              I'm always open to discussing software engineering opportunities,
              distributed sync problems, hardware integrations, or interesting collaborations.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section__title">Direct Reach</h2>
            <div className="values-grid">
              <div className="value-item">
                <p className="value-item__title">Email</p>
                <p className="value-item__desc">
                  <a
                    href="mailto:kimaniian273@gmail.com"
                    className="sidebar-link"
                  >
                    kimaniian273@gmail.com &rarr;
                  </a>
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Location</p>
                <p className="value-item__desc">Nairobi, Kenya</p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Profiles</p>
                <div className="socials" style={{ marginTop: "0.25rem" }}>
                  <a
                    href="https://github.com/Ian-Kimani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iankimani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/iankimani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-section__title">Send a Message</h2>
            {submitted ? (
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                  background: "var(--bg-alt)"
                }}
              >
                <p style={{ margin: 0, color: "var(--text)", fontWeight: 500 }}>
                  Thank you for reaching out!
                </p>
                <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
                  Your email client has been prepared. If it didn't open automatically, you can write directly to{" "}
                  <a href="mailto:kimaniian273@gmail.com" style={{ color: "var(--accent-text)", textDecoration: "underline" }}>
                    kimaniian273@gmail.com
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry, consulting, or hello"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Tell me about what you're working on..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div>
                  <button type="submit" className="form-button">
                    Send message &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
