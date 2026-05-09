import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function to slow down at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(from + (to - from) * easeOutQuart);
      
      setValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setValue(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
}

export function TrustBar() {
  const stats = [
    { label: "Cars Detailed", value: 3500, suffix: "+" },
    { label: "5-Star Reviews", value: 850, suffix: "+" },
    { label: "Years Experience", value: 10, suffix: "" },
    { label: "Satisfaction Rate", value: 100, suffix: "%" },
  ];

  return (
    <section className="py-20 bg-zinc-900/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-black text-orange-500 leading-none mb-2 tracking-tighter">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
