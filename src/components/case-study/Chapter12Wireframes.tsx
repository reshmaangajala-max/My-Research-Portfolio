import { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, CheckCircle2, XCircle, ArrowRight, MousePointer, AppWindow } from 'lucide-react';

const explorations = [
  {
    id: 'exp-1',
    label: 'EXPLORATION 01',
    title: 'The Heavy 3-Column Dashboard',
    status: 'Discarded',
    isWinner: false,
    concept: 'A full-screen Notion-like app with sidebars, nested folders, video grid, and transcript sidebar all visible at once.',
    whyChanged: 'Felt too slow and detached. When a designer was stuck in Figma, opening a full-page heavy web application caused severe context-switching fatigue.',
    wireframePreview: (
      <div className="w-full h-[180px] bg-[#070b14] border border-[#1e293b] rounded-[10px] p-3 flex gap-2 overflow-hidden opacity-80">
        <div className="w-1/4 h-full bg-[#111827] rounded-[6px] border border-[#1f2937] p-2 space-y-1.5">
          <div className="w-full h-2 bg-[#374151] rounded" />
          <div className="w-3/4 h-2 bg-[#374151]/60 rounded" />
          <div className="w-4/5 h-2 bg-[#374151]/40 rounded" />
        </div>
        <div className="w-2/4 h-full bg-[#111827] rounded-[6px] border border-[#1f2937] p-2 space-y-2">
          <div className="w-full h-16 bg-[#1f2937] rounded flex items-center justify-center text-[10px] text-[#94a3b8]">Video Player</div>
          <div className="w-full h-2 bg-[#374151] rounded" />
        </div>
        <div className="w-1/4 h-full bg-[#111827] rounded-[6px] border border-[#1f2937] p-2 space-y-1.5">
          <div className="w-full h-2 bg-[#374151] rounded" />
          <div className="w-full h-2 bg-[#374151]/60 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 'exp-2',
    label: 'EXPLORATION 02',
    title: 'The Persistent Floating Side Bubble',
    status: 'Discarded',
    isWinner: false,
    concept: 'A floating circular avatar always pinned to the side of the screen, expanding into a search drawer when clicked.',
    whyChanged: 'Intrusive and annoying. Designers reported it overlapped critical Figma canvas handles, layers panel, and inspect properties.',
    wireframePreview: (
      <div className="w-full h-[180px] bg-[#070b14] border border-[#1e293b] rounded-[10px] p-3 relative overflow-hidden opacity-80 flex items-center justify-center">
        <div className="w-3/4 h-3/4 border border-dashed border-[#334155] rounded flex items-center justify-center text-[11px] text-[#64748b]">
          Figma Canvas Area
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 border border-purple-400 flex items-center justify-center shadow-lg text-[10px] text-white">
          Reyo
        </div>
      </div>
    ),
  },
  {
    id: 'exp-3',
    label: 'EXPLORATION 03 (CHOSEN)',
    title: 'Spotlight HUD Overlay + Dedicated Vault',
    status: 'Chosen Direction',
    isWinner: true,
    concept: 'A zero-footprint HUD triggered via Alt+Shift+R that floats seamlessly above any workspace, paired with an optional clean library view.',
    whyChanged: 'Perfect balance: 0% screen clutter when idle, <200ms recall when active, dismisses instantly with Escape.',
    wireframePreview: (
      <div className="w-full h-[180px] bg-[#070b14] border border-purple-500/40 rounded-[10px] p-3 flex flex-col items-center justify-center relative overflow-hidden bg-purple-950/10">
        <div className="w-[85%] bg-[#111827] border border-purple-500/50 rounded-[8px] p-2.5 shadow-xl space-y-2">
          <div className="flex items-center gap-2 border-b border-[#1f2937] pb-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <div className="text-[10px] font-mono text-purple-300">Alt+Shift+R · Search your video insights...</div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2 h-10 bg-[#1f2937] rounded p-1 text-[8px] text-[#94a3b8]">08:42 · Auto-layout constraints</div>
            <div className="w-1/2 h-10 bg-[#1f2937] rounded p-1 text-[8px] text-[#94a3b8]">14:20 · Responsive card wrapper</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Chapter12Wireframes() {
  const [selectedExp, setSelectedExp] = useState(2); // default to chosen

  return (
    <section
      id="ch-12-wireframes"
      className="w-full py-20 md:py-28 bg-[var(--surface)] transition-colors duration-500"
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
              12
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WIREFRAMES & EARLY EXPLORATION
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I tried three different structural concepts before getting it right.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            Before jumping into high-fidelity components, I wireframed multiple layout structures to see how they handled the tension between deep video understanding and instant in-flow recall.
          </p>

          {/* 3 Exploration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {explorations.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedExp(idx)}
                className={`p-5 rounded-[16px] border flex flex-col justify-between cursor-pointer transition-all ${
                  item.isWinner
                    ? 'bg-[var(--bg)] border-[var(--accent)]/60 shadow-[var(--card-glow-rest)] ring-1 ring-[var(--accent)]/30'
                    : 'bg-[var(--bg)] border-[var(--border)] opacity-85 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-accent text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                      {item.label}
                    </span>
                    {item.isWinner ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold font-mono">
                        CHOSEN
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold font-mono">
                        DISCARDED
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-[16px] text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>

                  <div className="mb-4">
                    {item.wireframePreview}
                  </div>

                  <p className="text-[12.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-3">
                    {item.concept}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] text-[11.5px] font-light">
                  <span className={item.isWinner ? 'text-emerald-400 font-medium' : 'text-red-400'}>
                    {item.whyChanged}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
