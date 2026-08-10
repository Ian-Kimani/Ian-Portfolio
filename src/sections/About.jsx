function About() {
  return (
    <section id="about" className="border-t border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About
        </h2>

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div>
            <h3 className="mb-12 text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
              Building software by solving problems.
            </h3>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                I'm a Software engineer interested in backend development, system design, and building software that has to work in the real world. I enjoy building systems that solve problems, and I have a particular interest in backend architecture, databases, APIs, and integrations.
              </p>
              <p>
                I've been building products around real-world problems, including a rental management platform and an offline-first system for coffee factories.
              </p>
              <p>
                I'm particularly interested in backend architecture, databases, APIs, integrations, and understanding how the pieces of a system fit together.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 sm:p-10">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Based In
              </h4>
              <p className="text-zinc-100">Kenya</p>
            </div>
            
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Focus
              </h4>
              <p className="text-zinc-100">Backend / Full-stack</p>
            </div>
            
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Currently
              </h4>
              <p className="text-zinc-100">Building & learning</p>
            </div>
            
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Interests
              </h4>
              <p className="text-zinc-100">Systems · Databases · Product</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;