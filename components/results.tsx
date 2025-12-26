"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export function Results() {
  const stats = [
    { label: "Contractors Helped", value: "50+", suffix: "" },
    { label: "Qualified Leads Delivered", value: "400+", suffix: "" },
    { label: "Jobs Booked", value: "120+", suffix: "" },
  ]

  const testimonials = [
    {
      name: "Travis Sly",
      location: "Co-Owner of Pro Painting & More",
      result: "Within Only 72 Hours of Joining Us, Travis Booked Over 8 Qualified Appointments!",
      content:
        "The speed was incredible. We went from signing up to having a packed calendar in less than 3 days. The leads are qualified and ready to get quotes.",
      rating: 5,
    },
    {
      name: "Brett Muir",
      location: "Owner of Link Roofer",
      result: "Brett landed a full roof replacement in the first 5 days working with us!",
      content:
        "First week in and I already closed a full roof job. These aren't tire kickers—they're homeowners ready to hire.",
      rating: 5,
    },
    {
      name: "Anthony",
      location: "Owner of Kos Home Improvements LLC",
      result: "Anthony Landed A Job From his free trial and instantly got started on the service!",
      content: "ROI was instant. First lead turned into a paying job. Can't ask for better than that.",
      rating: 5,
    },
  ]

  return (
    <section id="results" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-blue-400 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-blue-400">Loved by Contractors</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Hear from some of our top partners and the success they've found with us.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-[1px] h-16 -translate-y-1/2 bg-white/10" />
                )}
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-lg text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass glass-hover p-8 rounded-3xl mb-12"
          >
            <Image
              src="/images/lead-connector-notifications.png"
              alt="LeadConnector notifications showing closed deals"
              width={1400}
              height={800}
              className="rounded-lg w-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass glass-hover p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h4 className="text-xl font-bold mb-3">{testimonial.result}</h4>

                <p className="text-white/80 leading-relaxed mb-6">"{testimonial.content}"</p>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://links.grounder-ai.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform relative z-50 pointer-events-auto"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
