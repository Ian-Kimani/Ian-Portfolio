function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;