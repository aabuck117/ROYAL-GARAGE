import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { ShieldCheck, Sparkles, Star, MapPin } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video/Image placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2670" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full mt-10 md:mt-0">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-tighter uppercase text-orange-400">Elite Automotive Restoration</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-black tracking-tighter uppercase leading-[0.85] italic mb-6 text-white text-shadow-xl"
          >
            Uncompromising <br className="hidden md:block" />
            <span className="text-zinc-400">Luxury.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">Pure Perfection.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-zinc-300 font-light max-w-2xl mb-10 leading-relaxed font-sans"
          >
            The Royal Treatment delivered directly to your driveway. High-end results, legendary heritage.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="xl" glow className="w-full sm:w-auto text-lg">BOOK YOUR DETAIL</Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto text-lg backdrop-blur-sm">GET A FAST QUOTE</Button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { icon: MapPin, text: "Mobile Service" },
              { icon: ShieldCheck, text: "Fully Insured" },
              { icon: Sparkles, text: "Premium Products" },
              { icon: Star, text: "5-Star Service" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-orange-400">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
