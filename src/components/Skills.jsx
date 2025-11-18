import { motion } from 'framer-motion'
import { Code2, Cpu, Zap, LayoutGrid } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'React', hue: 'from-cyan-400 to-blue-500' },
  { icon: Cpu, label: 'WebGL/Three.js', hue: 'from-fuchsia-400 to-cyan-400' },
  { icon: Zap, label: 'Framer Motion', hue: 'from-amber-300 to-pink-500' },
  { icon: LayoutGrid, label: 'Design Systems', hue: 'from-violet-400 to-fuchsia-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Skills</h2>
          <p className="text-slate-300 mt-3 max-w-2xl">Glowing badges that reflect my strongest capabilities. Hover to ignite.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="relative group overflow-hidden rounded-xl p-4 border border-white/10 bg-slate-900/60 backdrop-blur-md"
            >
              <div className={`absolute -inset-8 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-br ${s.hue}`} />
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <s.icon className="text-white" size={20} />
                </div>
                <div className="text-white font-medium">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
