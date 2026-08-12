import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projects from "../data/projects";
import SEO from "../components/SEO";

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-zinc-100">
        <h1 className="text-3xl font-medium">Project not found</h1>
        <Link to="/" className="mt-8 text-sm font-semibold tracking-widest text-zinc-500 uppercase hover:text-zinc-100 transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={project.seoTitle || `${project.title} | Case Study | Ian Kimani`}
        description={project.caseStudy.problem.substring(0, 150) + "..."}
        url={`https://iankimani.me/case-study/${slug}`}
        type="article"
        image={project.image ? `https://iankimani.me${project.image}` : undefined}
      />
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link to="/" className="group mb-16 inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-zinc-500 transition hover:text-zinc-100">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back
        </Link>

        <header className="mb-20">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mb-12 text-sm font-semibold uppercase tracking-widest text-blue-400">
            {project.category}
          </p>
        </header>

        {project.image && (
          <div className="mb-24 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <img src={project.image} alt={project.altText || project.title} className="w-full object-cover" />
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-[1fr_250px]">
          <div className="space-y-24">
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">The Problem</h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                {project.caseStudy.problem}
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">Architecture & System Design</h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                {project.caseStudy.architecture}
              </p>
            </section>
            
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">The Solution</h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                {project.caseStudy.solution}
              </p>
            </section>
            
            {project.related && (
              <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                <p className="text-sm text-zinc-400">
                  {project.related.text}{" "}
                  <Link to={`/case-study/${project.related.slug}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                    {project.related.linkText}
                  </Link>.
                </p>
              </div>
            )}
          </div>

          <aside>
            <div className="sticky top-24 space-y-12">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">Technology</h3>
                <ul className="space-y-3 text-sm font-medium text-zinc-300">
                  {project.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">Details</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li>2026</li>
                  <li>Independent Project</li>
                  <li className="flex items-center gap-2 pt-4 text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Private Repository
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}

export default CaseStudy;
