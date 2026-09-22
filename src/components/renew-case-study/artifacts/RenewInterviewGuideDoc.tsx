import { useState } from 'react';
import { ZoomIn, Users, MessageSquare, ShieldAlert, Sparkles, CheckCircle2, FileQuestion } from 'lucide-react';

interface RenewInterviewGuideDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export function RenewInterviewGuideDoc({ onExpand, compact = false }: RenewInterviewGuideDocProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    if (onExpand) {
      onExpand();
    } else {
      setIsZoomed(!isZoomed);
    }
  };

  const keyQuestions = [
    {
      q: 'What bills, renewals, or deadlines have you missed in the past year?',
      insight: '[TODO_VERIFY]/7 missed motor insurance, PUC renewal, or forgotten quarterly utility bills.',
    },
    {
      q: 'How do you currently keep track of recurring obligations?',
      insight: 'Mostly mental notes and scattered SMS; Google Calendar entries get buried.',
    },
    {
      q: 'Would you let an AI scan your emails or documents to detect upcoming deadlines?',
      insight: '[TODO_VERIFY]/7 open to automated scanning, provided no banking passwords/OTPs are touched.',
    },
    {
      q: 'What would make you trust or distrust an app with your personal documents?',
      insight: 'Local on-device OCR, explicit consent toggles, and clear deletion guarantees.',
    },
    {
      q: 'How do you feel about notifications — when do they help vs. annoy you?',
      insight: 'Aggressive alarms get muted; 3-day and 1-day actionable heads-ups are preferred.',
    },
  ];

  return (
    <div
      id="renew-interview-guide-artifact-card"
      onClick={handleZoom}
      className={`group relative rounded-[16px] bg-[#090d16] text-[#e2e8f0] border border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#818cf8]/60 cursor-pointer ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-5 sm:p-6'
      }`}
    >
      {/* Top action overlay on hover */}
      <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e293b]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#334155] flex items-center gap-1.5 text-[11px] text-white">
        <ZoomIn className="w-3.5 h-3.5 text-[#818cf8]" />
        <span>Click to inspect & unlock</span>
      </div>

      {/* Header Banner */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e293b]">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#312e81]/60 text-[#a5b4fc] border border-[#4338ca]/40">
            INTERNAL TEAM RESEARCH
          </span>
          <span className="text-[11px] text-[#64748b] font-mono">7 TEAM CONVERSATIONS @ HANYAA AUTO</span>
        </div>
        <span className="text-[11px] text-[#94a3b8] font-mono">CONFIDENTIAL</span>
      </div>

      <h4 className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight leading-snug mb-1">
        Team Discovery & Life Admin Friction Log
      </h4>
      <p className="text-[12px] text-[#94a3b8] font-light leading-relaxed mb-4">
        Synthesized insights from 7 working professionals (ages 22–35) across engineering, design, and operations.
      </p>

      {/* Questions list */}
      <div className="space-y-2.5 mb-4">
        {keyQuestions.map((item, idx) => (
          <div key={idx} className="p-3 rounded-[10px] bg-[#111827]/80 border border-[#1f2937]">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-[#818cf8] font-bold">Q{idx + 1}.</span>
              <span className="text-[12px] font-medium text-white">{item.q}</span>
            </div>
            <p className="text-[11px] text-[#a5b4fc] font-light pl-5 border-l-2 border-[#6366f1]/40">
              💡 {item.insight}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Pill */}
      <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between text-[11px] text-[#94a3b8]">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-[#34d399]" />
          {/* TODO: Deleted unconfirmed claim "100% experienced missed deadlines in last 12 months" */}
          <span>Reported recurring missed deadlines across discovery conversations</span>
        </div>
        <span className="text-[#818cf8] font-medium">Click to read full notes →</span>
      </div>
    </div>
  );
}
