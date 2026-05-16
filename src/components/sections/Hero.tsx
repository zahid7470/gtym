import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-base pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-success/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-6 mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold uppercase tracking-widest">
                Redefine Your Limits
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white font-condensed leading-[0.9] tracking-tighter uppercase">
                Build the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
                  Ultimate Body
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-sans mt-4">
                Premium facilities, elite trainers, and a community that pushes you to be your absolute best. Start your transformation today.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Button variant="brand" size="lg" className="text-lg px-10">Start Free Trial</Button>
                <Button variant="outline" size="lg" className="text-lg px-8">View Programs</Button>
              </div>
            </div>
          }
        >
          {/* Dashboard/Image Placeholder inside the card */}
          <div className="w-full h-full relative group bg-[#0A0A0A]">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3840&auto=format&fit=crop" 
              alt="Gym Facility" 
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            {/* Overlay UI elements to make it look like an app/dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-condensed font-bold text-white uppercase tracking-wider mb-2">Elite Equipment</h3>
                  <p className="text-zinc-300 max-w-md">Train with state-of-the-art rogue equipment designed for professional athletes.</p>
                </div>
                <div className="hidden md:flex gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-brand-primary font-bold text-3xl font-condensed">24/7</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Access</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-white font-bold text-3xl font-condensed">50+</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Classes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
