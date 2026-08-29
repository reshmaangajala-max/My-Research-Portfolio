import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { RenewResearchArtifactModal } from './artifacts/RenewResearchArtifactModal';

const deliverables = [
  {
    step: '01',
    docId: 'renew-survey-analysis',
    title: 'Research Documentation',
    desc: 'User interview synthesis, survey analysis (107 respondents), all raw data preserved',
    placeholder: 'Research documentation',
    badge: '107 Respondents Dataset',
  },
  {
    step: '02',
    docId: 'renew-comp-matrix',
    title: 'Competitive Analysis',
    desc: '15+ app teardowns, comparison matrix across 6 products, SWOT analysis, gap identification',
    placeholder: 'Competitive analysis in Figma',
    badge: 'Landscape Matrix',
  },
  {
    step: '03',
    docId: 'renew-product-principles',
    title: 'Product Direction & Principles',
    desc: 'Four zero-input product principles, UVP definition, feature prioritization framework',
    placeholder: 'Product principles document',
    badge: 'Design Strategy',
  },
  {
    step: '04',
    docId: 'renew-wireframes',
    title: 'Wireframes',
    desc: 'Core user flows: document camera scan, home dashboard, rich actionable notifications, progressive onboarding',
    placeholder: 'Wireframe flows',
    badge: '5 Core Architecture Flows',
  },
  {
    step: '05',
    docId: 'renew-ui-screens',
    title: 'UI Design',
    desc: 'High-fidelity screens following Android Material guidelines, ready for developer handover',
    placeholder: 'UI design screens',
    badge: '18 Production Screens',
  },
  {
    step: '06',
    docId: 'renew-tech-stack',
    title: 'Tech Stack Recommendation',
    desc: 'Documented technology choices and architecture for the Android development team, including on-device ML Kit OCR recommendations',
    placeholder: 'Tech stack documentation',
    badge: 'Technical Architecture',
  },
];

export function RenewDeliverables() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('renew-survey-analysis');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="renew-deliverables"
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
            WHAT I DELIVERED
          </div>

          <h2
            id="renew-deliverables-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-6 tracking-tight"
          >
            Research to Handover
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-primary)] leading-[1.8] max-w-[880px] mb-16">
            Presented the complete research package to the CEO and project manager. Based on the findings and product direction, leadership greenlit the concept and asked me to prepare everything needed for the Android development team to begin building. Deliverables included:
          </p>

          {/* Stepped Timeline */}
          <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
            {deliverables.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
              >
                {/* Numbered Indicator Node on the timeline */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--surface-elevated)] border-2 border-[var(--accent)] flex items-center justify-center text-[12px] font-accent font-semibold text-[var(--accent)] shadow-sm">
                  {item.step}
                </div>

                {/* Left content description */}
                <div className="w-full lg:w-[48%] flex flex-col">
                  <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-light text-[15px] text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div>
                    <button
                      onClick={() => openDoc(item.docId)}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[var(--accent)] hover:underline"
                    >
                      <span>Inspect Deliverable Spec</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right interactive card */}
                <div
                  onClick={() => openDoc(item.docId)}
                  className="w-full lg:w-[52%] group cursor-pointer rounded-[14px] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)]/50 p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                        {item.badge}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors">
                        <Lock className="w-3 h-3" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-white transition-colors mb-1.5">
                      {item.placeholder}
                    </h4>
                    <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                    <span>Deliverable #{item.step}</span>
                    <span className="text-[var(--accent)] group-hover:underline flex items-center gap-1">
                      <span>Unlock Spec</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Password-protected artifact modal */}
      <RenewResearchArtifactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocId={selectedDocId}
      />
    </section>
  );
}
