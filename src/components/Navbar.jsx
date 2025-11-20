import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
          <a href="#home" className="relative inline-flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 blur-md"></span>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs tracking-widest text-cyan-300/80">PORTFOLIO</span>
              <span className="text-white font-semibold">Abdullah Talib</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:abdullahtalib@example.com" aria-label="Email" className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 text-slate-200/80 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 text-slate-200/80 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 text-slate-200/80 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200/80 hover:text-white p-2" aria-label="Open Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="mailto:abdullahtalib@example.com" className="text-slate-200/80 hover:text-cyan-300"><Mail className="h-5 w-5" /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-cyan-300"><Github className="h-5 w-5" /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-cyan-300"><Linkedin className="h-5 w-5" /></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
