import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Transformations</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tighter leading-none mb-6">
            Witness the <span className="text-zinc-600">Difference</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Drag the slider to see dramatic paint correction and detailing results. We bring showroom shine back to your driveway.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Transformation 1 */}
          <div className="group">
            <h4 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Paint Correction & Ceramic</h4>
            <ComparisonSlider 
              before="https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=1200&q=80"
              after="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          
          {/* Transformation 2 */}
          <div className="group">
            <h4 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Deep Interior Restoration</h4>
            <ComparisonSlider 
              before="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
              after="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ before, after }: { before: string, after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    let newPos = ((clientX - left) / width) * 100;
    setPosition(Math.min(Math.max(newPos, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize glass-card"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={(e) => {
        const handleMouseUp = () => {
          window.removeEventListener('mousemove', handleMove as any);
          window.removeEventListener('mouseup', handleMouseUp);
        };
        window.addEventListener('mousemove', handleMove as any);
        window.addEventListener('mouseup', handleMouseUp);
      }}
    >
      {/* After Image (Background) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase text-white z-10">After</div>
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 z-20 overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: '100%', maxWidth: 'none' }} />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase text-zinc-300">Before</div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-1 bg-white z-30 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <MoveHorizontal className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
}
