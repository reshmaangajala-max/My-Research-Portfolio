import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Video, Maximize2, Volume2 } from 'lucide-react';

export function OffloadPrototypePreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="offload-prototype"
      className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            PRODUCT DEMONSTRATION
          </div>

          {/* User-requested title */}
          <h2
            id="offload-prototype-heading"
            className="font-bold text-[26px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] mb-3 tracking-tight"
          >
            Here&apos;s the preview of the product I built.
          </h2>

          {/* One line about the prototype */}
          <p className="font-light text-[16px] sm:text-[18px] text-[var(--text-secondary)] max-w-[680px] mb-12 leading-relaxed">
            Interactive high-fidelity product walkthrough and core zero-input obligation workflow demonstration.
          </p>

          {/* Video Placeholder Container (16:9 Aspect Ratio) */}
          <div className="w-full max-w-[960px] relative group">
            {/* Ambient background glow behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)]/30 via-purple-500/20 to-[var(--accent)]/30 rounded-[24px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className="relative aspect-video w-full rounded-[20px] bg-[#090d16] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 cursor-pointer select-none"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {/* Subtle background tech grid pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(167, 139, 250, 0.4) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Top Controls Bar Mock */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[12px] font-accent">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Offload Prototype Video</span>
                </div>

                <div className="flex items-center gap-2 text-white/60 font-mono text-[11px]">
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10">1080p 60fps</span>
                </div>
              </div>

              {/* Center Big Play Button */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[var(--accent)]/90 text-white flex items-center justify-center shadow-[0_0_40px_rgba(167,139,250,0.6)] group-hover:shadow-[0_0_50px_rgba(167,139,250,0.85)] group-hover:bg-[var(--accent)] transition-all duration-300 backdrop-blur-sm pl-1"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
                </motion.div>

                <div className="flex flex-col items-center">
                  <span className="text-white font-semibold text-[15px] sm:text-[17px] tracking-tight">
                    Watch Prototype Walkthrough
                  </span>
                  <span className="text-white/50 text-[12.5px] font-light mt-0.5">
                    Click to load interactive video player
                  </span>
                </div>
              </div>

              {/* Bottom Video Progress Bar Mock */}
              <div className="relative z-10 w-full flex items-center justify-between text-white/60 text-[12px] font-mono pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-white/70" />
                  <span>0:00 / 03:42</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/40 hidden sm:inline">Prototype demonstration</span>
                  <Maximize2 className="w-4 h-4 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
