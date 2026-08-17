import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]"></div>
        {/* Subtle, restrained blue glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
          >
            Software Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[4rem] font-medium leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="text-zinc-100">I build</span>
            <br />
            <span className="text-zinc-600">systems that work.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            I'm Ian Wabacha Kimani, a software engineer focused on backend systems, APIs, databases, and building software that solves real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-800 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex items-center gap-6"
          >
            <a
              href="https://github.com/Ian-Kimani"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>

            <a
              href="https://www.linkedin.com/in/iankimani"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

            <a
              href="mailto:kimaniian273@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <Mail size={28} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 right-0 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 lg:flex"
        >
          <span className="h-px w-12 bg-zinc-800"></span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;