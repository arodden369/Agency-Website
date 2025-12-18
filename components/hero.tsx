"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Liquid Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="inline-flex items-center gap-4 px-6 py-2 glass rounded-full mb-6 text-sm font-medium"
        >
          <span className="text-blue-400">Only pay $75 per qualified lead.</span>
          <span className="text-white/40">|</span>
          <span className="text-white/70">$0 Setup fees & no commitments</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-sm md:text-base font-semibold tracking-wider uppercase mb-4 text-blue-400"
        >
          FOR CONTRACTORS ONLY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight leading-7 lg:text-7xl"
        >
          GET <span className="text-gradient">Unlimited</span>
          <br />
          Pre-Qualified Leads
          <br />
          <span className="text-blue-400">- ONLY Pay Per Lead</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/80 text-xl md:text-2xl leading-relaxed mb-4 max-w-5xl mx-auto font-medium"
        >
          $0 Set up fee, ZERO Commitment, $0 Ad Spend &amp; 1 to 1 Leads Replacement For Bad Leads.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-white text-lg md:text-xl font-semibold mb-8"
        >
          Watch the video to see below 👇
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-12 glass p-4 rounded-3xl"
        >
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/qwocgvuciy"
              title="Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center relative z-50"
        >
          <a
            href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 group px-10 py-5 bg-white text-black rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl inline-block pointer-events-auto"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-20"
        >
          <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Trusted by 50+ Contractors</p>
        </motion.div>
      </div>
    </section>
  )
}
