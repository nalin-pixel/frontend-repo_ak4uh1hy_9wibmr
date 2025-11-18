import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.2])

  return (
    <section id="hero" className="relative min-h-[88vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ opacity }} className="absolute inset-0">
          <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(168,85,247,0.1),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div style={{ y }} className="max-w-2xl">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
            }}
            className="text-5xl md:text-6xl font-bold leading-tight text-slate-50 drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>Futuristic</motion.span>{' '}
            <motion.span variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>Developer</motion.span>{' '}
            <motion.span variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>Portfolio</motion.span>
          </motion.h1>
          <p className="mt-5 text-slate-300/90 leading-relaxed">
            Crafting immersive web experiences with React, WebGL, and motion. I build performant, animated interfaces that feel alive.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-300/60 hover:bg-cyan-400/25 transition group"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
              <span>View Work</span>
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-fuchsia-500/15 border border-fuchsia-400/30 hover:border-fuchsia-300/60 hover:bg-fuchsia-400/25 transition group"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-fuchsia-400/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
              <span>Contact</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
