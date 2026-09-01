import { motion } from 'motion/react';
import { Lightbulb, Layers, Search, Sparkles, Sliders, Terminal, Compass, Layout } from 'lucide-react';

const conceptDirections = [
  {
    letter: 'A',
    title: 'The Passive Vault',
    type: 'Web Dashboard',
    desc: 'A web app where saved YouTube videos are processed into structured lecture notes and taxonomy trees for weekend browsing.',
    pros: 'Deep structured reading experience, easy to organize full courses.',
    cons: 'Requires leaving Figma and breaking design flow when a problem happens.',
    icon: Layout,
  },
  {
    letter: 'B',
    title: 'The In-Flow HUD Overlay',
    type: 'Global Shortcut (Alt+Shift+R)',
    desc: 'A lightweight spotlight search that triggers over any tool (Figma, browser, code editor). Shows the exact 30s video clip snippet in an overlay.',
    pros: 'Zero context-switch; answers the exact question in 5 seconds.',
    cons: 'Requires browser extension & clean floating video preview widget.',
    icon: Terminal,
    isStarred: true,
  },
  {
    letter: 'C',
    title: 'Visual Frame Analysis',
    type: 'Multi-Modal Computer Vision',
    desc: 'Extracting keyframes every 10 seconds from videos to visually recognize button states, layout grids, and color palettes.',
    pros: 'Visual search for exact UI patterns.',
    cons: 'Massive compute/GPU requirements, very expensive for a solo builder prototype.',
    icon: Layers,
  },
  {
    letter: 'D',
    title: 'Proactive Canvas Inspector',
    type: 'Background Figma Plugin',
    desc: 'Reading the designer’s active Figma selection and automatically suggesting relevant tutorials in the sidebar.',
    pros: 'Zero-search proactive assistance.',
    cons: 'Creepy privacy implications, high permission friction, prone to irrelevant spam.',
    icon: Compass,
  },
];

export function Chapter06Ideation() {
  return (
    <section
      id="ch-06-ideation"
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
              06
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHAT COULD REYO BECOME?
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I knew I didn’t want to build another bookmark list.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            With the research validating that retrieval was the core breakdown, I began brainstorming different product architectures. I explored four distinct concepts, testing how each form factor would fit into a designer’s daily working flow.
          </p>

          {/* 4 Concept Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {conceptDirections.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.letter}
                  className={`p-6 rounded-[16px] border flex flex-col justify-between transition-all ${
                    item.isStarred
                      ? 'bg-[var(--bg)] border-[var(--accent)]/50 shadow-[var(--card-glow-rest)] relative overflow-hidden'
                      : 'bg-[var(--bg)] border-[var(--border)] shadow-sm'
                  }`}
                >
                  {item.isStarred && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] aurora-gradient" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--accent)]">
                          CONCEPT {item.letter}
                        </span>
                        <span className="text-[11px] text-[var(--text-secondary)] font-accent">
                          {item.type}
                        </span>
                      </div>
                      <Icon className="w-4 h-4 text-[var(--text-secondary)]" />
                    </div>

                    <h3 className="font-bold text-[18px] text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] space-y-2 text-[12px]">
                    <div className="text-emerald-400/90 flex items-start gap-1.5">
                      <span className="font-bold font-mono">+</span>
                      <span>{item.pros}</span>
                    </div>
                    <div className="text-red-400/80 flex items-start gap-1.5">
                      <span className="font-bold font-mono">-</span>
                      <span>{item.cons}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Personal Thought Reflection */}
          <div className="p-5 rounded-[12px] bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[var(--accent)] shrink-0" />
            <p className="text-[14px] text-[var(--text-primary)] font-light">
              <strong>My Early Hypothesis:</strong> The ideal sweet spot was combining <strong>Concept B (Instant In-Flow Retrieval)</strong> with a clean <strong>Concept A (Structured Knowledge Vault)</strong>, while avoiding intrusive background screen scrapers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
