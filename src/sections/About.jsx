import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    value: "2026",
    label: "Building real-world products",
  },
  {
    value: "BSc",
    label: "Mathematics & Computer Science",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="Engineering scalable solutions."
          />

          <div>
            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                I'm Ian, a Software Engineer with a strong foundation in Mathematics & Computer Science from
                Kenyatta University.
              </p>

              <p>
                My expertise lies in backend engineering, distributed systems, and building complex 
                APIs. I specialize in designing offline-first architectures and ensuring data integrity
                between edge devices and the cloud.
              </p>

              <p>
                I prefer learning by building real products around real
                problems. That has led me to develop software for rental
                management and coffee factory operations while learning
                what it actually takes to turn an idea into a usable
                system.
              </p>

              <p>
                I'm currently focused on becoming a stronger engineer —
                understanding not just how to write code, but why systems
                are designed the way they are.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 border-y border-zinc-800 py-8">
              {highlights.map((item) => (
                <div key={item.value}>
                  <p className="text-2xl font-semibold tracking-tight">
                    {item.value}
                  </p>

                  <p className="mt-2 max-w-[120px] text-xs leading-5 text-zinc-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;