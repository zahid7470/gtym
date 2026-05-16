import { motion } from "framer-motion"

const trainers = [
  {
    name: "Marcus Cole",
    specialty: "Head Coach / Strength",
    image: "https://images.unsplash.com/photo-1567013127542-490d732e6b23?q=80&w=800&auto=format&fit=crop",
    certifications: "NSCA CSCS, CrossFit L3",
  },
  {
    name: "Elena Rodriguez",
    specialty: "HIIT & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    certifications: "NASM CPT, Precision Nutrition",
  },
  {
    name: "David Chen",
    specialty: "Mobility & Yoga",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800&auto=format&fit=crop",
    certifications: "RYT 500, FRCms",
  },
  {
    name: "Sarah Jenkins",
    specialty: "Powerlifting",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
    certifications: "USAPL Coach, ISSA CPT",
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-background-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Team</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight mb-6">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Trainers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background-card"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-1">{trainer.specialty}</p>
                <h3 className="text-2xl font-condensed font-bold text-white uppercase mb-1">{trainer.name}</h3>
                <p className="text-zinc-400 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {trainer.certifications}
                </p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
