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
                    Conducted in-person primary research, including structured interviews with engineering students across mechanical, electrical, AI/ML, and CS disciplines, to inform a new EV product concept for women riders.
                  </p>
                  <p>
                    Performed secondary research and competitive analysis (SWOT) of existing EV products and applications, including hands-on testing of competitor apps, to identify interface, functionality, and market gaps.
                  </p>
                  <p>
                    Documented research insights and proposed product direction for leadership and the AI/ML team, supporting knowledge management and future product development.
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
                    Supported primary and secondary research and documentation across early-stage product exploration, including user interviews and competitive analysis.
                  </p>
                  <p>
                    Collaborated with development and AI/ML teams to translate research findings into design and technical direction.
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
