import { motion } from 'framer-motion';
import { Globe, PenTool, Database, Boxes, Layers3, Link as LinkIcon } from 'lucide-react';

const services = [
  { title: 'Web Development', icon: Globe, desc: 'Modern, responsive, accessible websites optimized for performance.' },
  { title: 'UI/UX Design', icon: PenTool, desc: 'Wireframes, prototypes, and pixel-perfect designs with Figma.' },
  { title: 'WordPress', icon: Boxes, desc: 'Custom themes, page builders, and optimization for speed & SEO.' },
  { title: 'Database Design', icon: Database, desc: 'Relational schemas, SQL optimization, data modeling and security.' },
  { title: 'API Integration', icon: LinkIcon, desc: 'RESTful APIs, auth, and integrations with third-party services.' },
  { title: '3D Web Experiences', icon: Layers3, desc: 'Three.js/Spline based interactive visuals and micro-interactions.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">End-to-end product support, from concept and design to development and launch.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-indigo-500/0 to-cyan-400/0 opacity-0 transition-opacity hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex rounded-xl border border-white/10 bg-slate-800/50 p-3 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
