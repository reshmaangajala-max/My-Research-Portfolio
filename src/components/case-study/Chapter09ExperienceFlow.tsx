import { motion } from 'motion/react';
import {
  Sparkles,
  Search,
  Play,
  CheckCircle2,
  ArrowRight,
  Check,
  Layers,
} from 'lucide-react';

export function Chapter09ExperienceFlow() {
  return (
    <section
      id="ch-08-experience"
      className="w-full py-20 md:py-28 bg-[var(--bg)] transition-colors duration-500"
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
              08
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              EXPERIENCE FLOW & RETRIEVAL LOOP
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Designing a 30-second loop from question to answer.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            The core design challenge was invisible friction. If saving took more than one click, designers wouldn’t save. If retrieval took more than two keypresses, designers would revert to Google. Here is how the end-to-end loop operates.
          </p>

          {/* Visual "Return to Work" Experience Flow Sequence */}
          <div className="w-full rounded-[16px] bg-[#070512] border border-[var(--border)] p-6 sm:p-8 relative overflow-hidden shadow-[var(--card-glow-rest)]">
            {/* Ambient glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-600/10 blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-600/10 blur-[90px] pointer-events-none" />

            {/* Central Core Value Statement */}
            <div className="mb-6 p-4 rounded-[12px] bg-[var(--surface-elevated)]/90 border border-purple-500/20 text-center relative z-10">
              <p className="text-[15px] sm:text-[17px] font-medium text-white tracking-tight">
                “Reyo gets the useful information out of the way and gets me back to work.”
              </p>
              <span className="text-[12px] text-[var(--text-secondary)] font-mono mt-1 block">
                From saved content to uninterrupted design execution in seconds
              </span>
            </div>

            {/* 5-Stage Product Experience Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
              {/* Stage 01: SAVE */}
              <div className="p-4 rounded-[12px] bg-[#0d091e] border border-indigo-500/30 flex flex-col justify-between hover:border-indigo-400/50 transition-all">
                <div>
                  <div className="w-full h-[72px] rounded-[8px] bg-[#140e2b] border border-indigo-500/20 p-2 mb-3 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-2 rounded-[2px] bg-red-600 flex items-center justify-center">
                          <span className="w-0 h-0 border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent border-l-[3px] border-l-white ml-0.5" />
                        </span>
                        <span className="text-[9px] font-bold text-white">YouTube</span>
                      </div>
                      <span className="text-[8px] font-mono text-indigo-300 bg-indigo-950/70 px-1 py-0.5 rounded border border-indigo-500/30">
                        Alt+S
                      </span>
                    </div>
                    <div className="flex items-center justify-center py-1 px-2 rounded-full bg-purple-600/30 border border-purple-400/50 text-[8.5px] text-purple-200 font-medium">
                      <Sparkles className="w-2.5 h-2.5 mr-1 text-purple-300" />
                      Saved to Reyo
                    </div>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-indigo-400 mb-0.5">
                    01 SAVE
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                    One click while browsing
                  </div>
                </div>
                <div className="text-[11.5px] text-[var(--text-secondary)] font-light mt-2 pt-2 border-t border-white/5">
                  No context switching.
                </div>
              </div>

              {/* Stage 02: ORGANIZE */}
              <div className="p-4 rounded-[12px] bg-[#0a0f20] border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400/50 transition-all">
                <div>
                  <div className="w-full h-[72px] rounded-[8px] bg-[#0d162e] border border-cyan-500/20 p-2 mb-3 relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <div className="relative w-14 h-8 mb-1">
                      <span className="absolute top-0 left-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                      <span className="absolute bottom-0 right-2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
                      <span className="absolute top-1 right-4 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <svg className="w-full h-full absolute inset-0 opacity-40">
                        <line x1="12" y1="4" x2="44" y2="26" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-cyan-300 bg-cyan-950/80 px-1 py-0.5 rounded border border-cyan-500/30">
                      Auto Taxonomy
                    </span>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-cyan-400 mb-0.5">
                    02 ORGANIZE
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                    Reyo handles structure
                  </div>
                </div>
                <div className="text-[11.5px] text-[var(--text-secondary)] font-light mt-2 pt-2 border-t border-white/5">
                  No manual tagging.
                </div>
              </div>

              {/* Stage 03: FIND */}
              <div className="p-4 rounded-[12px] bg-[#0c0d1e] border border-purple-500/30 flex flex-col justify-between hover:border-purple-400/50 transition-all">
                <div>
                  <div className="w-full h-[72px] rounded-[8px] bg-[#14122d] border border-purple-500/20 p-2 mb-3 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 bg-[#0a0718] px-2 py-1 rounded-[5px] border border-purple-500/30">
                      <Search className="w-2.5 h-2.5 text-purple-400" />
                      <span className="text-[8px] font-mono text-slate-300 truncate">
                        KYC upload flow
                      </span>
                    </div>
                    <div className="p-1 rounded-[5px] bg-purple-950/60 border border-purple-500/40 text-[8px] text-purple-200 flex items-center justify-between">
                      <span>Top Match</span>
                      <span className="font-mono text-[7.5px] text-emerald-400">&lt; 5s</span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-purple-400 mb-0.5">
                    03 FIND
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                    Search what you recall
                  </div>
                </div>
                <div className="text-[11.5px] text-[var(--text-secondary)] font-light mt-2 pt-2 border-t border-white/5">
                  Not where you saved it.
                </div>
              </div>

              {/* Stage 04: RETRIEVE */}
              <div className="p-4 rounded-[12px] bg-[#160f0c] border border-amber-500/30 flex flex-col justify-between hover:border-amber-400/50 transition-all">
                <div>
                  <div className="w-full h-[72px] rounded-[8px] bg-[#221510] border border-amber-500/20 p-2 mb-3 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono text-amber-400 font-bold bg-amber-950/80 px-1 py-0.5 rounded border border-amber-500/30">
                        5:38
                      </span>
                      <Play className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    </div>
                    <div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                        <div className="w-[45%] h-full bg-amber-400 rounded-full" />
                      </div>
                      <span className="text-[7.5px] text-slate-300 font-medium block truncate">
                        Document Upload State
                      </span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-amber-400 mb-0.5">
                    04 RETRIEVE
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                    Jump to exact moment
                  </div>
                </div>
                <div className="text-[11.5px] text-[var(--text-secondary)] font-light mt-2 pt-2 border-t border-white/5">
                  No digging through video.
                </div>
              </div>

              {/* Stage 05: USE */}
              <div className="p-4 rounded-[12px] bg-[#081517] border border-teal-500/40 ring-1 ring-teal-500/30 flex flex-col justify-between hover:border-teal-400/60 transition-all shadow-[0_0_20px_rgba(20,184,166,0.15)]">
                <div>
                  <div className="w-full h-[72px] rounded-[8px] bg-[#0c1f24] border border-teal-500/30 p-2 mb-3 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Layers className="w-2.5 h-2.5 text-teal-400" />
                        <span className="text-[8px] font-mono text-slate-200">Figma</span>
                      </div>
                      <span className="text-[7.5px] font-mono text-teal-300 bg-teal-950/80 px-1 py-0.5 rounded border border-teal-500/30">
                        Canvas
                      </span>
                    </div>
                    <div className="p-1 rounded bg-[#061217] border border-teal-400/50 flex items-center gap-1">
                      <Check className="w-2.5 h-2.5 text-teal-400 shrink-0" />
                      <span className="text-[7.5px] font-semibold text-teal-200 truncate">
                        Found answer → Back to work
                      </span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-teal-400 mb-0.5">
                    05 USE
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                    Return to the design
                  </div>
                </div>
                <div className="text-[11.5px] text-teal-200/80 font-light mt-2 pt-2 border-t border-teal-500/20">
                  Keep the flow going.
                </div>
              </div>
            </div>

            {/* Summary Promise Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[12px] font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-indigo-400 font-bold">SAVE</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-cyan-400 font-bold">UNDERSTAND</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-purple-400 font-bold">FIND</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-amber-400 font-bold">RETRIEVE</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-teal-400 font-bold">USE</span>
              </div>

              <div className="flex items-center gap-1.5 text-teal-300 bg-teal-950/40 px-2.5 py-1 rounded border border-teal-500/30 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Zero friction · Continuous flow state</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
