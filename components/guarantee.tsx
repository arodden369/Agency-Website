"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useState } from "react"

export function Guarantee() {
  const faqs = [
    {
      question: "How Long before I get my 1st lead?",
      answer:
        "You can start getting leads in 1-3 days. All we need are your zip codes and the data you would like to start.",
    },
    {
      question: "Can I pause, resume, increase or decrease lead flow?",
      answer:
        "Yes, absolutely! You have full control over your lead flow. You can pause, resume, increase or decrease the number of leads at any time with the click of a button.",
    },
    {
      question: "What will the quality of the lead be like?",
      answer:
        "All leads are pre-qualified homeowners who have actively requested quotes for your services. They've been vetted by our team to ensure they're ready to hire a contractor in the next 1-6 weeks.",
    },
    {
      question: "What Happens after I get the Lead?",
      answer:
        "Once you receive a lead, we notify the homeowner that you'll be reaching out. From there, you handle the estimate and closing process. The homeowner is expecting your call.",
    },
    {
      question: "What if I don't like the lead?",
      answer:
        "If a lead has incorrect contact information, falls outside your service area, or doesn't meet our qualification criteria, we'll replace it at no cost. 1-to-1 replacement guaranteed.",
    },
    {
      question: "Are the leads geographically located?",
      answer:
        "Yes! All leads are located in the zip codes you specifically choose during setup. You get exclusive rights to those areas—we won't work with competing contractors in your zones.",
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
            <span className="text-blue-400">Transparent Pricing,</span>
            <br />
            No Hidden Fees Guaranteed!
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
          <h3 className="text-3xl font-bold mb-4">Custom</h3>
          <p className="text-white/70 mb-8">We Offer Bulk Discounts For Team Leaders.</p>
          <div className="text-6xl font-bold mb-8">
            <span className="text-blue-400">$45-120</span>
            <span className="text-2xl text-white/60"> / lead</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Everything Mentioned</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Customized approaches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Discounts For Bulk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>And More…</span>
            </li>
          </ul>
          <a
            href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-50 pointer-events-auto"
          >
            Book a Call
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
            $0 Startup Fees & No Hidden Fees For a Limited Time
          </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Partner with Us and Elevate to New Heights!
          </h3>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Suited for contractors and company owners seeking qualified homeowner leads without the fluff so all they
            have to do is close
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
            <span>Empty calendar? fixed</span>
            <span>Slow Season? Not Anymore</span>
            <span>No Leads? No Problem</span>
            <span>Low Pipeline? We Fix</span>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
