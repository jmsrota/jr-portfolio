import { useState } from "react";
import { Menu, X } from "lucide-react";
import portfolioData from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { personal, navLinks } = portfolioData;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-bold text-slate-100 hover:text-violet-300 transition-colors"
        >
          {personal.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col items-center gap-6 pb-8 pt-2 bg-slate-950/95">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
