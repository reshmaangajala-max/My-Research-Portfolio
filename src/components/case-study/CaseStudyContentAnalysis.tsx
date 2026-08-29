import { useState } from 'react';
import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { ClassificationPipelineDoc } from './artifacts/ClassificationPipelineDoc';
import { ResearchArtifactModal } from './artifacts/ResearchArtifactModal';

const taxonomyCards = [
  {
    level: 'TOPIC',
    question: 'What general area does this cover?',
    example: 'Layout Systems',
  },
  {
    level: 'OBJECTIVE',
    question: 'What will you learn to do?',
    example: 'Build responsive component structures',
  },
  {
    level: 'CONCEPT',
    question: 'What specific ideas or techniques are taught?',
    example: 'Nested auto-layout, hug vs fill constraints',
  },
  {
    level: 'SKILL',
    question: 'What practical ability does this build?',
    example: 'Responsive card design in Figma',
  },
];

export function CaseStudyContentAnalysis() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('classification-pipeline');

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <section
      id="case-study-content-analysis"
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
            CONTENT ANALYSIS: STRUCTURE, NOT JUST STORAGE
          </div>

          <h2
            id="case-study-content-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-4 tracking-tight"
          >
            Why Flat Tagging Fails
          </h2>

          <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] max-w-[880px] mb-10">
            To understand what a useful classification system would need to look like, analyzed 170+ real design tutorial videos from my own saved library. The goal was to answer: what information would I need attached to a saved video to find the right one when I need it?
          </p>

          {/* BEFORE / AFTER COMPARISON */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* Left Box: WITHOUT STRUCTURE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-[11px] uppercase tracking-[2px] text-red-400/80 font-medium">
                    WITHOUT STRUCTURE
                  </span>
                  <span className="font-accent text-[10px] text-[var(--text-secondary)]">
                    Flat Bookmark List
                  </span>
                </div>

                <div className="bg-[var(--surface-elevated)]/60 rounded-[8px] p-4 font-mono text-[12px] text-[var(--text-secondary)] flex flex-col gap-2 mb-4 border border-[var(--border)]/60">
                  <div className="flex items-center gap-2">
                    <span>📎</span> <span>Figma Auto Layout Tutorial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📎</span> <span>Design Systems Tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📎</span> <span>How to Design Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📎</span> <span>Advanced Prototyping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📎</span> <span>Typography Basics</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)] opacity-50 pl-6">
                    ... 165 more saves
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border)]">
                <p className="italic text-[13px] text-[var(--text-secondary)] mb-1">
                  Searching for: “that trick with nested auto-layout for responsive cards”
                </p>
                <p className="text-[12px] text-red-400/80 font-medium">
                  Result: nothing found — title doesn&apos;t contain those words
                </p>
              </div>
            </motion.div>

            {/* Right Box: WITH TAXONOMY FRAMEWORK */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[var(--bg)] border border-[var(--accent)]/40 rounded-[12px] p-6 shadow-[var(--card-glow-rest)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] aurora-gradient" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                    WITH TAXONOMY FRAMEWORK
                  </span>
                  <span className="font-accent text-[10px] text-[var(--accent)]">
                    Deep Content Extraction
                  </span>
                </div>

                <div className="bg-[var(--surface-elevated)] rounded-[8px] p-4 text-[13px] flex flex-col gap-2.5 mb-4 border border-[var(--border)]">
                  <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)] pb-1 border-b border-[var(--border)]">
                    <span>📎</span> <span>Figma Auto Layout Tutorial</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-baseline">
                    <span className="font-accent text-[11px] text-[var(--accent)] uppercase tracking-wider">
                      Topic:
                    </span>
                    <span className="text-[var(--text-primary)] text-[13px]">
                      Layout Systems
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-baseline">
                    <span className="font-accent text-[11px] text-[var(--accent)] uppercase tracking-wider">
                      Objective:
                    </span>
                    <span className="text-[var(--text-primary)] text-[13px]">
                      Build responsive component structures
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-baseline">
                    <span className="font-accent text-[11px] text-[var(--accent)] uppercase tracking-wider">
                      Concept:
                    </span>
                    <span className="text-[var(--text-primary)] text-[13px]">
                      Nested auto-layout, hug vs fill, min/max constraints
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-baseline">
                    <span className="font-accent text-[11px] text-[var(--accent)] uppercase tracking-wider">
                      Skill:
                    </span>
                    <span className="text-[var(--text-primary)] text-[13px]">
                      Responsive card design in Figma
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border)]">
                <p className="italic text-[13px] text-[var(--text-secondary)] mb-1">
                  Searching for: “responsive card layout technique”
                </p>
                <p className="text-[12px] text-[var(--accent)] font-medium">
                  Result: matched on Concept + Skill → retrieved with timestamp 04:18
                </p>
              </div>
            </motion.div>
          </div>

          {/* THE TAXONOMY FRAMEWORK: 4 HORIZONTAL CARDS */}
          <div className="mb-16 pt-8 border-t border-[var(--border)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[20px] text-[var(--text-primary)] tracking-tight">
                The Classification System
              </h3>
              <button
                onClick={() => openDoc('taxonomy-framework')}
                className="text-[12px] font-mono text-[var(--accent)] hover:underline cursor-pointer"
              >
                Inspect Taxonomy Diagram →
              </button>
            </div>
            <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] max-w-[880px] mb-8">
              Designed a four-level classification hierarchy that moves from broad to specific. Each level answers a different retrieval question:
            </p>

            {/* 4 Cards connected with arrows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {taxonomyCards.map((card, idx) => (
                <div key={card.level} className="relative flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`h-full bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm flex flex-col justify-between relative cursor-pointer hover:border-[var(--accent)]/40 transition-colors ${
                      idx === 0 ? 'border-t-[3px] border-t-[var(--accent)]' : ''
                    }`}
                    onClick={() => openDoc('taxonomy-framework')}
                  >
                    <div>
                      <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
                        {card.level}
                      </span>
                      <p className="text-[13px] font-medium text-[var(--text-primary)] leading-snug mb-3">
                        “{card.question}”
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[var(--border)]/60">
                      <span className="font-accent text-[10px] uppercase tracking-[1px] text-[var(--text-secondary)] block mb-1">
                        Example:
                      </span>
                      <span className="text-[13px] font-light text-[var(--text-primary)]">
                        {card.example}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <p className="font-light text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[840px]">
              This hierarchy ensures that no matter how vaguely a designer remembers what they learned — whether it&apos;s the broad topic, a specific concept, or a technique name — the system can match it to the right saved content.
            </p>
          </div>

          {/* SCALE SECTION */}
          <div className="pt-8 border-t border-[var(--border)]">
            <h3 className="font-semibold text-[18px] text-[var(--text-primary)] mb-6 tracking-tight">
              Applying at Scale
            </h3>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Stat 1 */}
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <div className="text-[36px] sm:text-[44px] leading-none mb-2">
                  <StatCounter numericTarget={170} suffix="+" isAccent={true} />
                </div>
                <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px]">
                  VIDEOS IN LIBRARY
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <div className="text-[36px] sm:text-[44px] leading-none mb-1">
                  <StatCounter numericTarget={156} isAccent={false} />
                </div>
                <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] block mb-1">
                  TRANSCRIPTS PROCESSED
                </span>
                <span className="text-[12px] text-[var(--accent)] font-medium">
                  91% coverage
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm">
                <div className="text-[36px] sm:text-[44px] leading-none mb-1 font-accent font-light text-[var(--text-primary)]">
                  15
                </div>
                <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] block mb-1">
                  VIDEOS WITHOUT CAPTIONS
                </span>
                <span className="text-[12px] text-[var(--text-secondary)]">
                  identified for manual processing
                </span>
              </div>
            </div>

            {/* Pipeline description and Interactive Classification Pipeline Artifact */}
            <div className="space-y-6">
              <div className="max-w-[880px]">
                <p className="font-light text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-[1.75] mb-4">
                  Applied the classification framework using LLM-based tagging (Gemini API) to automatically classify each transcribed video across all four taxonomy levels. The pipeline processes YouTube transcripts (via yt-dlp captions, with Deepgram Nova-3 ASR as fallback for videos without captions), chunks them into ~45-second segments with timestamps, generates vector embeddings for semantic search, and runs per-video classification.
                </p>
              </div>

              <div className="w-full">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider">
                    TECHNICAL SPECIFICATION · PIPELINE & BOTTLENECK ANALYSIS
                  </span>
                  <span className="text-[11px] text-[var(--text-secondary)]">Click to inspect / unlock</span>
                </div>
                <ClassificationPipelineDoc
                  compact={false}
                  onExpand={() => openDoc('classification-pipeline')}
                />

                {/* Subtext Note for Interviewers */}
                <div className="mt-3 flex items-start gap-2.5 px-4 py-3 rounded-[10px] bg-[var(--surface-elevated)] border border-[var(--border)] text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  <span className="font-mono text-[11px] text-[var(--accent)] font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                    NOTE FOR INTERVIEWER:
                  </span>
                  <div>
                    This diagram illustrates the technical flow specifically for the <strong>YouTube video</strong> ingestion pipeline. For the complete, multi-source classification flow and end-to-end technical documentation across all input formats, please refer to the complete classification document below.
                  </div>
                </div>
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
