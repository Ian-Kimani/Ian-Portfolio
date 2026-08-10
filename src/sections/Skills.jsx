import {
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Terminal,
  Webhook
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "Python", "SQL", "HTML / CSS"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "REST APIs", "Authentication & authorization"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "Prisma", "SQL", "Database design", "Transactions & relational modeling"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    icon: Terminal,
    title: "Systems & Tools",
    skills: ["Git & GitHub", "Docker", "Linux / CLI", "Postman", "Vercel Render"],
  },
  {
    icon: Webhook,
    title: "Integrations",
    skills: ["M-Pesa / payment APIs", "SMS APIs", "Webhooks", "Serial communication", "Hardware integration"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with."
          description="A comprehensive list of the languages, frameworks, and tools I use to build scalable systems."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group bg-[#08090a] p-7 transition hover:bg-zinc-950"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-zinc-500 transition group-hover:text-blue-400"
                  />
                  <h3 className="text-lg font-medium text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
