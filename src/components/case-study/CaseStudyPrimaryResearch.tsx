import { useState } from 'react';
import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { InterviewAnalysisDoc } from './artifacts/InterviewAnalysisDoc';
import { ScaleHouseFeedbackDoc } from './artifacts/ScaleHouseFeedbackDoc';
import { ResearchArtifactModal } from './artifacts/ResearchArtifactModal';

const keyQuestions = [
  'How do you currently save videos or tutorials you learn from?',
  'When you remember learning something specific, how do you find it again?',
  'How often do you give up searching and re-learn from scratch?',
  'What tools have you tried for organizing saved content?',
];

const surveyStats = [
  {
    target: 85,
    suffix: '%',
    isAccent: true,
    finding: 'save videos or tutorials at least weekly',
  },
  {
    target: 72,
    suffix: '%',
    isAccent: false,
    finding: 'have failed to find a previously saved resource when needed',
  },
  {
    target: 68,
    suffix: '%',
    isAccent: false,
    finding: 'resort to re-searching or re-watching instead of finding their save',
  },
  {
    target: 90,
    suffix: '%',
    isAccent: false,
    finding: 'would use a tool that helps retrieve the exact moment from a saved video',
  },
  {
    target: 44,
    suffix: '%',
    isAccent: false,
    finding: 'use 3 or more different tools to save learning content',
  },
  {
    target: 76,
    suffix: '%',
    isAccent: false,
    finding: 'said their current save system is disorganized or nonexistent',
  },
];

export function CaseStudyPrimaryResearch() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('interview-notes');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="case-study-primary-research"
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
            PRIMARY RESEARCH: THE PROBLEM IS REAL
          </div>

          <h2
            id="case-study-primary-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            Direct Evidence from Designers
          </h2>

          {/* SUB-SECTION A: User Interviews */}
          <div className="mb-16">
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start">
              {/* Left Column (45%) */}
              <div className="w-full xl:w-[42%] flex flex-col">
                <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                  Talking to Designers
                </h3>
                <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] mb-6">
                  Conducted one-on-one interviews with 10 designers across different experience levels and specializations — UI/UX designers, visual designers, and product designers working at startups and mid-size companies. Interviews were semi-structured, lasting 20-30 minutes each, focusing on three areas: how they currently save learning resources, how often they try to retrieve something specific, and what happens when retrieval fails.
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
                        className="pl-3 border-l-2 border-l-[var(--accent)] py-0.5 text-[14px] sm:text-[15px] font-normal text-[var(--text-primary)] leading-snug"
                      >
                        “{question}”
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (58%): Interview Analysis Research Artifact */}
              <div className="w-full xl:w-[58%]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider">
                    RESEARCH ARTIFACT · INTERVIEW ANALYSIS
                  </span>
                  <span className="text-[11px] text-[var(--text-secondary)]">Click to inspect / unlock</span>
                </div>
                <InterviewAnalysisDoc
                  compact={false}
                  onExpand={() => openDoc('interview-notes')}
                />
              </div>
            </div>
          </div>

          {/* SUB-SECTION B: Survey */}
          <div className="mb-16 pt-8 border-t border-[var(--border)]">
            <div className="max-w-[800px] mb-8">
              <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                Validating at Scale
              </h3>
              <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75]">
                Following the interviews, designed and circulated a structured survey via Google Forms to validate whether the patterns observed in interviews held across a broader designer population. Received 30+ responses.
              </p>
            </div>

            {/* Survey Findings Data Grid (2x3 on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {surveyStats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
                  className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors cursor-pointer"
                  onClick={() => openDoc('survey-responses')}
                >
                  <div className="text-[32px] font-light leading-none mb-3">
                    <StatCounter
                      numericTarget={item.target}
                      suffix={item.suffix}
                      isAccent={item.isAccent}
                    />
                  </div>
                  <p className="text-[13px] text-[var(--text-primary)] font-light leading-snug">
                    {item.finding}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Highlighted Insight Box */}
            <div className="bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)] rounded-[12px] p-6 shadow-sm">
              <div className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold mb-2">
                INSIGHT
              </div>
              <p className="font-medium text-[16px] text-[var(--text-primary)] leading-relaxed">
                The problem isn&apos;t saving — designers save constantly. The problem is retrieval. Every designer interviewed had a moment of “I know I learned this somewhere” followed by failure to locate it.
              </p>
            </div>
          </div>

          {/* SUB-SECTION C: Community Validation */}
          <div className="pt-8 border-t border-[var(--border)]">
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start">
              <div className="w-full xl:w-[45%]">
                <h3 className="font-semibold text-[20px] text-[var(--text-primary)] mb-3 tracking-tight">
                  Cohort & Community Validation
                </h3>
                <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] mb-4">
                  Presented the problem framing and early research findings to the ScaleHouse Season 1 cohort — a 30-day designer accelerator program. The concept was evaluated and critiqued by the community lead, scoring <strong className="font-semibold text-[var(--text-primary)]">7/10</strong> with explicit validation on the market wedge, while offering key strategic guidance to prioritize YouTube first and streamline the one-pager structure.
                </p>
                <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[12px] p-4 text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-semibold block mb-1">
                    KEY MENTOR TAKEAWAY
                  </span>
                  &quot;Pick ONE source to start (probably YouTube — the timestamp jump is the killer feature). Build that flawlessly, expand later.&quot;
                </div>
              </div>

              <div className="w-full xl:w-[55%]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider">
                    RESEARCH ARTIFACT · SCALEHOUSE COHORT VALIDATION
                  </span>
                  <span className="text-[11px] text-[var(--text-secondary)]">Click to inspect / unlock</span>
                </div>
                <ScaleHouseFeedbackDoc
                  compact={false}
                  onExpand={() => openDoc('scalehouse-feedback')}
                />
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
