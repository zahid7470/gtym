import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Programs } from "@/components/sections/Programs"
import { Pricing } from "@/components/sections/Pricing"
import { Trainers } from "@/components/sections/Trainers"
import { Testimonials } from "@/components/sections/Testimonials"
import { Schedule } from "@/components/sections/Schedule"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background-base text-white font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Schedule />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
