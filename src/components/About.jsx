import { motion } from 'framer-motion';
import { Code2, PenTool, Database, Globe, Figma, Github, PanelLeft, StretchHorizontal } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: StretchHorizontal },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Python', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'WordPress', icon: Globe },
  { name: 'Figma', icon: PenTool },
  { name: 'Canva', icon: PenTool },
  { name: 'Git/GitHub', icon: Github },
  { name: 'APIs', icon: Globe },
  { name: 'Responsive', icon: PanelLeft },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m an IT Specialist & Front-End Developer (BSc IT) focused on building modern, accessible web experiences. I love translating ideas into polished interfaces using clean code, thoughtful UX, and motion.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map(({ name, icon: Icon }) => (
                <motion.div key={name} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10" />
                  <div className="relative flex items-center gap-3">
                    <div className="rounded-lg border border-white/10 p-2 bg-slate-800/50 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-slate-200">{name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl" />
              <div className="relative">
                <p className="text-slate-300">
                  Outside of work, I explore 3D web experiments and interaction design. I enjoy solving complex UI problems, optimizing performance, and crafting delightful micro-animations.
                </p>
                <ul className="mt-6 space-y-2 text-slate-300/90 text-sm list-disc pl-5">
                  <li>Clean, semantic, accessible code</li>
                  <li>Performance-first mindset (Core Web Vitals)</li>
                  <li>Design systems & component libraries</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
