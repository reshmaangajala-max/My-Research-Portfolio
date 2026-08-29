import { motion } from 'motion/react';

const tradeoffs = [
  {
    title: 'Privacy',
    content:
      'Processing video content requires sending transcripts through an LLM. Designers expressed discomfort with their saved learning content being analyzed by third-party AI. Current approach: transcripts processed server-side with no data retention. Future exploration: on-device classification for full privacy.',
  },
  {
    title: 'Integration Friction',
    content:
      'The tool is most valuable when it’s accessible inside a designer’s existing workflow (Figma, browser, code editor). Building native integrations for each platform is a significant engineering lift for a solo builder. Current approach: browser extension + keyboard shortcut overlay. Trade-off: designers in non-browser tools have to switch context.',
  },
  {
    title: 'Classification Accuracy',
    content:
      'LLM-based auto-classification is imperfect — some videos get tagged with overly broad topics or miss specific concepts. Current accuracy is sufficient for retrieval but not perfect. Improvement path: user corrections feeding back into the classification model over time.',
  },
];

export function CaseStudyTradeoffs() {
  return (
    <section
      id="case-study-tradeoffs"
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
            TRADE-OFFS
          </div>

          <h2
            id="case-study-tradeoffs-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-4 tracking-tight"
          >
            What&apos;s Hard and What&apos;s Unresolved
          </h2>

          <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-[1.75] max-w-[880px] mb-10">
            A critical part of rigorous research is evaluating technical constraints, friction points, and unresolved challenges transparently.
          </p>

          {/* Three Neutral Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradeoffs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-[var(--bg)] border border-[var(--border)] rounded-[16px] p-7 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-[17px] text-[var(--text-primary)] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-light text-[14px] text-[var(--text-primary)] leading-[1.7]">
                    {item.content}
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
