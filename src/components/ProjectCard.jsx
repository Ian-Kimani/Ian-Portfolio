import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50">
      <div className="aspect-[16/10] overflow-hidden bg-zinc-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10 opacity-60"></div>
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-mono text-zinc-700">
            [Project Visualization Pending]
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-wider text-blue-400">
          <span className="uppercase">{project.category}</span>
        </div>

        <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
          {project.title}
        </h3>
        
        <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-800/50">
          <Link
            to={`/case-study/${project.slug}`}
            className="group/link flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
          >
            Read Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500" title="Source code is in a private repository">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Private
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;