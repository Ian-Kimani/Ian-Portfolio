import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";
import projects from "../data/projects";

export default function Work() {
  return (
    <>
      <SEO
        title="Projects - Ian Kimani | Software Engineer"
        description="Production systems, offline-first architectures, and distributed platforms built by Ian Kimani."
        url="https://iankimani.me/work"
      />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="content" className="site-main">
          <div className="page-header">
            <h1 className="page-header__title">Projects</h1>
            <p className="page-header__desc">
              Production systems, offline-first architectures, and distributed platforms built for real-world operational environments.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
