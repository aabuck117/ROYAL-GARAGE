import { motion } from "motion/react";
import { CheckCircle2, Clock, ThumbsUp, Medal, Star, Shield } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { icon: Clock, title: "We Come To You", desc: "No more sitting in waiting rooms. We perform the detail at your home or office." },
    { icon: CheckCircle2, title: "Fast Booking", desc: "Our streamlined online booking system gets you on the schedule in minutes." },
    { icon: Medal, title: "Premium Products", desc: "We only use pH-balanced, high-end chemicals that are safe for your clear coat and interior." },
    { icon: Star, title: "Attention To Detail", desc: "We use specialized brushes and tools to hit every crack, crevice, and vent." },
    { icon: Shield, title: "Luxury-Level Results", desc: "Your car won't just be clean; it will feel restored. We focus on the microscopic details." },
    { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We don't leave until you are completely blown away by the transformation." },
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">The Standard</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tighter leading-none mb-6">
            Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Different</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We operate at a higher standard. Driven by passion and precision, we treat every vehicle like an exotic car.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-heading font-bold text-white mb-2 uppercase tracking-wide group-hover:text-orange-400 transition-colors duration-300">{feature.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
