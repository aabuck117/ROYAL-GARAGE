import { motion } from "motion/react";

export function Process() {
  const steps = [
    { num: "01", title: "Book Online", desc: "Select your package, date, and location instantly through our portal." },
    { num: "02", title: "We Come To You", desc: "Our fully equipped mobile unit arrives at your home or workplace." },
    { num: "03", title: "Drive Restored", desc: "Experience the satisfaction of a flawless, showroom-ready vehicle." },
  ];

  return (
    <section id="process" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tighter leading-none">
            Effortless <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Perfection</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 hidden md:block -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-24 h-24 rounded-full bg-black border-2 border-white/10 glass flex items-center justify-center mb-8 relative z-10 group-hover:border-orange-500 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  <span className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600 group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-500">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-2xl font-heading font-bold text-white mb-4 uppercase">{step.title}</h4>
                <p className="text-zinc-400 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
