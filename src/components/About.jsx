import { motion } from 'framer-motion'

const items = [
  { year: '2025', title: 'Senior Frontend Engineer', desc: 'Led immersive 3D product sites using React Three Fiber and advanced motion.' },
  { year: '2023', title: 'WebGL Specialist', desc: 'Built shader-driven visuals and interactive data scenes for enterprise dashboards.' },
  { year: '2021', title: 'Frontend Developer', desc: 'Shipped performant, accessible UI systems with design tokens and theming.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(closest-side,rgba(139,92,246,0.5),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About Me</h2>
          <p className="text-slate-300 mt-3 max-w-2xl">I design and build future-facing web experiences—clean architecture, premium motion, and considered details.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1.5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-slate-500/30 to-fuchsia-400/60" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-10' : 'md:pr-10'}`}
              >
                <div className="absolute -left-1.5 md:left-auto md:-translate-x-1/2 md:left-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                  <div className="text-cyan-300 text-sm">{it.year}</div>
                  <div className="text-white font-medium mt-1">{it.title}</div>
                  <div className="text-slate-300/90 mt-2">{it.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
