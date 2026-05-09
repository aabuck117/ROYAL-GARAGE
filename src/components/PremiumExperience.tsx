import { motion } from "motion/react";
import { Button } from "./ui/Button";

export function PremiumExperience() {
  return (
    <section className="py-0 relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589317621415-e2a22026859d?auto=format&fit=crop&q=80&w=2670" 
          alt="Premium Detailing Experience" 
          className="w-full h-full object-cover filter brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-3xl font-light text-orange-500/80 uppercase tracking-widest mb-4">
            The Ultimate Convenience
          </h2>
          <h3 className="text-4xl md:text-7xl font-heading font-black uppercase text-white tracking-tighter leading-none mb-8">
            Your Vehicle Deserves <br/> More Than A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Basic Wash.</span>
          </h3>
          <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12">
            Experience unparalleled professionalism, extreme attention to detail, and the pride of ownership that comes with a perfectly restored finish.
          </p>
          <Button size="xl" glow className="px-12">EXPERIENCE IT TODAY</Button>
        </motion.div>
      </div>
    </section>
  );
}
