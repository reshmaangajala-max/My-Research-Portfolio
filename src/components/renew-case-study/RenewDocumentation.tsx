import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import { RENEW_ARTIFACT_DOCS, RenewResearchArtifactModal } from './artifacts/RenewResearchArtifactModal';

export function RenewDocumentation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('renew-survey-analysis');

  const handleOpenDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="renew-documentation"
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
            DOCUMENTATION
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2
                id="renew-doc-heading"
                className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-3 tracking-tight"
              >
                Research Artifacts Produced
              </h2>
              <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-[1.75] max-w-[720px]">
                A structured repository of primary research synthesis, survey datasets (15 respondents), competitive landscape matrices, low-fi wireframes, and technical specifications produced during the project.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[12px] text-[var(--text-secondary)] self-start md:self-auto shrink-0">
              <Shield className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Password protected · Click any item</span>
            </div>
          </div>

          {/* 3 cols desktop, 2 cols tablet, 1 col mobile grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {RENEW_ARTIFACT_DOCS.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: 'easeOut' }}
                onClick={() => handleOpenDoc(doc.id)}
                className="group relative bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-[14px] p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top tag & Lock icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-semibold truncate">
                      {doc.category}
                    </span>
                    <div className="w-6 h-6 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors shrink-0">
                      <Lock className="w-3 h-3" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-[15px] text-[var(--text-primary)] group-hover:text-white transition-colors leading-snug mb-2 flex items-start justify-between gap-2">
                    <span>{doc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--accent)] transition-opacity shrink-0 mt-0.5" />
                  </h3>

                  <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed mb-4 line-clamp-2">
                    {doc.summary}
                  </p>
                </div>

                {/* Bottom metadata strip */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                  <span>{doc.pagesOrSize}</span>
                  <span className="text-[var(--accent)] group-hover:underline">
                    Unlock →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[13px] text-[var(--text-secondary)]">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span>
                Recruiter access code: <code className="font-mono text-[var(--accent)] font-bold">recruiter</code> (or click any document above)
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Password protection modal */}
      <RenewResearchArtifactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocId={selectedDocId}
      />
    </section>
  );
}
