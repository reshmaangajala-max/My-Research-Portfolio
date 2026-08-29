import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface ScaleHouseFeedbackDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

export function ScaleHouseFeedbackDoc({ onExpand, compact = false }: ScaleHouseFeedbackDocProps) {
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
      id="scalehouse-feedback-artifact-card"
      onClick={handleZoom}
      className={`group relative rounded-[14px] bg-[#ffffff] text-[#1e293b] border border-[#e2e8f0] shadow-xl overflow-hidden transition-all duration-300 hover:border-[#3b82f6]/60 cursor-pointer ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-6 sm:p-7'
      }`}
    >
      {/* Top action overlay on hover */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e293b]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#334155] flex items-center gap-1.5 text-[11px] text-white">
        <ZoomIn className="w-3.5 h-3.5 text-[#38bdf8]" />
        <span>Click to inspect</span>
      </div>

      {/* Sheet Header */}
      <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-[#f1f5f9]">
        <div>
          <h4 className="text-[17px] sm:text-[19px] font-bold text-[#0f172a] tracking-tight leading-tight">
            Anonymous submission #21
          </h4>
          <p className="text-[11px] sm:text-[12px] text-[#64748b] font-normal mt-0.5">
            Reyo — privacy-first save manager for designers · Product / SaaS
          </p>
        </div>

        {/* 7/10 Score Badge */}
        <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-[8px] px-3 py-1 text-center shrink-0">
          <div className="text-[18px] font-bold text-[#047857] leading-none">
            7<span className="text-[12px] font-normal text-[#059669]">/10</span>
          </div>
          <span className="text-[8px] uppercase tracking-wider text-[#059669] font-medium block">
            ScaleHouse
          </span>
        </div>
      </div>

      {/* THE ONE-LINER Callout Box */}
      <div className="rounded-[8px] bg-[#fff7ed] border-l-[3px] border-l-[#f97316] border-y border-r border-[#fed7aa] p-2.5 sm:p-3 mb-4">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#c2410c] font-bold block mb-0.5">
          THE ONE-LINER
        </span>
        <p className="text-[12px] sm:text-[13px] text-[#9a3412] font-normal italic leading-snug">
          A real, sharp product insight buried under a confusing one-pager layout.
        </p>
      </div>

      {/* Section: FIRST IMPRESSION */}
      <div className="mb-3.5">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#9a3412] font-bold block mb-1">
          FIRST IMPRESSION
        </span>
        <p className="text-[11px] sm:text-[12px] text-[#334155] leading-relaxed">
          The actual product idea is one of the most interesting in the cohort once you finally piece it together. The insight itself (<strong className="text-[#0f172a]">&quot;1 designer in 4 can find a save, the rest re-Google it&quot;</strong>) is exactly the kind of behavioural data point that becomes a real product.
        </p>
      </div>

      {/* Section: WHAT&apos;S WORKING */}
      <div className="mb-3.5">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#9a3412] font-bold block mb-1">
          WHAT&apos;S WORKING
        </span>
        <p className="text-[11px] sm:text-[12px] text-[#334155] leading-relaxed">
          The wedge is sharp: not &apos;organise your saves&apos; (Notion, Raindrop, Are.na do that) but <strong className="text-[#0f172a]">&apos;proactively surface the right save at the moment of need&apos;</strong>. That&apos;s a genuine functional differentiation. The privacy-first framing is a real moat. The micro-features named — timestamp jump in videos, &apos;inspect my current problem&apos;, spaced resurfacing — are well-considered.
        </p>
      </div>

      {/* Section: WHAT&apos;S MISSING / WHAT&apos;S WEAK */}
      <div className="mb-3.5">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#9a3412] font-bold block mb-1">
          WHAT&apos;S MISSING / WHAT&apos;S WEAK
        </span>
        <p className="text-[11px] sm:text-[12px] text-[#334155] leading-relaxed">
          Three real critiques. First — the page layout is a mess. Second — no name on the submission. Third — proactive context surfacing depends on reading the user&apos;s current tab, which requires either a browser extension with deep permissions or desktop integration, creating privacy concerns.
        </p>
      </div>

      {/* Section: THE ENTREPRENEUR LENS */}
      <div className="mb-3.5 p-2.5 rounded-[8px] bg-[#f8fafc] border border-[#e2e8f0]">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#9a3412] font-bold block mb-1">
          THE ENTREPRENEUR LENS
        </span>
        <p className="text-[11px] sm:text-[12px] text-[#334155] leading-relaxed italic">
          &quot;I&apos;d download this on day 1 if it shipped. That&apos;s the test. The wedge is real, the audience is reachable. The risk is execution complexity — scope down to one source first.&quot;
        </p>
      </div>

      {/* FIX THIS NEXT */}
      <div className="rounded-[8px] bg-[#f1f5f9] p-3 border border-[#cbd5e1]">
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#0f172a] font-bold block mb-1.5">
          FIX THIS NEXT
        </span>
        <ol className="list-decimal list-inside space-y-1 text-[11px] sm:text-[12px] text-[#334155] leading-snug">
          <li>Put your name on it. Rewrite top-to-bottom: problem → audience → product → moat → pricing.</li>
          <li>
            <strong className="text-[#0f172a]">Pick ONE source to start (probably YouTube — the timestamp jump is the killer feature).</strong> Build that flawlessly, expand later.
          </li>
        </ol>
      </div>

      {/* Footer page score */}
      <div className="mt-3 pt-2 border-t border-[#f1f5f9] flex items-center justify-between text-[10px] text-[#94a3b8] font-mono">
        <span>Cohort Validation Sheet · ScaleHouse Season 1</span>
        <span>45 / 70</span>
      </div>
    </div>
  );
}
