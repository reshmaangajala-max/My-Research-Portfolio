import { motion } from 'motion/react';

const designAndProductSkills = [
  'UI/UX Design',
  'Interaction Design',
  'Wireframing',
  'Prototyping',
  'High-Fidelity UI',
  'Design Systems',
  'Information Architecture',
  'User Flows',
  'Typography',
  'Layout & Visual Hierarchy',
  'Responsive Design',
  'Product Thinking',
];

const toolsAndTechnicalSkills = [
  'Figma',
  'Figma Motion',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'HTML',
  'CSS',
  'JavaScript',
  'Developer Handoff',
  'GenAI & LLM Workflows',
  'Notion',
];

const researchSkills = [
  'User Research',
  'User Interviews',
  'Usability Testing',
  'Surveys',
  'Competitive Analysis',
  'Taxonomy & Metadata',
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

          {/* Three-column layout on desktop, responsive stacking on mobile & tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Column 1: DESIGN & PRODUCT */}
            <div className="flex flex-col">
              <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium mb-4">
                DESIGN &amp; PRODUCT
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
                {designAndProductSkills.map((skill) => (
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
                    className="group bg-[var(--surface)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text-primary)] px-4 py-2 select-none hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[var(--pill-glow)] transition-all duration-200 cursor-default whitespace-nowrap"
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Column 2: TOOLS & TECHNICAL */}
            <div className="flex flex-col">
              <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium mb-4">
                TOOLS &amp; TECHNICAL
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
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-wrap gap-2.5"
              >
                {toolsAndTechnicalSkills.map((tool) => (
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
                    className="group bg-[var(--surface)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text-primary)] px-4 py-2 select-none hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[var(--pill-glow)] transition-all duration-200 cursor-default whitespace-nowrap"
                  >
                    <span>{tool}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Column 3: RESEARCH */}
            <div className="flex flex-col md:col-span-2 lg:col-span-1">
              <h3 className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium mb-4">
                RESEARCH
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
                      delayChildren: 0.2,
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
                    className="group bg-[var(--surface)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text-primary)] px-4 py-2 select-none hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[var(--pill-glow)] transition-all duration-200 cursor-default whitespace-nowrap"
                  >
                    <span>{skill}</span>
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
