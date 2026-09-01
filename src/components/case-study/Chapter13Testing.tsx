import { motion } from 'motion/react';
import { ThumbsUp, HelpCircle, MessageSquarePlus, ArrowRight, Sparkles, UserCheck } from 'lucide-react';

export function Chapter13Testing() {
  return (
    <section
      id="ch-13-testing"
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
              13
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              TESTING WITH DESIGNERS
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I put the prototype in front of 5 designers. Here is what broke.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            I conducted usability testing sessions with 5 UI/UX designers, giving them realistic scenario tasks like: <em>&quot;You are building a complex pricing table in Figma and need to recall how to make rows alternate background fills automatically.&quot;</em>
          </p>

          {/* 3 Core Feedback Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* 1. WHAT WORKED */}
            <div className="p-6 rounded-[16px] bg-[var(--surface)] border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-bold">
                    WHAT WORKED
                  </span>
                </div>
                <h3 className="font-bold text-[16px] text-[var(--text-primary)] mb-2">
                  &quot;The timestamp jump feels like magic.&quot;
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  Designers were stunned when Reyo immediately opened the video player right at 08:42 rather than forcing them to search through the entire 40-minute tutorial. The 4-tier taxonomy successfully mapped fuzzy phrases to exact concepts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                Validation: Core value confirmed
              </div>
            </div>

            {/* 2. WHAT CONFUSED PEOPLE */}
            <div className="p-6 rounded-[16px] bg-[var(--surface)] border border-amber-500/30 bg-amber-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <HelpCircle className="w-4 h-4" />
                  <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-bold">
                    WHAT CONFUSED PEOPLE
                  </span>
                </div>
                <h3 className="font-bold text-[16px] text-[var(--text-primary)] mb-2">
                  Silent Background Processing
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  When saving a new video, the initial build showed a subtle checkmark and ran transcript classification silently. Users were confused: <em>&quot;Is it done? Can I search it now, or is it still processing?&quot;</em>
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-500/20 text-[11px] font-mono text-amber-400">
                Friction: Lack of pipeline transparency
              </div>
            </div>

            {/* 3. WHAT THEY ASKED FOR */}
            <div className="p-6 rounded-[16px] bg-[var(--surface)] border border-purple-500/30 bg-purple-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <MessageSquarePlus className="w-4 h-4" />
                  <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-bold">
                    WHAT THEY ASKED FOR
                  </span>
                </div>
                <h3 className="font-bold text-[16px] text-[var(--text-primary)] mb-2">
                  Inline Snippet Video Player
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  Users didn’t want to open a brand-new browser tab every time they clicked a search result. They asked for an embedded preview player inside the spotlight overlay so they could inspect the 15-second clip and close it immediately.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 text-[11px] font-mono text-purple-400">
                Feature request: In-place snippet preview
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
