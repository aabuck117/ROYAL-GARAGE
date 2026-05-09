import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Transformations", href: "#before-after" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 px-6 lg:px-8 py-4 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-2xl shadow-black/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-sm rotate-45 transform group-hover:rotate-[135deg] transition-transform duration-500">
            <span className="-rotate-45 font-black text-xs italic group-hover:-rotate-[135deg] transition-transform duration-500">E.M.D.</span>
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase text-white">
            Express <span className="text-blue-500">Mobile</span> Detailing
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-zinc-800 hidden lg:block"></div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available Today
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0">
              <Phone className="w-4 h-4 shrink-0" />
              <span>(555) 123-4567</span>
            </a>
            <Button size="sm" glow className="whitespace-nowrap flex-shrink-0">Book Now</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-heading font-semibold text-zinc-200 uppercase tracking-widest hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-white/10" />
              <Button size="lg" className="w-full" glow>Book Your Detail</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
