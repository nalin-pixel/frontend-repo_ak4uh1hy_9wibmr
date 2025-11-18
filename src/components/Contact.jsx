import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Get in Touch</h2>
          <p className="text-slate-300 mt-3 max-w-2xl">Have a project in mind? I’d love to collaborate.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="grid md:grid-cols-2 gap-4 bg-slate-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
        >
          <div>
            <label className="text-slate-300 text-sm">Name</label>
            <input required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400/60" />
          </div>
          <div>
            <label className="text-slate-300 text-sm">Email</label>
            <input required type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400/60" />
          </div>
          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Message</label>
            <textarea required rows="5" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400/60" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-300/60 hover:bg-cyan-400/25 transition group">
              <span className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
              Send Message
            </button>
            {sent && <span className="text-cyan-300">Thanks! I’ll get back to you soon.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
