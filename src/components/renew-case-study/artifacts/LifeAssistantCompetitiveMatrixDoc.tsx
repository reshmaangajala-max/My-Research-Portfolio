import { useState } from 'react';
import { 
  ZoomIn, 
  Sparkles, 
  Search,
  Layers,
  Bell,
  FileText,
  Cpu,
  Lock,
  Compass,
  TrendingUp,
  Zap
} from 'lucide-react';

interface LifeAssistantCompetitiveMatrixDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export type CompetitorCapability = 
  | 'Core' 
  | 'Full' 
  | 'Strong' 
  | 'Partial' 
  | 'Limited' 
  | 'None' 
  | 'Future vision / approval-based' 
  | 'Core principle';

export interface CompetitorItem {
  id: string;
  name: string;
  badgeCode?: string;
  logoBg?: string;
  isTara?: boolean;
  role: string;
  obligationDetection: { level: CompetitorCapability; note: string };
  coverage: { level: CompetitorCapability; note: string };
  proactiveReminders: { level: CompetitorCapability; note: string };
  documentUnderstanding: { level: CompetitorCapability; note: string };
  aiInsights: { level: CompetitorCapability; note: string };
  actionExecution: { level: CompetitorCapability; note: string };
  privacy: { level: CompetitorCapability; note: string };
  overallAssessment: string;
}

export const benchmarkCompetitors: CompetitorItem[] = [
  {
    id: 'meet-iris',
    name: 'Meet Iris',
    badgeCode: 'MI',
    logoBg: 'bg-[#6366f1]',
    role: 'Broad personal AI assistant',
    obligationDetection: { level: 'Partial', note: 'Contextual extraction from connected feeds' },
    coverage: { level: 'Strong', note: 'Broad across personal & work workflows' },
    proactiveReminders: { level: 'Strong', note: 'Daily suggestions & proactive alerts' },
    documentUnderstanding: { level: 'Strong', note: 'Across connected content' },
    aiInsights: { level: 'Strong', note: 'Contextual assistance & scheduling focus' },
    actionExecution: { level: 'Strong', note: 'Email, calendar, bookings & calls' },
    privacy: { level: 'Strong', note: 'Explicit permissions & controls' },
    overallAssessment: 'Broad proactive AI assistant focused on getting things done',
  },
  {
    id: 'tase',
    name: 'Tase',
    badgeCode: 'TS',
    logoBg: 'bg-[#8b5cf6]',
    role: 'Broad personal AI / second brain',
    obligationDetection: { level: 'Partial', note: 'Strong task/finance/health context, user-managed records' },
    coverage: { level: 'Strong', note: 'Very strong personal knowledge & lifestyle span' },
    proactiveReminders: { level: 'Strong', note: 'Proactive alerts & contextual awareness' },
    documentUnderstanding: { level: 'Strong', note: 'Document analysis & personal knowledge' },
    aiInsights: { level: 'Strong', note: 'Proactive proposals, reality checks & context' },
    actionExecution: { level: 'Strong', note: 'Autonomous agents can perform multi-step work' },
    privacy: { level: 'Strong', note: 'Connected accounts & user-controlled data' },
    overallAssessment: 'Full-life AI system combining memory, tracking and agentic execution',
  },
  {
    id: 'aris',
    name: 'ARIS',
    badgeCode: 'AR',
    logoBg: 'bg-[#0ea5e9]',
    role: 'Ambient personal AI assistant',
    obligationDetection: { level: 'Partial', note: 'Partial contextual capture' },
    coverage: { level: 'Partial', note: 'Broad personal context across daily routines' },
    proactiveReminders: { level: 'Strong', note: 'Morning briefs & ambient nudges' },
    documentUnderstanding: { level: 'Partial', note: 'Partial document & media ingestion' },
    aiInsights: { level: 'Strong', note: 'Contextual reminders & daily briefing' },
    actionExecution: { level: 'Partial', note: 'Moderate execution via integrated assistants' },
    privacy: { level: 'Partial', note: 'Connected assistant model' },
    overallAssessment: 'Ambient AI companion that stays ahead of the user’s day',
  },
  {
    id: 'adminest',
    name: 'Adminest',
    badgeCode: 'AD',
    logoBg: 'bg-[#10b981]',
    role: 'AI life-admin / document intelligence assistant',
    obligationDetection: { level: 'Strong', note: 'Specializes in extracting obligations from paperwork' },
    coverage: { level: 'Strong', note: 'Strong for life-admin, bills, notices & renewals' },
    proactiveReminders: { level: 'Partial', note: 'Reminder based on extracted document dates' },
    documentUnderstanding: { level: 'Strong', note: 'Deep OCR & structured invoice/policy parsing' },
    aiInsights: { level: 'Partial', note: 'Task-oriented deadline mapping' },
    actionExecution: { level: 'Limited', note: 'Limited compared with full AI agents' },
    privacy: { level: 'Strong', note: 'Private storage, encryption & deletion controls' },
    overallAssessment: 'Closest benchmark for turning messy documents into actionable tasks',
  },
  {
    id: 'hero-assistant',
    name: 'Hero Assistant',
    badgeCode: 'HA',
    logoBg: 'bg-[#f59e0b]',
    role: 'All-in-one daily assistant',
    obligationDetection: { level: 'Partial', note: 'Partial / image & schedule assisted' },
    coverage: { level: 'Partial', note: 'Moderate to broad lifestyle & agenda scope' },
    proactiveReminders: { level: 'Strong', note: 'Strong push alerts & schedule optimization' },
    documentUnderstanding: { level: 'Partial', note: 'Includes AI text/photo scanning' },
    aiInsights: { level: 'Strong', note: 'Actions, tasks, events & reminders' },
    actionExecution: { level: 'Partial', note: 'Moderate in selected workflows' },
    privacy: { level: 'Partial', note: 'Standard cloud account protections' },
    overallAssessment: 'Proactive daily productivity assistant with strong attention behavior',
  },
  {
    id: 'tara',
    name: 'Tara',
    badgeCode: 'T',
    logoBg: 'bg-[#a855f7]',
    isTara: true,
    role: 'Your Digital Best Friend',
    obligationDetection: { level: 'Core', note: 'Background discovery across messages, emails & images' },
    coverage: { level: 'Core', note: 'Broad — adapts flexibly to user personal data sources' },
    proactiveReminders: { level: 'Core', note: 'Proactively surfaces obligations before you ask' },
    documentUnderstanding: { level: 'Core', note: 'Multimodal understanding of documents, emails & chats' },
    aiInsights: { level: 'Core', note: 'Determines consequence, urgency & mental space priority' },
    actionExecution: { level: 'Future vision / approval-based', note: 'Future vision — guided one-tap actions with explicit consent' },
    privacy: { level: 'Core principle', note: 'Local-first inference, zero data training & full audit' },
    overallAssessment: 'Your Digital Best Friend — notices what you might miss, understands what matters, and helps you take care of it',
  },
];

export function LifeAssistantCompetitiveMatrixDoc({
  onExpand,
  compact = false,
}: LifeAssistantCompetitiveMatrixDocProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'tara' | 'competitors'>('all');

  const filteredCompetitors = benchmarkCompetitors.filter((comp) => {
    if (activeTab === 'tara') return comp.isTara;
    if (activeTab === 'competitors') return !comp.isTara;
    return true;
  });

  const getStatusPill = (level: CompetitorCapability, note: string, isTara?: boolean) => {
    let dotColor = 'bg-[#ef4444]';
    let textColor = 'text-[#fca5a5]';
    let tag: string = level;

    if (level === 'Core' || level === 'Core principle') {
      dotColor = 'bg-[#c084fc]';
      textColor = 'text-[#e9d5ff] font-bold';
      tag = level === 'Core principle' ? 'Core Principle' : 'Core';
    } else if (level === 'Strong' || level === 'Full') {
      dotColor = 'bg-[#22c55e]';
      textColor = 'text-[#86efac]';
    } else if (level === 'Partial') {
      dotColor = 'bg-[#eab308]';
      textColor = 'text-[#fde047]';
    } else if (level === 'Limited') {
      dotColor = 'bg-[#f97316]';
      textColor = 'text-[#fdba74]';
    } else if (level === 'Future vision / approval-based') {
      dotColor = 'bg-[#a78bfa]';
      textColor = 'text-[#ddd6fe]';
      tag = 'Future Vision';
    }

    return (
      <div className="flex items-start gap-1.5 py-0.5">
        <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${dotColor}`} />
        <span className="text-[11px] leading-tight">
          <span className={`font-semibold ${textColor}`}>{tag}</span>
          {note && (
            <span className="text-[#94a3b8] font-light block mt-0.5 text-[10px] leading-snug">
              {note}
            </span>
          )}
        </span>
      </div>
    );
  };

  return (
    <div
      id="life-assistant-competitive-matrix-artifact-card"
      className={`group relative rounded-[16px] bg-[#090d16] text-[#e2e8f0] border border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#818cf8]/60 ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-5 sm:p-7'
      }`}
    >
      {/* Header Banner matching Graphic */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#1e293b]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5 shadow-md shadow-[#6366f1]/30">
            2
          </div>
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight uppercase leading-none">
              COMPETITIVE ANALYSIS MATRIX
            </h3>
            <p className="text-[13px] text-[#94a3b8] font-light mt-1.5">
              Evaluating the 5 closest conceptual peers alongside Tara across core assistant dimensions.
            </p>
          </div>
        </div>

        {/* Action button */}
        {onExpand && (
          <button
            onClick={onExpand}
            className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-[12px] text-white transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5 text-[#818cf8]" />
            <span>Full Screen & Inspection</span>
          </button>
        )}
      </div>

      {/* Category filter pills for easy navigation */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-[11.5px]">
        <span className="text-[#64748b] font-mono text-[10px] uppercase tracking-wider mr-1">
          VIEW:
        </span>
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            activeTab === 'all'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          All (5 Peers + Tara)
        </button>
        <button
          onClick={() => setActiveTab('tara')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            activeTab === 'tara'
              ? 'bg-[#a855f7] text-white border-[#a855f7]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          Tara (Proposed Product)
        </button>
        <button
          onClick={() => setActiveTab('competitors')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            activeTab === 'competitors'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          Closest Peers Only (5)
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto pb-3 mb-6 rounded-[12px] border border-[#1e293b] bg-[#0c1220]/70">
        <table className="w-full min-w-[1180px] text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1e293b] bg-[#111827]/80 text-[10px] font-mono uppercase tracking-wider text-[#94a3b8]">
              <th className="py-3 px-3 w-[14%]">PRODUCT / PEER</th>
              <th className="py-3 px-2.5 w-[12%]">
                <div className="flex items-center gap-1">
                  <Search className="w-3 h-3 text-[#818cf8]" />
                  <span>OBLIGATION DETECTION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[12%]">
                <div className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#818cf8]" />
                  <span>LIFE COVERAGE</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[12%]">
                <div className="flex items-center gap-1">
                  <Bell className="w-3 h-3 text-[#818cf8]" />
                  <span>PROACTIVE ATTENTION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[13%]">
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#818cf8]" />
                  <span>CONTENT UNDERSTANDING</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[13%]">
                <div className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#818cf8]" />
                  <span>AI PRIORITIZATION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[11%]">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#818cf8]" />
                  <span>ACTION EXECUTION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[13%]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#818cf8]" />
                  <span>PRIVACY & PERMISSION</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]/70 text-[11px]">
            {filteredCompetitors.map((comp) => (
              <tr
                key={comp.id}
                className={
                  comp.isTara 
                    ? 'bg-[#3b0764]/20 hover:bg-[#3b0764]/30 transition-colors border-y border-[#a855f7]/30' 
                    : 'hover:bg-[#131b2e]/60 transition-colors'
                }
              >
                {/* Product Brand Col */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-[6px] ${comp.logoBg} flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm`}>
                      {comp.badgeCode}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`font-semibold text-[12px] ${comp.isTara ? 'text-[#e9d5ff]' : 'text-white'}`}>
                          {comp.name}
                        </span>
                        {comp.isTara && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#a855f7]/30 text-[#f3e8ff] border border-[#a855f7]/50">
                            Our Concept
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#94a3b8] font-light block leading-tight">
                        {comp.role}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Obligation Detection */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.obligationDetection.level, comp.obligationDetection.note, comp.isTara)}
                </td>

                {/* Life Coverage */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.coverage.level, comp.coverage.note, comp.isTara)}
                </td>

                {/* Proactive Attention */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.proactiveReminders.level, comp.proactiveReminders.note, comp.isTara)}
                </td>

                {/* Content Understanding */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.documentUnderstanding.level, comp.documentUnderstanding.note, comp.isTara)}
                </td>

                {/* AI Prioritization */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.aiInsights.level, comp.aiInsights.note, comp.isTara)}
                </td>

                {/* Action Execution */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.actionExecution.level, comp.actionExecution.note, comp.isTara)}
                </td>

                {/* Privacy & Permission */}
                <td className="py-3 px-2.5">
                  {getStatusPill(comp.privacy.level, comp.privacy.note, comp.isTara)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section: Legend, Key Insights, Market Opportunity */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
        {/* Legend */}
        <div className="md:col-span-3 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#94a3b8] block mb-3 font-semibold">
            LEGEND
          </span>
          <div className="space-y-2 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc] shrink-0" />
              <span className="text-[#cbd5e1]">Core / Principle (Tara)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0" />
              <span className="text-[#cbd5e1]">Strong / Full Capability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shrink-0" />
              <span className="text-[#cbd5e1]">Partial / Contextual</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shrink-0" />
              <span className="text-[#cbd5e1]">Limited / Niche Scope</span>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="md:col-span-5 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#818cf8] block mb-3 font-semibold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#818cf8]" />
            KEY INSIGHTS FROM THE 5 PEERS
          </span>
          <div className="space-y-2 text-[11.5px] text-[#cbd5e1]">
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>General AI assistants excel at broad interaction but lack specialized zero-input obligation extraction.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>Document tools parse paperwork well but rarely provide intelligent proactive attention or warmth.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>Tara bridges this gap as Your Digital Best Friend: background discovery, genuine warmth, and strict on-device privacy.</span>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="md:col-span-4 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#34d399] block mb-2 font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#34d399]" />
              THE TARA POSITIONING
            </span>
            <p className="text-[11.5px] text-[#cbd5e1] leading-relaxed font-light">
              Tara — Your Digital Best Friend: notices what you might miss, understands what matters, and helps you take care of it with total transparency and consent.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#1f2937] flex items-center justify-between text-[10px] font-mono text-[#818cf8]">
            <span>NOTICE → UNDERSTAND → PRIORITIZE → HELP</span>
            <span className="text-[#a855f7]">TOTAL TRANSPARENCY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
