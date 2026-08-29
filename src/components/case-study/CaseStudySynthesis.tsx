import { motion } from 'motion/react';

const decisions = [
  {
    finding: '85% of designers save weekly, but 72% fail at retrieval',
    decision:
      'Core product value is retrieval, not saving — save is just the entry point',
  },
  {
    finding: "No competitor analyzes what's inside a video",
    decision:
      'Build a content-understanding pipeline, not another bookmarking tool',
  },
  {
    finding:
      "Designers search by vague memory ('that auto-layout trick'), not exact terms",
    decision:
      'Use semantic search (vector embeddings) rather than keyword matching',
  },
  {
    finding: '44% use 3+ tools to save content across platforms',
    decision:
      'Start with a browser extension (platform-agnostic save point) rather than a standalone app',
  },
  {
    finding: '76% said their system is disorganized or nonexistent',
    decision:
      'Auto-classify on save — don’t ask users to organize manually',
  },
  {
    finding:
      'Privacy concerns raised in interviews about processing saved content',
    decision:
      'Process content locally where possible, make cloud processing opt-in, no data selling',
  },
  {
    finding:
      'Integration with existing workflow matters more than a new destination',
    decision:
      'Build retrieval as an overlay accessible via shortcut (Alt+Shift+R) inside any app, not a separate dashboard-only experience',
  },
];

export function CaseStudySynthesis() {
  return (
    <section
      id="case-study-synthesis"
      className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            SYNTHESIS: FROM RESEARCH TO PRODUCT DECISIONS
          </div>

          <h2
            id="case-study-synthesis-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-4 tracking-tight"
          >
            How Research Shaped Every Decision
          </h2>

          <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] max-w-[880px] mb-10">
            Every architectural and interaction decision in Reyo was directly derived from user research findings and competitive gap analysis.
          </p>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-[12px] border border-[var(--border)] overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--surface-elevated)] border-b border-[var(--border)]">
                  <th className="py-3.5 px-6 font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium w-[55%]">
                    EVIDENCE
                  </th>
                  <th className="py-3.5 px-6 font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-medium w-[45%]">
                    DECISION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[14px]">
                {decisions.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={
                      idx % 2 === 0
                        ? 'bg-[var(--surface)] hover:bg-[var(--surface-elevated)]/40 transition-colors'
                        : 'bg-[var(--bg)] hover:bg-[var(--surface-elevated)]/40 transition-colors'
                    }
                  >
                    {/* Evidence Cell */}
                    <td className="py-4 px-6 text-[var(--text-primary)] font-light leading-relaxed relative">
                      <span className="font-serif text-[28px] leading-none text-[var(--accent)] opacity-20 absolute top-2 left-2 select-none">
                        “
                      </span>
                      <span className="relative z-10 pl-2 block">
                        {row.finding}
                      </span>
                    </td>

                    {/* Decision Cell */}
                    <td className="py-4 px-6 text-[var(--text-primary)] font-medium leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold shrink-0 mt-0.5">
                          →
                        </span>
                        <span>{row.decision}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="flex flex-col gap-4 md:hidden">
            {decisions.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm"
              >
                <div className="mb-3">
                  <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] block mb-1">
                    EVIDENCE
                  </span>
                  <p className="text-[14px] font-light text-[var(--text-primary)] leading-snug">
                    “{row.finding}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)]">
                  <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-medium block mb-1">
                    DECISION
                  </span>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] leading-snug flex items-start gap-1.5">
                    <span className="text-[var(--accent)]">→</span>
                    <span>{row.decision}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
