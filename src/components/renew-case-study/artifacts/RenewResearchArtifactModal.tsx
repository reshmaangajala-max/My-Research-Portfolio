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
  Sparkles,
  ChevronRight,
  Eye,
  Layers,
  Cpu,
  BarChart3,
  Shield,
  FileSpreadsheet,
  Palette,
  Terminal
} from 'lucide-react';

import { SurveyInfoAnalysisDoc } from './SurveyInfoAnalysisDoc';
import { LifeAssistantCompetitiveMatrixDoc } from './LifeAssistantCompetitiveMatrixDoc';
import { RenewInterviewGuideDoc } from './RenewInterviewGuideDoc';

export interface RenewArtifactDocInfo {
  id: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  date: string;
  pagesOrSize: string;
  securityLevel: 'Confidential' | 'Internal Research' | 'Peer Review' | 'Public Brief';
}

export const RENEW_ARTIFACT_DOCS: RenewArtifactDocInfo[] = [
  {
    id: 'renew-interview-guide',
    title: 'User interview question guide & findings',
    category: 'Primary Research',
    type: 'Interview Synthesis & Quotes',
    summary: 'Discovery transcripts from 10 working professionals at Hanyaa Auto Technologies exploring life admin friction points and deadline misses.',
    date: 'May 2026',
    pagesOrSize: '10 Transcripts · 12 Pages',
    securityLevel: 'Confidential',
  },
  {
    id: 'renew-survey-analysis',
    title: 'Survey information & response analysis',
    category: 'Primary Research',
    type: 'Quantitative Dataset (107 Respondents)',
    summary: 'Comprehensive quantitative analysis verifying that 83% forget crucial renewals, 71% lack a dedicated system, and 91% demand automated detection.',
    date: 'May 2026',
    pagesOrSize: '107 Respondents · 8 Analytics Charts',
    securityLevel: 'Internal Research',
  },
  {
    id: 'renew-survey-form',
    title: 'Survey form structure (Google Forms)',
    category: 'Primary Research',
    type: 'Form Blueprint & Questionnaire',
    summary: 'The 12-question instrument distributed across tech and corporate circles measuring deadline habits, tool usage, and AI data access comfort.',
    date: 'May 2026',
    pagesOrSize: '12 Questions · 4 Form Sections',
    securityLevel: 'Internal Research',
  },
  {
    id: 'renew-comp-matrix',
    title: 'Competitive analysis matrix',
    category: 'Secondary Research',
    type: 'Benchmark & Feature Grid',
    summary: 'Multi-dimensional evaluation of 6 market solutions (Cleo, Rocket Money, Google Assistant, Apple Reminders, Todoist) establishing Renew’s wedge.',
    date: 'May 2026',
    pagesOrSize: '6 Tools · 7 Dimensions Matrix',
    securityLevel: 'Internal Research',
  },
  {
    id: 'renew-swot-analysis',
    title: 'SWOT analysis & defensibility',
    category: 'Secondary Research',
    type: 'Strategic Assessment',
    summary: 'Evaluation of on-device privacy defensibility, Android-first launch strategy, and market opportunities in the Indian compliance/renewal landscape.',
    date: 'May 2026',
    pagesOrSize: '4 Quadrants · Strategic Plan',
    securityLevel: 'Peer Review',
  },
  {
    id: 'renew-product-principles',
    title: 'Product principles document',
    category: 'Product Strategy',
    type: 'Design System Principles',
    summary: 'The 4 zero-input pillars governing Renew: proactive discovery, contextual notification budgets, on-device OCR, and strict user consent.',
    date: 'June 2026',
    pagesOrSize: '4 Core Pillars · Spec Brief',
    securityLevel: 'Internal Research',
  },
  {
    id: 'renew-wireframes',
    title: 'Wireframe flows (5 core user journeys)',
    category: 'UX Architecture',
    type: 'Low-Fidelity Architecture',
    summary: 'End-to-end low-fidelity flows covering auto-detection ingestion, obligation resolution, urgent action triage, and reminder customizer.',
    date: 'June 2026',
    pagesOrSize: '5 User Flows · 24 Wireframes',
    securityLevel: 'Internal Research',
  },
  {
    id: 'renew-ui-screens',
    title: 'UI design screens & component library',
    category: 'Visual Design',
    type: 'High-Fidelity Figma Exports',
    summary: 'Polished high-fidelity mockups, dark/light theme tokens, obligation status tags, urgency timeline cards, and dynamic quick-action widgets.',
    date: 'June 2026',
    pagesOrSize: '18 Production Screens · Design Kit',
    securityLevel: 'Peer Review',
  },
  {
    id: 'renew-tech-stack',
    title: 'Tech stack recommendation document',
    category: 'Technical Feasibility',
    type: 'Architecture & Engine Spec',
    summary: 'Feasibility analysis of on-device OCR (ML Kit), local SQLite encryption (SQLCipher), notification schedulers, and background SMS parsing.',
    date: 'June 2026',
    pagesOrSize: 'Technical Architecture · 9 Pages',
    securityLevel: 'Confidential',
  },
];

interface RenewResearchArtifactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDocId?: string;
}

export function RenewResearchArtifactModal({
  isOpen,
  onClose,
  selectedDocId = 'renew-survey-analysis',
}: RenewResearchArtifactModalProps) {
  const [activeDocId, setActiveDocId] = useState(selectedDocId);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showQuickBypass, setShowQuickBypass] = useState(true);

  // Sync selectedDocId when opened
  useEffect(() => {
    if (selectedDocId) {
      setActiveDocId(selectedDocId);
    }
  }, [selectedDocId]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const currentDoc = RENEW_ARTIFACT_DOCS.find((d) => d.id === activeDocId) || RENEW_ARTIFACT_DOCS[1];

  const handleUnlock = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const clean = passwordInput.trim().toLowerCase();

    // Accept recruiter passcode, demo, design, renew, password, admin
    const validCodes = ['recruiter', 'demo', 'design', 'renew', 'hanyaa', 'portfolio', 'admin', 'password'];

    if (validCodes.includes(clean) || clean.length >= 3) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect passcode. Try "recruiter" or click Demo Access below.');
    }
  };

  const handleDemoUnlock = () => {
    setPasswordInput('recruiter');
    setIsUnlocked(true);
    setErrorMsg('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1240px] max-h-[92vh] bg-[#090d16] border border-[#1e293b] rounded-[20px] shadow-2xl flex flex-col overflow-hidden text-[#e2e8f0] z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b] bg-[#0f172a]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#312e81]/60 border border-[#4338ca]/40 flex items-center justify-center text-[#a5b4fc]">
                {isUnlocked ? <Unlock className="w-4 h-4 text-[#34d399]" /> : <Lock className="w-4 h-4 text-[#fbbf24]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[14px] text-white tracking-tight">
                    Renew AI Life Assistant · Research Repository
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#1e293b] text-[#94a3b8] border border-[#334155]">
                    {currentDoc.securityLevel}
                  </span>
                </div>
                <span className="text-[11px] text-[#64748b]">
                  Proprietary research & specifications by Somyaranjan Swain
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isUnlocked && (
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#065f46]/40 border border-[#059669]/40 text-[11px] text-[#34d399] font-medium font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>DECRYPTED · FULL ACCESS</span>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Modal Body */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar: Document Browser */}
            <div className="w-full md:w-[320px] lg:w-[360px] border-r border-[#1e293b] bg-[#0c1017]/80 flex flex-col shrink-0 overflow-y-auto max-h-[220px] md:max-h-full">
              <div className="p-3.5 border-b border-[#1e293b] text-[10px] font-mono uppercase tracking-wider text-[#64748b] flex items-center justify-between">
                <span>INDEXED ARTIFACTS ({RENEW_ARTIFACT_DOCS.length})</span>
                <span>MAYS/JUN 2026</span>
              </div>

              <div className="p-2 space-y-1">
                {RENEW_ARTIFACT_DOCS.map((doc) => {
                  const isActive = doc.id === activeDocId;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setActiveDocId(doc.id)}
                      className={`w-full text-left p-3 rounded-[10px] transition-all flex items-start gap-3 ${
                        isActive
                          ? 'bg-[#312e81]/40 border border-[#6366f1]/60 text-white'
                          : 'hover:bg-[#111827] border border-transparent text-[#94a3b8]'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        isActive ? 'bg-[#4f46e5] text-white' : 'bg-[#1e293b] text-[#64748b]'
                      }`}>
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#818cf8] font-semibold truncate">
                            {doc.category}
                          </span>
                          <span className="text-[9px] font-mono text-[#64748b] shrink-0">{doc.pagesOrSize}</span>
                        </div>
                        <h5 className={`text-[12.5px] font-medium leading-tight truncate ${isActive ? 'text-white font-bold' : 'text-[#cbd5e1]'}`}>
                          {doc.title}
                        </h5>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-1 transition-transform ${isActive ? 'text-[#818cf8] translate-x-0.5' : 'text-[#475569]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-[#090d16] flex flex-col overflow-y-auto">
              {!isUnlocked ? (
                /* Locked State Screen */
                <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1e1b4b] border border-[#4338ca]/40 flex items-center justify-center text-[#818cf8] mb-5 shadow-inner">
                    <Lock className="w-8 h-8 text-[#818cf8]" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#312e81]/40 border border-[#4338ca]/40 text-[#a5b4fc] text-[11px] font-mono uppercase tracking-wider mb-3">
                    RECRUITER & PEER ACCESS VERIFICATION
                  </span>

                  <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight mb-2 max-w-[560px]">
                    Confidential Research & Strategy Artifacts
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#94a3b8] font-light max-w-[500px] leading-relaxed mb-6">
                    Enter the access passcode to inspect full research transcripts, competitive matrices, survey breakdowns, and architectural specifications.
                  </p>

                  {/* Password Form */}
                  <form onSubmit={handleUnlock} className="w-full max-w-[360px] mb-4">
                    <div className="flex items-center gap-2 bg-[#111827] border border-[#334155] rounded-[12px] p-1.5 focus-within:border-[#818cf8] transition-colors">
                      <div className="pl-2.5 text-[#64748b]">
                        <Key className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Enter access code..."
                        className="bg-transparent text-white text-[13px] flex-1 px-2 py-1.5 outline-none placeholder-[#64748b]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-[8px] bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[12.5px] font-medium transition-colors shrink-0 flex items-center gap-1.5"
                      >
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Unlock</span>
                      </button>
                    </div>
                    {errorMsg && (
                      <p className="text-[12px] text-rose-400 mt-2 flex items-center justify-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errorMsg}</span>
                      </p>
                    )}
                  </form>

                  {/* Quick Demo Bypass for Recruiters */}
                  {showQuickBypass && (
                    <div className="pt-2">
                      <button
                        onClick={handleDemoUnlock}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e293b]/70 hover:bg-[#1e293b] border border-[#334155] text-[12px] text-[#a5b4fc] transition-all hover:border-[#6366f1]/50 shadow-sm"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                        <span>
                          Recruiter One-Click Demo Access (<code className="font-mono font-bold text-white">recruiter</code>)
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Unlocked Document View */
                <div className="p-4 sm:p-6 md:p-8 space-y-6">
                  {/* Dynamic Header for Selected Document */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e293b]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#312e81]/60 text-[#a5b4fc] border border-[#4338ca]/40">
                          {currentDoc.category}
                        </span>
                        <span className="text-[11px] font-mono text-[#64748b]">{currentDoc.type}</span>
                      </div>
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
                        {currentDoc.title}
                      </h3>
                      <p className="text-[13px] text-[#94a3b8] font-light mt-1">
                        {currentDoc.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1f2937] text-[11px] font-mono text-[#cbd5e1]">
                        {currentDoc.date} · {currentDoc.pagesOrSize}
                      </div>
                    </div>
                  </div>

                  {/* Render Selected Document View */}
                  {activeDocId === 'renew-survey-analysis' && (
                    <SurveyInfoAnalysisDoc />
                  )}

                  {activeDocId === 'renew-comp-matrix' && (
                    <LifeAssistantCompetitiveMatrixDoc />
                  )}

                  {activeDocId === 'renew-interview-guide' && (
                    <div className="space-y-6">
                      <RenewInterviewGuideDoc />

                      {/* Extended Verbatim Quotes & Thematic Analysis */}
                      <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 text-[13px]">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#818cf8] block mb-3 font-semibold">
                          VERBATIM USER DISCOVERY TRANSCRIPTS (EXTRACTS)
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
                              <span className="font-bold text-white">Participant #02 (Full-stack Engineer, 26)</span>
                              <span>Motor Vehicle & Insurance</span>
                            </div>
                            <p className="text-[#cbd5e1] font-light leading-relaxed italic">
                              &ldquo;I only realized my two-wheeler insurance lapsed when a traffic cop stopped me. The renewal email had come 2 weeks prior from PolicyBazaar, but it got lost under 40 promotional emails in my promotions tab. I had to pay a ₹2,000 fine on the spot.&rdquo;
                            </p>
                          </div>

                          <div className="p-4 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
                              <span className="font-bold text-white">Participant #05 (UI Designer, 24)</span>
                              <span>SaaS Subscriptions</span>
                            </div>
                            <p className="text-[#cbd5e1] font-light leading-relaxed italic">
                              &ldquo;I signed up for a 7-day free trial of a 3D modeling tool. I set a reminder in Apple Reminders, but marked it complete when I was busy in a meeting. 4 days later I was billed $48. If the app had given me a 1-click cancel shortcut, I wouldn&apos;t have lost that money.&rdquo;
                            </p>
                          </div>

                          <div className="p-4 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
                              <span className="font-bold text-white">Participant #08 (Operations Lead, 31)</span>
                              <span>Utility Bills & Municipal Taxes</span>
                            </div>
                            <p className="text-[#cbd5e1] font-light leading-relaxed italic">
                              &ldquo;Electricity bills in Bangalore don&apos;t arrive with an exact cadence. I check BESCOM randomly. If an app can just read the SMS bill arrival and queue it on my monthly financial calendar, that alone saves me 20 minutes of anxiety every month.&rdquo;
                            </p>
                          </div>

                          <div className="p-4 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
                              <span className="font-bold text-white">Participant #10 (Product Manager, 34)</span>
                              <span>Data Privacy & Trust</span>
                            </div>
                            <p className="text-[#cbd5e1] font-light leading-relaxed italic">
                              &ldquo;I will never give my net banking password to a 3rd party app. But if the app parses my PDF policy or screenshot locally on my phone without uploading my salary or bank statements to a random server, I am 100% in.&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-survey-form' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1f2937]">
                        <div>
                          <h4 className="text-[16px] font-bold text-white">Google Forms Survey Instrument</h4>
                          <span className="text-[12px] text-[#94a3b8]">Distributed May 10–18, 2026 · Target: Indian working professionals</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#312e81]/50 text-[#a5b4fc] text-[11px] font-mono">12 Questions</span>
                      </div>

                      <div className="space-y-3 text-[12.5px]">
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-mono text-[10px] text-[#818cf8] font-bold block mb-1">SECTION 1: DEMOGRAPHICS & BACKGROUND</span>
                          <p className="text-white">Q1. What is your age group? (18-24, 25-34, 35-44, 45+)</p>
                          <p className="text-white">Q2. What is your primary mobile operating system? (Android, iOS)</p>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-mono text-[10px] text-[#818cf8] font-bold block mb-1">SECTION 2: OBLIGATION & DEADLINE MANAGEMENT HABITS</span>
                          <p className="text-white">Q3. How do you currently track renewals, bills, and subscriptions?</p>
                          <p className="text-white">Q4. Which life obligations have you missed or delayed in the last 12 months?</p>
                          <p className="text-white">Q5. Have you incurred any late fees, penalties, or service disruptions?</p>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-mono text-[10px] text-[#818cf8] font-bold block mb-1">SECTION 3: AI AUTO-DETECTION & DESIRED CAPABILITIES</span>
                          <p className="text-white">Q6. Would you use an assistant that extracts deadlines directly from policy PDFs and email receipts?</p>
                          <p className="text-white">Q7. Rank the top 5 features most valuable to you in a life admin assistant.</p>
                          <p className="text-white">Q8. How would you prefer notifications to be scheduled? (e.g., 7 days ahead, 3 days, day of due date)</p>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-mono text-[10px] text-[#818cf8] font-bold block mb-1">SECTION 4: DATA PRIVACY & TRUST BOUNDARIES</span>
                          <p className="text-white">Q9. What are your biggest concerns regarding automated document parsing?</p>
                          <p className="text-white">Q10. Under what privacy guarantees would you grant document reading permissions?</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-swot-analysis' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <h4 className="text-[16px] font-bold text-white mb-2">Renew SWOT Analysis & Strategic Moat</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[12.5px]">
                        <div className="p-4 rounded-[10px] bg-[#065f46]/20 border border-[#059669]/40">
                          <span className="font-bold text-[#34d399] uppercase tracking-wider text-[11px] block mb-2 font-mono">STRENGTHS</span>
                          <ul className="space-y-1.5 text-[#cbd5e1] font-light list-disc list-inside">
                            <li>Zero manual input requirement (auto-detection from documents & emails).</li>
                            <li>Covers all 5 life admin categories instead of single-niche finance tools.</li>
                            <li>Privacy-first architecture (local on-device OCR model).</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#451a03]/20 border border-[#d97706]/40">
                          <span className="font-bold text-[#fbbf24] uppercase tracking-wider text-[11px] block mb-2 font-mono">WEAKNESSES</span>
                          <ul className="space-y-1.5 text-[#cbd5e1] font-light list-disc list-inside">
                            <li>Initial bootstrap as solo designer/researcher.</li>
                            <li>High consumer trust barrier for document reading permissions.</li>
                            <li>Android-only initial pilot before iOS sandbox adaptations.</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#1e1b4b]/40 border border-[#6366f1]/40">
                          <span className="font-bold text-[#818cf8] uppercase tracking-wider text-[11px] block mb-2 font-mono">OPPORTUNITIES</span>
                          <ul className="space-y-1.5 text-[#cbd5e1] font-light list-disc list-inside">
                            <li>Massive Indian renewal ecosystem (motor insurance, health policies, tax due dates).</li>
                            <li>Billions lost annually in avoidable late fees & policy lapses.</li>
                            <li>Partnership potential with insurance aggregators for 1-click renewal.</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#4c0519]/20 border border-[#e11d48]/40">
                          <span className="font-bold text-[#fb7185] uppercase tracking-wider text-[11px] block mb-2 font-mono">THREATS</span>
                          <ul className="space-y-1.5 text-[#cbd5e1] font-light list-disc list-inside">
                            <li>Big Tech (Apple Intelligence, Google Assistant) bundling proactive reminders.</li>
                            <li>OS permission restrictions on background SMS and file reading.</li>
                            <li>User churn if OCR misparses a critical date.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-product-principles' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <h4 className="text-[16px] font-bold text-white mb-2">The 4 Zero-Input Product Principles</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px]">
                        <div className="p-4 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-white text-[13px] block mb-1">1. Zero-Input by Default</span>
                          <p className="text-[#94a3b8] font-light leading-relaxed">
                            Users should never be forced to type a policy number, due date, or amount manually. The app detects obligations from PDFs, screenshots, and notifications.
                          </p>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-white text-[13px] block mb-1">2. Actionable, Not Annoying</span>
                          <p className="text-[#94a3b8] font-light leading-relaxed">
                            No spam alarms. Notifications arrive at high-leverage moments with 1-tap direct action links (e.g., &ldquo;Renew on HDFC Portal&rdquo;).
                          </p>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-white text-[13px] block mb-1">3. Privacy is Non-Negotiable</span>
                          <p className="text-[#94a3b8] font-light leading-relaxed">
                            Sensitive document OCR happens on-device. Personal banking credentials and OTPs are strictly excluded and never transmitted.
                          </p>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-white text-[13px] block mb-1">4. Fail-Safe Escalation</span>
                          <p className="text-[#94a3b8] font-light leading-relaxed">
                            If a critical renewal is 24 hours away, the reminder escalates from a quiet notification to an urgent status banner to prevent lapses.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-wireframes' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1f2937]">
                        <h4 className="text-[16px] font-bold text-white">5 Core Architecture & Wireframe Flows</h4>
                        <span className="text-[11px] font-mono text-[#818cf8]">Figma Low-Fidelity Spec</span>
                      </div>
                      <div className="space-y-3 text-[12.5px]">
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                          <div>
                            <span className="font-bold text-white block">Document Scan & Instant Extraction Flow</span>
                            <span className="text-[#94a3b8] font-light">Camera viewfinder with auto-edge detection → ML Kit text recognition → Extracted date/premium confirmation sheet.</span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                          <div>
                            <span className="font-bold text-white block">Centralized Life Admin Dashboard</span>
                            <span className="text-[#94a3b8] font-light">Urgency-sorted timeline (Next 7 Days, This Month, Later), category filter chips, and total pending financial liabilities.</span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                          <div>
                            <span className="font-bold text-white block">Subscription Audit & 1-Tap Cancellation Guide</span>
                            <span className="text-[#94a3b8] font-light">Identifies forgotten recurring charges with direct portal deep-links and cancellation instructions.</span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">4</span>
                          <div>
                            <span className="font-bold text-white block">Vehicle & Compliance Vault</span>
                            <span className="text-[#94a3b8] font-light">Linked car/bike profiles bundling Insurance, PUC, Registration, and Service interval countdowns.</span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/40 border border-[#334155]/40 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">5</span>
                          <div>
                            <span className="font-bold text-white block">Privacy Onboarding & Permissions Setup</span>
                            <span className="text-[#94a3b8] font-light">Granular toggle controls explaining what local OCR scans vs what is never stored.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-ui-screens' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1f2937]">
                        <h4 className="text-[16px] font-bold text-white">Visual Design System & Production UI Screens</h4>
                        <span className="text-[11px] font-mono text-[#34d399]">18 Completed Screens</span>
                      </div>
                      <p className="text-[13px] text-[#94a3b8] font-light leading-relaxed">
                        The visual system uses a deep night background (`#090d16`) with purposeful color coding: high-priority deadlines use emerald/cyan accents, overdue items utilize high-contrast rose highlights, and categories have dedicated icon badges.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-[11px]">
                        <div className="p-3 rounded-[10px] bg-[#1e293b]/60 border border-[#334155]/40">
                          <div className="font-bold text-white mb-1">Dashboard Screen</div>
                          <span className="text-[9.5px] text-[#94a3b8]">Live timeline & urgency cards</span>
                        </div>
                        <div className="p-3 rounded-[10px] bg-[#1e293b]/60 border border-[#334155]/40">
                          <div className="font-bold text-white mb-1">Document Scanner</div>
                          <span className="text-[9.5px] text-[#94a3b8]">Live OCR extraction UI</span>
                        </div>
                        <div className="p-3 rounded-[10px] bg-[#1e293b]/60 border border-[#334155]/40">
                          <div className="font-bold text-white mb-1">Obligation Detail</div>
                          <span className="text-[9.5px] text-[#94a3b8]">Pay / renew deep actions</span>
                        </div>
                        <div className="p-3 rounded-[10px] bg-[#1e293b]/60 border border-[#334155]/40">
                          <div className="font-bold text-white mb-1">Privacy Controls</div>
                          <span className="text-[9.5px] text-[#94a3b8]">On-device vault manager</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDocId === 'renew-tech-stack' && (
                    <div className="rounded-[14px] bg-[#111827]/80 border border-[#1f2937] p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1f2937]">
                        <h4 className="text-[16px] font-bold text-white">Technical Architecture & Stack Recommendations</h4>
                        <span className="text-[11px] font-mono text-[#818cf8]">Android & ML Spec</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px]">
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-[#818cf8] block mb-1 font-mono uppercase text-[11px]">ON-DEVICE OCR</span>
                          <p className="text-[#cbd5e1] font-light">Google ML Kit Text Recognition V2 for fast, on-device parsing of receipt and policy dates without network egress.</p>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-[#34d399] block mb-1 font-mono uppercase text-[11px]">LOCAL ENCRYPTION</span>
                          <p className="text-[#cbd5e1] font-light">SQLCipher / Room database encrypted with Android Keystore AES-256 GCM keys for zero-knowledge storage.</p>
                        </div>
                        <div className="p-3.5 rounded-[10px] bg-[#1e293b]/50 border border-[#334155]/40">
                          <span className="font-bold text-[#fbbf24] block mb-1 font-mono uppercase text-[11px]">SCHEDULING ENGINE</span>
                          <p className="text-[#cbd5e1] font-light">WorkManager + ExactAlarmManager for deterministic reminder triggers regardless of Android battery optimization.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
