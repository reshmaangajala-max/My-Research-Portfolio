import { motion } from 'motion/react';

// TODO: Deleted unverified survey percentages in principles and mappings:
// - 71% of surveyed users have no dedicated tool
// - 43% have paid late fees from missed deadlines
// - 58% named privacy as their top concern
// - 82% interested in AI auto-detection
// Replace with verified counts out of 15 when user supplies them.
const principles = [
  {
    title: 'Zero Unnecessary Effort',
    evidence:
      "Surveyed users consistently report having no dedicated tool — they won't adopt something that requires setup work. If the app needs manual input to be useful, it's already failed.",
  },
  {
    title: "Don't Remind — Resolve",
    evidence:
      'Users frequently report paying late fees from missed deadlines. A reminder that gets snoozed is useless. The product should help the user take action, not just alert them.',
  },
  {
    title: 'Attention is Earned',
    evidence:
      'Team conversation finding: participants highlighted severe notification fatigue. The app must only notify when action is truly needed — never for marketing, never for low-priority items.',
  },
  {
    title: 'Permission Before Action',
    evidence:
      'Users consistently named privacy as their top concern. Every data access must be explicitly requested, clearly explained, and revocable. No silent scanning.',
  },
  {
    title: 'Privacy by Default',
    evidence:
      'Discovery conversation insight: trust is built gradually. Default to on-device processing. Cloud sync is opt-in, not assumed. No data selling, ever.',
  },
  {
    title: 'One Place for Life Obligations',
    evidence:
      'Users currently scatter obligations across calendar, notes, memory, and paper. Consolidating into one view across all categories (insurance, bills, subscriptions, vehicle, medical) is the core value.',
  },
];

const decisionMappings = [
  {
    finding: 'Survey finding: Users lack a dedicated tool and rely on memory alone',
    decision:
      'Auto-detect obligations from documents and emails — never require manual entry as the primary input',
  },
  {
    finding: 'Survey finding: High interest in AI auto-detection from documents',
    decision:
      'Build document scanning (camera + share sheet) that extracts dates, amounts, and obligation types using AI',
  },
  {
    finding: 'Survey finding: Privacy identified as top non-negotiable concern',
    decision:
      'On-device processing by default, cloud opt-in only, no third-party data sharing',
  },
  {
    finding:
      'Every competitor covers only one category (finance OR subscriptions OR general tasks)',
    decision:
      'Cover all life obligation categories in one app: insurance, vehicle, medical, bills, subscriptions, government deadlines',
  },
  {
    finding: 'Survey finding: Users incur penalty late fees due to missed renewals',
    decision:
      'Prioritize high-stakes obligations (insurance expiry, license renewal) over routine tasks — urgency-based notification hierarchy',
  },
  {
    finding: 'Notification fatigue voiced across team discovery conversations',
    decision:
      'Notification budget system — limit total notifications per day, escalate only for approaching deadlines, never notify for marketing',
  },
  {
    finding:
      'Indian market specifically: vehicle documents, government IDs, insurance are all paper-based with manual renewal processes',
    decision:
      'WhatsApp share-sheet capture + camera scan as primary document input — meets users where they already share documents',
  },
  {
    finding: 'Limited Android development team (1-2 developers)',
    decision:
      'Android-first, single-platform focus to ship faster, iOS later',
  },
];

export function RenewSynthesis() {
  return (
    <section
      id="renew-synthesis"
      className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500"
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
            SYNTHESIS: FROM RESEARCH TO PRODUCT DIRECTION
          </div>

          <h2
            id="renew-synthesis-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Defining What This Product Should Be
          </h2>

          {/* Product Principles Grid */}
          <div className="mb-20">
            <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-6 tracking-tight">
              Product Principles (Derived from Research)
            </h3>

            <div className="flex flex-col gap-4">
              {principles.map((principle, idx) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)] rounded-[12px] p-6 shadow-sm flex flex-col gap-2 hover:border-r-[var(--accent)]/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[16px] text-[var(--text-primary)] tracking-tight">
                      {principle.title}
                    </h4>
                    <span className="font-accent text-[11px] text-[var(--accent)] font-medium">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="font-light text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    <strong className="font-medium text-[var(--text-primary)]">Research Evidence: </strong>
                    {principle.evidence}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decision Mapping Table */}
          <div>
            <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-6 tracking-tight">
              Research-to-Decision Mapping
            </h3>

            {/* Desktop Table View */}
            <div className="hidden md:block rounded-[12px] border border-[var(--border)] bg-[var(--bg)] shadow-sm overflow-hidden">
              <table className="w-full text-left text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-accent uppercase text-[11px] tracking-[1.5px]">
                    <th className="py-4 px-6 w-[55%] font-semibold">Evidence (Research Finding)</th>
                    <th className="py-4 px-6 w-[45%] font-semibold">Product Decision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {decisionMappings.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="hover:bg-[var(--surface-elevated)]/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-[var(--text-secondary)] font-light leading-relaxed">
                        {row.finding}
                      </td>
                      <td className="py-4 px-6 text-[var(--text-primary)] font-medium leading-relaxed">
                        <span className="text-[var(--accent)] mr-2 font-semibold">→</span>
                        {row.decision}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden flex flex-col gap-3">
              {decisionMappings.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="p-4 rounded-[12px] bg-[var(--bg)] border border-[var(--border)] flex flex-col gap-2.5 shadow-sm"
                >
                  <div>
                    <span className="font-accent uppercase tracking-wider text-[10px] text-[var(--text-secondary)] block mb-1">
                      Evidence
                    </span>
                    <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-snug">
                      {row.finding}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[var(--border)]">
                    <span className="font-accent uppercase tracking-wider text-[10px] text-[var(--accent)] block mb-1">
                      Decision
                    </span>
                    <p className="text-[14px] text-[var(--text-primary)] font-medium leading-snug">
                      {row.decision}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
