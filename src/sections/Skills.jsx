const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "REST APIs", "Prisma", "Authentication", "API Design"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "SQLite", "Relational Database Design", "Data Modeling", "Transactions"],
  },
  {
    title: "SYSTEMS & TOOLS",
    skills: ["Git", "GitHub", "Docker", "Linux / CLI", "Postman", "Vercel"],
  },
  {
    title: "INTEGRATIONS",
    skills: ["M-Pesa APIs", "SMS APIs", "Webhooks", "Serial Communication", "Hardware / IoT"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-24 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Technical Skills
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-100">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-zinc-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
