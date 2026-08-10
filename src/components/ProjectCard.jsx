import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-center"
    >
      <div className="flex flex-col">
        <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <span>{project.id}</span>
          <span className="h-px w-8 bg-zinc-800"></span>
          <span className="text-blue-400">{project.category}</span>
        </div>

        <h3 className="mb-6 text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
          {project.title}
        </h3>
        
        <p className="mb-8 text-lg leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mb-10 text-sm font-medium text-zinc-600">
          {project.stack.join(" · ")}
        </div>

        <div>
          <Link
            to={`/case-study/${project.slug}`}
            className="inline-flex items-center gap-3 rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
          >
            View case study
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Link to={`/case-study/${project.slug}`} className="block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 z-10 bg-black/10 transition-opacity group-hover:opacity-0"></div>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-sm text-zinc-700">
              [Visualization]
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;