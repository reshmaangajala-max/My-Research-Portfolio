import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';

const impactStats = [
  {
    target: 10,
    isAurora: true,
    label: 'Team Members Interviewed',
  },
  {
    target: 25,
    suffix: '+',
    isAurora: true,
    label: 'Survey Responses Collected',
  },
  {
    target: 15,
    suffix: '+',
    isAccent: true,
    label: 'Competitor Apps Analyzed',
  },
  {
    target: 6,
    isAccent: true,
    label: 'Product Principles Defined',
  },
];

export function RenewImpact() {
  return (
    <section
      id="renew-impact"
      className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            IMPACT
          </div>

          <h2
            id="renew-impact-heading"
            className="font-bold text-[24px] sm:text-[32px] text-[var(--text-primary)] mb-14 tracking-tight"
          >
            Research Scale &amp; Outcomes
          </h2>

          {/* 4 Big Stat Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[16px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="text-[48px] sm:text-[56px] leading-none mb-3">
                  {item.isAurora ? (
                    <span className="aurora-text font-bold">
                      <StatCounter numericTarget={item.target} suffix={item.suffix} />
                    </span>
                  ) : (
                    <StatCounter
                      numericTarget={item.target}
                      suffix={item.suffix}
                      isAccent={true}
                    />
                  )}
                </div>
                <span className="font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Closing Paragraph */}
          <div className="max-w-[700px] mx-auto text-center">
            <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-primary)] leading-[1.8]">
              Renew demonstrated that structured research can turn a vague brief — &ldquo;explore a reminder app idea&rdquo; — into a clearly differentiated product direction backed by evidence. Every product principle traces back to a specific research finding. Every feature decision has a &ldquo;because users told us&rdquo; behind it. The project paused, but the research methodology and documentation practice I built here carried directly into my independent work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
