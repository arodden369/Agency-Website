"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useState } from "react"

export function Guarantee() {
  const faqs = [
    {
      question: "How soon do leads start?",
      answer:
        "Daily flow can begin within 1-3 days of activating your system. Experience it immediately in your 3-day free trial — see real homeowner inquiries from people interested in estimates coming directly to your phone.",
    },
    {
      question: "How do leads come in?",
      answer:
        "Direct inbound conversations to your phone/app for real-time, personal handling. Homeowners who've expressed interest in an estimate connect with you directly, creating instant trust and organic conversations that convert.",
    },
    {
      question: "Can I pause or adjust?",
      answer:
        "Yes — full flexibility. Pause, resume, or scale anytime with the click of a button. You're in complete control of your lead volume based on your capacity.",
    },
    {
      question: "What's the 3-day trial?",
      answer:
        "3 days of full daily lead flow. Experience real homeowner inquiries coming directly to you before making any commitment. See the quality firsthand with no service fees during the trial.",
    },
    {
      question: "What makes leads high-quality?",
      answer:
        "Motivated homeowners in your exclusive territories who express interest in getting an estimate and make direct contact with you. Because they reach out to you, trust is built instantly, resulting in superior conversions compared to cold leads.",
    },
    {
      question: "Are the leads geographically exclusive?",
      answer:
        "Yes! All leads are located in the area you specifically choose during setup. You get exclusive rights to those areas—we won't work with competing contractors in your zones.",
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section id="guarantee-contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            <span className="text-blue-400">Risk-Free Licensing</span>
            <br />
            Start with a 3-Day Free Trial
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-4">No contracts. Pause or cancel anytime.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto glass p-12 rounded-3xl mb-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Custom Licensing Plans</h3>
          <p className="text-white/70 mb-8">Tailored to your territory, volume goals, and growth targets.</p>
          <div className="text-5xl font-bold mb-8">
            <span className="text-blue-400">3-Day Free Trial</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Exclusive territory access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Daily homeowner inquiries from people seeking estimates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Full system control & flexibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>No service fees during trial period</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>24/7 support & optimization</span>
            </li>
          </ul>
          <p className="text-sm text-white/60 mb-6">
            Details discussed on call — designed for massive ROI with flexible commitment.
          </p>
          <a
            href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-50 pointer-events-auto"
          >
            Book a Call to Start Your Free Trial
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">FAQ</p>
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-blue-400">Frequently Asked Questions!</span>
            </h3>
            <p className="text-white/60">
              Can't Find Your Answer Here?{" "}
              <a
                href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Book a Call!
              </a>
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <HelpCircle
                    className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && <div className="px-8 pb-6 text-white/70 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center relative z-50 glass p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">
            3-Day Free Trial — No Service Fees During Trial
          </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            License GrounderAI — Start Your 3-Day Free Trial Today
          </h3>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Partner with us for daily homeowner inquiries from people interested in estimates. Experience consistent,
            high-quality leads flowing directly to you.
          </p>
          <a
            href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] relative z-50 pointer-events-auto"
          >
            Book a Call
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/50">
            <span>Empty calendar? Fixed</span>
            <span>Slow Season? Over</span>
            <span>Low Pipeline? Solved</span>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
