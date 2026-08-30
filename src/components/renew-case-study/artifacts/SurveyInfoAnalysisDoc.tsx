import { useState } from 'react';
import { 
  ZoomIn, 
  Users, 
  Target, 
  AlertTriangle, 
  BellOff, 
  Brain, 
  Bell, 
  Folder, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Compass,
  MessageSquare,
  BarChart3,
  Calendar,
  Layers
} from 'lucide-react';

interface SurveyInfoAnalysisDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export function SurveyInfoAnalysisDoc({ onExpand, compact = false }: SurveyInfoAnalysisDocProps) {
  const topStats = [
    {
      stat: '120+',
      label: 'Responses',
      desc: 'Across age groups and professions',
      icon: Users,
      color: 'text-[#c084fc]',
      bg: 'bg-[#581c87]/20',
      border: 'border-[#9333ea]/30',
    },
    {
      stat: '58%',
      label: 'Top Concern',
      desc: 'Privacy of personal and financial data',
      icon: Target,
      color: 'text-[#f43f5e]',
      bg: 'bg-[#881337]/20',
      border: 'border-[#f43f5e]/30',
    },
    {
      stat: '43%',
      label: 'Have paid late fees',
      desc: 'from missed deadlines',
      icon: AlertTriangle,
      color: 'text-[#fb923c]',
      bg: 'bg-[#7c2d12]/20',
      border: 'border-[#ea580c]/30',
    },
    {
      stat: '71%',
      label: 'Have no dedicated tool',
      desc: 'Manage obligations across multiple places',
      icon: BellOff,
      color: 'text-[#facc15]',
      bg: 'bg-[#713f12]/20',
      border: 'border-[#ca8a04]/30',
    },
  ];

  const challenges = [
    { name: 'Forgetting subscription cancellations', pct: 68, icon: '🔄' },
    { name: 'Missing insurance renewals', pct: 62, icon: '📄' },
    { name: 'Losing track of bill due dates', pct: 59, icon: '💳' },
    { name: 'Forgetting vehicle service & other maintenance', pct: 54, icon: '🚗' },
    { name: 'Scattered information across places', pct: 81, icon: '📂' },
  ];

  const managementChannels = [
    { name: 'Calendar Apps', pct: 32, color: 'bg-[#3b82f6]', text: 'text-[#60a5fa]' },
    { name: 'Notes / Notebooks', pct: 21, color: 'bg-[#8b5cf6]', text: 'text-[#a78bfa]' },
    { name: 'Email', pct: 18, color: 'bg-[#06b6d4]', text: 'text-[#22d3ee]' },
    { name: 'WhatsApp / Messages', pct: 15, color: 'bg-[#f97316]', text: 'text-[#fb923c]' },
    { name: 'Bank / Finance Apps', pct: 9, color: 'bg-[#22c55e]', text: 'text-[#4ade80]' },
    { name: 'Paper / Physical Docs', pct: 5, color: 'bg-[#94a3b8]', text: 'text-[#cbd5e1]' },
  ];

  const userDesires = [
    {
      pct: '89%',
      label: 'Automatically detects important deadlines for me',
      icon: Brain,
      color: 'text-[#c084fc]',
      bg: 'bg-[#581c87]/25',
      border: 'border-[#9333ea]/30',
    },
    {
      pct: '86%',
      label: 'Sends timely, smart reminders',
      icon: Bell,
      color: 'text-[#38bdf8]',
      bg: 'bg-[#0369a1]/25',
      border: 'border-[#0284c7]/30',
    },
    {
      pct: '83%',
      label: 'Brings everything into one place',
      icon: Folder,
      color: 'text-[#34d399]',
      bg: 'bg-[#065f46]/25',
      border: 'border-[#059669]/30',
    },
    {
      pct: '76%',
      label: 'Protects my privacy and asks permission',
      icon: ShieldCheck,
      color: 'text-[#fb923c]',
      bg: 'bg-[#7c2d12]/25',
      border: 'border-[#ea580c]/30',
    },
    {
      pct: '71%',
      label: 'Understands context and prioritizes what matters',
      icon: Sparkles,
      color: 'text-[#f472b6]',
      bg: 'bg-[#831843]/25',
      border: 'border-[#db2777]/30',
    },
  ];

  return (
    <div
      id="renew-survey-info-analysis-card"
      className={`group relative rounded-[16px] bg-[#090d16] text-[#e2e8f0] border border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#818cf8]/60 ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-5 sm:p-7'
      }`}
    >
      {/* Header Banner matching graphic panel 1 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#1e293b]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5 shadow-md shadow-[#6366f1]/30">
            1
          </div>
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight uppercase leading-none">
              SURVEY INSIGHTS & ANALYSIS
            </h3>
            <p className="text-[13px] text-[#94a3b8] font-light mt-1.5">
              Understanding users, their challenges, and what they need from a digital assistant.
            </p>
          </div>
        </div>

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

      {/* 4 Top Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {topStats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`rounded-[12px] p-4 ${item.bg} border ${item.border} flex items-start gap-3.5`}
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <div className={`text-[24px] sm:text-[28px] font-bold ${item.color} leading-none mb-1`}>
                  {item.stat}
                </div>
                <div className="text-[13px] font-bold text-white leading-snug">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#94a3b8] font-light leading-snug mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Section: Top Challenges (Left) & Where Users Manage Today (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        {/* Left: Top Challenges Faced (7 cols) */}
        <div className="lg:col-span-7 bg-[#111827]/70 rounded-[12px] p-5 border border-[#1f2937] flex flex-col justify-between">
          <div>
            <h4 className="text-[14px] font-bold text-white mb-4">
              Top Challenges Faced
            </h4>
            <div className="space-y-3.5">
              {challenges.map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[#cbd5e1] flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <span className="font-mono font-bold text-white">{item.pct}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#1e293b] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#818cf8]"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-[#1f2937] flex items-center justify-between text-[10px] text-[#64748b] font-mono">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Right: Where Users Manage Their Obligations Today (5 cols) */}
        <div className="lg:col-span-5 bg-[#111827]/70 rounded-[12px] p-5 border border-[#1f2937] flex flex-col justify-between">
          <div>
            <h4 className="text-[14px] font-bold text-white mb-3 leading-snug">
              Where Users Manage Their Obligations Today
            </h4>
            <div className="space-y-2 text-[12px]">
              {managementChannels.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-2 rounded-[8px] bg-[#1e293b]/50 border border-[#334155]/30"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                    <span className="text-[#cbd5e1]">{item.name}</span>
                  </div>
                  <span className={`font-mono font-bold ${item.text}`}>{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 text-[10.5px] text-[#94a3b8] font-light italic text-right">
            *High fragmentation across multiple fragmented silos
          </div>
        </div>
      </div>

      {/* What Users Want in a Digital Best Friend (5 cards) */}
      <div className="mb-6">
        <h4 className="text-[14px] font-bold text-white mb-3">
          What Users Want in a Digital Best Friend
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {userDesires.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`rounded-[12px] p-4 ${item.bg} border ${item.border} flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className={`text-[20px] font-bold ${item.color} font-mono leading-none`}>
                    {item.pct}
                  </span>
                </div>
                <p className="text-[11.5px] text-[#e2e8f0] font-medium leading-snug">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Open-ended Insights (Common Themes) & The Problem is Validated */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Open-ended Insights (7 cols) */}
        <div className="lg:col-span-7 bg-[#111827]/70 rounded-[12px] p-4 border border-[#1f2937]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#818cf8] block mb-3 font-semibold flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#818cf8]" />
            OPEN-ENDED INSIGHTS (COMMON THEMES)
          </span>
          <div className="space-y-2.5 text-[11.5px] text-[#cbd5e1]">
            <div className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#6366f1]/30 text-[#818cf8] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                •
              </span>
              <span>&ldquo;I forget because life is scattered across emails, messages, and different apps.&rdquo;</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#6366f1]/30 text-[#818cf8] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                •
              </span>
              <span>&ldquo;I treat reminders like a graveyard — I know I won&apos;t return, but I save just in case.&rdquo;</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#6366f1]/30 text-[#818cf8] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                •
              </span>
              <span>&ldquo;I want an assistant that tells me what I should be doing, not just reminds me.&rdquo;</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#6366f1]/30 text-[#818cf8] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                •
              </span>
              <span>&ldquo;Privacy is non-negotiable. I won&apos;t share data unless I trust the app completely.&rdquo;</span>
            </div>
          </div>
        </div>

        {/* The Problem is Validated (5 cols) */}
        <div className="lg:col-span-5 bg-[#064e3b]/30 rounded-[12px] p-4 border border-[#059669]/40 flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-[#059669]/20 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-[#34d399]" />
          </div>
          <div>
            <h5 className="text-[13px] font-bold text-white mb-1.5">
              The Problem is Validated
            </h5>
            <p className="text-[11.5px] text-[#a7f3d0] font-light leading-relaxed">
              Users clearly struggle to manage life obligations because information is scattered, manual reminder creation is a barrier, and existing apps don&apos;t detect, prioritize, or resolve tasks for them.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Key Takeaway Banner */}
      <div className="rounded-[12px] bg-[#1e1b4b]/80 border border-[#6366f1]/40 p-4 flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#6366f1]/20 flex items-center justify-center shrink-0">
          <Compass className="w-5 h-5 text-[#a5b4fc]" />
        </div>
        <div className="text-[12.5px] text-[#cbd5e1] leading-relaxed">
          <strong className="text-white font-bold mr-2">Key Takeaway:</strong>
          There is a strong need for an assistant that proactively detects, organizes, and resolves obligations across all categories — with privacy by default.
        </div>
      </div>
    </div>
  );
}

