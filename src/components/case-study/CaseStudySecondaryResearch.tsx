import { useState } from 'react';
import { motion } from 'motion/react';
import { CompetitiveMatrixDoc } from './artifacts/CompetitiveMatrixDoc';
import { ResearchArtifactModal } from './artifacts/ResearchArtifactModal';

const competitorTools = [
  {
    name: 'YouTube Playlists',
    saveMethod: 'One-click save',
    organization: 'Flat playlists, manual titles',
    retrieval: 'Scroll through list',
    understanding: 'None — title only',
    status: 'none',
  },
  {
    name: 'Notion',
    saveMethod: 'Manual paste + notes',
    organization: 'Pages, databases, tags',
    retrieval: 'Search by title/tag',
    understanding: 'None — user must write notes',
    status: 'none',
  },
  {
    name: 'Raindrop.io',
    saveMethod: 'Browser extension',
    organization: 'Collections, tags',
    retrieval: 'Search, filter by tag',
    understanding: 'None — URL/title only',
    status: 'none',
  },
  {
    name: 'Pocket',
    saveMethod: 'One-click save',
    organization: 'Tags, archive',
    retrieval: 'Search by title/tag',
    understanding: 'Limited — article text, not video',
    status: 'limited',
  },
  {
    name: 'Are.na',
    saveMethod: 'Manual add',
    organization: 'Channels, connections',
    retrieval: 'Browse channels',
    understanding: 'None — visual only',
    status: 'none',
  },
  {
    name: 'Mymind',
    saveMethod: 'Auto-save',
    organization: 'AI auto-tags',
    retrieval: 'AI search',
    understanding: 'Partial — image recognition, not video',
    status: 'partial',
  },
  {
    name: 'Wakelet',
    saveMethod: 'Clip + organize',
    organization: 'Collections',
    retrieval: 'Browse collection',
    understanding: 'None',
    status: 'none',
  },
  {
    name: 'Google Keep',
    saveMethod: 'Manual note',
    organization: 'Labels, colors',
    retrieval: 'Search text',
    understanding: 'None',
    status: 'none',
  },
  {
    name: 'Evernote',
    saveMethod: 'Clip + note',
    organization: 'Notebooks, tags',
    retrieval: 'Full-text search',
    understanding: 'Text only, not video',
    status: 'limited',
  },
  {
    name: 'Pinterest',
    saveMethod: 'Pin',
    organization: 'Boards',
    retrieval: 'Visual browse',
    understanding: 'Visual similarity, not content meaning',
    status: 'limited',
  },
  {
    name: 'Mem.ai',
    saveMethod: 'AI-assisted notes',
    organization: 'Auto-organized',
    retrieval: 'AI search',
    understanding: 'Text only',
    status: 'limited',
  },
  {
    name: 'Fabric',
    saveMethod: 'Save + AI organize',
    organization: 'AI collections',
    retrieval: 'AI retrieval',
    understanding: 'Partial — web pages, not deep video',
    status: 'partial',
  },
];

const swotData = {
  strengths: [
    'No competitor does deep video content analysis',
    'CS background enables building the classification pipeline',
    'Designer audience well-understood from primary research',
  ],
  weaknesses: [
    'Solo builder — limited bandwidth',
    'LLM classification dependent on API quotas (Gemini free tier: 20 req/day)',
    'No existing user base — cold start problem',
  ],
  opportunities: [
    'Designers increasingly learn from video, not text',
    'AI/LLM capabilities improving rapidly — classification accuracy will grow',
    'No incumbent to displace — greenfield category',
  ],
  threats: [
    'Large incumbents (Notion, Raindrop) could add video understanding',
    'Privacy concerns around processing saved content',
    'Adoption friction — requires changing existing save habits',
  ],
};

export function CaseStudySecondaryResearch() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('competitive-matrix');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="case-study-secondary-research"
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
            SECONDARY RESEARCH: EXISTING SOLUTIONS DON&apos;T SOLVE IT
          </div>

          <h2
            id="case-study-secondary-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-4 tracking-tight"
          >
            Testing Every Tool That Exists
          </h2>

          <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] max-w-[880px] mb-10">
            Conducted hands-on testing of 12 existing tools that designers use for saving and organizing content. Each tool was evaluated against four criteria: how content is saved, how it&apos;s organized, how it&apos;s retrieved, and whether it understands what&apos;s inside the content (not just metadata). Spent 2-3 hours with each tool, saving real videos and attempting retrieval tasks.
          </p>

          {/* Competitive Matrix Table */}
          <div className="mb-10 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[var(--surface-elevated)] border-b border-[var(--border)]">
                    <th className="py-3 px-4 font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                      Tool Name
                    </th>
                    <th className="py-3 px-4 font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                      Save Method
                    </th>
                    <th className="py-3 px-4 font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                      Organization
                    </th>
                    <th className="py-3 px-4 font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                      Retrieval
                    </th>
                    <th className="py-3 px-4 font-accent text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-medium">
                      Content Understanding
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] text-[13px] font-light text-[var(--text-primary)]">
                  {competitorTools.map((tool, idx) => (
                    <motion.tr
                      key={tool.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className="hover:bg-[var(--surface-elevated)]/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-primary)]">
                        {tool.saveMethod}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-primary)]">
                        {tool.organization}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-primary)]">
                        {tool.retrieval}
                      </td>
                      <td className="py-3 px-4 font-medium">
                        {tool.status === 'none' && (
                          <span className="text-red-400/80 font-normal">
                            {tool.understanding}
                          </span>
                        )}
                        {tool.status === 'partial' && (
                          <span className="text-[var(--accent)]/90 font-normal">
                            {tool.understanding}
                          </span>
                        )}
                        {tool.status === 'limited' && (
                          <span className="text-[var(--text-secondary)] font-normal">
                            {tool.understanding}
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gap Analysis & Competitive Matrix Research Artifact Row */}
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start mb-16">
            {/* Left: Gap Analysis Insight Box */}
            <div className="w-full xl:w-[42%]">
              <div className="bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)] rounded-[12px] p-6 shadow-sm mb-6">
                <div className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold mb-2">
                  GAP ANALYSIS
                </div>
                <p className="font-medium text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-relaxed">
                  No existing tool understands what&apos;s inside a video — the actual concepts taught, techniques demonstrated, or skills practiced. They all organize by surface metadata (title, URL, manual tags). The retrieval problem isn&apos;t a feature gap — it&apos;s an approach gap. Retrieval needs content understanding, not just content storage.
                </p>
              </div>

              <div className="p-4 rounded-[12px] bg-[var(--surface)] border border-[var(--border)] text-[13px] text-[var(--text-secondary)]">
                <span className="font-accent text-[10px] uppercase text-[var(--accent)] tracking-wider font-semibold block mb-1">
                  RESEARCH TAKEAWAY
                </span>
                Reyo bridges the gap between passive bookmark capture and active, context-aware recall by indexing sub-minute concept chunks.
              </div>
            </div>

            {/* Right: Competitive Analysis Artifact Card */}
            <div className="w-full xl:w-[58%]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider">
                  RESEARCH ARTIFACT · COMPETITIVE ANALYSIS MATRIX
                </span>
                <span className="text-[11px] text-[var(--text-secondary)]">Click to inspect / unlock</span>
              </div>
              <CompetitiveMatrixDoc
                compact={false}
                onExpand={() => openDoc('competitive-matrix')}
              />
            </div>
          </div>

          {/* SWOT SECTION */}
          <div className="pt-8 border-t border-[var(--border)]">
            <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-6 tracking-tight">
              SWOT Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Strengths */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
                  Strengths
                </span>
                <ul className="flex flex-col gap-2.5 text-[14px] font-light text-[var(--text-primary)] leading-snug">
                  {swotData.strengths.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold block mb-3">
                  Weaknesses
                </span>
                <ul className="flex flex-col gap-2.5 text-[14px] font-light text-[var(--text-primary)] leading-snug">
                  {swotData.weaknesses.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--text-secondary)] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
                  Opportunities
                </span>
                <ul className="flex flex-col gap-2.5 text-[14px] font-light text-[var(--text-primary)] leading-snug">
                  {swotData.opportunities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold block mb-3">
                  Threats
                </span>
                <ul className="flex flex-col gap-2.5 text-[14px] font-light text-[var(--text-primary)] leading-snug">
                  {swotData.threats.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--text-secondary)] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Password-protected artifact modal */}
      <ResearchArtifactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocId={selectedDocId}
      />
    </section>
  );
}
