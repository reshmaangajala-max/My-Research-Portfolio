import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Play, Bookmark, Sparkles, Layers, ArrowRight, Video, ExternalLink, Clock, Tag } from 'lucide-react';

const uiScreens = [
  {
    id: 'spotlight',
    label: '01 · SPOTLIGHT RETRIEVAL',
    title: 'In-Flow Spotlight Search (Alt+Shift+R)',
    subtitle: 'Instant semantic recall across all saved videos without leaving Figma or browser tabs.',
    benefit: 'Reduces search-to-answer time from 15 minutes of scrubbing to 4 seconds.',
    mockup: (
      <div className="w-full rounded-[14px] bg-[#070b14] border border-[#1e293b] p-4 sm:p-6 shadow-2xl">
        {/* Mock Search Bar */}
        <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-[#0f172a] border border-purple-500/50 shadow-lg mb-4">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="text-[13px] font-mono text-white flex-1">
            responsive card layout with hug contents
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e293b] text-[#94a3b8]">
            ESC to close
          </span>
        </div>

        {/* Mock Result List */}
        <div className="space-y-2.5">
          <div className="p-3.5 rounded-[10px] bg-[#111827] border border-purple-500/40 hover:border-purple-400 transition-colors flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-[8px] bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                <Play className="w-4 h-4 fill-purple-400" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-950/50 px-1.5 py-0.2 rounded">
                    08:42
                  </span>
                  <span className="text-[12px] font-bold text-white truncate">
                    Nested Auto-Layout with Minimum Card Constraints
                  </span>
                </div>
                <div className="text-[11px] text-[#94a3b8] truncate">
                  From: <em>&quot;Figma Auto-Layout Masterclass 2026&quot;</em> by Mizko
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-purple-300 px-2 py-1 rounded bg-purple-950/50 border border-purple-500/30 whitespace-nowrap">
              98% Match
            </span>
          </div>

          <div className="p-3.5 rounded-[10px] bg-[#0b101b] border border-[#1e293b] opacity-80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-[8px] bg-[#1e293b] flex items-center justify-center text-[#94a3b8] shrink-0">
                <Play className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[11px] font-bold text-[#94a3b8] bg-[#1e293b] px-1.5 py-0.2 rounded">
                    14:15
                  </span>
                  <span className="text-[12px] font-medium text-[#e2e8f0] truncate">
                    Wrapping Rows with Dynamic Gap Variables
                  </span>
                </div>
                <div className="text-[11px] text-[#64748b] truncate">
                  From: <em>&quot;Advanced Figma Variables &amp; Tokens&quot;</em> by Tim Gabe
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#94a3b8] px-2 py-1 rounded bg-[#1e293b] whitespace-nowrap">
              86% Match
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'player',
    label: '02 · VIDEO PLAYER',
    title: 'Precision Timestamp Knowledge Player',
    subtitle: 'Cues directly to the 15-second solution with transcript sync, concept taxonomy, and takeaway bullets.',
    benefit: 'Eliminates scrubbing through 45 minutes of video fluff.',
    mockup: (
      <div className="w-full rounded-[14px] bg-[#070b14] border border-[#1e293b] p-4 sm:p-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Video Preview Frame (7 cols) */}
          <div className="md:col-span-7 bg-[#0b1120] rounded-[10px] border border-[#1e293b] p-3 flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#94a3b8] mb-2">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                PLAYING AT 08:42 (LOOP: 08:30 - 09:05)
              </span>
              <span>1080p · 60fps</span>
            </div>

            {/* Visual Canvas Representation */}
            <div className="w-full h-24 bg-[#0f172a] rounded-[6px] border border-[#334155] flex flex-col items-center justify-center p-2 text-center">
              <div className="text-[11px] font-mono text-white mb-1">
                Figma Canvas Demonstration
              </div>
              <div className="flex gap-2">
                <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                  Hug: Contents
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                  Min-W: 280px
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#94a3b8] mt-2">
              <span>Auto-Loop: Active</span>
              <span className="text-purple-400">Press Space to Pause</span>
            </div>
          </div>

          {/* Transcript & Taxonomy Sidebar (5 cols) */}
          <div className="md:col-span-5 bg-[#0f172a] rounded-[10px] border border-[#1e293b] p-3 flex flex-col justify-between text-[11px]">
            <div>
              <span className="font-accent text-[9px] uppercase tracking-wider text-purple-400 font-bold block mb-1">
                KEY TAKEAWAYS
              </span>
              <ul className="space-y-1.5 text-[#cbd5e1] font-light text-[11px]">
                <li className="flex items-start gap-1">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Set parent frame to Auto-Layout: Wrap.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Child cards must use Fill container + Min Width constraint.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[#1e293b] mt-2 flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 font-mono text-[9px]">
                #AutoLayout
              </span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 font-mono text-[9px]">
                #ResponsiveCards
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'library',
    label: '03 · KNOWLEDGE LIBRARY',
    title: '4-Tier Auto-Categorized Vault',
    subtitle: 'Browse your entire processed YouTube library organized automatically by Topic, Objective, Concept, and Skill.',
    benefit: 'Zero manual organization required. 170+ videos processed with 91% coverage.',
    mockup: (
      <div className="w-full rounded-[14px] bg-[#070b14] border border-[#1e293b] p-4 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-3 text-[11px]">
          <span className="font-mono text-purple-400">Library: 170+ Videos · 680+ Chunks</span>
          <span className="text-[#94a3b8] font-mono">Filter: All Topics</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 rounded-[8px] bg-[#0f172a] border border-[#1e293b]">
            <div className="text-[12px] font-bold text-white mb-1">Design Systems</div>
            <div className="text-[10px] text-[#94a3b8]">48 Chunks · 14 Videos</div>
          </div>
          <div className="p-3 rounded-[8px] bg-[#0f172a] border border-purple-500/30">
            <div className="text-[12px] font-bold text-purple-300 mb-1">Auto-Layout &amp; Math</div>
            <div className="text-[10px] text-purple-200/70">62 Chunks · 22 Videos</div>
          </div>
          <div className="p-3 rounded-[8px] bg-[#0f172a] border border-[#1e293b]">
            <div className="text-[12px] font-bold text-white mb-1">Micro-Interactions</div>
            <div className="text-[10px] text-[#94a3b8]">35 Chunks · 9 Videos</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'extension',
    label: '04 · EXTENSION CAPTURE',
    title: '1-Click Browser Capture Modal',
    subtitle: 'Captures YouTube tutorials instantly and triggers background transcript parsing with live pipeline status.',
    benefit: 'Capture takes 1 click; processing is completely asynchronous.',
    mockup: (
      <div className="w-full rounded-[14px] bg-[#070b14] border border-[#1e293b] p-4 sm:p-6 shadow-2xl max-w-[480px] mx-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#1e293b] mb-3">
          <span className="text-[12px] font-bold text-white flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-purple-400" />
            Reyo Chrome Extension
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
            CAPTURED
          </span>
        </div>
        <div className="text-[13px] font-semibold text-white mb-1 truncate">
          Figma Advanced Constraints &amp; Breakpoints 2026
        </div>
        <div className="text-[11px] text-[#94a3b8] mb-4">
          Duration: 28:14 · Author: DesignCourse · 1080p
        </div>
        <div className="p-2.5 rounded-[8px] bg-[#0f172a] border border-cyan-500/40 text-[10px] font-mono text-cyan-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Pipeline: Extracting transcript &amp; classifying 4-tier taxonomy...</span>
        </div>
      </div>
    ),
  },
];

export function Chapter15FinalUI() {
  const [selectedScreen, setSelectedScreen] = useState(0);

  const active = uiScreens[selectedScreen];

  return (
    <section
      id="ch-15-final-ui"
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
              15
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              FINAL UI
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            The finished product experience.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            Reyo is designed as a cohesive ecosystem: a lightweight browser extension for 1-click capture, an in-flow spotlight HUD for 4-second recall, and a timestamp knowledge player that loops the exact solution.
          </p>

          {/* Screen Tab Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {uiScreens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setSelectedScreen(idx)}
                className={`p-3 rounded-[12px] border text-left transition-all cursor-pointer ${
                  selectedScreen === idx
                    ? 'bg-[var(--surface-elevated)] border-[var(--accent)] text-[var(--accent)] font-semibold shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                <div className="font-mono text-[10px] mb-1">SCREEN 0{idx + 1}</div>
                <div className="text-[12px] truncate">{screen.title.split(' (')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Screen Showcase Container */}
          <div className="p-6 sm:p-8 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-glow-rest)] mb-10">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] text-[var(--accent)] font-bold">
                  {active.label}
                </span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[var(--text-primary)] mb-2">
                {active.title}
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed mb-3">
                {active.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[12px] text-emerald-400 font-mono">
                <span>Outcome: {active.benefit}</span>
              </div>
            </div>

            {/* Render Mockup */}
            <div className="mt-4">
              {active.mockup}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
