import { motion } from "motion/react";
import { Droplet, Sparkles, Shield, CarFront, Zap, ShieldCheck, Wrench, Diamond } from "lucide-react";
import { Button } from "./ui/Button";

const services = [
  { icon: Droplet, title: "Exterior Detail", desc: "Foam cannon wash, iron decontamination, clay bar, and sealant." },
  { icon: Sparkles, title: "Interior Detail", desc: "Deep extraction, steam cleaning, leather conditioning, and odor removal." },
  { icon: CarFront, title: "Full Detail", desc: "The ultimate reset. Complete interior and exterior restoration." },
  { icon: Shield, title: "Ceramic Coating", desc: "Years of glossy protection against elements and minor scratches." },
  { icon: Zap, title: "Paint Correction", desc: "Remove swirls, scratches, and oxidation to reveal a mirror finish." },
  { icon: ShieldCheck, title: "Maintenance", desc: "Recurring plans to keep your investment looking pristine year-round." },
  { icon: Wrench, title: "Engine Bay", desc: "Safe, thorough degreasing and dressing of engine components." },
  { icon: Diamond, title: "Luxury Package", desc: "Exotic & luxury vehicle specialty care utilizing the highest grade products." },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-charcoal relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Elite Services</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tighter leading-none mb-6">
              Tailored for <span className="text-gradient">Perfection</span>
            </h3>
            <p className="text-zinc-400 max-w-xl text-lg">
              We utilize state-of-the-art equipment and specialized techniques to safely restore and protect your vehicle.
            </p>
          </div>
          <Button size="lg" variant="outline">View All Pricing</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/30 via-transparent to-transparent" />
              <div className="relative h-full glass-card p-8 flex flex-col items-start bg-black/50 group-hover:bg-black/80 transition-colors duration-500">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-3 uppercase">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="w-full mt-auto">
                  <Button variant="ghost" className="w-full border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    Book Service
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
