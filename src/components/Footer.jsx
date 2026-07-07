import { Download, MapPin, Phone } from "lucide-react";
import portfolioData from "../data/portfolioData";
import socialIconMap from "./socialIcons";

export default function Footer() {
  const { personal, socials } = portfolioData;

  return (
    <footer
      id="contact"
      className="border-t border-slate-800/60 bg-slate-950/60"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
          Let's Connect
        </h2>
        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />

        <p className="mt-6 text-slate-300 max-w-xl mx-auto">
          I'm actively looking for opportunities to start my career in software
          development. Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-300">
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-cyan-300 transition-colors"
          >
            {personal.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={16} />
            {personal.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} />
            {personal.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
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

        <a
          href={personal.resumeUrl}
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-900/40 transition-colors"
        >
          <Download size={18} />
          Download Resume
        </a>

        <p className="mt-14 text-sm text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
