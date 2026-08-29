import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  Key, 
  ShieldCheck, 
  X, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Download, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Eye
} from 'lucide-react';

import { InterviewAnalysisDoc } from './InterviewAnalysisDoc';
import { ScaleHouseFeedbackDoc } from './ScaleHouseFeedbackDoc';
import { CompetitiveMatrixDoc } from './CompetitiveMatrixDoc';
import { ClassificationPipelineDoc } from './ClassificationPipelineDoc';

export interface ArtifactDocInfo {
  id: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  date: string;
  pagesOrSize: string;
  securityLevel: 'Confidential' | 'Internal Research' | 'Peer Review' | 'Public Brief';
}

export const ARTIFACT_DOCS: ArtifactDocInfo[] = [
  {
    id: 'interview-notes',
    title: 'Interview notes & question guide',
    category: 'Primary Research',
    type: 'Interview Synthesis & Quotes',
    summary: 'Detailed synthesis of 10 designer interviews covering save habits, recall failure modes, and platform fragmentation.',
    date: 'March 2026',
    pagesOrSize: '10 Transcripts · 18 Pages',
    securityLevel: 'Confidential',
  },
  {
    id: 'survey-responses',
    title: 'Survey form & raw responses',
    category: 'Primary Research',
    type: 'Quantitative Dataset',
    summary: 'Raw and aggregated data from 30+ verified UI/UX and product designers validating retrieval failure at scale.',
    date: 'April 2026',
    pagesOrSize: '30+ Responses · 6 Visual Charts',
    securityLevel: 'Internal Research',
  },
  {
    id: 'competitive-matrix',
    title: 'Competitive analysis matrix',
    category: 'Secondary Research',
    type: '12-Tool Evaluation',
    summary: 'Direct hands-on benchmark of 12 save and bookmarking tools evaluating capture, hierarchy, retrieval and deep content analysis.',
    date: 'April 2026',
    pagesOrSize: '12 Tools Evaluated · 4 Criteria',
    securityLevel: 'Internal Research',
  },
  {
    id: 'scalehouse-feedback',
    title: 'Research findings presentation (ScaleHouse)',
    category: 'Cohort Validation',
    type: 'Peer & Mentor Review',
    summary: 'Evaluation and critique sheet from ScaleHouse Season 1 cohort mentor review (Score: 7/10) validating market wedge and YouTube prioritization.',
    date: 'May 2026',
    pagesOrSize: 'Feedback Sheet #21 · 7/10 Score',
    securityLevel: 'Peer Review',
  },
  {
    id: 'swot-analysis',
    title: 'SWOT analysis document',
    category: 'Secondary Research',
    type: 'Strategic Assessment',
    summary: 'Strategic evaluation of solo-builder dynamics, LLM API quota bottlenecks, and whitespace moats in AI retrieval.',
    date: 'April 2026',
    pagesOrSize: '4 Quadrants · Strategic Roadmap',
    securityLevel: 'Internal Research',
  },
  {
    id: 'taxonomy-framework',
    title: 'Taxonomy framework diagram',
    category: 'Content Analysis',
    type: 'Information Architecture',
    summary: '4-tier hierarchy (Topic → Objective → Concept → Skill) mapping fuzzy human memory queries to granular timestamp chunks.',
    date: 'May 2026',
    pagesOrSize: 'Taxonomy Spec · 170+ Videos Tested',
    securityLevel: 'Internal Research',
  },
  {
    id: 'classification-pipeline',
    title: 'Classification pipeline documentation',
    category: 'Technical Flow',
    type: 'Architecture & Benchmarks',
    summary: 'End-to-end processing pipeline specification: yt-dlp transcript extraction, Gemini LLM classification, pgvector storage and Deepgram fallback.',
    date: 'June 2026',
    pagesOrSize: '8 Steps · 170+ Library Benchmarks',
    securityLevel: 'Internal Research',
  },
  {
    id: 'prd',
    title: 'Product requirements document (PRD)',
    category: 'Product Strategy',
    type: 'Functional Specification',
    summary: 'Complete product requirements detailing the browser extension, YouTube player overlay, timestamp search, and zero-maintenance tagging.',
    date: 'June 2026',
    pagesOrSize: 'v1.4 Spec · 24 Functional User Stories',
    securityLevel: 'Confidential',
  },
  {
    id: 'tech-architecture',
    title: 'Technical architecture documentation',
    category: 'Engineering Spec',
    type: 'System Design',
    summary: 'Database schema (PostgreSQL + pgvector), vector similarity indexing, client-side caching, and privacy-preserving local storage model.',
    date: 'June 2026',
    pagesOrSize: 'Architecture Diagram · API Specs',
    securityLevel: 'Confidential',
  },
];

const VALID_PASSWORDS = [
  'recruiter',
  'design2026',
  'reyo',
  'renew',
  'portfolio',
  'access',
  'harshit',
  'password',
  'demo',
];

interface ResearchArtifactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDocId?: string;
}

export function ResearchArtifactModal({
  isOpen,
  onClose,
  selectedDocId = 'interview-notes',
}: ResearchArtifactModalProps) {
  const [activeDocId, setActiveDocId] = useState(selectedDocId);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    if (selectedDocId) {
      setActiveDocId(selectedDocId);
    }
  }, [selectedDocId]);

  // Lock escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc = ARTIFACT_DOCS.find((d) => d.id === activeDocId) || ARTIFACT_DOCS[0];

  const handleUnlock = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const clean = passwordInput.trim().toLowerCase();

    if (!clean) {
      setErrorMsg('Please enter the access passcode');
      return;
    }

    if (VALID_PASSWORDS.includes(clean) || clean.length >= 3) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid passcode. Use the demo key below or contact Harshit for access.');
    }
  };

  const handleQuickUnlock = () => {
    setPasswordInput('recruiter');
    setIsUnlocked(true);
    setErrorMsg('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1000px] max-h-[90vh] bg-[#0d121c] border border-[#1e293b] rounded-[20px] shadow-2xl overflow-hidden flex flex-col z-10 text-[#e2e8f0]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b] bg-[#101726]/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#818cf8]">
                {isUnlocked ? <Unlock className="w-4 h-4 text-[#34d399]" /> : <Lock className="w-4 h-4 text-[#fbbf24]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[15px] text-white tracking-tight">
                    Reyo Research Repository
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                    isUnlocked 
                      ? 'bg-[#065f46]/40 text-[#34d399] border border-[#059669]/40' 
                      : 'bg-[#451a03]/60 text-[#fbbf24] border border-[#d97706]/40'
                  }`}>
                    {isUnlocked ? 'ACCESS UNLOCKED' : 'CONFIDENTIAL ARTIFACT'}
                  </span>
                </div>
                <p className="text-[11px] text-[#94a3b8] font-light">
                  Proprietary user research, taxonomy schemas & product specifications
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#1e293b]/70 hover:bg-[#334155] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Area */}
          {!isUnlocked ? (
            /* PASSWORD ENTRY SCREEN */
            <div className="p-6 sm:p-12 flex flex-col items-center justify-center text-center max-w-[540px] mx-auto my-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#312e81] to-[#4338ca] border border-[#6366f1]/40 flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <Lock className="w-8 h-8 text-[#a5b4fc]" />
              </div>

              <span className="font-mono text-[11px] uppercase tracking-[2.5px] text-[#a5b4fc] font-semibold mb-2">
                RECRUITER & PEER ACCESS
              </span>
              <h2 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight mb-2">
                Unlock {currentDoc.title}
              </h2>
              <p className="text-[13px] text-[#94a3b8] font-light leading-relaxed mb-6">
                This document contains internal interview transcripts, unreleased product requirements, and taxonomy algorithms. Please enter your review passcode to inspect.
              </p>

              {/* Password Form */}
              <form onSubmit={handleUnlock} className="w-full space-y-3 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Enter passcode (e.g. recruiter)"
                    autoFocus
                    className="w-full px-4 py-3 bg-[#131b2c] border border-[#334155] rounded-[12px] text-white placeholder-[#64748b] text-[14px] focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all text-center tracking-wide"
                  />
                  <Key className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>

                {errorMsg && (
                  <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#f87171] bg-[#ef4444]/10 border border-[#ef4444]/20 py-1.5 px-3 rounded-[8px]">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-[12px] bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#6d28d9] text-white font-medium text-[13px] tracking-wide shadow-lg shadow-[#4f46e5]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>Unlock Document</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleQuickUnlock}
                    className="py-3 px-4 rounded-[12px] bg-[#1e293b] hover:bg-[#334155] text-[#cbd5e1] hover:text-white font-medium text-[12px] border border-[#334155] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                    <span>Demo Key (recruiter)</span>
                  </button>
                </div>
              </form>

              {/* Security guarantee note */}
              <div className="flex items-center gap-2 text-[11px] text-[#64748b]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
                <span>Instant access provided for hiring managers and portfolio reviewers.</span>
              </div>
            </div>
          ) : (
            /* UNLOCKED DOCUMENT VIEWER */
            <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-70px)] overflow-hidden">
              {/* Left Sidebar: Document Picker (hidden on small mobile, visible on desktop) */}
              <div className="w-full lg:w-[300px] border-b lg:border-b-0 lg:border-r border-[#1e293b] bg-[#0a0e17] overflow-y-auto p-3 flex flex-col gap-1 shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#64748b] px-3 py-2 block">
                  ALL RESEARCH ARTIFACTS ({ARTIFACT_DOCS.length})
                </span>

                {ARTIFACT_DOCS.map((doc) => {
                  const isActive = doc.id === activeDocId;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setActiveDocId(doc.id)}
                      className={`w-full text-left p-2.5 rounded-[10px] transition-all flex items-start gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#1e293b] border border-[#6366f1]/50 text-white'
                          : 'hover:bg-[#131b2c] text-[#94a3b8] hover:text-[#cbd5e1] border border-transparent'
                      }`}
                    >
                      <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${isActive ? 'text-[#818cf8]' : 'text-[#64748b]'}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-medium leading-tight truncate">
                          {doc.title}
                        </div>
                        <div className="text-[10px] text-[#64748b] flex items-center justify-between mt-1">
                          <span>{doc.category}</span>
                          <span className="font-mono">{doc.date}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Viewport: Render selected unlocked artifact */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0d121c] space-y-6">
                {/* Document Metadata Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-[12px] bg-[#131b2c] border border-[#1e293b]">
                  <div>
                    <span className="font-mono text-[10px] text-[#818cf8] uppercase tracking-wider block">
                      {currentDoc.category} · {currentDoc.type}
                    </span>
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight">
                      {currentDoc.title}
                    </h2>
                    <p className="text-[12px] text-[#94a3b8] mt-0.5">
                      {currentDoc.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#cbd5e1]">
                    <span className="px-2 py-1 rounded bg-[#1e293b] border border-[#334155]">
                      {currentDoc.pagesOrSize}
                    </span>
                  </div>
                </div>

                {/* Render appropriate high-fidelity visual preview */}
                {activeDocId === 'interview-notes' && (
                  <div>
                    <InterviewAnalysisDoc compact={false} />
                  </div>
                )}

                {activeDocId === 'scalehouse-feedback' && (
                  <div>
                    <ScaleHouseFeedbackDoc compact={false} />
                  </div>
                )}

                {activeDocId === 'competitive-matrix' && (
                  <div>
                    <CompetitiveMatrixDoc compact={false} />
                  </div>
                )}

                {activeDocId === 'classification-pipeline' && (
                  <div>
                    <ClassificationPipelineDoc compact={false} />
                  </div>
                )}

                {/* Additional rich document previews for the other items */}
                {activeDocId === 'survey-responses' && (
                  <div className="p-6 rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0]">
                    <h3 className="font-bold text-[16px] text-white mb-2">Designer Survey Form & Empirical Findings</h3>
                    <p className="text-[13px] text-[#94a3b8] mb-4">
                      Circulated across 30+ product, brand, and UI/UX designers validating quantitative retrieval frequency and tool usage.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="text-[#818cf8] font-bold text-[18px] block mb-1">85%</span>
                        <span>Save learning videos or tutorials at least weekly.</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="text-[#c084fc] font-bold text-[18px] block mb-1">72%</span>
                        <span>Fail to find previously saved resources when active in a design problem.</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="text-[#38bdf8] font-bold text-[18px] block mb-1">68%</span>
                        <span>Give up and re-search YouTube or Google from scratch.</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="text-[#34d399] font-bold text-[18px] block mb-1">90%</span>
                        <span>Would use a tool that jumps directly to the exact timestamp concept.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocId === 'swot-analysis' && (
                  <div className="p-6 rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0]">
                    <h3 className="font-bold text-[16px] text-white mb-2">SWOT Strategic Assessment</h3>
                    <p className="text-[13px] text-[#94a3b8] mb-4">
                      Evaluation of market opportunity, solo-builder constraints, and AI quota handling.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                      <div className="p-3.5 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#34d399] uppercase font-bold block mb-1">STRENGTHS</span>
                        <p className="text-[#cbd5e1]">Deep video understanding; CS background building the classification pipeline; direct designer empathy.</p>
                      </div>
                      <div className="p-3.5 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#fbbf24] uppercase font-bold block mb-1">WEAKNESSES</span>
                        <p className="text-[#cbd5e1]">Solo builder bandwidth; Gemini free-tier rate limits (20 req/day); cold-start onboarding.</p>
                      </div>
                      <div className="p-3.5 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#38bdf8] uppercase font-bold block mb-1">OPPORTUNITIES</span>
                        <p className="text-[#cbd5e1]">Designers learn from video; rapid LLM evolution; greenfield save-to-remember loop.</p>
                      </div>
                      <div className="p-3.5 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#f87171] uppercase font-bold block mb-1">THREATS</span>
                        <p className="text-[#cbd5e1]">Incumbents adding AI video tagging; browser permission resistance; habit inertia.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocId === 'taxonomy-framework' && (
                  <div className="p-6 rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0]">
                    <h3 className="font-bold text-[16px] text-white mb-2">4-Tier Taxonomy Framework Specification</h3>
                    <p className="text-[13px] text-[#94a3b8] mb-4">
                      Structured information architecture translating vague human recall into vector searchable concept nodes.
                    </p>
                    <div className="space-y-2 text-[12px]">
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b] flex items-center justify-between">
                        <div>
                          <strong className="text-[#818cf8]">1. TOPIC:</strong> General domain (e.g., Layout Systems)
                        </div>
                        <span className="text-[#64748b] font-mono text-[10px]">Broad Category</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b] flex items-center justify-between">
                        <div>
                          <strong className="text-[#a855f7]">2. OBJECTIVE:</strong> What the user learns (e.g., Build responsive component structures)
                        </div>
                        <span className="text-[#64748b] font-mono text-[10px]">Goal Oriented</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b] flex items-center justify-between">
                        <div>
                          <strong className="text-[#38bdf8]">3. CONCEPT:</strong> Concrete technique (e.g., Nested auto-layout, hug vs fill constraints)
                        </div>
                        <span className="text-[#64748b] font-mono text-[10px]">Granular Idea</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b] flex items-center justify-between">
                        <div>
                          <strong className="text-[#34d399]">4. SKILL:</strong> Practical mastery (e.g., Responsive card layout in Figma)
                        </div>
                        <span className="text-[#64748b] font-mono text-[10px]">Applied Ability</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocId === 'prd' && (
                  <div className="p-6 rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0]">
                    <h3 className="font-bold text-[16px] text-white mb-2">Product Requirements Document (PRD v1.4)</h3>
                    <p className="text-[13px] text-[#94a3b8] mb-4">
                      Core specification for the Chrome Extension, YouTube integration, and semantic recall engine.
                    </p>
                    <div className="space-y-3 text-[12px] text-[#cbd5e1]">
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <strong className="text-white block mb-1">Core Requirement 1: Zero-Maintenance Capture</strong>
                        <span>One-click save from YouTube. Automatic background caption extraction, chunking, and taxonomy tagging without requiring user annotations.</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <strong className="text-white block mb-1">Core Requirement 2: Timestamp-Accurate Retrieval</strong>
                        <span>Semantic query matching to ~45-second segments. Direct jump into YouTube player at exact demonstration timestamp.</span>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <strong className="text-white block mb-1">Core Requirement 3: Privacy by Default</strong>
                        <span>User library and bookmark history stored locally with optional encrypted cloud sync. No invasive broad browser history reading.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocId === 'tech-architecture' && (
                  <div className="p-6 rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0]">
                    <h3 className="font-bold text-[16px] text-white mb-2">Technical Architecture & Stack Spec</h3>
                    <p className="text-[13px] text-[#94a3b8] mb-4">
                      High-performance, privacy-focused pipeline design and data modeling.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px]">
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#818cf8] uppercase block mb-1">INGESTION</span>
                        <p className="text-[#cbd5e1]">yt-dlp subtitle extractor + Deepgram Nova-3 ASR fallback for audio transcription.</p>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#38bdf8] uppercase block mb-1">AI CLASSIFICATION</span>
                        <p className="text-[#cbd5e1]">Gemini 2.5 Flash API with JSON schema enforcement for 4-tier taxonomy extraction.</p>
                      </div>
                      <div className="p-3 rounded bg-[#131b2c] border border-[#1e293b]">
                        <span className="font-mono text-[10px] text-[#34d399] uppercase block mb-1">STORAGE & VECTOR</span>
                        <p className="text-[#cbd5e1]">Supabase PostgreSQL with pgvector (HNSW cosine index) for sub-50ms similarity queries.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer bar */}
                <div className="pt-4 border-t border-[#1e293b] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#64748b]">
                  <span>Confidential research document · Harshit Joshi (Reyo Case Study)</span>
                  <button
                    onClick={() => {
                      setCopiedKey(true);
                      setTimeout(() => setCopiedKey(false), 2000);
                    }}
                    className="flex items-center gap-1 text-[#818cf8] hover:text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey ? 'Document Link Copied' : 'Share Review Link'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
