import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for beginners getting started",
    features: ["Gym Access 24/7", "Basic Equipment", "Locker Room Access", "1 Free Personal Training Session"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "89",
    description: "For serious athletes demanding more",
    features: [
      "All Basic Features",
      "Unlimited Group Classes",
      "Sauna & Recovery Area",
      "Guest Pass (2/month)",
      "Nutrition Plan",
    ],
    isPopular: true,
  },
  {
    name: "Elite",
    price: "149",
    description: "The ultimate fitness experience",
    features: [
      "All Pro Features",
      "Unlimited Personal Training",
      "Private Locker",
      "Unlimited Guest Passes",
      "Premium Supplement Stack",
    ],
    isPopular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">Membership</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight mb-6">
            Choose Your Arsenal
          </h2>
          <p className="text-zinc-400 text-lg">
            No hidden fees. No long-term commitments. Just pure gains. Choose the plan that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className={`relative rounded-3xl p-8 border ${
                plan.isPopular 
                  ? "bg-gradient-to-b from-brand-primary/10 to-transparent border-brand-primary transform md:-translate-y-4" 
                  : "bg-background-base border-white/5"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-condensed font-bold text-white uppercase mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-3xl font-bold text-zinc-300">$</span>
                  <span className="text-6xl font-condensed font-bold text-white leading-none">{plan.price}</span>
                  <span className="text-zinc-400 mb-1">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.isPopular ? "text-brand-primary" : "text-brand-success"}`} />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? "brand" : "outline"} 
                className="w-full py-6 text-lg"
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
