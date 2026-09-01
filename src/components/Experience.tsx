import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            EXPERIENCE
          </div>

          {/* Section heading */}
          <h2
            id="experience-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Where I&apos;ve Worked
          </h2>

          {/* Timeline Container */}
          <div className="relative pl-7 md:pl-10 max-w-[840px]">
            {/* Vertical timeline line drawing top-to-bottom 0.8s */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-[3px] md:left-[5px] top-2 bottom-4 w-[2px] bg-[var(--border)]"
            />

            {/* Entry 1: Current / Recent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Node with breathing ring (8px -> 24px every 2.5s) */}
              <div className="absolute -left-[31px] md:-left-[43px] top-[7px] flex items-center justify-center">
                {/* Breathing ring */}
                <motion.span
                  animate={{
                    scale: [1, 3],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="absolute w-[8px] h-[8px] rounded-full bg-[var(--accent)]"
                />
                {/* Center dot */}
                <span className="relative w-[8px] h-[8px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--surface)] shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
              </div>

              {/* Content */}
              <div>
                {/* Date badge */}
                <span className="inline-block bg-[var(--accent)] text-white text-[11px] font-accent font-medium px-2.5 py-0.5 rounded tracking-wider mb-2.5">
                  JUL 2025 – DEC 2025
                </span>

                <h3 className="font-bold text-[18px] text-[var(--text-primary)]">
                  Junior UI/UX Designer
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] font-light mb-4">
                  Hanyaa Auto Technologies, Hyderabad
                </p>

                {/* Three description paragraphs */}
                <div className="flex flex-col gap-3 text-[15px] text-[var(--text-primary)] leading-[1.7] font-light">
                  <p>
                    Worked as the sole designer across early-stage product initiatives, taking open-ended ideas and requirements into product concepts, user flows, UI, visual direction, and final design deliverables.
                  </p>
                  <p>
                    Worked closely with the CEO, engineering, and AI/ML teams to understand complex requirements, explore ideas, and turn them into clear and practical product experiences.
                  </p>
                  <p>
                    Iterated designs through stakeholder feedback while maintaining consistency across layouts, typography, colour, and interaction patterns.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Entry 2: Past Internship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="relative"
            >
              {/* Timeline Node (static 8px dot in border color) */}
              <div className="absolute -left-[31px] md:-left-[43px] top-[7px] flex items-center justify-center">
                <span className="w-[8px] h-[8px] rounded-full bg-[var(--border)] ring-4 ring-[var(--surface)]" />
              </div>

              {/* Content */}
              <div>
                {/* Date badge */}
                <span className="inline-block bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)] text-[11px] font-accent font-medium px-2.5 py-0.5 rounded tracking-wider mb-2.5">
                  JAN 2025 – JUN 2025
                </span>

                <h3 className="font-bold text-[18px] text-[var(--text-primary)]">
                  UI/UX Design Intern
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] font-light mb-4">
                  Hanyaa Auto Technologies, Hyderabad
                </p>

                {/* Two description paragraphs */}
                <div className="flex flex-col gap-3 text-[15px] text-[var(--text-primary)] leading-[1.7] font-light">
                  <p>
                    Supported early-stage product exploration through research, ideation, user flows, UI design, visual concepts, and prototypes.
                  </p>
                  <p>
                    Collaborated with development and AI/ML teams through feedback, revisions, documentation, and final handoff.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
