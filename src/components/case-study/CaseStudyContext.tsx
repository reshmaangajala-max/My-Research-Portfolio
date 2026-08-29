import { motion } from 'motion/react';

const projectDetails = [
  { label: 'Role', value: 'Solo Researcher & Builder' },
  { label: 'Duration', value: '4 months (ongoing)' },
  {
    label: 'Methods',
    value: 'User Interviews, Surveys, Competitive Analysis, Content Analysis, SWOT',
  },
  {
    label: 'Tools',
    value: 'Google Forms, Figma, Notion, Spring Boot, Next.js',
  },
  { label: 'Status', value: 'Web app in progress' },
];

export function CaseStudyContext() {
  return (
    <section
      id="case-study-context"
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
            CONTEXT
          </div>

          <h2
            id="case-study-context-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-10 tracking-tight"
          >
            The Origin of the Problem
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
            {/* Left column (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col">
              <p className="font-light text-[17px] text-[var(--text-primary)] leading-[1.8] mb-6">
                Designers constantly learn from videos — YouTube tutorials, conference talks, walkthroughs. They save these videos to playlists, bookmarks, Notion pages, or folders. But when they need a specific technique, insight, or approach they remember learning, they can&apos;t find it.
              </p>
              <div className="p-5 rounded-[12px] bg-[var(--surface-elevated)] border-l-2 border-l-[var(--accent)] border-y border-r border-[var(--border)] mb-4">
                <p className="font-medium text-[16px] text-[var(--text-primary)] leading-relaxed">
                  The save happened. The retrieval fails. This project started as a personal frustration and became a research-driven product built to solve it.
                </p>
              </div>
            </div>

            {/* Right column (45%): Project Details metadata box */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-medium mb-4">
                  Project Details
                </h3>

                <div className="flex flex-col divide-y divide-[var(--border)]">
                  {projectDetails.map((item) => (
                    <div
                      key={item.label}
                      className="py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4"
                    >
                      <span className="font-accent text-[12px] text-[var(--text-secondary)] shrink-0 font-medium">
                        {item.label}
                      </span>
                      <span className="text-[14px] font-light text-[var(--text-primary)] sm:text-right leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
