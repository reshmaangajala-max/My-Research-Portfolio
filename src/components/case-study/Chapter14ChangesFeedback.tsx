import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Eye, Check, X } from 'lucide-react';

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

export function Chapter14ChangesFeedback() {
  return (
    <section
      id="ch-14-changes"
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
              14
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHAT I CHANGED AFTER FEEDBACK
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Iterating rapidly from tester confusion to clarity.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            User feedback directly reshaped three fundamental areas of Reyo before writing the final production build. Here is what changed.
          </p>

          {/* 3 Structured Iteration Cards */}
          <div className="space-y-6">
            {iterations.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-sm"
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
        </motion.div>
      </div>
    </section>
  );
}
