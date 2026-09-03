import { motion } from 'motion/react';
import { Target, Compass, CheckCircle2, UserCheck } from 'lucide-react';

export function Chapter04Audience() {
  return (
    <section
      id="ch-03-audience"
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
              03
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHO AM I BUILDING FOR?
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I started broad, but the research helped me narrow down who Reyo was really for.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            Initially, I wondered if Reyo should be a generic bookmarking tool for everyone — developers, students, researchers. But the research made it obvious: <strong>Product and UI/UX designers have a unique learning pattern</strong> that generic tools fail to support.
          </p>

          {/* The Audience Decision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            {/* Left Card: The Chosen Segment (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    PRIMARY AUDIENCE FOCUS
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)]">
                    UI/UX & Product Designers
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[var(--text-primary)] mb-3 leading-snug">
                  Designers Who Learn Constantly from Video Walkthroughs
                </h3>

                <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                  Designers at fast-moving tech startups and digital agencies (1–5 years experience). They don&apos;t just read documentation; they watch expert designers build in real-time to absorb workflow shortcuts, auto-layout math, design system architectures, and component states.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-[13px] text-[var(--text-primary)] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span><strong>High video consumption:</strong> Consumes 5–15 video tutorials and talks per week across YouTube.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[var(--text-primary)] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span><strong>Just-in-Time Need:</strong> When stuck on an edge case in Figma, they have 2 minutes before context-switching pain kicks in.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[var(--text-primary)] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span><strong>Zero maintenance tolerance:</strong> Will not spend Sunday afternoons categorizing bookmarks into nested Notion databases.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] text-[12px] text-[var(--text-secondary)] font-mono flex items-center justify-between">
                <span>Wedge: YouTube design tutorials</span>
                <span className="text-[var(--accent)]">High willingness to adopt</span>
              </div>
            </div>

            {/* Right Card: Deliberate Exclusions (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] flex flex-col justify-between">
              <div>
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold block mb-4">
                  WHO I DELIBERATELY LEFT OUT (FOR NOW)
                </span>

                <div className="space-y-4 text-[13px]">
                  <div className="p-3.5 rounded-[10px] bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <div className="font-semibold text-[var(--text-primary)] mb-1">
                      Academic Paper Researchers
                    </div>
                    <p className="text-[var(--text-secondary)] font-light text-[12px] leading-snug">
                      Require PDF citation graphs, LaTeX parsing, and Zotero sync — completely different product requirements.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-[10px] bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <div className="font-semibold text-[var(--text-primary)] mb-1">
                      Casual Recipe & Lifestyle Savers
                    </div>
                    <p className="text-[var(--text-secondary)] font-light text-[12px] leading-snug">
                      Already well-served by Pinterest and Instagram saved collections; lower urgency for precision semantic timestamp search.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] text-[12px] text-[var(--text-secondary)] font-mono">
                Scope control = execution velocity
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
