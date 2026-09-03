import { motion } from 'motion/react';
import {
  ThumbsUp,
  HelpCircle,
  MessageSquarePlus,
  Check,
  X,
} from 'lucide-react';

const feedbackPillars = [
  {
    type: 'worked',
    label: 'WHAT WORKED',
    icon: ThumbsUp,
    badgeColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30 bg-emerald-950/10',
    title: '"The timestamp jump feels like magic."',
    desc: 'Designers were stunned when Reyo immediately opened the video player right at 08:42 rather than forcing them to search through the entire 40-minute tutorial. The 4-tier taxonomy successfully mapped fuzzy phrases to exact concepts.',
    tag: 'Validation: Core value confirmed',
    tagColor: 'border-emerald-500/20 text-emerald-400',
  },
  {
    type: 'confused',
    label: 'WHAT CONFUSED PEOPLE',
    icon: HelpCircle,
    badgeColor: 'text-amber-400',
    borderColor: 'border-amber-500/30 bg-amber-950/10',
    title: 'Silent Background Processing',
    desc: 'When saving a new video, the initial build showed a subtle checkmark and ran transcript classification silently. Users were confused: "Is it done? Can I search it now, or is it still processing?"',
    tag: 'Friction: Lack of pipeline transparency',
    tagColor: 'border-amber-500/20 text-amber-400',
  },
  {
    type: 'asked',
    label: 'WHAT THEY ASKED FOR',
    icon: MessageSquarePlus,
    badgeColor: 'text-purple-400',
    borderColor: 'border-purple-500/30 bg-purple-950/10',
    title: 'Inline Snippet Video Player',
    desc: 'Users didn’t want to open a brand-new browser tab every time they clicked a search result. They asked for an embedded preview player inside the spotlight overlay so they could inspect the 15-second clip and close it immediately.',
    tag: 'Feature request: In-place snippet preview',
    tagColor: 'border-purple-500/20 text-purple-400',
  },
];

const iterations = [
  {
    num: '01',
    area: 'SAVING & INGESTION',
    title: 'From Silent Saving to Live Pipeline Status',
    problem: 'Users had zero visibility into whether transcript extraction and AI taxonomy classification were complete or pending in queue.',
    before: {
      title: 'Before (v0.1)',
      desc: 'Static "Saved!" toast notification that disappeared in 2 seconds. No way to check if AI classification had finished.',
      color: 'border-red-500/30 bg-red-950/10 text-red-300',
    },
    after: {
      title: 'After (v1.0)',
      desc: 'Compact processing pill showing live stage: [Extracting Captions → Chunking → Gemini Taxonomy → Ready in Library].',
      color: 'border-emerald-500/30 bg-emerald-950/10 text-emerald-300',
    },
  },
  {
    num: '02',
    area: 'RETRIEVAL ALGORITHM',
    title: 'From Strict Keywords to Hybrid Semantic Search',
    problem: 'Designers rarely recall exact tutorial titles. Searching "auto layout wrap" failed if the YouTube video title was "Responsive Figma Tips".',
    before: {
      title: 'Before (v0.1)',
      desc: 'PostgreSQL full-text search matching video titles and manual user notes.',
      color: 'border-red-500/30 bg-red-950/10 text-red-300',
    },
    after: {
      title: 'After (v1.0)',
      desc: 'pgvector cosine similarity embeddings combined with 4-tier taxonomy tags. Matches vague intent to exact spoken timestamp chunks.',
      color: 'border-emerald-500/30 bg-emerald-950/10 text-emerald-300',
    },
  },
  {
    num: '03',
    area: 'VIEWING EXPERIENCE',
    title: 'From Browser Tab Sprawl to In-Place Snippet Loop',
    problem: 'Every search click opened a new YouTube browser tab, cluttering the designer’s workspace with 10+ paused video tabs.',
    before: {
      title: 'Before (v0.1)',
      desc: 'Link redirect directly to youtube.com/watch?v=...&t=522s in a new browser window.',
      color: 'border-red-500/30 bg-red-950/10 text-red-300',
    },
    after: {
      title: 'After (v1.0)',
      desc: 'Embedded lightweight modal player right inside the spotlight HUD, pre-cued to the timestamp with 30s loop and key takeaways.',
      color: 'border-emerald-500/30 bg-emerald-950/10 text-emerald-300',
    },
  },
];

export function Chapter13Testing() {
  return (
    <section
      id="ch-11-testing"
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
              11
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              TESTING → ITERATION
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I put the prototype in front of 5 designers. Here&apos;s what broke, and what I changed.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            I conducted usability testing sessions with 5 UI/UX designers, giving them realistic scenario tasks like: <em>&quot;You are building a complex pricing table in Figma and need to recall how to make rows alternate background fills automatically.&quot;</em>
          </p>

          {/* SUB-BLOCK 1: WHAT THE SESSIONS SURFACED */}
          <div className="mb-12">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-4">
              WHAT THE SESSIONS SURFACED
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {feedbackPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className={`p-6 rounded-[16px] bg-[var(--surface)] border ${pillar.borderColor} flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`flex items-center gap-2 mb-3 ${pillar.badgeColor}`}>
                        <Icon className="w-4 h-4" />
                        <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-bold">
                          {pillar.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-[16px] text-[var(--text-primary)] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className={`mt-4 pt-3 border-t text-[11px] font-mono ${pillar.tagColor}`}>
                      {pillar.tag}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Divider between Sub-blocks */}
          <div className="relative my-14">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[var(--bg)] px-4 text-[11px] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
                FEEDBACK → ITERATION
              </span>
            </div>
          </div>

          {/* SUB-BLOCK 2: WHAT I CHANGED */}
          <div>
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-4">
              WHAT I CHANGED
            </span>

            <div className="space-y-6">
              {iterations.map((item) => (
                <div
                  key={item.num}
                  className="p-6 sm:p-7 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--surface-elevated)]">
                        ITERATION {item.num}
                      </span>
                      <span className="font-accent text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                        {item.area}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-[18px] text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    <strong>Pain Point:</strong> {item.problem}
                  </p>

                  {/* Before & After comparison columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before */}
                    <div className={`p-4 rounded-[12px] border ${item.before.color} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-2 font-accent">
                          <X className="w-3.5 h-3.5" />
                          <span>{item.before.title}</span>
                        </div>
                        <p className="text-[13px] text-[var(--text-primary)] font-light leading-relaxed">
                          {item.before.desc}
                        </p>
                      </div>
                    </div>

                    {/* After */}
                    <div className={`p-4 rounded-[12px] border ${item.after.color} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-2 font-accent">
                          <Check className="w-3.5 h-3.5" />
                          <span>{item.after.title}</span>
                        </div>
                        <p className="text-[13px] text-[var(--text-primary)] font-light leading-relaxed">
                          {item.after.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
