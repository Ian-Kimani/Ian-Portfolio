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
                <p className="value-item__title">Reliability over assumptions</p>
                <p className="value-item__desc">
                  Never assume perpetual 5G connectivity or uninterruptible power. Software should be built to persist transactions locally, fail gracefully, and recover without data loss.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Rooted in operational reality</p>
                <p className="value-item__desc">
                  Code exists in a physical context. Connecting software directly with digital weighing scales and hardware bridges eliminates manual bottlenecks and prevents record tampering.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Clean schemas and sound architecture</p>
                <p className="value-item__desc">
                  Databases are foundational. I invest deeply in clear relational models, idempotent sync protocols, strict RBAC, and reliable financial calculations.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Pragmatic product delivery</p>
                <p className="value-item__desc">
                  Solve real problems with the right tools. I prioritize simplicity, fast execution, clean code, and solutions that actually make people's workday easier.
                </p>
              </div>
            </div>
          </div>

          {/* Focus Areas Section */}
          <div className="about-section">
            <h2 className="about-section__title">Focus areas</h2>
            <div className="values-grid">
              <div className="value-item">
                <p className="value-item__title">Offline-first &amp; Edge Systems</p>
                <p className="value-item__desc">
                  Desktop runtimes, local embedded databases (SQLite), and serial port hardware communications for high-speed edge operations.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Distributed Synchronization &amp; APIs</p>
                <p className="value-item__desc">
                  Custom delta-sync protocols, revision tracking, conflict resolution, and reliable RESTful services connecting distributed nodes to central cloud hubs.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Multi-tenant Platforms &amp; Automation</p>
                <p className="value-item__desc">
                  SaaS architectures with tenant data isolation, automated billing pipelines, utility meter apportionment, and programmatic messaging integrations (SMS, WhatsApp, M-Pesa).
                </p>
              </div>
            </div>
          </div>

          {/* Now Section */}
          <div className="about-section">
            <h2 className="about-section__title">Now</h2>
            <ul className="now-list">
              <li>
                Refining delta-synchronization protocols for rural agricultural cooperative deployments in Kenya.
              </li>
              <li>
                Developing automated financial reconciliations and payment gateway pipelines.
              </li>
              <li>
                Exploring low-power telemetry, local-first web architectures, and system resilience.
              </li>
            </ul>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
