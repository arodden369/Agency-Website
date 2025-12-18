import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Difference } from "@/components/difference"
import { Results } from "@/components/results"
import { Guarantee } from "@/components/guarantee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Difference />
      <Results />
      <Guarantee />
      <Footer />
    </main>
  )
}
