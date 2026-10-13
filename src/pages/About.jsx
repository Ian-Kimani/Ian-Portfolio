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
                I'm a software engineer passionate about backend architecture,
                system design, and building software that thrives in the messiness of
                the real world. I believe technology should solve practical operational
                hurdles rather than add friction.
              </p>
              <p>
                My work spans designing offline-first desktop systems for rural
                coffee cooperatives, building custom delta-synchronization engines
                to keep disconnected nodes aligned, integrating hardware peripherals
                (weighing scales, printers), and developing multi-tenant web platforms
                with robust data modeling and automated billing.
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
                <p className="value-item__title">Learning with AI</p>
                <p className="value-item__desc">
                  I’m actively exploring how AI can improve the tools and systems I build.
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
                <p className="value-item__title">Exploring AI applications in software</p>
                <p className="value-item__desc">
                  Exploring how artificial intelligence can be integrated into software solutions to enhance functionality and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Now Section */}
          <div className="about-section">
            <h2 className="about-section__title">Now</h2>
            <ul className="now-list">
              <li>
                Learning and experimenting with AI tools and frameworks to enhance software development and problem-solving capabilities.
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
