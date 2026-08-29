import { useState } from 'react';
import { 
  ZoomIn, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Layers, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Shield,
  Search,
  Bell,
  Cpu,
  Lock,
  Compass,
  Zap,
  Info
} from 'lucide-react';

interface LifeAssistantCompetitiveMatrixDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export type CapabilityLevel = 'Strong' | 'Partial' | 'Limited' | 'None' | 'Privacy';

export interface CompetitorItem {
  id: string;
  name: string;
  badgeCode?: string;
  brandColor?: string;
  logoBg?: string;
  isHero?: boolean;
  obligationDetection: { level: 'Strong' | 'Partial' | 'Limited' | 'None'; note: string };
  coverage: { level: 'Strong' | 'Partial' | 'Limited' | 'Basic' | 'None'; note: string };
  proactiveReminders: { level: 'Strong' | 'Partial' | 'Limited' | 'None'; note: string };
  documentUnderstanding: { level: 'Strong' | 'Partial' | 'Limited' | 'Good' | 'None'; note: string };
  aiInsights: { level: 'Strong' | 'Partial' | 'Limited' | 'None'; note: string };
  privacy: { level: 'Local' | 'Cloud' | 'On-Device' | 'Ecosystem' | 'Other'; note: string };
  overallAssessment: string;
}

export const benchmarkCompetitors: CompetitorItem[] = [
  {
    id: 'bz-reminder',
    name: 'BZ Reminder',
    badgeCode: 'BZ',
    logoBg: 'bg-[#0284c7]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Basic', note: 'Bills, tasks' },
    proactiveReminders: { level: 'None', note: 'Only manual' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Local', note: 'Local storage' },
    overallAssessment: 'Too basic, no intelligence',
  },
  {
    id: 'sortifyd',
    name: 'Sortifyd',
    badgeCode: 'S',
    logoBg: 'bg-[#7c3aed]',
    obligationDetection: { level: 'Partial', note: '(Categories)' },
    coverage: { level: 'Strong', note: 'Insurance, Medical, Financial' },
    proactiveReminders: { level: 'Partial', note: '(Uploaded docs)' },
    documentUnderstanding: { level: 'Limited', note: 'Reads docs but limited extraction' },
    aiInsights: { level: 'Limited', note: 'Limited' },
    privacy: { level: 'Cloud', note: 'Cloud storage' },
    overallAssessment: 'Organizes docs well but not proactive',
  },
  {
    id: 'doxie',
    name: 'Doxie',
    badgeCode: 'D',
    logoBg: 'bg-[#0f172a]',
    obligationDetection: { level: 'Partial', note: '(OCR)' },
    coverage: { level: 'Limited', note: 'Documents only' },
    proactiveReminders: { level: 'None', note: 'None' },
    documentUnderstanding: { level: 'Strong', note: 'OCR text extraction' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Local', note: 'Local / Cloud' },
    overallAssessment: 'Scans docs but lacks intelligence',
  },
  {
    id: 'cleo',
    name: 'Cleo (AI)',
    badgeCode: 'Cleo',
    logoBg: 'bg-[#18181b]',
    obligationDetection: { level: 'Partial', note: '(Bank data)' },
    coverage: { level: 'Limited', note: 'Financial only' },
    proactiveReminders: { level: 'Partial', note: 'Bill & cash flow alerts' },
    documentUnderstanding: { level: 'Limited', note: 'Bank data only' },
    aiInsights: { level: 'Limited', note: 'Limited' },
    privacy: { level: 'Cloud', note: 'Cloud, Financial data' },
    overallAssessment: 'Finance-only, limited scope',
  },
  {
    id: 'truebill',
    name: 'Truebill / Rocket Money',
    badgeCode: '🚀',
    logoBg: 'bg-[#0284c7]',
    obligationDetection: { level: 'Partial', note: '(Transactions)' },
    coverage: { level: 'Limited', note: 'Subscriptions only' },
    proactiveReminders: { level: 'Strong', note: 'Subscription alerts' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'Limited', note: 'Limited' },
    privacy: { level: 'Cloud', note: 'Cloud, Financial data' },
    overallAssessment: 'Great for subscriptions, not holistic',
  },
  {
    id: 'google-assistant',
    name: 'Google Assistant',
    badgeCode: 'G',
    logoBg: 'bg-[#ea4335]',
    obligationDetection: { level: 'Partial', note: '(Manual triggers)' },
    coverage: { level: 'Limited', note: 'Calendar, Email only' },
    proactiveReminders: { level: 'Partial', note: 'Reactive responses' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'Limited', note: 'Limited' },
    privacy: { level: 'Ecosystem', note: 'Google ecosystem' },
    overallAssessment: 'Reactive, not proactive',
  },
  {
    id: 'siri',
    name: 'Siri / Apple Intelligence',
    badgeCode: '',
    logoBg: 'bg-[#6366f1]',
    obligationDetection: { level: 'Partial', note: '(On-device)' },
    coverage: { level: 'Limited', note: 'Apple ecosystem' },
    proactiveReminders: { level: 'Partial', note: 'Suggests reminders' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'Limited', note: 'Limited' },
    privacy: { level: 'On-Device', note: 'On-device' },
    overallAssessment: 'On-device, not holistic',
  },
  {
    id: 'apple-reminders',
    name: 'Apple Reminders',
    badgeCode: '📋',
    logoBg: 'bg-[#f43f5e]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Basic', note: 'Tasks only' },
    proactiveReminders: { level: 'None', note: 'No auto-detect' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'On-Device', note: 'On-device' },
    overallAssessment: 'No document scanning, no detection',
  },
  {
    id: 'todoist',
    name: 'Todoist',
    badgeCode: '≡',
    logoBg: 'bg-[#e11d48]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Limited', note: 'Tasks, projects' },
    proactiveReminders: { level: 'None', note: 'Manual reminders' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Cloud', note: 'Cloud' },
    overallAssessment: 'Productivity tool, not life assistant',
  },
  {
    id: 'anydo',
    name: 'Any.do',
    badgeCode: '✓',
    logoBg: 'bg-[#0284c7]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Limited', note: 'Tasks, calendar' },
    proactiveReminders: { level: 'None', note: 'Manual reminders' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Cloud', note: 'Cloud' },
    overallAssessment: 'Task manager, not proactive',
  },
  {
    id: 'microsoft-todo',
    name: 'Microsoft To Do',
    badgeCode: 'M',
    logoBg: 'bg-[#2563eb]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Limited', note: 'Tasks, emails' },
    proactiveReminders: { level: 'None', note: 'Email flags only' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Ecosystem', note: 'Microsoft ecosystem' },
    overallAssessment: 'Email flags only, not intelligent',
  },
  {
    id: 'ticktick',
    name: 'TickTick',
    badgeCode: '✓✓',
    logoBg: 'bg-[#3b82f6]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Limited', note: 'Tasks, habits' },
    proactiveReminders: { level: 'None', note: 'Manual reminders' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'Cloud', note: 'Cloud' },
    overallAssessment: 'Feature-rich but manual',
  },
  {
    id: 'reminders-apple',
    name: 'Reminders by Apple',
    badgeCode: '⏱',
    logoBg: 'bg-[#059669]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Basic', note: 'General only' },
    proactiveReminders: { level: 'None', note: 'Manual reminders' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'On-Device', note: 'On-device' },
    overallAssessment: 'No intelligence, manual setup',
  },
  {
    id: 'due',
    name: 'Due',
    badgeCode: '🎯',
    logoBg: 'bg-[#dc2626]',
    obligationDetection: { level: 'None', note: 'Manual only' },
    coverage: { level: 'Limited', note: 'Time-based alerts' },
    proactiveReminders: { level: 'None', note: 'Aggressive only' },
    documentUnderstanding: { level: 'None', note: 'None' },
    aiInsights: { level: 'None', note: 'None' },
    privacy: { level: 'On-Device', note: 'On-device' },
    overallAssessment: 'Aggressive reminders, not smart',
  },
];

export function LifeAssistantCompetitiveMatrixDoc({
  onExpand,
  compact = false,
}: LifeAssistantCompetitiveMatrixDocProps) {
  const [filter, setFilter] = useState<'all' | 'ai' | 'reminders' | 'docs'>('all');

  const filteredCompetitors = benchmarkCompetitors.filter((comp) => {
    if (filter === 'ai') return comp.id === 'cleo' || comp.id === 'truebill' || comp.id === 'google-assistant' || comp.id === 'siri';
    if (filter === 'reminders') return comp.id === 'bz-reminder' || comp.id === 'apple-reminders' || comp.id === 'todoist' || comp.id === 'anydo' || comp.id === 'due';
    if (filter === 'docs') return comp.id === 'sortifyd' || comp.id === 'doxie';
    return true;
  });

  const getStatusPill = (level: string, note: string) => {
    let dotColor = 'bg-[#ef4444]';
    let textColor = 'text-[#fca5a5]';
    let tag = level;

    if (level === 'Strong' || level === 'Good') {
      dotColor = 'bg-[#22c55e]';
      textColor = 'text-[#86efac]';
    } else if (level === 'Partial') {
      dotColor = 'bg-[#eab308]';
      textColor = 'text-[#fde047]';
    } else if (level === 'Limited' || level === 'Basic') {
      dotColor = 'bg-[#f97316]';
      textColor = 'text-[#fdba74]';
    } else if (level === 'None') {
      dotColor = 'bg-[#ef4444]';
      textColor = 'text-[#fca5a5]';
    }

    return (
      <div className="flex items-center gap-1.5 py-0.5">
        <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
        <span className="text-[11px] leading-tight">
          <span className={`font-semibold ${textColor}`}>{tag}</span>
          {note && note !== 'None' && (
            <span className="text-[#94a3b8] font-light ml-1 text-[10.5px]">
              {note}
            </span>
          )}
        </span>
      </div>
    );
  };

  const getPrivacyPill = (note: string) => {
    return (
      <div className="flex items-center gap-1.5 py-0.5">
        <span className="w-2 h-2 rounded-full shrink-0 bg-[#22c55e]" />
        <span className="text-[11px] text-[#cbd5e1] font-light">
          {note}
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
              COMPETITIVE ANALYSIS
            </h3>
            <p className="text-[13px] text-[#94a3b8] font-light mt-1.5">
              Evaluating existing solutions across key capabilities.
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
          FILTER:
        </span>
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          All 14 Benchmark Apps
        </button>
        <button
          onClick={() => setFilter('ai')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            filter === 'ai'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          AI & Assistants (4)
        </button>
        <button
          onClick={() => setFilter('reminders')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            filter === 'reminders'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          Task & Reminders (5)
        </button>
        <button
          onClick={() => setFilter('docs')}
          className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            filter === 'docs'
              ? 'bg-[#6366f1] text-white border-[#6366f1]'
              : 'bg-[#111827] text-[#94a3b8] border-[#1f2937] hover:border-[#374151]'
          }`}
        >
          Document / Scanners (2)
        </button>
      </div>

      {/* Comparison Table with exact columns from graphic */}
      <div className="overflow-x-auto pb-3 mb-6 rounded-[12px] border border-[#1e293b] bg-[#0c1220]/70">
        <table className="w-full min-w-[1080px] text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1e293b] bg-[#111827]/80 text-[10px] font-mono uppercase tracking-wider text-[#94a3b8]">
              <th className="py-3 px-3 w-[15%]">APP</th>
              <th className="py-3 px-2.5 w-[14%]">
                <div className="flex items-center gap-1">
                  <Search className="w-3 h-3 text-[#818cf8]" />
                  <span>OBLIGATION DETECTION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[14%]">
                <div className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#818cf8]" />
                  <span>COVERAGE (Life Areas)</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[13%]">
                <div className="flex items-center gap-1">
                  <Bell className="w-3 h-3 text-[#818cf8]" />
                  <span>PROACTIVE REMINDERS</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[14%]">
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#818cf8]" />
                  <span>DOCUMENT UNDERSTANDING</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[14%]">
                <div className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#818cf8]" />
                  <span>AI INSIGHTS / PRIORITIZATION</span>
                </div>
              </th>
              <th className="py-3 px-2.5 w-[14%]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#818cf8]" />
                  <span>PRIVACY & PERMISSION</span>
                </div>
              </th>
              <th className="py-3 px-3 w-[16%]">OVERALL ASSESSMENT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]/70 text-[11px]">
            {filteredCompetitors.map((comp) => (
              <tr
                key={comp.id}
                className="hover:bg-[#131b2e]/60 transition-colors"
              >
                {/* App Brand Col */}
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-[6px] ${comp.logoBg} flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm`}>
                      {comp.badgeCode}
                    </div>
                    <span className="font-semibold text-white text-[12px]">
                      {comp.name}
                    </span>
                  </div>
                </td>

                {/* Obligation Detection */}
                <td className="py-2.5 px-2.5">
                  {getStatusPill(comp.obligationDetection.level, comp.obligationDetection.note)}
                </td>

                {/* Coverage */}
                <td className="py-2.5 px-2.5">
                  {getStatusPill(comp.coverage.level, comp.coverage.note)}
                </td>

                {/* Proactive Reminders */}
                <td className="py-2.5 px-2.5">
                  {getStatusPill(comp.proactiveReminders.level, comp.proactiveReminders.note)}
                </td>

                {/* Document Understanding */}
                <td className="py-2.5 px-2.5">
                  {getStatusPill(comp.documentUnderstanding.level, comp.documentUnderstanding.note)}
                </td>

                {/* AI Insights / Prioritization */}
                <td className="py-2.5 px-2.5">
                  {getStatusPill(comp.aiInsights.level, comp.aiInsights.note)}
                </td>

                {/* Privacy & Permission */}
                <td className="py-2.5 px-2.5">
                  {getPrivacyPill(comp.privacy.note)}
                </td>

                {/* Overall Assessment */}
                <td className="py-2.5 px-3 text-[#cbd5e1] font-light text-[11px] leading-snug">
                  {comp.overallAssessment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section: Legend, Key Insights, Market Opportunity (3 columns matching graphic) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
        {/* Legend (3 cols) */}
        <div className="md:col-span-3 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#94a3b8] block mb-3 font-semibold">
            LEGEND
          </span>
          <div className="space-y-2 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0" />
              <span className="text-[#cbd5e1]">Strong / Full Capability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shrink-0" />
              <span className="text-[#cbd5e1]">Partial Capability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shrink-0" />
              <span className="text-[#cbd5e1]">Limited / Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shrink-0" />
              <span className="text-[#cbd5e1]">Not Available</span>
            </div>
          </div>
        </div>

        {/* Key Insights (5 cols) */}
        <div className="md:col-span-5 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#818cf8] block mb-3 font-semibold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#818cf8]" />
            KEY INSIGHTS
          </span>
          <div className="space-y-2.5 text-[11.5px] text-[#cbd5e1]">
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>No existing app fully detects obligations across all life areas.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>Most tools are either manual, category-limited, or lack document intelligence.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#818cf8] font-bold mt-0.5">•</span>
              <span>Privacy-first, AI-powered life management remains an open opportunity.</span>
            </div>
          </div>
        </div>

        {/* Market Opportunity (4 cols) */}
        <div className="md:col-span-4 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#34d399] block mb-2 font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#34d399]" />
              MARKET OPPORTUNITY
            </span>
            <p className="text-[11.5px] text-[#cbd5e1] leading-relaxed font-light">
              An AI Life Assistant that automatically detects, prioritizes, and resolves obligations across all categories — with privacy by default — can stand out in a highly fragmented market.
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#1f2937] flex items-center justify-between text-[10px] font-mono text-[#818cf8]">
            <span>ZERO-INPUT PARADIGM</span>
            <span>UNMET NEED: 91%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

