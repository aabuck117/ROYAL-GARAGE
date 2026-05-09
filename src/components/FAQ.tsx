import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does detailing take?", a: "Depending on the condition of your vehicle and the package selected, an appointment can take anywhere from 2 to 6 hours. We never rush our process to ensure perfection." },
    { q: "Do you bring your own water and power?", a: "Yes. Our mobile detailing vans are fully equipped with our own spot-free reverse osmosis water tanks and ultra-quiet generators. We can detail anywhere." },
    { q: "What types of vehicles do you service?", a: "We service everything from daily drivers to exotic supercars, large SUVs, lifted trucks, and even boats. Our techniques are safe for all paint systems." },
    { q: "How often should I have my car detailed?", a: "For optimal maintenance, we recommend a full detail twice a year with our maintenance washes every 2 to 4 weeks, depending on how often the vehicle is driven and where it is stored." },
    { q: "What is a Ceramic Coating?", a: "A ceramic coating is a liquid polymer applied to the exterior of a vehicle. It chemically bonds with the factory paint, creating a semi-permanent layer of protection that lasts years, unlike wax which lasts months. It makes the car incredibly glossy and easy to clean." },
  ];

  return (
    <section id="faq" className="py-32 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Answers</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tighter leading-none">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/10 glass-card overflow-hidden bg-black/40">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-heading font-bold text-lg text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">{faq.q}</span>
                <span className="text-orange-500 ml-4 flex-shrink-0">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
