import { motion } from 'motion/react';
import { Sparkles, Layers, Zap, Play } from 'lucide-react';

const colorTokens = [
  {
    name: 'Obsidian Canvas',
    token: '--bg',
    hex: '#070B14',
    role: 'Root canvas & backdrop to reduce eye strain',
    sampleBg: 'bg-[#070B14]',
    border: 'border-[#1e293b]',
    text: 'text-white',
    contrast: 'WCAG AAA (18.4:1)',
  },
  {
    name: 'Void Surface',
    token: '--surface',
    hex: '#111827',
    role: 'Primary cards, spotlight HUD, and elevated panels',
    sampleBg: 'bg-[#111827]',
    border: 'border-[#374151]',
    text: 'text-white',
    contrast: 'WCAG AAA (15.2:1)',
  },
  {
    name: 'Laser Cyan',
    token: '--accent-cyan',
    hex: '#38BDF8',
    role: 'Timestamp seek heads, active video playhead, precision cues',
    sampleBg: 'bg-[#38BDF8]',
    border: 'border-[#0284c7]',
    text: 'text-black',
    contrast: 'High Energy',
  },
  {
    name: 'Electric Lavender',
    token: '--accent-purple',
    hex: '#A78BFA',
    role: 'AI classification tags, taxonomy hierarchy, primary buttons',
    sampleBg: 'bg-[#A78BFA]',
    border: 'border-[#7c3aed]',
    text: 'text-black',
    contrast: 'Signature Brand',
  },
  {
    name: 'Pulse Emerald',
    token: '--accent-emerald',
    hex: '#34D399',
    role: 'Ingestion complete, vector match score >90%, active status',
    sampleBg: 'bg-[#34D399]',
    border: 'border-[#059669]',
    text: 'text-black',
    contrast: 'Live Pipeline',
  },
  {
    name: 'High-Contrast Text',
    token: '--text-primary',
    hex: '#F8FAFC',
    role: 'Main headlines, transcript lines, search queries',
    sampleBg: 'bg-[#F8FAFC]',
    border: 'border-[#cbd5e1]',
    text: 'text-black',
    contrast: 'WCAG AAA',
  },
];

const typographySpec = [
  {
    font: 'Syne (Geometric Display)',
    role: 'Headlines, Display Titles, Accents',
    sample: 'Instant Video Recall for Designers',
    size: '32px / 700 Bold / -0.03em tracking',
  },
  {
    font: 'Plus Jakarta Sans',
    role: 'Body, Dialogs, Card Content',
    sample: 'Jump directly to the 15-second Figma auto-layout trick.',
    size: '14–16px / 400 Light & 500 Medium / 1.6 line-height',
  },
  {
    font: 'JetBrains Mono',
    role: 'Timestamps, Telemetry, Shortcuts',
    sample: '08:42.15 · 1080p · 98% MATCH · Alt+Shift+R',
    size: '11–12px / 600 SemiBold / 0.05em letter spacing',
  },
];

export function Chapter11DesignSystem() {
  return (
    <section
      id="ch-11-feel"
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
              10
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              VISUAL DIRECTION & DESIGN SYSTEM
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I wanted Reyo to feel like a precision instrument, not generic AI slop.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            Most modern AI products fall into two visual traps: either overwhelming spreadsheet databases (Notion, Airtable) or generic purple-gradient &quot;magic sparkles&quot;. For Reyo, I designed a dark obsidian aesthetic inspired by high-end audio engineering consoles, camera viewfinders, and precision code editors.
          </p>

          {/* 1. COLOR PALETTE & DESIGN TOKENS */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                01 · COLOR PALETTE & FUNCTIONAL TOKENS
              </span>
              <span className="text-[12px] font-mono text-[var(--text-secondary)]">WCAG AAA Calibrated</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {colorTokens.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[12px] bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className={`w-full h-12 rounded-[8px] ${c.sampleBg} border ${c.border} mb-3 shadow-inner`} />
                    <div className="font-bold text-[13px] text-[var(--text-primary)] leading-tight mb-0.5">
                      {c.name}
                    </div>
                    <div className="font-mono text-[11px] text-[var(--accent)] mb-2">
                      {c.hex}
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] font-light leading-snug">
                      {c.role}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[var(--border)] text-[9.5px] font-mono text-[var(--text-secondary)]">
                    {c.contrast}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. TYPOGRAPHY PAIRING & SCALE */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                02 · TYPOGRAPHY PAIRING & HIERARCHY
              </span>
              <span className="text-[12px] font-mono text-[var(--text-secondary)]">Tri-Font Hierarchy</span>
            </div>

            <div className="space-y-4 mb-6">
              {typographySpec.map((t, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[14px] bg-[var(--surface)] border border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="max-w-[500px]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-accent text-[10px] uppercase text-[var(--accent)] font-semibold">
                        {t.role}
                      </span>
                    </div>
                    <div className="font-bold text-[15px] text-[var(--text-primary)] mb-1">
                      {t.font}
                    </div>
                    <div className="text-[17px] sm:text-[19px] text-[var(--text-primary)] font-light leading-snug">
                      &ldquo;{t.sample}&rdquo;
                    </div>
                  </div>

                  <div className="font-mono text-[11.5px] text-[var(--text-secondary)] bg-[var(--bg)] px-3 py-2 rounded-[8px] border border-[var(--border)] shrink-0 self-start md:self-auto">
                    {t.size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. UI SYSTEM: NESTED RADIUS, SPACING & MICRO-COMPONENTS */}
          <div className="p-6 sm:p-8 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-sm mb-8">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-4">
              03 · UI SYSTEM & MICRO-INTERACTIONS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nested Radius Math & Spatial Grid */}
              <div className="p-5 rounded-[12px] bg-[var(--bg)] border border-[var(--border)]">
                <h4 className="font-semibold text-[14.5px] text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                  <span>Mathematical Nested Radius Rule</span>
                </h4>
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed mb-3">
                  To eliminate awkward bubble corners, every child element follows the strict formula: <code className="px-1.5 py-0.5 rounded bg-[var(--surface)] text-[var(--accent)] font-mono text-[11px]">Inner Radius = Outer Radius - Padding</code>.
                </p>
                <div className="font-mono text-[11px] text-[var(--accent)] bg-[var(--surface-elevated)] p-2.5 rounded border border-[var(--border)]">
                  Outer Card: 14px · Padding: 4px · Inner Item: 10px
                </div>
              </div>

              {/* Live Interactive UI Micro-Tokens */}
              <div className="p-5 rounded-[12px] bg-[var(--bg)] border border-[var(--border)] flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-[14.5px] text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Live Micro-Component Chips</span>
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/40 font-mono text-[11px]">
                      <Play className="w-3 h-3 fill-current" /> 08:42 Timestamp
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 98% Semantic Match
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] font-mono text-[11px] text-[var(--text-secondary)]">
                      Alt + Shift + R
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] font-mono mt-3">
                  Engineered for 12–14px density in Figma workflows
                </div>
              </div>
            </div>
          </div>

          {/* Brand to Product Translation Callout */}
          <div className="p-5 rounded-[12px] bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[var(--accent)] shrink-0" />
            <p className="text-[14px] text-[var(--text-primary)] font-light leading-relaxed">
              <strong>From Color & Typography to Working Product:</strong> The Obsidian background and high-contrast typography directly power the in-flow Spotlight HUD, creating a focused, tactile interface that stays completely out of the way until summoned.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
