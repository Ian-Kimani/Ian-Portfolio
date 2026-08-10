import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projects from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Case Study Not Found</h1>
        <Link to="/" className="mt-6 text-blue-400 hover:underline">
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <header className="mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wider text-blue-400">
            {project.category.toUpperCase()}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </header>

        {project.image && (
          <div className="mb-20 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-[1fr_250px]">
          <div className="space-y-16">
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">The Problem</h2>
              <p className="leading-relaxed text-zinc-400">
                {project.caseStudy.problem}
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Architecture & System Design</h2>
              <p className="leading-relaxed text-zinc-400">
                {project.caseStudy.architecture}
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">The Solution</h2>
              <p className="leading-relaxed text-zinc-400">
                {project.caseStudy.solution}
              </p>
            </section>
          </div>

          <aside>
            <div className="sticky top-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Tech Stack
              </h3>
              <ul className="space-y-3">
                {project.stack.map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {tech}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 border-t border-zinc-800 pt-6">
                 <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Status
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  {project.status === "Live" && <span className="h-2 w-2 rounded-full bg-green-500" />}
                  {project.status === "In development" && <span className="h-2 w-2 rounded-full bg-yellow-500" />}
                  {project.status}
                </span>
              </div>
              
              <div className="mt-6 border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>Private Repository</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
