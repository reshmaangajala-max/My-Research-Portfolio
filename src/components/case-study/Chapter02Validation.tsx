import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { Eye, CheckCircle2, Layers, Play, Search, Zap, HelpCircle } from 'lucide-react';

interface Chapter02Props {
  onOpenArtifact: (docId: string) => void;
}

const wantedToKnow = [
  'Do designers save this way?',
  'What do they save?',
  'Why do they save it?',
  'What happens when they need it later?',
  'What tools do they use now?',
];

const repeatedFindings = [
  {
    target: 85,
    suffix: '%',
    title: 'Save weekly or more',
    desc: 'Designers constantly bookmark tutorials, design breakdowns, and talks.',
    isAccent: true,
  },
  {
    target: 72,
    suffix: '%',
    title: 'Fail at retrieval',
    desc: 'Tried and failed to locate a previously saved video on a tight deadline.',
    isAccent: false,
  },
  {
    target: 68,
    suffix: '%',
    title: 'Re-Google & re-watch',
    desc: 'Give up on bookmarks entirely and re-learn the technique from scratch.',
    isAccent: false,
  },
  {
    target: 44,
    suffix: '%',
    title: 'Use 3+ save tools',
    desc: 'Juggling saves across YouTube playlists, Notion, browser bookmarks, and Slack.',
    isAccent: false,
  },
];

const researchInsights = [
  {
    number: '01',
    category: 'RETRIEVAL VS STORAGE',
    research: '85% save weekly, but 72% fail to retrieve when needed.',
    quote: '“I save obsessively, organize nothing, and search when I need. But search can’t find that 30-second Figma trick.” — P4',
    insight: 'Saving is solved; retrieval is broken. Designers don’t need another storage box.',
    decision: 'Position Reyo as an instant recall engine, measuring success by retrieval speed (<5 seconds).',
    icon: Search,
    color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/15',
  },
  {
    number: '02',
    category: 'ZERO MANUAL OVERHEAD',
    research: 'Designers abandon tools that require manual tagging, folders, or note-taking.',
    quote: '“I treat my bookmark folder like a graveyard. I know I will never scroll back to organize it.” — P7',
    insight: 'Any required manual taxonomy triggers immediate abandonment.',
    decision: 'Build an automated 4-tier LLM classifier (Topic → Objective → Concept → Skill). Zero manual tagging required.',
    icon: Layers,
    color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/15',
  },
  {
    number: '03',
    category: 'TIMESTAMP-LEVEL GRANULARITY',
    research: 'Tutorials average 20–45 mins, but the needed tip is only 15–30 seconds.',
    quote: '“I can’t scrub through a 40-minute video when I’m stuck. It’s faster to just re-Google it.” — P2',
    insight: 'Video knowledge value is trapped in specific micro-moments.',
    decision: 'Segment video transcripts into ~45-second semantic chunks with 1-click timestamp jumps.',
    icon: Play,
    color: 'text-amber-400 border-amber-500/30 bg-amber-950/15',
  },
  {
    number: '04',
    category: 'IN-FLOW ACCESSIBILITY',
    research: 'Switching away from Figma or the canvas to a separate app causes context loss.',
    quote: '“If I have to open a heavy browser tab, I lose my train of thought.” — P9',
    insight: 'Recall must happen inside the designer’s active workspace.',
    decision: 'Create an in-flow Spotlight HUD triggered via global shortcut (Alt+Shift+R).',
    icon: Zap,
    color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/15',
  },
];

export function Chapter02Validation({ onOpenArtifact }: Chapter02Props) {
  return (
    <section
      id="ch-02-research"
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
              02
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              RESEARCH → INSIGHT → DECISION
            </span>
          </div>

          {/* Chapter Main Title */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I had the problem. But was I the only one?
          </h2>

          {/* Intro Paragraph */}
          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            Before designing anything, I needed to know whether this was just my problem. Over three weeks I ran 10 in-depth interviews with working UI/UX designers, a 30+ respondent survey, and hands-on testing of 12 competitor tools — looking for hard numbers and honest stories, not polite validation.
          </p>

          {/* Compact Horizontal Strip: WHAT I WANTED TO KNOW */}
          <div className="mb-12 p-4 sm:p-5 rounded-[14px] bg-[var(--surface)] border border-[var(--border)]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <HelpCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                  WHAT I WANTED TO KNOW
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {wantedToKnow.map((question, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[12px] sm:text-[13px] text-[var(--text-secondary)] font-normal px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]"
                  >
                    {question}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Core RESEARCH -> INSIGHT -> DECISION Cards */}
          <div className="space-y-6 mb-12">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-2">
              4 CORE RESEARCH-TO-DECISION SHIFTS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchInsights.map((card) => {
                return (
                  <div
                    key={card.number}
                    className={`p-6 rounded-[16px] border ${card.color.split(' ')[1]} bg-[var(--surface)] flex flex-col justify-between shadow-sm`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] font-bold text-[var(--accent)]">
                          INSIGHT {card.number}
                        </span>
                        <span className="font-accent text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                          {card.category}
                        </span>
                      </div>

                      {/* Research finding & quote */}
                      <div className="p-3 rounded-[10px] bg-[var(--bg)] border border-[var(--border)] mb-3.5">
                        <div className="text-[11px] font-accent uppercase text-[var(--text-secondary)] mb-1">
                          Research Evidence:
                        </div>
                        <p className="text-[13px] text-[var(--text-primary)] font-light leading-snug mb-2">
                          {card.research}
                        </p>
                        <p className="text-[12px] text-[var(--text-secondary)] italic">
                          {card.quote}
                        </p>
                      </div>

                      {/* Insight */}
                      <div className="mb-3.5">
                        <div className="text-[11px] font-accent uppercase text-amber-400 font-semibold mb-1">
                          Key Insight:
                        </div>
                        <p className="text-[13.5px] text-[var(--text-primary)] font-medium leading-snug">
                          {card.insight}
                        </p>
                      </div>
                    </div>

                    {/* Decision */}
                    <div className="pt-3 border-t border-[var(--border)]">
                      <div className="text-[11px] font-accent uppercase text-[var(--accent)] font-semibold mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Product Decision:</span>
                      </div>
                      <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                        {card.decision}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Survey Metric Counters (The Numbers) */}
          <div className="mb-12">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
              BY THE NUMBERS (SURVEY OF 30+ DESIGNERS)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {repeatedFindings.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[14px] bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div>
                    <div className="text-[34px] font-bold leading-none mb-2">
                      <StatCounter
                        numericTarget={item.target}
                        suffix={item.suffix}
                        isAccent={item.isAccent}
                      />
                    </div>
                    <h4 className="font-semibold text-[14px] text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cohort & Mentor Validation (ScaleHouse 7/10) */}
          <div className="p-6 rounded-[14px] bg-[var(--surface-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                  SCORE 7/10
                </span>
                <span className="text-[12px] text-[var(--text-secondary)] font-medium">
                  ScaleHouse Accelerator Cohort Review
                </span>
              </div>
              <h4 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1">
                &quot;The wedge is real: proactive timestamp surfacing inside videos is the killer feature.&quot;
              </h4>
              <p className="text-[13px] text-[var(--text-secondary)] font-light">
                Mentor feedback confirmed the market opportunity: <em>Pick ONE source first (YouTube), build that flawlessly, and expand later.</em>
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <button
                onClick={() => onOpenArtifact('interview-analysis')}
                className="px-3.5 py-2 rounded-full bg-[var(--surface)] hover:bg-[var(--border)] border border-[var(--border)] text-[12px] text-[var(--accent)] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interviews Doc</span>
              </button>
              <button
                onClick={() => onOpenArtifact('scalehouse-feedback')}
                className="px-3.5 py-2 rounded-full bg-[var(--surface)] hover:bg-[var(--border)] border border-[var(--border)] text-[12px] text-[var(--accent)] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>ScaleHouse Sheet</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
