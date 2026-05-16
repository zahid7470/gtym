import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-primary p-1.5 rounded-md">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="font-condensed font-bold text-2xl tracking-wider text-white uppercase">
                GT<span className="text-brand-primary">YM</span>
              </span>
            </div>
            <p className="text-zinc-500 mb-6 text-sm">
              Premium fitness facility dedicated to helping you achieve your ultimate potential. Train hard, recover right.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-brand-primary transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="#" className="text-zinc-400 hover:text-brand-primary transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-zinc-500 hover:text-white transition-colors text-sm">Programs</a></li>
              <li><a href="#trainers" className="text-zinc-500 hover:text-white transition-colors text-sm">Our Trainers</a></li>
              <li><a href="#pricing" className="text-zinc-500 hover:text-white transition-colors text-sm">Membership</a></li>
              <li><a href="#schedule" className="text-zinc-500 hover:text-white transition-colors text-sm">Schedule</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">FAQs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-zinc-500 mb-4 text-sm">Subscribe to get the latest fitness tips and gym updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#111827] border border-white/10 rounded-l-md px-4 py-2 text-white focus:outline-none focus:border-brand-primary transition-colors w-full text-sm"
              />
              <button 
                type="submit" 
                className="bg-brand-primary text-white px-4 py-2 rounded-r-md font-condensed uppercase font-bold text-sm hover:bg-brand-secondary transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} GTYM Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-zinc-600 text-sm">Made with passion.</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-condensed font-black text-white/[0.01] whitespace-nowrap pointer-events-none select-none z-0">
        GTYM
      </div>
    </footer>
  )
}
