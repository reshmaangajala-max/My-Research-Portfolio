import { motion } from 'motion/react';

const methodologySteps = [
  {
    title: 'Primary Research',
    desc: '10 interviews + 30 survey responses',
  },
  {
    title: 'Secondary Research',
    desc: '12 competitor tools tested',
  },
  {
    title: 'Content Analysis',
    desc: '170+ videos classified',
  },
  {
    title: 'Synthesis & Framework',
    desc: '4-level taxonomy built',
  },
];

export function CaseStudyMethodology() {
  return (
    <section
      id="case-study-methodology"
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
            METHODOLOGY
          </div>

          <h2
            id="case-study-methodology-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Research Process Overview
          </h2>

          {/* Flow Diagram: 4 horizontal nodes on desktop, stacked vertical on mobile */}
          <div className="relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 items-center">
              {methodologySteps.map((step, idx) => (
                <div key={step.title} className="relative flex flex-col md:flex-row items-center w-full">
                  {/* Node Box */}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full bg-[var(--surface)] border-y border-r border-[var(--border)] border-l-[3px] border-l-[var(--accent)] rounded-[10px] p-4 sm:p-5 shadow-sm transition-transform hover:-translate-y-0.5 duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-[15px] text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <span className="font-accent text-[10px] text-[var(--accent)] font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-[12px] text-[var(--text-secondary)] font-light leading-snug">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Connecting Arrow for Desktop (between nodes) */}
                  {idx < methodologySteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center px-1.5 shrink-0">
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.18 + 0.12,
                          ease: 'easeOut',
                        }}
                        style={{ transformOrigin: 'left' }}
                        className="flex items-center"
                      >
                        <div className="w-3 h-[1px] bg-[var(--border)]" />
                        <span className="text-[10px] text-[var(--border)] -ml-1">▸</span>
                      </motion.div>
                    </div>
                  )}

                  {/* Connecting Arrow for Mobile (downwards) */}
                  {idx < methodologySteps.length - 1 && (
                    <div className="flex md:hidden items-center justify-center my-1.5">
                      <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{
                          duration: 0.25,
                          delay: idx * 0.18 + 0.1,
                          ease: 'easeOut',
                        }}
                        style={{ transformOrigin: 'top' }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-[1px] h-3 bg-[var(--border)]" />
                        <span className="text-[10px] text-[var(--border)] -mt-1 leading-none">▾</span>
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 40px gap */}

          {/* Synthesis narrative paragraph */}
          <div className="max-w-[860px]">
            <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-primary)] leading-[1.8]">
              This project followed a structured research approach: starting with understanding the problem through direct conversations with designers, validating it through a broader survey, mapping the competitive landscape through hands-on product testing, analyzing real content to understand what organization would need to look like, and synthesizing everything into a classification framework that could be applied at scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
