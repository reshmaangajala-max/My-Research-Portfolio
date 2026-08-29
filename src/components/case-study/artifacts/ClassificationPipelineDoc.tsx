import { ZoomIn, ArrowRight, Info, AlertTriangle, CheckCircle2, Database, Search, FileText, Cpu, Sparkles, Video, Split } from 'lucide-react';
import { useState } from 'react';

interface ClassificationPipelineDocProps {
  onExpand?: () => void;
  compact?: boolean;
}

const pipelineSteps = [
  { num: '1', title: 'VIDEO URL', tool: 'YouTube URL', desc: 'User saves YouTube video via extension or web app', icon: Video, color: 'text-indigo-400', border: 'border-indigo-500/40', bg: 'bg-indigo-950/40' },
  { num: '2', title: 'CAPTION EXTRACTION', tool: 'yt-dlp', desc: 'Extracts available captions (auto or manual subtitles)', icon: FileText, color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-950/40' },
  { num: '3', title: 'TRANSCRIPT', tool: 'Transcript', desc: 'Cleaned, structured transcript with timestamps', icon: FileText, color: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-950/40' },
  { num: '4', title: 'CHUNKING', tool: 'Split into chunks', desc: 'Break transcript into ~45s segments with timestamps', icon: Split, color: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-950/40' },
  { num: '5', title: 'CLASSIFICATION', tool: 'Gemini API', desc: 'Classifies chunk into: Topic, Objective, Concept, Skill', icon: Sparkles, color: 'text-purple-400', border: 'border-purple-500/40', bg: 'bg-purple-950/40' },
  { num: '6', title: 'EMBEDDINGS', tool: 'Vector embeddings', desc: 'Generate embeddings for each chunk via embedding model', icon: Cpu, color: 'text-teal-400', border: 'border-teal-500/40', bg: 'bg-teal-950/40' },
  { num: '7', title: 'STORAGE', tool: 'Store in database', desc: 'Save chunks, metadata & vectors in Supabase (pgvector)', icon: Database, color: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-950/40' },
  { num: '8', title: 'RETRIEVAL', tool: 'Semantic search', desc: 'Find most relevant chunks using vector similarity', icon: Search, color: 'text-sky-400', border: 'border-sky-500/40', bg: 'bg-sky-950/40' },
];

export function ClassificationPipelineDoc({ onExpand, compact = false }: ClassificationPipelineDocProps) {
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
      id="classification-pipeline-artifact-card"
      onClick={handleZoom}
      className={`group relative rounded-[14px] bg-[#0b101b] text-[#e2e8f0] border border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#38bdf8]/60 cursor-pointer ${
        compact ? 'p-4 sm:p-5 text-[12px]' : 'p-6 sm:p-7'
      }`}
    >
      {/* Top action overlay on hover */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e293b]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#334155] flex items-center gap-1.5 text-[11px] text-white">
        <ZoomIn className="w-3.5 h-3.5 text-[#38bdf8]" />
        <span>Click to inspect</span>
      </div>

      {/* Header with Bottleneck notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-[#1e293b]">
        <div>
          <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-wider block">
            TECHNICAL FLOW
          </span>
          <h4 className="text-[17px] sm:text-[20px] font-bold text-white tracking-tight leading-tight mt-0.5">
            From video to searchable knowledge
          </h4>
        </div>

        {/* Key bottleneck badge */}
        <div className="rounded-[8px] bg-[#1e1b4b] border border-[#4338ca]/60 p-2 sm:p-2.5 flex items-center gap-2 max-w-[320px] shrink-0">
          <Info className="w-4 h-4 text-[#818cf8] shrink-0" />
          <div className="text-[10px] text-[#cbd5e1] leading-tight">
            <strong className="text-white">Key bottleneck:</strong> Gemini free tier (20 req/day) — full library took several weeks to process.
          </div>
        </div>
      </div>

      <p className="text-[12px] sm:text-[13px] text-[#94a3b8] font-light leading-relaxed mb-5">
        This pipeline converts YouTube videos into structured, searchable knowledge. Each video is processed, transcribed, classified, embedded and stored — so relevant concepts can be retrieved later via semantic search.
      </p>

      {/* Horizontal Step Flow Scrollable on mobile */}
      <div className="overflow-x-auto pb-3 mb-5">
        <div className="flex items-stretch gap-2 min-w-[860px]">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-center gap-2 flex-1">
                <div className={`flex-1 rounded-[10px] ${step.bg} border ${step.border} p-3 flex flex-col justify-between h-full min-h-[140px]`}>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] text-[#94a3b8]">
                        {step.num}. {step.title}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${step.color}`} />
                    </div>
                    <div className="text-[12px] font-bold text-white leading-tight mb-1">
                      {step.tool}
                    </div>
                  </div>
                  <p className="text-[10px] text-[#94a3b8] leading-tight mt-1">
                    {step.desc}
                  </p>
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#475569] shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Deepgram ASR Fallback note */}
        <div className="mt-2 pl-4 flex items-center gap-2 text-[10px] text-[#94a3b8] font-mono">
          <span className="text-[#34d399]">↳ Fallback:</span>
          <span>Deepgram Nova-3 ASR — if no captions available, perform speech-to-text audio transcription.</span>
        </div>
      </div>

      {/* Bottom Stats & Key Takeaways Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-3 border-t border-[#1e293b]">
        {/* Left: Processing stats (7 cols) */}
        <div className="lg:col-span-7 bg-[#111827]/70 rounded-[10px] p-3 border border-[#1f2937]">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#94a3b8] block mb-2">
            PROCESSING RESULTS (AS OF JUNE 2026)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="p-2 rounded bg-[#1e293b]/60 border border-[#334155]/40">
              <div className="text-[16px] font-bold text-white">170+</div>
              <div className="text-[9px] text-[#94a3b8]">YouTube videos</div>
            </div>
            <div className="p-2 rounded bg-[#1e293b]/60 border border-[#334155]/40">
              <div className="text-[16px] font-bold text-[#38bdf8]">156</div>
              <div className="text-[9px] text-[#94a3b8]">Transcripts extracted</div>
            </div>
            <div className="p-2 rounded bg-[#065f46]/30 border border-[#059669]/40">
              <div className="text-[16px] font-bold text-[#34d399]">91%</div>
              <div className="text-[9px] text-[#a7f3d0]">Coverage rate</div>
            </div>
            <div className="p-2 rounded bg-[#7c2d12]/30 border border-[#ea580c]/40">
              <div className="text-[16px] font-bold text-[#fb923c]">15</div>
              <div className="text-[9px] text-[#fed7aa]">No captions (manual)</div>
            </div>
          </div>
        </div>

        {/* Right: Key takeaways (5 cols) */}
        <div className="lg:col-span-5 bg-[#111827]/70 rounded-[10px] p-3 border border-[#1f2937] flex flex-col justify-between text-[10px]">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#94a3b8] block mb-1">
            KEY TAKEAWAYS
          </span>
          <div className="space-y-1 text-[#cbd5e1]">
            <div className="flex items-start gap-1.5">
              <span className="text-[#38bdf8] font-bold">1</span>
              <span><strong>Captions exist:</strong> 91% transcribed via yt-dlp.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#38bdf8] font-bold">2</span>
              <span><strong>Gemini free tier bottleneck:</strong> 20 req/day quota.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#38bdf8] font-bold">3</span>
              <span><strong>Structured data wins:</strong> chunks + 4-tier taxonomy enable precision recall.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
