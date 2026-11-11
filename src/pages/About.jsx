import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About - Ian Kimani | Software Engineer"
        description="Learn more about Ian Kimani, a software engineer in Nairobi, Kenya, building resilient offline-first systems, distributed sync architectures, and backend services."
        url="https://iankimani.me/about"
      />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="content" className="site-main">
          {/* About Intro */}
          <div className="about-intro">
            <div>
              <h1 className="about-intro__title">About</h1>
              <p>Software Engineer. Based in Nairobi, Kenya.</p>
              <p>
                I build software for the parts of the world that do not behave like
                a developer laptop: unreliable internet, power interruptions, physical
                devices, messy data, and busy people trying to get work done.
              </p>
              <p>
                That has led me to work on offline-first systems for coffee
                cooperatives, hardware integrations, distributed synchronization,
                multi-tenant platforms, and an AI study coach. I enjoy the engineering
                decisions behind the interface: how data moves, what happens when a
                service is unavailable, and how to make a system easier to trust.
              </p>
              <p>
                I’m currently open to software engineering opportunities focused on
                backend systems, full-stack products, and distributed applications.
              </p>
            </div>
            <img
              className="about-intro__photo"
              src="/images/profile.png"
              alt="Ian Kimani"
              loading="eager"
            />
          </div>

          {/* Values Section */}
          <div className="about-section">
            <h2 className="about-section__title">Values &amp; Engineering Philosophy</h2>
            <div className="values-grid">
              <div className="value-item">
                <p className="value-item__title">Reliable Systems</p>
                <p className="value-item__desc">
                  I prefer building software that is stable, maintainable, and works consistently.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Clear Thinking</p>
                <p className="value-item__desc">
                  Good design and clean code make everything easier to understand and improve over time.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Practical solutions</p>
                <p className="value-item__desc">
                  I focus on solving real problems rather than chasing technology for its own sake.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Useful AI</p>
                <p className="value-item__desc">
                  I’m exploring AI as a practical product capability, with attention to transparency, fallback behavior, and user trust.
                </p>
              </div>
            </div>
          </div>

          {/* Focus Areas Section */}
          <div className="about-section">
            <h2 className="about-section__title">Focus areas</h2>
            <div className="values-grid">
              <div className="value-item">
                <p className="value-item__title">Backend systems  &amp; APIs</p>
                <p className="value-item__desc">
                  Designing reliable APIs, clean data models, and solid backend logic.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Full-stack development</p>
                <p className="value-item__desc">
                  Building complete applications from the database to the user interface.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Clean architecture &amp; data modeling </p>
                <p className="value-item__desc">
                  Creating maintainable systems with clear structure and well-designed databases.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">AI in practical products</p>
                <p className="value-item__desc">
                  Building focused AI features that help people learn, decide, or complete work without hiding how the system behaves.
                </p>
              </div>
            </div>
          </div>

          {/* Now Section */}
          <div className="about-section">
            <h2 className="about-section__title">Now</h2>
            <ul className="now-list">
              <li>
                Building and refining TutaPass, an AI study coach designed to help learners understand why an answer is right.
              </li>
              <li>
                Building and improving full-stack applications.
              </li>
              <li>
                Exploring better ways to design clean and maintainable systems.
              </li>
            </ul>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
