import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";
import projects from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <SEO
        title="Ian Kimani - Software Engineer | Full-Stack & Offline-First Systems"
        description="Ian Kimani is a software engineer based in Nairobi, Kenya, building practical offline-first systems, distributed sync architectures, and multi-tenant platforms."
        url="https://iankimani.me/"
      />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="content" className="site-main">
          {/* Intro Section */}
          <section className="intro">
            <div className="intro__text">
              <h1 className="intro__greeting">Hi, I'm Ian</h1>
              <p className="intro__role">
                Software Engineer | Full-Stack &amp; Offline-First Systems
              </p>
              <div className="intro__bio">
                <p>
                  Welcome to my corner of the internet. I'm a software engineer based in Nairobi, Kenya. I build software designed to work in the real world—focusing on backend reliability, sound system design, and practical tools that solve tangible problems for people and businesses.
                </p>
                <p>
                  I’m especially interested in software engineering best practices and applying AI to make systems smarter and more useful.
                </p>
              </div>
              <div className="socials">
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
                <a href="mailto:kimaniian273@gmail.com">
                  Email
                </a>
              </div>
            </div>
            <img
              className="intro__photo"
              src="/images/profile.png"
              alt="Ian Kimani"
              loading="eager"
            />
          </section>

          <hr className="separator" />

          {/* Selected Work Section */}
          <section>
            <h2 className="section-title">Selected Work</h2>
            <div className="project-grid">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <Link className="view-all" to="/work">
              All projects
            </Link>
          </section>

          <hr className="separator" />

          {/* Principles Section */}
          <section>
            <h2 className="section-title">Core Principles</h2>
            <div className="values-grid">
              <div className="value-item">
                <p className="value-item__title">Reliable systems</p>
                <p className="value-item__desc">
                  I care about building software that is stable, maintainable, and works consistently in real environments.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Clear architecture</p>
                <p className="value-item__desc">
                  Good data models, clean APIs, and thoughtful design make systems easier to understand and extend.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Practical problem solving</p>
                <p className="value-item__desc">
                  I focus on solving actual problems rather than chasing technology for its own sake.
                </p>
              </div>
              <div className="value-item">
                <p className="value-item__title">Growing with AI</p>
                <p className="value-item__desc">
                  I’m actively exploring how AI can improve the tools and systems I build.
                </p>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
