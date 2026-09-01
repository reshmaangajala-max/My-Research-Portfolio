import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Check, X, Minus, Sparkles, Layers, Search, ArrowRight } from 'lucide-react';

interface Chapter05Props {
  onOpenArtifact: (docId: string) => void;
}

const competitorTools = [
  { name: 'YouTube Playlists', save: '1-click bookmark', org: 'Flat manual lists', ret: 'Manual scroll', deepVideo: 'None (title only)', status: 'none' },
  { name: 'Notion', save: 'Manual copy/paste', org: 'Pages, DBs, tags', ret: 'Search title/notes', deepVideo: 'None (user writes notes)', status: 'none' },
  { name: 'Raindrop.io', save: 'Browser extension', org: 'Collections, tags', ret: 'Search tags/URL', deepVideo: 'None (metadata only)', status: 'none' },
  { name: 'myMind', save: 'Auto-save extension', org: 'AI auto-tags', ret: 'AI visual search', deepVideo: 'Partial (images, not video)', status: 'partial' },
  { name: 'Fabric', save: 'Clip & save', org: 'AI collections', ret: 'AI semantic search', deepVideo: 'Partial (web pages, not video)', status: 'partial' },
  { name: 'Pocket', save: '1-click save', org: 'Tags & archive', ret: 'Full text search', deepVideo: 'Partial (article text only)', status: 'partial' },
  { name: 'Are.na', save: 'Manual add', org: 'Channels & blocks', ret: 'Browse channels', deepVideo: 'None (visual blocks only)', status: 'none' },
  { name: 'Evernote', save: 'Web clipper', org: 'Notebooks, tags', ret: 'Text search', deepVideo: 'Partial (text only)', status: 'partial' },
  { name: 'Mem.ai', save: 'AI note capture', org: 'Auto graph', ret: 'AI assistant', deepVideo: 'Partial (text notes only)', status: 'partial' },
  { name: 'Pinterest', save: 'Pin button', org: 'Boards', ret: 'Visual feed', deepVideo: 'Partial (image similarity)', status: 'partial' },
  { name: 'Google Keep', save: 'Manual paste', org: 'Color labels', ret: 'Text search', deepVideo: 'None', status: 'none' },
  { name: 'Wakelet', save: 'Clip URL', org: 'Collections', ret: 'Manual browse', deepVideo: 'None', status: 'none' },
];

export function Chapter05Competition({ onOpenArtifact }: Chapter05Props) {
  const [filter, setFilter] = useState<'all' | 'partial' | 'none'>('all');

  const filteredTools = competitorTools.filter((t) => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  return (
    <section
      id="ch-05-competition"
      className="w-full py-20 md:py-28 bg-[var(--bg)] transition-colors duration-500"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Chapter Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[12px] font-semibold text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              05
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHAT ALREADY EXISTS?
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I tested 12 products. Everyone solves saving; nobody solves video retrieval.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            I spent 2–3 hours each with 12 existing bookmark, note-taking, and AI knowledge tools. I saved actual YouTube design tutorials into each tool and tested how easy it was to find a specific technique a week later.
          </p>

          {/* Filter Bar & Artifact Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-[var(--text-secondary)] font-medium">Filter by Video Understanding:</span>
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[var(--accent)] text-white font-bold'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                All (12)
              </button>
              <button
                onClick={() => setFilter('partial')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  filter === 'partial'
                    ? 'bg-amber-500/30 text-amber-300 font-bold border border-amber-500/50'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                Partial AI (6)
              </button>
              <button
                onClick={() => setFilter('none')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  filter === 'none'
                    ? 'bg-red-500/30 text-red-300 font-bold border border-red-500/50'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                Zero Video AI (6)
              </button>
            </div>

            <button
              onClick={() => onOpenArtifact('competitive-matrix')}
              className="text-[12px] font-mono text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Full Competitive Matrix Artifact →</span>
            </button>
          </div>

          {/* Competitive Matrix Table */}
          <div className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--surface-elevated)] border-b border-[var(--border)] text-[11px] font-accent uppercase tracking-wider text-[var(--text-secondary)]">
                    <th className="py-3 px-4">Tool</th>
                    <th className="py-3 px-4">Save Method</th>
                    <th className="py-3 px-4">Organization</th>
                    <th className="py-3 px-4">Retrieval Method</th>
                    <th className="py-3 px-4">Deep Video Understanding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] text-[13px] font-light text-[var(--text-primary)]">
                  {filteredTools.map((tool) => (
                    <tr key={tool.name} className="hover:bg-[var(--surface-elevated)]/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">
                        {tool.save}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">
                        {tool.org}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">
                        {tool.ret}
                      </td>
                      <td className="py-3 px-4">
                        {tool.status === 'none' ? (
                          <span className="inline-flex items-center gap-1.5 text-red-400 font-mono text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            {tool.deepVideo}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {tool.deepVideo}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 Summary Blocks: What Everyone Does / What Some Do / What Is Still Missing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[14px] bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-semibold block mb-2">
                WHAT EVERYONE ALREADY DOES
              </span>
              <h4 className="font-semibold text-[15px] text-[var(--text-primary)] mb-2">
                1-Click URL Bookmarking
              </h4>
              <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                Saving links is completely commoditized. Every browser and app allows capturing a URL with a single click. Adding another generic link saver has zero value.
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-amber-400 font-semibold block mb-2">
                WHAT SOME PRODUCTS DO
              </span>
              <h4 className="font-semibold text-[15px] text-[var(--text-primary)] mb-2">
                AI Tagging on Text & Images
              </h4>
              <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                Products like myMind and Fabric use AI for auto-tagging articles and screenshots. But their understanding stops at metadata; they treat video as an opaque URL.
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[var(--surface)] border border-[var(--accent)]/40 bg-[var(--accent)]/5">
              <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-semibold block mb-2">
                WHAT IS STILL MISSING (THE GAP)
              </span>
              <h4 className="font-semibold text-[15px] text-[var(--text-primary)] mb-2">
                In-Video Concept & Timestamp Recall
              </h4>
              <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                No product extracts spoken transcripts into timestamped semantic chunks, classifies them by design skills, and allows in-flow jumping to the exact 10-second answer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
