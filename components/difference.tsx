"use client"

import { motion } from "framer-motion"

export function Difference() {
  const comparisons = [
    {
      title: "No Startup Cost",
      withUs:
        "Each Contractor we work with gets their own zip codes exclusively handpicked, and once chosen, we cannot work with any other contractor there.",
      withoutUs:
        "$500-$3000 Startups. Companies simply only make their money this way because they can't deliver on their service where we only make money as you love and continue wanting our qualified leads.",
    },
    {
      title: "No Commitments",
      withUs:
        "We know we don't have to make you sign a contract because we know you'll love our leads and continue using our service.",
      withoutUs:
        "Monthly Contracts. They tell you it takes weeks to start getting results but they simply just have not worked in your market before and are not confident in their ability or simply don't know what they are doing.",
    },
    {
      title: "Cost Efficient",
      withUs:
        "Simply pay only $75 per qualified lead and nothing else. No closing %. Just a one-time fee only after you get a lead.",
      withoutUs:
        "Never-ending hidden fees. Unclear pricing and hidden costs can drain your budget and have you losing money.",
    },
    {
      title: "24/7 Support",
      withUs:
        "We know how important it is to have our team in your corner whenever you need us to ensure you have a massive ROI working with us.",
      withoutUs:
        "Slow & Hard To Work With. Delays and slow communication leaves you in the dust not knowing if it's a right fit.",
    },
  ]

  return (
    <section
      id="difference"
      className="py-32 relative bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">Benefits</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            Benefits of our <span className="text-blue-400">Precise Process</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A quick overview of how we work together to make your business best in class!
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{comparison.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-hover p-6 rounded-2xl border-2 border-blue-500/30">
                  <h4 className="text-lg font-bold mb-3 text-blue-400">With GrounderAI</h4>
                  <p className="text-white/70 leading-relaxed text-sm">{comparison.withUs}</p>
                </div>
                <div className="glass-hover p-6 rounded-2xl border-2 border-red-500/20">
                  <h4 className="text-lg font-bold mb-3 text-red-400">Without</h4>
                  <p className="text-white/70 leading-relaxed text-sm">{comparison.withoutUs}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
