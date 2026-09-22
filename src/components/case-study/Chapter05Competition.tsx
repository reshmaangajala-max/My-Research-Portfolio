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
  return (
    <section
      id="ch-04-competition"
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
              04
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              THE COMPETITIVE REALITY
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Understanding the competitive landscape.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            Evaluating existing saving habits, direct retrieval tools, and platform shifts that occurred during development.
          </p>

          <div className="space-y-6 mb-10">
            {/* Block 1: Where designers actually save today */}
            <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                  BLOCK 01 · WHERE DESIGNERS ACTUALLY SAVE TODAY
                </span>
                <span className="text-[12px] text-[var(--text-secondary)] font-mono">
                  From my survey, 25 responses
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Instagram Saved</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">72%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Pinterest</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">72%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Screenshots</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">68%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">YouTube</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">60%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Dribbble / Behance</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">40%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Notion / Notes</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">40%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">LinkedIn</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">40%</div>
                </div>
                <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="text-[12px] text-[var(--text-secondary)] mb-0.5">Bookmarks</div>
                  <div className="text-[20px] font-bold text-[var(--text-primary)] font-accent">32%</div>
                </div>
              </div>

              <div className="p-3.5 rounded-[10px] bg-[var(--surface-elevated)] border border-[var(--border)] text-[14px] text-[var(--text-primary)] font-medium">
                My real competitor is a habit, not a product — the Instagram save button and a screenshots folder.
              </div>
            </div>

            {/* Block 2: Who is solving retrieval */}
            <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-sm">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-4">
                BLOCK 02 · WHO IS SOLVING RETRIEVAL
              </span>

              <div className="space-y-4">
                <div className="p-4 rounded-[12px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-[15px] text-[var(--text-primary)]">Recall</span>
                    <span className="text-[11px] font-mono text-[var(--accent)]">700k+ users</span>
                  </div>
                  <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-2">
                    Saves videos, articles, and podcasts; auto-organises them into a knowledge graph; offers AI chat over your sources.
                  </p>
                  <div className="text-[12.5px] text-amber-400/90 font-medium">
                    Stops at: Not designer-specific, no in-flow overlay.
                  </div>
                </div>

                <div className="p-4 rounded-[12px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-[15px] text-[var(--text-primary)]">Glasp</span>
                  </div>
                  <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-2">
                    Highlight a moment, click it later, land on that exact second.
                  </p>
                  <div className="text-[12.5px] text-amber-400/90 font-medium">
                    Stops at: You must highlight manually at watch time.
                  </div>
                </div>

                <div className="p-4 rounded-[12px] bg-[var(--bg)] border border-[var(--border)]">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-[15px] text-[var(--text-primary)]">Eightify / summarize.tech</span>
                  </div>
                  <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-2">
                    AI summaries of a single video.
                  </p>
                  <div className="text-[12.5px] text-amber-400/90 font-medium">
                    Stops at: Per-video, not per-library.
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: What changed while I was building */}
            <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-sm">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-amber-400 font-semibold block mb-3">
                BLOCK 03 · WHAT CHANGED WHILE I WAS BUILDING
              </span>
              <p className="text-[14.5px] sm:text-[15px] text-[var(--text-primary)] font-light leading-relaxed mb-4">
                In 2026, YouTube began rolling out Ask YouTube — Gemini-powered search that jumps straight to the moment in a video that answers your question. Timestamp retrieval inside YouTube is becoming a platform feature, not a product. That narrowed what Reyo can defensibly claim. Ask YouTube searches all of YouTube. Reyo searches the things I already chose to keep — and surfaces them without leaving the canvas.
              </p>
              <p className="text-[14.5px] sm:text-[15px] text-[var(--text-primary)] font-light leading-relaxed">
                The differentiator is no longer &quot;jump to the moment&quot;; it is &quot;no foresight required&quot;. Tools like Glasp already let you jump to an exact second, but only if you highlighted it while watching. Reyo classifies every 45-second chunk of everything I saved, whether or not I knew it would matter.
              </p>
            </div>

            {/* Block 4: Where that leaves Reyo */}
            <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--accent)]/10 border border-[var(--accent)]/30 shadow-sm">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
                BLOCK 04 · WHERE THAT LEAVES REYO
              </span>
              <p className="text-[16px] sm:text-[17.5px] text-[var(--text-primary)] font-medium leading-snug">
                Reyo makes the things you already chose to keep retrievable at the moment you need them, without requiring you to have known in advance that you would.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
