import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="border-t border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About
        </h2>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16 lg:gap-24">
          <div className="shrink-0 md:w-[320px] lg:w-[360px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
            >
              <img
                src="/images/profile.png"
                alt="Portrait of Ian Kimani"
                className="w-full object-cover transition-opacity duration-500"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="flex-1">
            <h3 className="mb-10 text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
              Building software by solving problems.
            </h3>

            <div className="mb-12 space-y-6 text-lg leading-relaxed text-zinc-400">
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

            <div className="grid grid-cols-2 gap-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 sm:grid-cols-4">
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
                <p className="text-zinc-100">Systems & Databases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;