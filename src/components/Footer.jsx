function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-8 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          © 2026 Ian Wabacha
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Ian-Kimani"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ian-wabacha"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kimaniian273@gmail.com"
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;