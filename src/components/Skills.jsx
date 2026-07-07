import portfolioData from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
        Technical Skills
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 px-4 py-1.5 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
