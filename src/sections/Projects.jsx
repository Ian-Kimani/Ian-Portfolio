import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="work" className="border-t border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;