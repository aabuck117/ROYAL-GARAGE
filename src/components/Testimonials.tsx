import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "James Wilson",
      vehicle: "Porsche 911 GT3",
      review: "Absolutely mind-blowing work. They removed swirl marks that I thought were permanent. The ceramic coating makes the car look like glass. Best mobile detailer I've ever hired.",
    },
    {
      name: "Sarah Jenkins",
      vehicle: "Range Rover Autobiography",
      review: "Convenience is key for me. Having them come to my office while I work is incredible. The interior feels brand new, and they actually got all the dog hair out.",
    },
    {
      name: "Michael Chang",
      vehicle: "Tesla Model S Plaid",
      review: "The attention to detail is obsessive. They spent 4 hours on my car and hit spots I didn't even know existed. Highly recommend the full detail package.",
    },
    {
      name: "David Rossi",
      vehicle: "BMW M5 Competition",
      review: "I'm extremely picky with who touches my paint. Express Detailing uses the right techniques. Two-bucket wash, clean microfiber, completely safe process.",
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Client Feedback</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tighter leading-none">
              Respected By <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-600">Enthusiasts</span>
            </h3>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 text-orange-500 fill-orange-500" />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-6 group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div key={i} className="glass-card p-8 w-[400px] shrink-0 border border-white/10 relative overflow-hidden bg-zinc-900/40">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-zinc-300 text-base leading-relaxed mb-8 font-light whitespace-normal italic">
                "{review.review}"
              </p>
              <div>
                <h4 className="text-white font-bold font-heading uppercase tracking-wide">{review.name}</h4>
                <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mt-1">{review.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * 4 - 24px * 4)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
