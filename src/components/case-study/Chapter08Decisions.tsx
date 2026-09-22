import { motion } from 'motion/react';
import { CheckCircle2, Clock, Trash2, ArrowRight, Sparkles, HelpCircle, Layers, Check } from 'lucide-react';

const coreDecisions = [
  {
    decisionNum: '01',
    area: 'HOW SAVING WORKS',
    problem: 'If saving takes more than 1 second, designers simply won’t do it while watching tutorials.',
    considered: ['Manual copy-pasting into a web dashboard', 'Background browser history tracker (invasive)', '1-Click Chrome extension with instant shortcut (Alt+S)'],
    chose: '1-Click Chrome Extension + Alt+S shortcut',
    why: 'Zero friction. Takes <50ms, captures video metadata, and sends the URL straight to background queue without interrupting the video.',
    tag: 'Frictionless Ingestion',
  },
  {
    decisionNum: '02',
    area: 'HOW CONTENT IS ORGANIZED',
    problem: 'Manual folder organization and tagging causes the bookmark graveyard effect.',
    considered: ['User-created folder trees (Notion-style)', 'Simple flat tag clouds', 'Automated 4-Tier Taxonomy (Topic → Objective → Concept → Skill)'],
    chose: 'Automated 4-Tier Semantic Taxonomy with LLM classification',
    why: 'Completely eliminates user organization fatigue. Organizes chunks by how human memory naturally recalls design techniques.',
    tag: 'Zero-Manual Overhead',
  },
  {
    decisionNum: '03',
    area: 'HOW SEARCH & RETRIEVAL WORKS',
    problem: 'Designers rarely remember exact video titles — they remember fuzzy concepts (e.g. "responsive card wrap").',
    considered: ['Exact title keyword search', 'Raw full-transcript regex text matching', 'Hybrid Vector Semantic Search (pgvector) over 45s timestamp chunks'],
    chose: 'Hybrid Vector Embeddings + Keyword Semantic Retrieval',
    why: 'Allows searching by conceptual intent. Retrieves the exact 15-second timestamp answer in <200ms.',
    tag: 'Intent-Based Search',
  },
  {
    decisionNum: '04',
    area: 'HOW INFORMATION IS SURFACED',
    problem: 'Switching away from Figma to open a heavy web browser tab breaks creative flow.',
    considered: ['Full-screen 3-column web dashboard', 'Persistent floating screen widget (overlaps UI)', 'In-Flow Spotlight HUD (Alt+Shift+R) with embedded snippet player'],
    chose: 'Spotlight HUD Overlay + 30-Second Timestamp Loop',
    why: 'Zero desktop clutter when idle. Pops up instantly over Figma, plays the exact 10s trick, and closes with Esc.',
    tag: 'In-Flow Recall',
  },
];

const scopeCategories = [
  {
    category: 'V1 CORE (BUILT NOW)',
    color: 'border-emerald-500/40 bg-emerald-950/15',
    tagColor: 'text-emerald-400 border-emerald-500/40',
    icon: CheckCircle2,
    items: ['YouTube caption ingestion & yt-dlp extraction', '4-Tier auto taxonomy classification', 'In-Flow Spotlight search overlay (Alt+Shift+R)', 'Timestamp jump with snippet video player'],
  },
  {
    category: 'LATER (POST-V1)',
    color: 'border-amber-500/40 bg-amber-950/15',
    tagColor: 'text-amber-400 border-amber-500/40',
    icon: Clock,
    items: ['Audio podcast & Loom video ingestion', 'Shared team knowledge vaults', 'Direct native Figma canvas plugin'],
  },
  {
    category: 'DROPPED COMPLETELY',
    color: 'border-red-500/40 bg-red-950/15',
    tagColor: 'text-red-400 border-red-500/40',
    icon: Trash2,
    items: ['Background screen OCR layer reader (privacy risk)', 'Complex manual nested folder creation'],
  },
];

export function Chapter08Decisions() {
  return (
    <section
      id="ch-07-decisions"
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
              07
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              MY PRODUCT DECISIONS (THE CORE REASONING)
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Four key decisions that shaped Reyo.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-8">
            For every major architectural fork in the road, I evaluated the trade-offs against a single principle: <em>Does this eliminate the friction between getting stuck in Figma and seeing the 10-second answer?</em>
          </p>

          {/* Scoping to YouTube First callout */}
          <div className="p-6 rounded-[14px] bg-[var(--bg)] border border-[var(--border)] mb-10 max-w-[840px]">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
              WHY SCOPE TO YOUTUBE FIRST (DESPITE SURVEY DATA)?
            </span>
            <p className="text-[14px] sm:text-[14.5px] text-[var(--text-secondary)] font-light leading-relaxed">
              My survey showed designers save most to Instagram (72%) and Pinterest (72%), with YouTube fourth at 60%. But video is where retrieval is hardest — scrubbing a 40-minute tutorial for a 30-second Figma trick is genuinely painful in a way that looking at a saved image is not. YouTube had open caption tracks, rich spoken content, and the highest density of actionable design technique. I scoped to YouTube not because it was the most-saved platform, but because the retrieval failure was most severe there, and because solving video creates the hardest technical foundation first.
            </p>
          </div>

          {/* 4 Deep Decision Cards: Problem -> Considered -> Chose -> Why */}
          <div className="space-y-6 mb-12">
            {coreDecisions.map((item) => (
              <div
                key={item.decisionNum}
                className="p-6 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                      DECISION {item.decisionNum}
                    </span>
                    <h3 className="font-bold text-[16px] sm:text-[17px] text-[var(--text-primary)]">
                      {item.area}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] px-2.5 py-0.5 rounded bg-[var(--surface)]">
                    {item.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-[13px]">
                  {/* The Problem (3 cols) */}
                  <div className="md:col-span-3 p-3.5 rounded-[10px] bg-[var(--surface)] border border-[var(--border)]">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-red-400 font-semibold block mb-1">
                      THE PROBLEM
                    </span>
                    <p className="text-[var(--text-secondary)] font-light leading-snug">
                      {item.problem}
                    </p>
                  </div>

                  {/* What I Considered (3 cols) */}
                  <div className="md:col-span-4 p-3.5 rounded-[10px] bg-[var(--surface)] border border-[var(--border)]">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      WHAT I CONSIDERED
                    </span>
                    <ul className="space-y-1 text-[12px] text-[var(--text-secondary)] font-light">
                      {item.considered.map((opt, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-1.5">
                          <span className="text-[var(--text-secondary)] opacity-60">•</span>
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What I Chose & Why (5 cols) */}
                  <div className="md:col-span-5 p-3.5 rounded-[10px] bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                      WHAT I CHOSE & WHY
                    </span>
                    <div className="font-medium text-[var(--text-primary)] text-[13px] mb-1">
                      {item.chose}
                    </div>
                    <p className="text-[12.5px] text-[var(--text-secondary)] font-light leading-snug">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Discipline Summary (V1 vs Later vs Dropped) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scopeCategories.map((group, gIdx) => {
              const Icon = group.icon;
              return (
                <div
                  key={gIdx}
                  className={`p-5 rounded-[14px] border ${group.color} bg-[var(--bg)] shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-[var(--text-primary)]" />
                      <span className={`font-accent text-[11px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${group.tagColor}`}>
                        {group.category}
                      </span>
                    </div>

                    <ul className="space-y-2 text-[12.5px] text-[var(--text-secondary)] font-light">
                      {group.items.map((it, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">↳</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
