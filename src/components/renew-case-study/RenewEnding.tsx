import { motion } from 'motion/react';

export function RenewEnding() {
  return (
    <section
      id="renew-ending"
      className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px]"
        >
          {/* Section label */}
          <div className="text-[var(--text-secondary)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            WHAT HAPPENED NEXT
          </div>

          <h2
            id="renew-ending-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-6 tracking-tight"
          >
            Project Paused
          </h2>

          <p className="font-light text-[17px] text-[var(--text-primary)] leading-[1.8] mb-8">
            After completing the research, product direction, wireframes, UI, and tech stack documentation, I was reassigned to a different project within the company. The Android development team consisted of only 1-2 developers, and the company&apos;s priorities shifted. The Tara project was paused with all deliverables preserved for potential future development.
          </p>

          {/* Neutral callout box */}
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
            <p className="font-light text-[15px] text-[var(--text-secondary)] leading-relaxed">
              This is a conceptual case study. The research is real. The insights are real. The product direction is research-backed. But the product was never built or launched. I include it because the research process — from assigned brief to structured investigation to actionable deliverables — represents exactly the kind of work I do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
