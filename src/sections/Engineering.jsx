import { motion } from "framer-motion";

const areas = [
  {
    id: "01",
    title: "BACKEND",
    description: "I design APIs and backend services around clear business rules, reliable data flow, authentication, and maintainable architecture.",
  },
  {
    id: "02",
    title: "DATA",
    description: "I treat database design as part of the architecture. I work with relational models, constraints, transactions, and business-critical data.",
  },
  {
    id: "03",
    title: "SYSTEMS",
    description: "I enjoy solving problems where software meets the real world — from payment and messaging integrations to hardware and offline-first applications.",
  },
  {
    id: "04",
    title: "PRODUCT",
    description: "I build around actual problems rather than technology for its own sake. My projects are driven by users, workflows, and operational constraints.",
  },
];

function Engineering() {
  return (
    <section id="engineering" className="border-t border-zinc-900 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Engineering
        </h2>
        
        <h3 className="mb-24 text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl md:text-6xl max-w-3xl">
          I care about what happens behind the interface.
        </h3>

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
          {areas.map((area, idx) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col border-t border-zinc-900 pt-8"
            >
              <h4 className="mb-6 flex items-center gap-4 text-sm font-semibold tracking-widest text-zinc-100">
                <span className="text-zinc-500">{area.id}</span>
                <span className="h-px w-6 bg-zinc-800"></span>
                {area.title}
              </h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Engineering;