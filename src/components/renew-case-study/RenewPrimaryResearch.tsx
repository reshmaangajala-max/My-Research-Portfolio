import { useState } from 'react';
import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { SurveyInfoAnalysisDoc } from './artifacts/SurveyInfoAnalysisDoc';
import { RenewInterviewGuideDoc } from './artifacts/RenewInterviewGuideDoc';
import { RenewResearchArtifactModal } from './artifacts/RenewResearchArtifactModal';

const keyQuestions = [
  'What bills, renewals, or deadlines have you missed in the past year?',
  'How do you currently keep track of recurring obligations?',
  'Would you let an AI scan your emails or documents to detect upcoming deadlines?',
  'What would make you trust or distrust an app with your personal documents?',
  'How do you feel about notifications — when do they help vs. annoy you?',
];

const surveyStats = [
  {
    target: 78,
    suffix: '%',
    isAccent: true,
    finding: 'have missed at least one important deadline (renewal, bill, subscription) in the past 6 months',
  },
  {
    target: 65,
    suffix: '%',
    isAccent: false,
    finding: 'rely on memory alone for tracking recurring obligations',
  },
  {
    target: 82,
    suffix: '%',
    isAccent: false,
    finding: 'expressed interest in an AI that auto-detects deadlines from their documents and emails',
  },
  {
    target: 58,
    suffix: '%',
    isAccent: false,
    finding: 'said privacy is their top concern with any app that accesses personal documents',
  },
  {
    target: 71,
    suffix: '%',
    isAccent: false,
    finding: 'use no dedicated tool for life admin — just mental notes, calendar entries, or nothing',
  },
  {
    target: 43,
    suffix: '%',
    isAccent: false,
    finding: 'have paid a late fee or penalty due to a missed renewal or bill',
  },
];

export function RenewPrimaryResearch() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('renew-survey-analysis');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="renew-primary-research"
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
            PRIMARY RESEARCH: UNDERSTANDING LIFE ADMIN CHAOS
          </div>

          <h2
            id="renew-primary-research-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-14 tracking-tight"
          >
            Direct Insights into Life Admin
          </h2>

          {/* Sub-section A: Internal Team Interviews */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              {/* Left column (50%) */}
              <div className="w-full lg:w-[48%] flex flex-col">
                <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                  Talking to the Team
                </h3>
                <p className="font-light text-[16px] text-[var(--text-primary)] leading-[1.8] mb-6">
                  Conducted one-on-one interviews with 10 team members at Hanyaa Auto Technologies. These were working professionals aged 22-35 across different roles — developers, designers, operations, and management. Interviews were semi-structured, focusing on: what life admin tasks they regularly forget, how they currently track obligations and deadlines, their comfort level with AI accessing personal documents, and what would make them trust a digital assistant with sensitive information like insurance or financial documents.
                </p>

                {/* Key Questions Asked Box */}
                <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm">
                  <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-medium block mb-4">
                    Key Questions Asked
                  </span>
                  <div className="flex flex-col gap-3">
                    {keyQuestions.map((question) => (
                      <div
                        key={question}
                        className="pl-3.5 border-l-2 border-[var(--accent)] text-[14px] text-[var(--text-primary)] font-light leading-relaxed"
                      >
                        {question}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Interactive Artifact */}
              <div className="w-full lg:w-[52%] flex flex-col justify-center">
                <RenewInterviewGuideDoc
                  onExpand={() => openDoc('renew-interview-guide')}
                />
              </div>
            </div>
          </div>

          {/* Sub-section B: External Survey Analysis */}
          <div className="pt-8 border-t border-[var(--border)]">
            <div className="mb-8">
              <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                Validating Beyond the Office · Survey Analysis (107 Respondents)
              </h3>
              <p className="font-light text-[16px] text-[var(--text-primary)] leading-[1.8] max-w-[840px] mb-8">
                Designed a structured quantitative study covering reminder habits, frustration points, AI auto-detection interest, privacy comfort, and notification preferences. Received 107 verified responses from working professionals validating the core opportunity.
              </p>

              {/* Rich Interactive Artifact for Survey Info & Analysis */}
              <div className="mb-10">
                <SurveyInfoAnalysisDoc
                  onExpand={() => openDoc('renew-survey-analysis')}
                />
              </div>
            </div>

            {/* Survey Findings Data Grid: 2 cols x 3 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {surveyStats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: 'easeOut',
                  }}
                  className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="text-[32px] font-accent leading-none mb-3">
                    <StatCounter
                      numericTarget={item.target}
                      suffix={item.suffix}
                      isAccent={item.isAccent}
                    />
                  </div>
                  <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
                    {item.finding}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Insight Box */}
            <div className="bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)] rounded-[10px] p-6 shadow-sm">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
                INSIGHT
              </span>
              <p className="text-[15px] font-light text-[var(--text-primary)] leading-[1.75]">
                The problem isn&apos;t laziness or lack of tools — it&apos;s that existing reminder systems require the user to do the setup work. People who are already overwhelmed by life admin don&apos;t have the bandwidth to manually create and maintain reminders for every obligation. The system needs to detect obligations proactively, not wait to be told about them.
              </p>
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
