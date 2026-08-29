import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface CompetitiveMatrixDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

const matrixRows = [
  { tool: 'YouTube Playlists', method: 'One-click save', org: 'Flat playlists, manual titles', ret: 'Scroll through list', status: 'none', note: 'title only' },
  { tool: 'Notion', method: 'Manual paste + notes', org: 'Pages, databases, tags', ret: 'Search by title/tag', status: 'none', note: 'user must write notes' },
  { tool: 'Raindrop.io', method: 'Browser extension', org: 'Collections, tags', ret: 'Search, filter by tag', status: 'none', note: 'URL/title only' },
  { tool: 'Pocket', method: 'One-click save', org: 'Tags, archive', ret: 'Search by title/tag', status: 'partial', note: 'article text, not video' },
  { tool: 'Are.na', method: 'Manual add', org: 'Channels, connections', ret: 'Browse channels', status: 'none', note: 'visual only' },
  { tool: 'myMind', method: 'Auto-save', org: 'AI auto-tags', ret: 'AI search', status: 'partial', note: 'image recognition, not video' },
  { tool: 'Wakelet', method: 'Clip + organize', org: 'Collections', ret: 'Browse collection', status: 'none', note: 'metadata only' },
  { tool: 'Google Keep', method: 'Manual note', org: 'Labels, colors', ret: 'Search text', status: 'none', note: 'text only' },
  { tool: 'Evernote', method: 'Clip + note', org: 'Notebooks, tags', ret: 'Full-text search', status: 'partial', note: 'text only, not video' },
  { tool: 'Pinterest', method: 'Pin', org: 'Boards', ret: 'Visual browse', status: 'partial', note: 'visual similarity, not content' },
  { tool: 'Mem.ai', method: 'AI-assisted notes', org: 'Auto-organized', ret: 'AI search', status: 'partial', note: 'text only' },
  { tool: 'Fabric', method: 'Save + AI organize', org: 'AI collections', ret: 'AI retrieval', status: 'partial', note: 'web content' },
];

export function CompetitiveMatrixDoc({ onExpand, compact = false }: CompetitiveMatrixDocProps) {
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
      id="competitive-matrix-artifact-card"
      onClick={handleZoom}
      className={`group relative rounded-[14px] bg-[#090d14] text-[#e2e8f0] border border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#6366f1]/60 cursor-pointer ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-6 sm:p-7'
      }`}
    >
      {/* Top action overlay on hover */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e293b]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#334155] flex items-center gap-1.5 text-[11px] text-white">
        <ZoomIn className="w-3.5 h-3.5 text-[#818cf8]" />
        <span>Click to inspect</span>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-[#1e293b]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#a855f7] tracking-wider uppercase">
            REYO / RESEARCH
          </span>
          <span className="text-[11px] text-[#64748b]">· Competitor Evaluation Matrix</span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] font-mono">
          <span className="text-[#64748b]">CONTENT UNDERSTANDING:</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#ef4444]/20 text-[#f87171] border border-[#ef4444]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" /> None
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> Partial
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Full
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h4 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight leading-tight">
          Competitive Analysis
        </h4>
        <p className="text-[12px] sm:text-[13px] text-[#94a3b8] font-light">
          Where existing save tools break down for designers
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-[10px] border border-[#1e293b] bg-[#0c121e] mb-4">
        <table className="w-full text-left text-[11px] border-collapse min-w-[580px]">
          <thead>
            <tr className="bg-[#131b2c] text-[#64748b] font-mono text-[9px] uppercase tracking-wider border-b border-[#1e293b]">
              <th className="py-2.5 px-3">TOOL</th>
              <th className="py-2.5 px-3">SAVE METHOD</th>
              <th className="py-2.5 px-3">ORGANIZATION</th>
              <th className="py-2.5 px-3">RETRIEVAL</th>
              <th className="py-2.5 px-3">CONTENT UNDERSTANDING</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]/60">
            {matrixRows.map((row) => (
              <tr key={row.tool} className="hover:bg-[#1e293b]/40 transition-colors">
                <td className="py-2 px-3 font-semibold text-white">{row.tool}</td>
                <td className="py-2 px-3 text-[#94a3b8]">{row.method}</td>
                <td className="py-2 px-3 text-[#94a3b8]">{row.org}</td>
                <td className="py-2 px-3 text-[#94a3b8]">{row.ret}</td>
                <td className="py-2 px-3">
                  {row.status === 'none' ? (
                    <span className="inline-flex items-center gap-1 text-[#f87171]">
                      <span className="px-1.5 py-0.2 rounded bg-[#ef4444]/20 text-[9px] font-mono font-semibold">
                        NONE
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{row.note}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#fbbf24]">
                      <span className="px-1.5 py-0.2 rounded bg-[#f59e0b]/20 text-[9px] font-mono font-semibold">
                        PARTIAL
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{row.note}</span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Takeaways Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-[#1e293b] text-[11px]">
        <div className="p-2.5 rounded-[8px] bg-[#111827]/70 border border-[#1f2937]">
          <span className="font-mono text-[9px] text-[#a855f7] font-bold block mb-1">01 SAVING IS EASY; RECALL IS NOT</span>
          <p className="text-[#94a3b8] leading-snug">
            Most tools optimize for capture. Retrieval still depends on remembering the source, title, or folder.
          </p>
        </div>

        <div className="p-2.5 rounded-[8px] bg-[#111827]/70 border border-[#1f2937]">
          <span className="font-mono text-[9px] text-[#a855f7] font-bold block mb-1">02 AI HELPS — BUT UNDERSTANDING IS SHALLOW</span>
          <p className="text-[#94a3b8] leading-snug">
            myMind and Fabric introduce AI organization, but understanding remains at surface metadata, not deep video concepts.
          </p>
        </div>

        <div className="p-2.5 rounded-[8px] bg-[#111827]/70 border border-[#1f2937]">
          <span className="font-mono text-[9px] text-[#a855f7] font-bold block mb-1">03 REYO&apos;S WHITESPACE: SAVE → REMEMBER LOOP</span>
          <p className="text-[#94a3b8] leading-snug">
            Unify saves across sources and bring the right reference back while the designer is working in-flow.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 text-[10px] text-[#64748b] font-mono flex items-center justify-between border-t border-[#1e293b]">
        <span>Competitive matrix • 12 tools • Save / organize / retrieve / understand</span>
        <span>REYO RESEARCH ARTIFACT</span>
      </div>
    </div>
  );
}
