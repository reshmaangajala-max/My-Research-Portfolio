import { motion } from 'motion/react';

const researchSkills = [
  'Primary Research',
  'User Interviews',
  'Surveys',
  'Secondary Research',
  'Competitive Analysis',
  'SWOT Analysis',
  'Market Research',
  'Content Curation',
  'Content Management',
  'Taxonomy & Metadata',
  'Knowledge Management',
  'Documentation',
  'UX Research',
  'Search Optimization',
];

const toolsAndKnowledge = [
  'Figma',
  'Notion',
  'SharePoint',
  'Excel',
  'PowerPoint',
  'Word',
  'Google Forms',
  'GenAI & LLM Classification',
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            SKILLS
          </div>

          {/* Section heading */}
          <h2
            id="skills-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-10 tracking-tight"
          >
            What I Work With
          </h2>

          {/* Clusters layout: 55% / 45% side by side on desktop, stacked on mobile with 24px gap */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Group 1: Research & Domain (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col">
              <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium mb-4">
                Research & Domain
              </h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.025,
                    },
                  },
                }}
                className="flex flex-wrap gap-2.5"
              >
                {researchSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3, ease: 'easeOut' },
                      },
                    }}
                    className="group bg-[var(--surface)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text-primary)] px-4 py-2 sm:px-4 sm:py-2 select-none hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[var(--pill-glow)] transition-all duration-200 cursor-default"
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Group 2: Tools & Knowledge (45%) */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium mb-4">
                Tools & Knowledge
              </h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.025,
                      delayChildren: 0.15,
                    },
                  },
                }}
                className="flex flex-wrap gap-2.5"
              >
                {toolsAndKnowledge.map((tool) => (
                  <motion.div
                    key={tool}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3, ease: 'easeOut' },
                      },
                    }}
                    className="group bg-[var(--surface)] border-y border-r border-[var(--border)] border-l-2 border-l-[var(--accent)] rounded-full text-[13px] text-[var(--text-primary)] px-4 py-2 select-none hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[var(--pill-glow)] transition-all duration-200 cursor-default"
                  >
                    <span>{tool}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
