import { motion } from 'motion/react';
import { Users, XCircle, LayoutGrid, Clock, Sparkles, Lightbulb, Quote, ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface InterviewAnalysisDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export function InterviewAnalysisDoc({ onExpand, compact = false }: InterviewAnalysisDocProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    if (onExpand) {
      onExpand();
    } else {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <div
      id="interview-analysis-artifact-card"
      onClick={handleZoom}
      className={`group relative rounded-[14px] bg-[#0c1017] border border-[#1e293b] text-[#e2e8f0] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6366f1]/60 cursor-pointer ${
        compact ? 'p-4 sm:p-5 text-[13px]' : 'p-6 sm:p-8'
      }`}
    >
      {/* Top action overlay on hover */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e293b]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#334155] flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
        <ZoomIn className="w-3.5 h-3.5 text-[#818cf8]" />
        <span>Click to inspect</span>
      </div>

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#1e293b]">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#312e81]/60 text-[#a5b4fc] text-[10px] font-semibold tracking-wider uppercase border border-[#4338ca]/40">
            RESEARCH VALIDATION
          </span>
          <span className="text-[11px] text-[#64748b]">Interview Analysis Document</span>
        </div>
        <div className="text-right">
          <span className="font-bold text-[13px] text-white tracking-tight">Reyo</span>
          <span className="block text-[9px] text-[#64748b] tracking-wider uppercase">SAVE TODAY. FIND TOMORROW.</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="mb-6">
        <h4 className="text-[17px] sm:text-[20px] font-bold text-white tracking-tight leading-snug mb-1.5">
          Designers Struggle to Find What They Already Saved
        </h4>
        <p className="text-[12px] sm:text-[13px] text-[#94a3b8] leading-relaxed font-light">
          10 semi-structured interviews with designers revealed a clear gap:{' '}
          <strong className="text-[#a5b4fc] font-medium">
            saving is easy, but retrieval at the moment of need is broken.
          </strong>
        </p>
      </div>

      {/* Top 5 Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        <div className="bg-[#111827]/80 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-[#3730a3]/40 text-[#a5b4fc] flex items-center justify-center mb-2">
            <Users className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-white leading-tight">10</div>
            <div className="text-[10px] font-semibold text-[#cbd5e1] leading-tight mt-0.5">Designers Interviewed</div>
            <div className="text-[9px] text-[#64748b] mt-0.5">1–5 years experience</div>
          </div>
        </div>

        <div className="bg-[#111827]/80 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-[#4c1d95]/40 text-[#c084fc] flex items-center justify-center mb-2">
            <XCircle className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-[#c084fc] leading-tight">9/10</div>
            <div className="text-[10px] font-semibold text-[#cbd5e1] leading-tight mt-0.5">Struggle to find saves</div>
            <div className="text-[9px] text-[#64748b] mt-0.5">Even when they know it exists</div>
          </div>
        </div>

        <div className="bg-[#111827]/80 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-[#1e293b] text-[#94a3b8] flex items-center justify-center mb-2">
            <LayoutGrid className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-white leading-tight">5–9</div>
            <div className="text-[10px] font-semibold text-[#cbd5e1] leading-tight mt-0.5">Platforms per designer</div>
            <div className="text-[9px] text-[#64748b] mt-0.5">Pinterest, YT, bookmarks...</div>
          </div>
        </div>

        <div className="bg-[#111827]/80 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-[#1e293b] text-[#94a3b8] flex items-center justify-center mb-2">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-[#38bdf8] leading-tight">70%+</div>
            <div className="text-[10px] font-semibold text-[#cbd5e1] leading-tight mt-0.5">Re-do past research</div>
            <div className="text-[9px] text-[#64748b] mt-0.5">Can&apos;t find previous save</div>
          </div>
        </div>

        <div className="bg-[#111827]/80 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between col-span-2 sm:col-span-1">
          <div className="w-6 h-6 rounded-md bg-[#065f46]/40 text-[#34d399] flex items-center justify-center mb-2">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-[#34d399] leading-tight">10/10</div>
            <div className="text-[10px] font-semibold text-[#cbd5e1] leading-tight mt-0.5">Want smarter recall</div>
            <div className="text-[9px] text-[#64748b] mt-0.5">Low-maintenance system</div>
          </div>
        </div>
      </div>

      {/* 3 Columns Section: Where Designers Save / Core Problem / Voice of Designers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {/* Where designers save */}
        <div className="bg-[#111827]/60 rounded-[10px] p-3.5 border border-[#1f2937]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] block mb-2.5">
            WHERE DESIGNERS SAVE
          </span>
          <div className="space-y-1.5 text-[11px]">
            {[
              { name: 'Pinterest', pct: 100 },
              { name: 'YouTube', pct: 90 },
              { name: 'Screenshots / Local', pct: 80 },
              { name: 'Dribbble / Behance', pct: 70 },
              { name: 'Instagram', pct: 60 },
              { name: 'Browser Bookmarks', pct: 50 },
              { name: 'LinkedIn', pct: 40 },
              { name: 'Other (Medium, Blogs)', pct: 30 },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-[100px] truncate text-[#cbd5e1] text-[10px]">{item.name}</span>
                <div className="flex-1 h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-[9px] text-[#94a3b8] w-6 text-right">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Core Problem */}
        <div className="bg-[#111827]/60 rounded-[10px] p-3.5 border border-[#1f2937] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] block mb-2.5">
              THE CORE PROBLEM
            </span>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-[#1e1b4b]/50 border border-[#312e81]/40">
                <span className="text-[#e2e8f0]">Can&apos;t remember where saved</span>
                <span className="font-bold text-[#a5b4fc]">40%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#1e1b4b]/30 border border-[#312e81]/20">
                <span className="text-[#cbd5e1]">Search ineffective across tools</span>
                <span className="font-bold text-[#c084fc]">30%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#1f2937]/50 border border-[#374151]/30">
                <span className="text-[#94a3b8]">Forgot they saved something</span>
                <span className="font-bold text-[#f472b6]">20%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#1f2937]/30 border border-[#374151]/20">
                <span className="text-[#64748b]">Other friction points</span>
                <span className="font-bold text-[#fb923c]">10%</span>
              </div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#1f2937] flex items-center gap-1.5 text-[10px] text-[#a5b4fc]">
            <Lightbulb className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" />
            <span className="leading-tight">Retrieval fails more than capture. Real opportunity.</span>
          </div>
        </div>

        {/* Voice of Designers */}
        <div className="bg-[#111827]/60 rounded-[10px] p-3.5 border border-[#1f2937] flex flex-col justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] block mb-2">
            VOICE OF DESIGNERS
          </span>
          <div className="space-y-2 text-[10px] text-[#cbd5e1]">
            <div className="p-2 rounded bg-[#182234]/70 border border-[#1e293b] relative">
              <Quote className="w-2.5 h-2.5 text-[#6366f1] inline mr-1 opacity-70" />
              <span className="italic">“I save obsessively, organize nothing, search when I need.”</span>
              <span className="block text-[8px] text-[#94a3b8] mt-1 font-mono text-right">— P4, Brand Designer</span>
            </div>
            <div className="p-2 rounded bg-[#182234]/70 border border-[#1e293b] relative">
              <Quote className="w-2.5 h-2.5 text-[#6366f1] inline mr-1 opacity-70" />
              <span className="italic">“I save but treat it like a graveyard, I know I won&apos;t return.”</span>
              <span className="block text-[8px] text-[#94a3b8] mt-1 font-mono text-right">— P7, Product Designer</span>
            </div>
            <div className="p-2 rounded bg-[#182234]/70 border border-[#1e293b] relative">
              <Quote className="w-2.5 h-2.5 text-[#6366f1] inline mr-1 opacity-70" />
              <span className="italic">“When I need a reference, I actually forget I had something saved.”</span>
              <span className="block text-[8px] text-[#94a3b8] mt-1 font-mono text-right">— P9, Product Designer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunity Banner */}
      <div className="rounded-[10px] bg-gradient-to-r from-[#312e81] via-[#4338ca] to-[#3b0764] p-3 sm:p-3.5 border border-[#6366f1]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[11px]">★</span>
          <span className="font-bold text-[12px] text-white tracking-wide uppercase">Reyo&apos;s Opportunity</span>
        </div>
        <div className="text-[11px] sm:text-[12px] text-white/90 font-light leading-tight">
          Become the designers&apos; second brain — recalling the right inspiration at the right moment, without extra effort.
        </div>
      </div>
    </div>
  );
}
