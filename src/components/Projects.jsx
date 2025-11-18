import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon Commerce', desc: 'Ecommerce motion system with 3D product views', tags: ['React', 'R3F', 'GSAP'] },
  { title: 'Holo Dashboard', desc: 'Realtime analytics with shader-driven charts', tags: ['WebGL', 'Three.js', 'D3'] },
  { title: 'XR Landing', desc: 'Interactive hero scenes with parallax and light trails', tags: ['Framer', 'Lenis'] },
]

export default function Projects() {
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
          <p className="text-slate-300 mt-3 max-w-2xl">3D hover cards with glossy motion. Click to focus.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="[transform-style:preserve-3d] text-left relative p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(56,189,248,0.08)]"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: 'radial-gradient(600px 120px at 50% -20%, rgba(56,189,248,0.2), transparent)',
                opacity: active === i ? 1 : 0,
                transition: 'opacity 300ms',
              }} />
              <div className="relative">
                <div className="text-white font-semibold text-lg">{p.title}</div>
                <div className="text-slate-300/90 mt-1">{p.desc}</div>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md border border-white/10 text-slate-200 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
