import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Wheelchair',
    tags: ['Voice Recognition', 'IoT', 'AI'],
    desc: 'Assistive mobility with voice control and smart navigation.',
    link: '#',
  },
  {
    title: 'DiabFit',
    tags: ['Health', 'Mobile', 'Analytics'],
    desc: 'Diabetes management app with tracking and insights.',
    link: '#',
  },
  {
    title: 'Space Exploration Website',
    tags: ['WebGL', 'API', 'Design'],
    desc: 'A cosmic showcase with data-driven content.',
    link: '#',
  },
  {
    title: 'Mini Projects',
    tags: ['UI', 'Landing Pages', 'JS Apps'],
    desc: 'A collection of quick experiments and components.',
    link: '#',
  },
];

function Card({ title, tags, desc, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative block h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur will-change-transform"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/0 to-cyan-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-slate-800/60 px-2 py-1 text-xs text-cyan-300/90">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-3 text-slate-300">3D hover cards with tilt, glassmorphism, and neon accents.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-white hover:border-cyan-400/40">
            Get a quote
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
          {/* Space for future projects */}
          <motion.div whileHover={{ y: -6 }} className="flex items-center justify-center rounded-2xl border border-dashed border-white/15 bg-slate-900/30 p-6 text-slate-400">
            More coming soon...
          </motion.div>
        </div>
      </div>
    </section>
  );
}
