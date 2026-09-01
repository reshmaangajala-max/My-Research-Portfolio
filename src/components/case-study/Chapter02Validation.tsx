import { motion } from 'motion/react';
import { HelpCircle, Users, MessageSquare, Layers, Search, Compass } from 'lucide-react';

const questionsIAsked = [
  {
    num: '01',
    title: 'Do other designers save insights this way?',
    question: 'How frequently do designers bookmark or capture video tutorials and design walkthroughs during their week?',
    icon: Users,
  },
  {
    num: '02',
    title: 'What do they actually save?',
    question: 'Is it full courses, short hacks, visual inspiration, design system rules, or specific interaction tricks?',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Why do they save it?',
    question: 'Is it to study immediately, or as an insurance policy for an ambiguous future project?',
    icon: Compass,
  },
  {
    num: '04',
    title: 'What happens when they need it later?',
    question: 'Do they actually open their saved folders, or do they give up and re-search Google and YouTube from scratch?',
    icon: Search,
  },
  {
    num: '05',
    title: 'What tools are they currently using?',
    question: 'Are Notion, Raindrop, Pinterest, or YouTube playlists solving this, or just adding friction?',
    icon: MessageSquare,
  },
];

export function Chapter02Validation() {
  return (
    <section
      id="ch-02-validation"
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
              02
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              IS THIS ACTUALLY A REAL PROBLEM?
            </span>
          </div>

          {/* Chapter Main Title */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I had the problem. But was I the only one?
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            Before designing anything, I wanted to know one thing: was this just my problem, or were other designers struggling with it too?
          </p>

          {/* Research Plan Cards */}
          <div className="mb-10">
            <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--accent)] font-semibold block mb-4">
              WHAT I WANTED TO KNOW
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {questionsIAsked.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className={`p-5 rounded-[12px] bg-[var(--bg)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors shadow-sm ${
                      idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] text-[var(--accent)] font-bold">
                          {item.num}
                        </span>
                        <Icon className="w-4 h-4 text-[var(--text-secondary)]" />
                      </div>
                      <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                        {item.question}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How I framed the validation */}
          <div className="p-6 rounded-[14px] bg-[var(--surface-elevated)] border-l-[3px] border-l-[var(--accent)] border-y border-r border-[var(--border)]">
            <h4 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1">
              My Validation Strategy:
            </h4>
            <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
              I combined <strong>10 in-depth qualitative 1-on-1 interviews</strong> with working UI/UX and product designers, a <strong>30+ respondent quantitative survey</strong>, and deep <strong>hands-on testing of 12 competitor bookmarking and note-taking products</strong>. I wanted hard numbers and authentic stories, not polite validation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
