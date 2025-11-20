import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/90" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1 text-xs text-cyan-300/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            Available for freelance & remote roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">Abdullah Talib</span> —
            <br className="hidden sm:block" /> IT Graduate & Creative Developer
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
            I build ultra-fast, responsive web apps and futuristic interfaces blending UX, 3D, and motion. Passionate about clean code, accessibility, and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition transform hover:scale-[1.02]">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 font-semibold text-white backdrop-blur hover:border-cyan-400/40">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
