import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project }) {
  const { title, tags, bullets, links } = project;

  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-6 hover:border-violet-500/40 transition-colors">
      <h3 className="font-display text-xl font-bold text-slate-100">{title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-slate-300 leading-relaxed flex-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan-400">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 text-slate-300 px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {(links?.repo || links?.demo) && (
        <div className="mt-5 flex gap-4">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
