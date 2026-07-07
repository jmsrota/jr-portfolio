import portfolioData from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
        Projects
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
