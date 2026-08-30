import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronRight, FileText, Lock, Eye, AlertCircle, ArrowUpRight, Cpu } from 'lucide-react';

type CompetitorCapability = 'Core' | 'Full' | 'Strong' | 'Partial' | 'Limited' | 'None' | 'Not clearly positioned as a core capability' | 'Future vision / approval-based' | 'Core principle';

interface CompetitorData {
  name: string;
  badge?: string;
  isTara?: boolean;
  role: string;
  obligationDetection: { level: CompetitorCapability; detail: string };
  lifeCoverage: { level: CompetitorCapability; detail: string };
  proactiveAttention: { level: CompetitorCapability; detail: string };
  contentUnderstanding: { level: CompetitorCapability; detail: string };
  aiPrioritization: { level: CompetitorCapability; detail: string };
  actionExecution: { level: CompetitorCapability; detail: string };
  privacyControl: { level: CompetitorCapability; detail: string };
  overallRole: string;
}

const competitors: CompetitorData[] = [
  {
    name: 'Meet Iris',
    role: 'Broad personal AI assistant',
    obligationDetection: {
      level: 'Partial',
      detail: 'Partial / contextual extraction from connected feeds',
    },
    lifeCoverage: {
      level: 'Strong',
      detail: 'Strong / broad across personal and work workflows',
    },
    proactiveAttention: {
      level: 'Strong',
      detail: 'Strong daily suggestions and proactive alerts',
    },
    contentUnderstanding: {
      level: 'Strong',
      detail: 'Strong across connected content, but not positioned primarily around obligation extraction',
    },
    aiPrioritization: {
      level: 'Strong',
      detail: 'Strong contextual assistance & scheduling focus',
    },
    actionExecution: {
      level: 'Strong',
      detail: 'Strong — email, calendar, bookings and phone calls',
    },
    privacyControl: {
      level: 'Strong',
      detail: 'Connected data with explicit permissions and controls',
    },
    overallRole: 'Broad proactive AI assistant focused on getting things done',
  },
  {
    name: 'Tase',
    role: 'Broad personal AI / second brain',
    obligationDetection: {
      level: 'Partial',
      detail: 'Partial — strong task/finance/health context, but users still interact to create or manage records',
    },
    lifeCoverage: {
      level: 'Strong',
      detail: 'Very strong personal knowledge & lifestyle span',
    },
    proactiveAttention: {
      level: 'Strong',
      detail: 'Strong proactive alerts and contextual awareness',
    },
    contentUnderstanding: {
      level: 'Strong',
      detail: 'Strong — document analysis and personal knowledge',
    },
    aiPrioritization: {
      level: 'Strong',
      detail: 'Strong — proactive proposals, reality checks & context',
    },
    actionExecution: {
      level: 'Strong',
      detail: 'Strong — autonomous agents can perform multi-step work',
    },
    privacyControl: {
      level: 'Strong',
      detail: 'Connected accounts and user-controlled data',
    },
    overallRole: 'Full-life AI system combining memory, tracking and agentic execution',
  },
  {
    name: 'ARIS',
    role: 'Ambient personal AI assistant',
    obligationDetection: {
      level: 'Partial',
      detail: 'Partial contextual capture',
    },
    lifeCoverage: {
      level: 'Partial',
      detail: 'Broad personal context across daily routines',
    },
    proactiveAttention: {
      level: 'Strong',
      detail: 'Strong morning briefs and ambient nudges',
    },
    contentUnderstanding: {
      level: 'Partial',
      detail: 'Partial document and media ingestion',
    },
    aiPrioritization: {
      level: 'Strong',
      detail: 'Strong contextual reminders and daily briefing',
    },
    actionExecution: {
      level: 'Partial',
      detail: 'Moderate execution via integrated assistants',
    },
    privacyControl: {
      level: 'Partial',
      detail: 'Connected assistant model (based on public info)',
    },
    overallRole: 'Ambient AI companion that stays ahead of the user’s day',
  },
  {
    name: 'Adminest',
    role: 'AI life-admin / document intelligence assistant',
    obligationDetection: {
      level: 'Strong',
      detail: 'STRONG — specializes in extracting obligations from paperwork',
    },
    lifeCoverage: {
      level: 'Strong',
      detail: 'Strong for life-admin, bills, notices and renewals',
    },
    proactiveAttention: {
      level: 'Partial',
      detail: 'Moderate — reminder based on extracted document dates',
    },
    contentUnderstanding: {
      level: 'Strong',
      detail: 'STRONG — deep OCR and structured invoice/policy parsing',
    },
    aiPrioritization: {
      level: 'Partial',
      detail: 'Moderate / task-oriented deadline mapping',
    },
    actionExecution: {
      level: 'Limited',
      detail: 'Limited compared with full AI agents',
    },
    privacyControl: {
      level: 'Strong',
      detail: 'Strong emphasis on private storage, encryption and deletion controls',
    },
    overallRole: 'Closest benchmark for turning messy documents into actionable life-admin tasks',
  },
  {
    name: 'Hero Assistant',
    role: 'All-in-one daily assistant',
    obligationDetection: {
      level: 'Partial',
      detail: 'Partial / image and schedule assisted',
    },
    lifeCoverage: {
      level: 'Partial',
      detail: 'Moderate to broad lifestyle and agenda scope',
    },
    proactiveAttention: {
      level: 'Strong',
      detail: 'Strong push alerts and schedule optimization',
    },
    contentUnderstanding: {
      level: 'Partial',
      detail: 'Partial — includes AI text/photo scanning',
    },
    aiPrioritization: {
      level: 'Strong',
      detail: 'Strong for actions, tasks, events and reminders',
    },
    actionExecution: {
      level: 'Partial',
      detail: 'Moderate / strong in selected workflows',
    },
    privacyControl: {
      level: 'Partial',
      detail: 'Standard cloud account protections (public data)',
    },
    overallRole: 'Proactive daily productivity assistant with strong attention/reminder behavior',
  },
  {
    name: 'Tara',
    badge: 'Concept & Prototype',
    isTara: true,
    role: 'Your Digital Best Friend',
    obligationDetection: {
      level: 'Core',
      detail: 'Core — background discovery across messages, emails & images without manual task creation',
    },
    lifeCoverage: {
      level: 'Core',
      detail: 'Broad — designed to adapt flexibly to the user’s personal data sources',
    },
    proactiveAttention: {
      level: 'Core',
      detail: 'Core — proactively surfaces time-sensitive obligations before you ask',
    },
    contentUnderstanding: {
      level: 'Core',
      detail: 'Core — multimodal understanding of documents, emails, screenshots and chat snippets',
    },
    aiPrioritization: {
      level: 'Core',
      detail: 'Core — determines consequence, urgency, and what actually deserves mental space',
    },
    actionExecution: {
      level: 'Future vision / approval-based',
      detail: 'Future vision — strictly approval-based action proposals (guided one-tap actions)',
    },
    privacyControl: {
      level: 'Core principle',
      detail: 'Core principle — local-first inference, zero data training, full audit log and granular revoke',
    },
    overallRole: 'Your Digital Best Friend — notices what you might miss, understands what matters, and helps you take care of it.',
  },
];

function getCapabilityBadge(level: CompetitorCapability, isTara?: boolean) {
  switch (level) {
    case 'Core':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#2a1b4e] text-[#d8b4fe] border border-[#a78bfa]/40">
          Core
        </span>
      );
    case 'Full':
    case 'Strong':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#142820] text-[#6ee7b7] border border-[#059669]/30">
          {level}
        </span>
      );
    case 'Partial':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#2a2212] text-[#fcd34d] border border-[#d97706]/30">
          Partial
        </span>
      );
    case 'Limited':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#2c1a14] text-[#fdba74] border border-[#ea580c]/30">
          Limited
        </span>
      );
    case 'None':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#2d1519] text-[#fca5a5] border border-[#dc2626]/30">
          None
        </span>
      );
    case 'Future vision / approval-based':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#241a3e] text-[#c4b5fd] border border-[#8b5cf6]/30">
          Future Vision
        </span>
      );
    case 'Core principle':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#1e153d] text-[#e9d5ff] border border-[#a855f7]/40">
          Core Principle
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-[var(--text-secondary)] border border-white/10">
          Not Core
        </span>
      );
  }
}

export function RenewSecondaryResearch() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorData | null>(null);

  return (
    <section
      id="renew-competitive-analysis"
      className="w-full bg-[var(--bg-primary)] py-24 md:py-32 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-[12px] font-accent font-medium uppercase tracking-[2px] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Competitive Matrix &amp; Positioning</span>
          </div>

          {/* Section title */}
          <h2
            id="competitive-landscape-heading"
            className="font-bold text-[28px] sm:text-[36px] md:text-[42px] text-[var(--text-primary)] mb-3 tracking-tight"
          >
            Competitive Landscape
          </h2>

          {/* Subtitle */}
          <p className="font-light text-[17px] sm:text-[19px] text-[var(--text-secondary)] max-w-[840px] mb-12 leading-relaxed">
            Where Tara fits among today&apos;s AI assistants, life-admin tools and proactive personal assistants.
          </p>

          {/* Core Table Container */}
          <div className="relative rounded-[20px] bg-[#120d1c]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[980px]">
                <thead>
                  <tr className="border-b border-white/10 bg-[#1a1329]/80 text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                    <th className="py-4 px-4 w-[160px]">App</th>
                    <th className="py-4 px-3 w-[150px]">Obligation Detection</th>
                    <th className="py-4 px-3 w-[130px]">Life Coverage</th>
                    <th className="py-4 px-3 w-[130px]">Proactive Attention</th>
                    <th className="py-4 px-3 w-[150px]">Content Understanding</th>
                    <th className="py-4 px-3 w-[140px]">AI Prioritization</th>
                    <th className="py-4 px-3 w-[130px]">Action / Execution</th>
                    <th className="py-4 px-3 w-[140px]">Privacy &amp; Control</th>
                    <th className="py-4 px-4 min-w-[180px]">Overall Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[13px] text-[#cbd5e1]">
                  {competitors.map((comp) => {
                    const isTara = comp.isTara;
                    return (
                      <tr
                        key={comp.name}
                        onClick={() => setSelectedCompetitor(comp)}
                        className={`transition-colors cursor-pointer group ${
                          isTara
                            ? 'bg-gradient-to-r from-[#24163a]/90 via-[#2f1b4c]/90 to-[#24163a]/90 hover:bg-[#38215c]/90 border-t-2 border-b-2 border-[var(--accent)]/40 shadow-[0_0_30px_rgba(167,139,250,0.1)]'
                            : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        {/* App Name */}
                        <td className="py-4 px-4 align-top">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 font-bold text-[14.5px] text-white">
                              {isTara && <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />}
                              <span className={isTara ? 'text-[#e9d5ff] font-extrabold' : ''}>
                                {comp.name}
                              </span>
                            </div>
                            {comp.badge && (
                              <span className="inline-block text-[10px] font-mono text-[var(--accent)]/90 tracking-wide">
                                {comp.badge}
                              </span>
                            )}
                            <span className="text-[11px] text-[var(--text-secondary)] font-light leading-snug">
                              {comp.role}
                            </span>
                          </div>
                        </td>

                        {/* Obligation Detection */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.obligationDetection.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.obligationDetection.detail}
                            </span>
                          </div>
                        </td>

                        {/* Life Coverage */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.lifeCoverage.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.lifeCoverage.detail}
                            </span>
                          </div>
                        </td>

                        {/* Proactive Attention */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.proactiveAttention.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.proactiveAttention.detail}
                            </span>
                          </div>
                        </td>

                        {/* Document / Content Understanding */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.contentUnderstanding.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.contentUnderstanding.detail}
                            </span>
                          </div>
                        </td>

                        {/* AI Prioritization */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.aiPrioritization.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.aiPrioritization.detail}
                            </span>
                          </div>
                        </td>

                        {/* Action / Execution */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.actionExecution.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.actionExecution.detail}
                            </span>
                          </div>
                        </td>

                        {/* Privacy & Control */}
                        <td className="py-4 px-3 align-top">
                          <div className="flex flex-col gap-1.5">
                            {getCapabilityBadge(comp.privacyControl.level, isTara)}
                            <span className="text-[11.5px] text-slate-300 font-light leading-tight">
                              {comp.privacyControl.detail}
                            </span>
                          </div>
                        </td>

                        {/* Overall Role */}
                        <td className="py-4 px-4 align-top">
                          <p className={`text-[12px] leading-relaxed ${isTara ? 'text-[#f3e8ff] font-medium' : 'text-slate-300 font-light'}`}>
                            {comp.overallRole}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom table helper note */}
            <div className="px-5 py-3 bg-[#0d0915] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11.5px] text-[var(--text-secondary)] font-mono">
              <div className="flex items-center gap-2">
                <span>Legend:</span>
                <span className="inline-flex items-center gap-1 text-[#6ee7b7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Strong / Core
                </span>
                <span className="inline-flex items-center gap-1 text-[#fcd34d]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> Partial
                </span>
                <span className="inline-flex items-center gap-1 text-[#fdba74]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" /> Limited
                </span>
              </div>
              <span className="text-white/60">
                Click any row for detailed capability breakdown
              </span>
            </div>
          </div>

          {/* Key Strategic Takeaways Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Takeaway 1 */}
            <div className="rounded-[16px] bg-[#160f23] p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-purple-500 opacity-60" />
              <div>
                <span className="font-mono text-[11px] text-[var(--accent)] font-semibold uppercase tracking-[2px] block mb-2">
                  Insight 01
                </span>
                <h4 className="font-bold text-[16px] text-white mb-2 leading-snug">
                  Core Attention Job
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
                  Most existing products excel at either assistant-style execution, life-admin organization, or proactive reminders. Tara combines these around one core job: understanding what deserves your attention.
                </p>
              </div>
            </div>

            {/* Takeaway 2 */}
            <div className="rounded-[16px] bg-[#160f23] p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-60" />
              <div>
                <span className="font-mono text-[11px] text-[var(--accent)] font-semibold uppercase tracking-[2px] block mb-2">
                  Insight 02
                </span>
                <h4 className="font-bold text-[16px] text-white mb-2 leading-snug">
                  Execution vs. Ingestion Benchmark
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
                  Adminest comes closest to document-to-obligation understanding, while Meet Iris and Tase push further into broad AI execution.
                </p>
              </div>
            </div>

            {/* Takeaway 3 */}
            <div className="rounded-[16px] bg-[#160f23] p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-[var(--accent)] opacity-60" />
              <div>
                <span className="font-mono text-[11px] text-[var(--accent)] font-semibold uppercase tracking-[2px] block mb-2">
                  Insight 03
                </span>
                <h4 className="font-bold text-[16px] text-white mb-2 leading-snug">
                  The White Space Opportunity
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
                  The opportunity is not another reminder list. It is a personal layer that connects scattered information, understands its consequences, and decides what is worth bringing to you.
                </p>
              </div>
            </div>
          </div>

          {/* Modal / Slide-out for detailed row inspection */}
          <AnimatePresence>
            {selectedCompetitor && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCompetitor(null)}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 10 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#171026] border border-white/15 rounded-[24px] p-6 sm:p-8 max-w-[620px] w-full shadow-2xl text-left"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        {selectedCompetitor.isTara && <Sparkles className="w-4 h-4 text-[var(--accent)]" />}
                        <h3 className="font-bold text-[22px] text-white">
                          {selectedCompetitor.name}
                        </h3>
                      </div>
                      <p className="text-[13px] text-[var(--accent)] font-mono">
                        {selectedCompetitor.role}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCompetitor(null)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-[14px] text-slate-200 mb-6 leading-relaxed bg-[#100b1a] p-4 rounded-xl border border-white/5">
                    <strong className="text-white block font-medium mb-1">Positioning Summary:</strong>
                    {selectedCompetitor.overallRole}
                  </p>

                  <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-1">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                          Obligation Discovery
                        </span>
                        {getCapabilityBadge(selectedCompetitor.obligationDetection.level)}
                      </div>
                      <p className="text-[13px] text-slate-300">{selectedCompetitor.obligationDetection.detail}</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                          Document &amp; Content Understanding
                        </span>
                        {getCapabilityBadge(selectedCompetitor.contentUnderstanding.level)}
                      </div>
                      <p className="text-[13px] text-slate-300">{selectedCompetitor.contentUnderstanding.detail}</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                          AI Prioritization
                        </span>
                        {getCapabilityBadge(selectedCompetitor.aiPrioritization.level)}
                      </div>
                      <p className="text-[13px] text-slate-300">{selectedCompetitor.aiPrioritization.detail}</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                          Action &amp; Autonomous Execution
                        </span>
                        {getCapabilityBadge(selectedCompetitor.actionExecution.level)}
                      </div>
                      <p className="text-[13px] text-slate-300">{selectedCompetitor.actionExecution.detail}</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                          Privacy &amp; Permissions
                        </span>
                        {getCapabilityBadge(selectedCompetitor.privacyControl.level)}
                      </div>
                      <p className="text-[13px] text-slate-300">{selectedCompetitor.privacyControl.detail}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
