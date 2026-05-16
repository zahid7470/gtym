import { useState, useEffect } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Schedule", href: "#schedule" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#111827]/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-md">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="font-condensed font-bold text-2xl tracking-wider text-white uppercase">
              GT<span className="text-brand-primary">YM</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-brand-primary transition-colors uppercase tracking-wider font-condensed"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-condensed">Login</Button>
            <Button variant="brand" className="font-condensed">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1F2937] border-b border-white/10 py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-zinc-300 hover:text-brand-primary transition-colors uppercase tracking-wider font-condensed py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Button variant="outline" className="w-full justify-center">Login</Button>
            <Button variant="brand" className="w-full justify-center">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
