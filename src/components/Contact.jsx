import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(500px_circle_at_90%_20%,rgba(167,139,250,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell me about your project, timeline, and goals. I’ll get back within 24–48 hours.</p>

            <div className="mt-8 flex items-center gap-3">
              <a href="mailto:abdullahtalib@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-white hover:border-cyan-400/40"><Mail className="h-5 w-5"/> Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-white hover:border-cyan-400/40"><Github className="h-5 w-5"/> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-white hover:border-cyan-400/40"><Linkedin className="h-5 w-5"/> LinkedIn</a>
            </div>

            <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Abdullah Talib. All rights reserved.</p>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e)=>e.preventDefault()} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-cyan-400/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-cyan-400/50" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Project Type</label>
                <select className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white outline-none focus:border-cyan-400/50">
                  <option>Web Development</option>
                  <option>UI/UX</option>
                  <option>WordPress</option>
                  <option>Database Design</option>
                  <option>API Integration</option>
                  <option>3D Web Experience</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-cyan-400/50" placeholder="Tell me about your idea..." />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition transform hover:scale-[1.02]">
                Send Message
              </button>
              <span className="text-xs text-slate-400">This demo form doesn’t send yet.</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
