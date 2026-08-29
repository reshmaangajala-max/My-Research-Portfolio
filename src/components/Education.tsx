import { motion } from 'motion/react';
import { GraduationCap, Award, Building2 } from 'lucide-react';

const educationList = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institution: 'Centurion University of Technology and Management, Paralakhemundi',
    period: '2021 – 2025',
    isCurrent: true,
  },
  {
    degree: 'Intermediate (Class 12)',
    institution: 'Narayana Junior College, Vishakapatnam',
    period: '2019 – 2021',
    isCurrent: false,
  },
  {
    degree: 'Class 10',
    institution: 'Public School, Jeypore',
    period: '2018 – 2019',
    isCurrent: false,
  },
];

const certifications = [
  {
    provider: 'HANYAA AUTO TECHNOLOGIES',
    name: 'UI/UX Design Internship Certificate',
    tag: 'Internship & Industry Practice',
  },
  {
    provider: '10K DESIGNERS',
    name: 'Product & Industrial Design Certification',
    tag: 'Cohort & Product Systems',
  },
];

export function Education() {
  return (
    <section id="education" className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            ACADEMICS & CREDENTIALS
          </div>

          {/* Section heading */}
          <h2
            id="education-heading"
            className="font-bold text-[26px] sm:text-[32px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Education Timeline (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="font-accent text-[12px] uppercase tracking-[2.5px] text-[var(--text-secondary)] font-semibold">
                  Education
                </h3>
              </div>

              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[1px] before:bg-[var(--border)]">
                {educationList.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                    className="relative pl-8 group"
                  >
                    {/* Node indicator */}
                    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-300">
                      <div className="w-[7px] h-[7px] rounded-full bg-[var(--accent)]" />
                    </div>

                    <div className="bg-[var(--bg)]/60 border border-[var(--border)] rounded-[14px] p-5 hover:border-[var(--accent)]/60 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                        <h4 className="font-bold text-[16px] text-[var(--text-primary)] tracking-tight">
                          {edu.degree}
                        </h4>
                        <span className="font-accent text-[12px] text-[var(--accent)] font-medium shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[13.5px] text-[var(--text-secondary)] font-light flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 opacity-60 shrink-0" />
                        <span>{edu.institution}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Certifications (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="font-accent text-[12px] uppercase tracking-[2.5px] text-[var(--text-secondary)] font-semibold">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: idx * 0.12, ease: 'easeOut' }}
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-[14px] p-5 flex flex-col justify-between hover:border-[var(--accent)] hover:-translate-y-[2px] transition-all duration-300 shadow-sm"
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="font-accent text-[10px] uppercase tracking-[2px] text-[var(--accent)] font-medium px-2 py-0.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                          {cert.provider}
                        </span>
                        <Award className="w-4 h-4 text-[var(--text-secondary)] opacity-40" />
                      </div>
                      <h5 className="font-bold text-[15px] text-[var(--text-primary)] leading-snug">
                        {cert.name}
                      </h5>
                    </div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-light">
                      {cert.tag}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
