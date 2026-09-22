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

// Real data from 25-response survey
const surveyStats = [
  {
    target: 84,
    suffix: '%',
    title: 'Fail at retrieval weekly',
    desc: 'Fail to find something they know they saved, at least once a week.',
    isAccent: true,
  },
  {
    target: 44,
    suffix: '%',
    title: 'High management frustration',
    desc: 'Rate managing saved content 4 or 5 out of 5 for frustration.',
    isAccent: true,
  },
  {
    target: 40,
    suffix: '%',
    title: 'Give up & re-search',
    desc: 'Either fail to find it, or give up and search Google again.',
    isAccent: false,
  },
  {
    target: 88,
    suffix: '%',
    title: 'Save for future inspiration',
    desc: 'Save content as inspiration for future design projects.',
    isAccent: false,
  },
  {
    target: 36,
    suffix: '%',
    title: 'Need it mid-design',
    desc: 'Need saved content mid-design, in the moment of execution.',
    isAccent: false,
  },
  {
    target: 16,
    suffix: '%',
    title: 'Find what they saved quickly',
    desc: 'Only 16% report being able to find what they saved quickly.',
    isAccent: false,
  },
];

const surveyQuotes = [
  {
    quote:
      '“When I’m in a situation when I need to reference something that I saved, I actually forget that I even had something saved for that situation.”',
    author: 'Survey respondent',
    takeaway: 'In-flow recall failure: saving happens, but connection to the active task is lost.',
  },
  {
    quote:
      '“Something like apple or raycast search bar whenever i want to search i can search based on the tags i save.”',
    author: 'Survey respondent',
    takeaway: 'Keyboard-first, spotlight-style retrieval is the natural mental model for fast lookup.',
  },
  {
    quote:
      '“If there were a category-based search option, it would be easier to find saved items. Sometimes I remember the designer’s name but not the topic.”',
    author: 'Survey respondent',
    takeaway: 'Recall is fuzzy — designers remember fragments (creator, tool, or general technique), not video titles.',
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
            Before designing anything, I needed to know whether this was just my problem. I ran a survey of 25 designers and hands-on testing of 12 competitor tools — looking for hard numbers and honest stories, not polite validation.
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

          {/* Survey of 25 designers - Metric Counters */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="font-accent text-[12px] uppercase tracking-[2px] text-[var(--accent)] font-semibold">
                Survey of 25 designers
              </span>
              <span className="text-[12px] text-[var(--text-secondary)] font-mono">
                25 Verified Responses
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {surveyStats.map((item, idx) => (
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
                    <h4 className="font-semibold text-[14px] text-[var(--text-primary)] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[var(--text-secondary)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verbatim Quotes from Survey Respondents */}
          <div className="mb-12">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-3">
              WHAT DESIGNERS SAID (VERBATIM OPEN-ENDED RESPONSES)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {surveyQuotes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[14px] bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <p className="text-[13.5px] text-[var(--text-primary)] font-light leading-relaxed mb-4 italic">
                      {item.quote}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border)]">
                    <div className="text-[11px] font-mono text-[var(--accent)] font-semibold mb-1">
                      — {item.author}
                    </div>
                    <p className="text-[11.5px] text-[var(--text-secondary)] font-light leading-tight">
                      {item.takeaway}
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
                onClick={() => onOpenArtifact('survey-responses')}
                className="px-3.5 py-2 rounded-full bg-[var(--surface)] hover:bg-[var(--border)] border border-[var(--border)] text-[12px] text-[var(--accent)] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Survey Dataset</span>
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
