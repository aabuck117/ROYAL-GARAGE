import { motion } from "motion/react";
import { Button } from "./ui/Button";

export function ContactCTA() {
  return (
    <section className="py-0 relative overflow-hidden bg-black border-t border-white/5">
      <div className="lg:flex max-w-[1600px] mx-auto w-full">
        {/* Left Side - Big CTA Text */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/40 via-transparent to-transparent -z-10" />
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase text-white tracking-tighter leading-[0.9] mb-8">
              Your Car Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Turn Heads</span> Again.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-lg">
              Book your premium mobile detail today and secure your spot. High-end service delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="xl" glow className="w-full sm:w-auto text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">GET MY FREE QUOTE</Button>
              <div className="flex flex-col justify-center">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Direct Line</span>
                <a href="tel:+15551234567" className="text-white font-heading font-bold text-xl hover:text-orange-500 transition-colors">(555) 123-4567</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Premium Form */}
        <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-zinc-900/40 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent z-0" />
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 glass-card p-6 md:p-10 shadow-[0_10px_20px_rgba(212,175,55,0.15)] border-white/10"
            onSubmit={(e) => {e.preventDefault(); alert('Lead form submitted! This would connect to your CRM.')}}
          >
            <div className="absolute -top-3 left-6 px-4 py-1 bg-orange-600 rounded-sm text-[10px] font-black uppercase tracking-tighter text-black">Instant Quote</div>
            <h3 className="text-xl font-sans font-bold text-white uppercase tracking-wide flex items-center gap-2 mb-6">
              SECURE YOUR SESSION
              <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 relative">
                  <label htmlFor="name" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Full Name</label>
                  <input type="text" id="name" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-700 text-white" placeholder="John Doe" required />
                </div>
                <div className="space-y-1 relative">
                  <label htmlFor="phone" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-700 text-white" placeholder="(555) 123-4567" required />
                </div>
              </div>
              
              <div className="space-y-1 relative">
                <label htmlFor="email" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Email Address</label>
                <input type="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-700 text-white" placeholder="john@example.com" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 relative">
                  <label htmlFor="vehicle" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Vehicle Type</label>
                  <input type="text" id="vehicle" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-700 text-white" placeholder="Porsche 911 GT3" required />
                </div>
                <div className="space-y-1 relative">
                  <label htmlFor="service" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Select Service</label>
                  <select id="service" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none text-white" required defaultValue="full">
                    <option value="" disabled hidden>Select Service</option>
                    <option value="interior">Luxury Interior Detail</option>
                    <option value="exterior">Exterior Paint Correction</option>
                    <option value="full">Full Restoration + Ceramic (Best Value)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 relative">
                <label htmlFor="details" className="text-[9px] uppercase font-bold text-zinc-500 ml-1">Your Location</label>
                <input type="text" id="details" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-700 text-white" placeholder="Beverly Hills, CA" />
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-4 bg-orange-600 hover:bg-orange-500 py-4 rounded-lg font-black text-white uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center gap-2"
              >
                Get My Free Quote
                <span className="text-xs">→</span>
              </button>
            </div>
            <p className="text-center text-[9px] text-zinc-500 mt-4 uppercase font-medium">Available within 25 miles of Los Angeles</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
