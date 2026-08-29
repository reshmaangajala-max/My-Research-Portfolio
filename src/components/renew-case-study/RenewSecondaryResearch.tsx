import { useState } from 'react';
import { motion } from 'motion/react';
import { LifeAssistantCompetitiveMatrixDoc } from './artifacts/LifeAssistantCompetitiveMatrixDoc';
import { RenewResearchArtifactModal } from './artifacts/RenewResearchArtifactModal';

interface Competitor {
  name: string;
  capture: string;
  types: string;
  docUnderstanding: string;
  docType: 'none' | 'partial' | 'ocr' | 'integration';
  privacy: string;
  limitation: string;
}

const competitors: Competitor[] = [
  {
    name: 'Google Reminders',
    capture: 'Manual create',
    types: 'General tasks',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'Google ecosystem',
    limitation: 'User must create each reminder manually',
  },
  {
    name: 'Apple Reminders',
    capture: 'Manual + Siri',
    types: 'General tasks',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'On-device',
    limitation: 'No document scanning, no auto-detection',
  },
  {
    name: 'Todoist',
    capture: 'Manual create',
    types: 'Tasks, projects',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'Cloud-based',
    limitation: 'Productivity tool, not life admin focused',
  },
  {
    name: 'Any.do',
    capture: 'Manual + calendar sync',
    types: 'Tasks, calendar events',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'Cloud-based',
    limitation: 'No obligation detection, just task management',
  },
  {
    name: 'Microsoft To Do',
    capture: 'Manual + Outlook sync',
    types: 'Tasks, emails (flagged)',
    docUnderstanding: 'Email flags only',
    docType: 'integration',
    privacy: 'Microsoft ecosystem',
    limitation: 'Only flags emails user marks, no auto-detection',
  },
  {
    name: 'TickTick',
    capture: 'Manual create',
    types: 'Tasks, habits',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'Cloud-based',
    limitation: 'Feature-rich but fully manual setup',
  },
  {
    name: 'Reminders by Apple',
    capture: 'Manual + location-based',
    types: 'General',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'On-device',
    limitation: 'No intelligence, no document awareness',
  },
  {
    name: 'Due',
    capture: 'Manual, persistent alerts',
    types: 'Time-based only',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'On-device',
    limitation: 'Just aggressive re-reminding, no smart detection',
  },
  {
    name: 'BZ Reminder',
    capture: 'Manual create',
    types: 'Basic reminders',
    docUnderstanding: 'None',
    docType: 'none',
    privacy: 'Local storage',
    limitation: 'Minimal features, no AI',
  },
  {
    name: 'Sortifyd',
    capture: 'Document organization',
    types: 'Insurance, medical, financial',
    docUnderstanding: 'Partial — categorizes uploaded docs',
    docType: 'partial',
    privacy: 'Cloud',
    limitation: "Organizes documents but doesn't extract deadlines or create reminders",
  },
  {
    name: 'Doxie',
    capture: 'Document scanning',
    types: 'Scanned documents',
    docUnderstanding: 'OCR text extraction',
    docType: 'ocr',
    privacy: 'Local/cloud',
    limitation: "Scans but doesn't understand what's inside — no date detection",
  },
  {
    name: 'Cleo (AI)',
    capture: 'Chat-based',
    types: 'Financial only',
    docUnderstanding: 'Bank account integration',
    docType: 'integration',
    privacy: 'Cloud, financial data',
    limitation: "Finance-only, doesn't cover insurance, medical, subscriptions",
  },
  {
    name: 'Truebill / Rocket Money',
    capture: 'Auto-detect subscriptions',
    types: 'Subscriptions only',
    docUnderstanding: 'Bank transaction analysis',
    docType: 'integration',
    privacy: 'Cloud, financial data',
    limitation: 'Only catches subscriptions, misses insurance, vehicle, medical',
  },
  {
    name: 'Google Assistant',
    capture: 'Voice command',
    types: 'General tasks, reminders',
    docUnderstanding: 'Partial — email/calendar awareness',
    docType: 'partial',
    privacy: 'Google ecosystem',
    limitation: "Reactive — waits for user to ask, doesn't proactively detect",
  },
  {
    name: 'Siri / Apple Intelligence',
    capture: 'Voice command',
    types: 'General tasks',
    docUnderstanding: 'Partial — on-device processing',
    docType: 'partial',
    privacy: 'On-device',
    limitation: 'Limited proactive suggestions, no document scanning for deadlines',
  },
];

const swotData = {
  strengths: [
    'No competitor combines auto-detection + all obligation categories + proactive action',
    'Privacy-first approach differentiates from cloud-heavy competitors',
    'AI/LLM capabilities now make document understanding feasible at consumer scale',
  ],
  weaknesses: [
    'Solo designer — no dedicated development team during research phase',
    'Building trust for an app that accesses personal documents is a high bar',
    'Android-first limits initial reach',
  ],
  opportunities: [
    'Life admin is a universal pain point across all demographics',
    'Indian market specifically: insurance renewals, vehicle documents, government deadlines are highly manual',
    'Growing comfort with AI assistants (Google Assistant, Siri) lowers adoption friction',
  ],
  threats: [
    'Google or Apple could add proactive life admin features to their existing assistants',
    'Privacy regulation changes could restrict document scanning capabilities',
    'User trust barrier — people may not want to share insurance/financial documents with a new app',
  ],
};

export function RenewSecondaryResearch() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('renew-comp-matrix');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  const getDocBadge = (comp: Competitor) => {
    switch (comp.docType) {
      case 'none':
        return (
          <span className="text-[12px] text-red-400/80 font-medium font-accent">
            None
          </span>
        );
      case 'partial':
        return (
          <span className="text-[12px] text-[var(--accent)]/90 font-medium font-accent">
            {comp.docUnderstanding}
          </span>
        );
      case 'ocr':
      case 'integration':
      default:
        return (
          <span className="text-[12px] text-[var(--text-secondary)] font-medium font-accent">
            {comp.docUnderstanding}
          </span>
        );
    }
  };

  return (
    <section
      id="renew-secondary-research"
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
            SECONDARY RESEARCH: EVERY APP FALLS SHORT
          </div>

          <h2
            id="renew-secondary-research-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-6 tracking-tight"
          >
            Testing Every Reminder and Personal Assistant App
          </h2>

          <p className="font-light text-[16px] text-[var(--text-primary)] leading-[1.8] max-w-[900px] mb-12">
            Downloaded and tested 15+ existing apps across the reminder, to-do, and personal assistant categories. Each app was evaluated over 2-3 days of real use, measuring: how obligations are captured (manual vs automatic), what types of obligations it covers, how it handles recurring tasks, whether it understands document content (PDFs, emails), and its privacy approach. Tested both direct competitors (reminder-specific apps) and indirect competitors (general productivity and personal assistant apps).
          </p>

          {/* Responsive Competitive Matrix */}
          <div className="mb-14">
            <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-4 tracking-tight">
              Competitive Matrix (15 Apps Evaluated)
            </h3>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto rounded-[12px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-accent uppercase text-[10px] tracking-[1.5px]">
                    <th className="py-3.5 px-4 font-semibold">App Name</th>
                    <th className="py-3.5 px-4 font-semibold">Capture Method</th>
                    <th className="py-3.5 px-4 font-semibold">Obligation Types</th>
                    <th className="py-3.5 px-4 font-semibold">Document Understanding</th>
                    <th className="py-3.5 px-4 font-semibold">Privacy Approach</th>
                    <th className="py-3.5 px-4 font-semibold">Limitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {competitors.map((comp, idx) => (
                    <motion.tr
                      key={comp.name}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.25, delay: idx * 0.03 }}
                      className="hover:bg-[var(--surface-elevated)]/50 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-medium text-[var(--text-primary)] whitespace-nowrap">
                        {comp.name}
                      </td>
                      <td className="py-3.5 px-4 text-[var(--text-secondary)] font-light">
                        {comp.capture}
                      </td>
                      <td className="py-3.5 px-4 text-[var(--text-secondary)] font-light">
                        {comp.types}
                      </td>
                      <td className="py-3.5 px-4">{getDocBadge(comp)}</td>
                      <td className="py-3.5 px-4 text-[var(--text-secondary)] font-light">
                        {comp.privacy}
                      </td>
                      <td className="py-3.5 px-4 text-[var(--text-primary)] font-light text-[12.5px] leading-snug">
                        {comp.limitation}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / Tablet Cards View */}
            <div className="lg:hidden flex flex-col gap-3">
              {competitors.map((comp, idx) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="p-4 rounded-[12px] bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[15px] text-[var(--text-primary)]">
                      {comp.name}
                    </h4>
                    {getDocBadge(comp)}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[12px] text-[var(--text-secondary)] font-light pt-1 border-t border-[var(--border)]">
                    <div>
                      <span className="font-accent uppercase tracking-wider text-[9px] text-[var(--text-secondary)] block">
                        Capture
                      </span>
                      {comp.capture}
                    </div>
                    <div>
                      <span className="font-accent uppercase tracking-wider text-[9px] text-[var(--text-secondary)] block">
                        Types
                      </span>
                      {comp.types}
                    </div>
                  </div>
                  <div className="text-[13px] text-[var(--text-primary)] font-light pt-1 bg-[var(--surface-elevated)]/50 p-2.5 rounded-[8px]">
                    <span className="font-accent uppercase tracking-wider text-[9px] text-[var(--accent)] block mb-0.5">
                      Limitation
                    </span>
                    {comp.limitation}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Life Assistant Landscape Interactive Artifact & Gap Analysis */}
          <div className="mb-20 space-y-8">
            <div>
              <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                AI Life Assistant Landscape Benchmark
              </h3>
              <p className="font-light text-[16px] text-[var(--text-primary)] leading-[1.8] max-w-[840px] mb-6">
                Comparative analysis of 6 market solutions across AI auto-detection, multi-category coverage, proactive intelligence, document understanding, and user data privacy.
              </p>

              {/* Full Artifact Component */}
              <LifeAssistantCompetitiveMatrixDoc
                onExpand={() => openDoc('renew-comp-matrix')}
              />
            </div>

            {/* Gap Box */}
            <div className="w-full bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)] rounded-[12px] p-6 shadow-sm flex flex-col justify-center">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
                SYNTHESIZED GAP ANALYSIS
              </span>
              <p className="text-[15px] font-light text-[var(--text-primary)] leading-[1.8]">
                The market splits into two categories that never meet. Reminder apps (Todoist, Any.do, Google Reminders) are powerful task managers but require 100% manual input — the user must know what to remind themselves about. Document/finance apps (Sortifyd, Truebill, Cleo) can detect some obligations automatically but only cover one category (subscriptions OR finance OR documents). No single product combines: (1) auto-detection of obligations from multiple sources (email, documents, messages), (2) across all life admin categories (insurance, vehicle, medical, bills, subscriptions), (3) with proactive reminders that don&apos;t require manual setup.
              </p>
            </div>
          </div>

          {/* SWOT Analysis 2x2 Grid */}
          <div>
            <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-6 tracking-tight">
              SWOT Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Strengths */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                <span className="font-accent text-[12px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
                  Strengths
                </span>
                <ul className="flex flex-col gap-2.5">
                  {swotData.strengths.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] text-[var(--text-primary)] font-light leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1 text-[11px]">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                <span className="font-accent text-[12px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold block mb-3">
                  Weaknesses
                </span>
                <ul className="flex flex-col gap-2.5">
                  {swotData.weaknesses.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] text-[var(--text-primary)] font-light leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--text-secondary)] mt-1 text-[11px]">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                <span className="font-accent text-[12px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
                  Opportunities
                </span>
                <ul className="flex flex-col gap-2.5">
                  {swotData.opportunities.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] text-[var(--text-primary)] font-light leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1 text-[11px]">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                <span className="font-accent text-[12px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold block mb-3">
                  Threats
                </span>
                <ul className="flex flex-col gap-2.5">
                  {swotData.threats.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] text-[var(--text-primary)] font-light leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--text-secondary)] mt-1 text-[11px]">▪</span>
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
      <RenewResearchArtifactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocId={selectedDocId}
      />
    </section>
  );
}
