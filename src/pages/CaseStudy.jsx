import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
import projects from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main" style={{ padding: "4rem 0", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Project not found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/work" className="view-all" style={{ justifyContent: "center" }}>
            Back to projects
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <>
      <SEO
        title={project.seoTitle || `${project.title} - Case Study | Ian Kimani`}
        description={project.summary}
        url={`https://iankimani.me/case-study/${slug}`}
        type="article"
        image={project.image ? `https://iankimani.me${project.image}` : undefined}
      />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="content" className="site-main">
          {/* Detail Header */}
          <div className="detail-header">
            <p className="detail-header__eyebrow">Project Case Study</p>
            <h1 className="detail-header__title">{project.title}</h1>
            <p className="detail-header__desc">{project.description}</p>
            <div className="detail-meta">
              <span className="detail-meta__item">
                <span className="detail-meta__label">Status</span> {project.status}
              </span>
              <span className="detail-meta__item">
                <span className="detail-meta__label">Year</span> {project.year}
              </span>
              <span className="detail-meta__item">
                <span className="detail-meta__label">Category</span> {project.category}
              </span>
            </div>
          </div>

          {/* Detail Layout: Article & Sidebar */}
          <div className="detail-layout">
            <article className="prose">
              {project.image && (
                <div style={{ marginBottom: "2rem" }}>
                  <img
                    src={project.image}
                    alt={project.altText || project.title}
                    style={{
                      width: "100%",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--border)"
                    }}
                  />
                </div>
              )}

              {project.caseStudy?.tagline && (
                <blockquote>
                  <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                    {project.caseStudy.tagline}
                  </p>
                </blockquote>
              )}

              <h2>The Operational Problem</h2>
              <p>{project.caseStudy?.problem}</p>

              <h2>Architecture &amp; System Design</h2>
              <p>{project.caseStudy?.architecture}</p>

              <h2>The Solution &amp; Engineering Implementation</h2>
              <p>{project.caseStudy?.solution}</p>

              {project.caseStudy?.highlights && (
                <>
                  <h2>Key Technical Highlights</h2>
                  <ul>
                    {project.caseStudy.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.related && (
                <div
                  style={{
                    marginTop: "2.5rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border)",
                    background: "var(--bg-alt)"
                  }}
                >
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>
                    {project.related.text}{" "}
                    <Link
                      to={`/case-study/${project.related.slug}`}
                      style={{ color: "var(--accent-text)", fontWeight: 500 }}
                    >
                      {project.related.linkText} &rarr;
                    </Link>
                  </p>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <div>
                <p className="sidebar-section__title">Technology Stack</p>
                <ul className="sidebar-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="sidebar-section__title">Navigation</p>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <Link to="/work" className="sidebar-link">
                    &larr; All projects
                  </Link>
                  <Link to="/contact" className="sidebar-link">
                    Get in touch &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
