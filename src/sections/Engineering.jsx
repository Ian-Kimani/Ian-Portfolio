import {
  Database,
  GitBranch,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const areas = [
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Building APIs, authentication, business logic, validation, and services that form the backbone of an application.",
    technologies: ["Node.js", "Express", "FastAPI"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Designing relational data models and working with databases as a fundamental part of the system rather than an afterthought.",
    technologies: ["PostgreSQL", "Prisma", "SQL"],
  },
  {
    icon: Workflow,
    title: "System Design",
    description:
      "Thinking about data flow, service boundaries, failure cases, scalability, and the engineering decisions behind an application.",
    technologies: ["Architecture", "APIs", "Data Flow"],
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Connecting frontend interfaces to reliable backend systems and turning complete product requirements into working software.",
    technologies: ["React", "JavaScript", "REST"],
  },
  {
    icon: GitBranch,
    title: "Integrations & Automation",
    description:
      "Connecting software to external services and automating real-world workflows such as payments, messaging, and notifications.",
    technologies: ["APIs", "SMS", "Webhooks"],
  },
];

function Engineering() {
  return (
    <section id="engineering" className="border-y border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Engineering"
          title="How I think about software."
          description="I'm interested not only in making applications work, but in understanding the engineering decisions behind them."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group bg-[#08090a] p-7 transition hover:bg-zinc-950"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-zinc-500 transition group-hover:text-blue-400"
                />

                <h3 className="mt-8 text-lg font-medium">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs text-zinc-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Engineering;