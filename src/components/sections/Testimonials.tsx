import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James Wilson",
    role: "Powerlifter",
    content: "The equipment and atmosphere here are unmatched. Since joining, I've added 100lbs to my total. The coaches actually care about your form and progress.",
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "CrossFit Athlete",
    content: "I was intimidated at first, but the community is incredible. The classes push me harder than I ever thought possible. Best decision I've made for my health.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Professional",
    content: "The 24/7 access fits my crazy work schedule perfectly. Clean facilities, great vibe, and always enough racks so I'm never waiting to squat.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background-base relative overflow-hidden">
      {/* Background text decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-condensed font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        RESULTS SPEAK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight mb-4">
            Real <span className="text-brand-primary">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="bg-background-card p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex text-brand-primary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-8 text-lg">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xl text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white font-condensed uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
