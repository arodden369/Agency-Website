"use client"

import { motion } from "framer-motion"
import { MapPin, Settings, CheckSquare, Gauge } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "Step 1",
      title: "Choose your zip codes",
      description:
        "Each Contractor we work with gets their own zip codes exclusively handpicked, and once chosen, we cannot work with any other contractor there.",
      icon: MapPin,
    },
    {
      number: "Step 2",
      title: "Backend at work",
      description:
        "We have perfected our system to a tee which allows us to be able to start generating you quote-ready leads in as little as 1 day. No need to wait 4 weeks, get results instantly.",
      icon: Settings,
    },
    {
      number: "Step 3",
      title: "Qualification Criteria",
      description:
        "We start by verifying contact info – they are indeed the homeowner. Not contracted with a contractor. Ready to get a quote in the next 1-6 weeks. They have been vetted by our Lead Review Team and they are motivated to get a job done.",
      icon: CheckSquare,
    },
    {
      number: "Step 4",
      title: "You're in control",
      description:
        "Now that you're consistently getting qualified leads, it's up to you how many you want per week. If you want to stop the lead flow, simply pause the system with the click of a button so you have maximum flexibility.",
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
            Our process cuts high lead costs with our zero-ad spend system, keeping our team in-house to contact
            homeowners in your area, finding and vetting qualified leads, and having them ready to hire you as a
            contractor.
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
