import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-heading font-bold text-xl leading-none">E</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase">
                Express <span className="text-zinc-600">Mobile</span>
              </span>
            </a>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Premium mobile detailing and ceramic coatings delivered directly to your driveway. We don't just clean cars, we restore presence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {["Exterior Detailing", "Interior Detailing", "Full Package", "Ceramic Coating", "Paint Correction", "Maintenance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-sm uppercase tracking-wider">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="uppercase tracking-wider">Mobile Service Area:</li>
              <li className="text-white">Los Angeles & Orange County</li>
              <li className="uppercase tracking-wider mt-4">Call Us:</li>
              <li className="text-white font-heading font-bold text-lg">(555) 123-4567</li>
              <li className="uppercase tracking-wider mt-4">Hours:</li>
              <li className="text-white">Mon-Sat: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} Express Mobile Detailing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
