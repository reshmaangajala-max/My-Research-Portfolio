import { motion } from 'motion/react';
import { Compass, Sparkles, Cpu, Users, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface Chapter18Props {
  onBackToPortfolio: () => void;
}

const nextSteps = [
  {
    num: '01',
    title: 'On-Device Local Embeddings',
    desc: 'Moving vector generation from cloud APIs directly to browser WebAssembly / WebGPU (Transformers.js) for 100% private, offline-first recall with zero API costs.',
    icon: Cpu,
    timeline: 'Q3 2026',
  },
  {
    num: '02',
    title: 'Native Figma Canvas Plugin',
    desc: 'Bringing Reyo spotlight search directly inside Figma so designers can inspect timestamp solutions without pressing OS-level hotkeys.',
    icon: Sparkles,
    timeline: 'Q3 2026',
  },
  {
    num: '03',
    title: 'Shared Team Knowledge Hubs',
    desc: 'Enabling design teams at agencies and startups to curate shared libraries of design system walkthroughs and onboarding tutorials.',
    icon: Users,
    timeline: 'Q4 2026',
  },
];

export function Chapter18WhatIsNext({ onBackToPortfolio }: Chapter18Props) {
  return (
    <section
      id="ch-14-next"
      className="w-full py-20 md:py-28 bg-[var(--surface)] transition-colors duration-500"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Chapter Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[12px] font-semibold text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              14
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHAT IS NEXT
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            0→1 is not the finish line. It’s where the real learning starts.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            Reyo started from a personal frustration with cluttered bookmarks and grew into a working product backed by 10 in-depth interviews, 30+ survey respondents, and a full-stack AI pipeline. The first working version isn’t the end — it’s the foundation for the next iteration.
          </p>

          {/* 3 Next Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--surface-elevated)]">
                        STEP {step.num}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                        {step.timeline}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[var(--accent)]" />
                      <h3 className="font-bold text-[16px] text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Reflection Banner & Back Button */}
          <div className="p-8 rounded-[18px] bg-[var(--bg)] border border-[var(--border)] shadow-[var(--card-glow-rest)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] aurora-gradient" />
            <div>
              <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-semibold block mb-1">
                REFLECTIVE SUMMARY
              </span>
              <h4 className="font-bold text-[18px] sm:text-[20px] text-[var(--text-primary)] mb-1">
                Building Reyo taught me how to bridge user pain with working code.
              </h4>
              <p className="text-[14px] text-[var(--text-secondary)] font-light max-w-[620px]">
                Product design is strongest when you have the curiosity to research deeply and the conviction to build what you designed.
              </p>
            </div>

            <button
              onClick={onBackToPortfolio}
              className="px-6 py-3 rounded-full aurora-gradient text-white text-[13px] font-medium transition-transform hover:scale-[1.03] flex items-center gap-2 cursor-pointer shrink-0 shadow-lg"
            >
              <span>Back to Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
