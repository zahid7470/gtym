import { motion } from "framer-motion"
import { Dumbbell, Activity, Timer, Zap } from "lucide-react"

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase raw power with our heavy lifting and powerlifting focus.",
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "HIIT",
    description: "High-intensity interval training to burn fat and boost endurance.",
    icon: <Activity className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "CrossFit",
    description: "Functional movements performed at high intensity.",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Personal Training",
    description: "1-on-1 coaching customized to your specific goals and abilities.",
    icon: <Timer className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-background-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Programs</span>
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight">
              Push Beyond <br /> Your Limits
            </h2>
          </div>
          <p className="text-zinc-400 mt-6 md:mt-0 max-w-sm md:text-right">
            Choose from our variety of expert-led programs designed to help you achieve your specific fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${program.colSpan} aspect-[4/3] md:aspect-auto md:min-h-[400px]`}
            >
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-brand-primary w-14 h-14 rounded-full flex items-center justify-center text-white mb-6 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {program.icon}
                </div>
                <h3 className="text-3xl font-condensed font-bold text-white uppercase mb-2">{program.title}</h3>
                <p className="text-zinc-300 max-w-sm transform translate-y-4 opacity-0 transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
