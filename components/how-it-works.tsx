"use client"

import { motion } from "framer-motion"
import { MapPin, Settings, PhoneCall, Gauge } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "Step 1",
      title: "Choose Your Exclusive Area",
      description:
        "Each contractor gets exclusive handpicked territory — no competition from others we work with. Your area, your leads.",
      icon: MapPin,
    },
    {
      number: "Step 2",
      title: "System Activation & Daily Flow",
      description:
        "We optimize and activate our proprietary AI outreach daily, generating fresh direct conversations from homeowners in your territory.",
      icon: Settings,
    },
    {
      number: "Step 3",
      title: "Direct Conversations Begin",
      description:
        "Connect with homeowners who've expressed interest in an estimate—straight to your phone/app in real-time. Handle personally for organic feel, instant trust, and higher closing rates.",
      icon: PhoneCall,
    },
    {
      number: "Step 4",
      title: "Full Control & Scaling",
      description:
        "Adjust volume, pause, or scale anytime. Experience the difference with your 3-day free trial — leads start fast.",
      icon: Gauge,
    },
  ]

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">Our Process</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            A Proven & Easy Process to Success:
            <br />
            <span className="text-blue-400">Qualified Leads To Closings</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto">
            Our zero-ad-spend AI system licenses you consistent daily inbound leads — motivated homeowners ready for
            quotes, reaching out directly to you for seamless, high-trust conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover p-8 rounded-3xl relative group"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-blue-400" />
                </div>

                <div className="text-sm font-bold text-blue-400 mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
