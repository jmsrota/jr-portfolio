import portfolioData from "../data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
        About Me
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />

      <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
        {personal.summary}
      </p>
    </section>
  );
}
