import { GraduationCap, Award } from "lucide-react";
import portfolioData from "../data/portfolioData";

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
        Education &amp; Certifications
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-6">
          <div className="flex items-center gap-3 text-violet-300">
            <GraduationCap size={22} />
            <h3 className="font-display text-lg font-bold text-slate-100">
              Education
            </h3>
          </div>
          {education.map((edu) => (
            <div key={edu.institution} className="mt-5">
              <p className="font-semibold text-slate-100">{edu.institution}</p>
              <p className="text-slate-300">{edu.credential}</p>
              <p className="mt-1 text-sm text-cyan-300">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-6">
          <div className="flex items-center gap-3 text-violet-300">
            <Award size={22} />
            <h3 className="font-display text-lg font-bold text-slate-100">
              Certifications
            </h3>
          </div>
          {certifications.map((cert) => (
            <div key={cert.name} className="mt-5">
              <p className="font-semibold text-slate-100">{cert.name}</p>
              <p className="text-sm text-cyan-300">{cert.issuer}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300 leading-relaxed">
                {cert.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
