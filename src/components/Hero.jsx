import { Download } from "lucide-react";
import portfolioData from "../data/portfolioData";
import socialIconMap from "./socialIcons";

export default function Hero() {
  const { personal, socials } = portfolioData;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <img
        src={personal.heroBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p className="font-display text-cyan-300 font-semibold tracking-wide mb-3">
            {personal.title}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {personal.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl mx-auto md:mx-0">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-900/40 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>

            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src={personal.photo}
            alt={personal.name}
            className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover ring-4 ring-violet-500/40 shadow-2xl shadow-violet-900/30"
          />
        </div>
      </div>
    </section>
  );
}
