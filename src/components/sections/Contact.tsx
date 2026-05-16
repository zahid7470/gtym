import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="py-24 bg-background-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">Contact Us</span>
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Start?</span>
            </h2>
            <p className="text-zinc-400 mb-10 max-w-md">
              Drop by for a tour, call us to speak with a coach, or send us a message to get started on your fitness journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg border border-brand-primary/20 text-brand-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-condensed uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-zinc-400">123 Iron Avenue<br />Fitness District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg border border-brand-primary/20 text-brand-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-condensed uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-zinc-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg border border-brand-primary/20 text-brand-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-condensed uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-zinc-400">info@gtymfitness.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-card p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-bold text-white font-condensed uppercase mb-6 relative z-10">Send a Message</h3>
            <form className="relative z-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button variant="brand" className="w-full py-6 text-lg mt-4">Submit Message</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
