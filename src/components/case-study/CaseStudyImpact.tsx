import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';

export function CaseStudyImpact() {
  return (
    <section
      id="case-study-impact"
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
            IMPACT
          </div>

          <h2
            id="case-study-impact-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Research Scale & Outcomes
          </h2>

          {/* Banner-Style Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1: 170+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] p-8 text-center shadow-sm flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="text-[48px] sm:text-[56px] leading-none mb-3 font-accent">
                <span className="aurora-text">
                  <StatCounter numericTarget={170} suffix="+" isAccent={false} />
                </span>
              </div>
              <span className="text-[14px] text-[var(--text-secondary)] font-light">
                Videos Processed
              </span>
            </motion.div>

            {/* Card 2: 91% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] p-8 text-center shadow-sm flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="text-[48px] sm:text-[56px] leading-none mb-3 font-accent">
                <span className="aurora-text">
                  <StatCounter numericTarget={91} suffix="%" isAccent={false} />
                </span>
              </div>
              <span className="text-[14px] text-[var(--text-secondary)] font-light">
                Transcript Coverage
              </span>
            </motion.div>

            {/* Card 3: 30+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] p-8 text-center shadow-sm flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="text-[48px] sm:text-[56px] leading-none mb-3 font-accent">
                <StatCounter numericTarget={30} suffix="+" isAccent={true} />
              </div>
              <span className="text-[14px] text-[var(--text-secondary)] font-light">
                Designers Surveyed
              </span>
            </motion.div>

            {/* Card 4: 12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] p-8 text-center shadow-sm flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="text-[48px] sm:text-[56px] leading-none mb-3 font-accent">
                <StatCounter numericTarget={12} isAccent={true} />
              </div>
              <span className="text-[14px] text-[var(--text-secondary)] font-light">
                Competitor Tools Analyzed
              </span>
            </motion.div>
          </div>

          {/* 40px gap */}

          {/* Closing Centered Paragraph */}
          <div className="max-w-[700px] mx-auto text-center pt-6">
            <p className="font-light text-[17px] text-[var(--text-primary)] leading-[1.8]">
              Reyo started as a personal frustration and became a structured research project that validated a real, underserved problem. The research shaped every product decision — from the classification framework to the retrieval interaction model to the privacy architecture. The product is still being built, but the research foundation it stands on is solid, documented, and evidence-backed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
