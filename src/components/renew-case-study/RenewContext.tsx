import { motion } from 'motion/react';

const projectDetails = [
  { label: 'Role', value: 'Sole Researcher & Designer (assigned project)' },
  { label: 'Company', value: 'Hanyaa Auto Technologies, Hyderabad' },
  { label: 'Duration', value: '~3 months (Jan–Mar 2025)' },
  {
    label: 'Methods',
    value: 'User Interviews, External Survey, Competitive Analysis, SWOT, Product Principles Definition',
  },
  {
    label: 'Tools',
    value: 'Google Forms, Figma, Notion',
  },
  {
    label: 'Deliverables',
    value: 'Research documentation, competitive analysis, product direction, wireframes, UI, tech stack recommendation',
  },
  { label: 'Status', value: 'Paused — handed to next project, then left the company' },
  { label: 'Team', value: 'Solo designer + 1-2 Android developers (for planned build)' },
];

export function RenewContext() {
  return (
    <section
      id="renew-context"
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
            id="renew-context-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-10 tracking-tight"
          >
            The Origin of the Problem
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
            {/* Left column (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col">
              <p className="font-light text-[17px] text-[var(--text-primary)] leading-[1.8] mb-6">
                People miss insurance renewals, forget subscription cancellation deadlines, overlook vehicle service dates, and lose track of bill due dates — not because they&apos;re careless, but because life admin is scattered across emails, PDFs, messages, and memory. Existing reminder apps assume the user will remember to create the reminder. But if someone is overwhelmed enough to forget the task, they&apos;ll forget to set the reminder for it too.
              </p>
              <div className="p-5 rounded-[12px] bg-[var(--surface-elevated)] border-l-2 border-l-[var(--accent)] border-y border-r border-[var(--border)] mb-4">
                <p className="font-medium text-[16px] text-[var(--text-primary)] leading-relaxed">
                  This project was assigned to me at Hanyaa Auto Technologies to explore whether an AI-powered assistant could detect, prioritize, and resolve life obligations without requiring manual input.
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
