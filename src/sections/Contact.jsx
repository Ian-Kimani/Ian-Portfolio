import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-8 py-16 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
              Let's build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
              I'm interested in software engineering opportunities,
              interesting technical problems, collaborations, and
              conversations about building useful software.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                <Mail size={16} />
                Send me an email
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;