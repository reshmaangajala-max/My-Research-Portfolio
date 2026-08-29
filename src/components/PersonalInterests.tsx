import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Music, Compass, Wrench, ArrowRight, Heart } from 'lucide-react';

const interestCards = [
  {
    id: 'tool-teardowns',
    title: 'Tool Teardowns & Product Labs',
    badge: 'Curiosity Engine',
    desc: 'Digging deep into how newly launched tools and technologies work under the hood, identifying usability gaps, and prototyping reimagined products around them.',
    icon: Wrench,
    accentColor: 'text-[#38bdf8]',
    borderHover: 'hover:border-[#38bdf8]/60',
    bgBadge: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20',
    funFact: 'Always testing 5+ experimental apps at any given time.',
    emoji: '⚡️',
  },
  {
    id: 'story-building',
    title: 'Creative Writing & Story Building',
    badge: 'Narrative Craft',
    desc: 'Writing original stories, developing character arcs, and creating lore universes. Storytelling directly informs how I build engaging user journeys.',
    icon: BookOpen,
    accentColor: 'text-[#f472b6]',
    borderHover: 'hover:border-[#f472b6]/60',
    bgBadge: 'bg-[#f472b6]/10 text-[#f472b6] border-[#f472b6]/20',
    funFact: 'Worldbuilding and structure mirror system architecture.',
    emoji: '✍️',
  },
  {
    id: 'dance-rhythm',
    title: 'Dancing & Rhythm',
    badge: 'Movement & Energy',
    desc: 'Passionate dancer bringing rhythm, kinetic expression, and creative spontaneity. Keeps energy high, thoughts clear, and perspective fresh.',
    icon: Music,
    accentColor: 'text-[#fbbf24]',
    borderHover: 'hover:border-[#fbbf24]/60',
    bgBadge: 'bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/20',
    funFact: 'Choreography is just visual sequencing and timing.',
    emoji: '💃',
  },
  {
    id: 'research-design',
    title: 'Research & Living Docs',
    badge: 'Systematic Mind',
    desc: 'Obsessed with transforming unstructured user observations, mental models, and edge cases into crystal-clear living documentation that teams actually use.',
    icon: Compass,
    accentColor: 'text-[#34d399]',
    borderHover: 'hover:border-[#34d399]/60',
    bgBadge: 'bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20',
    funFact: 'A well-structured taxonomy is pure satisfaction.',
    emoji: '🧭',
  },
];

export function PersonalInterests() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="outside-work" className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            OUTSIDE WORK
          </div>

          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2
                id="outside-work-heading"
                className="font-bold text-[26px] sm:text-[32px] text-[var(--text-primary)] tracking-tight"
              >
                Curiosities, Play & Creative Energy
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)] font-light mt-1.5 max-w-[650px]">
                The pursuits and experiments that shape how I think about systems, human behavior, and storytelling.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[12px] text-[var(--text-secondary)] font-accent self-start md:self-auto shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Experimenting & Building Daily</span>
            </div>
          </div>

          {/* Highlight Quote Box */}
          <div className="relative rounded-[20px] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)] border border-[var(--border)] p-6 sm:p-8 mb-8 overflow-hidden shadow-lg group hover:border-[var(--accent)]/50 transition-all duration-300">
            {/* Background subtle glowing blob */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] text-lg shrink-0 mt-1">
                ✨
              </div>
              <div>
                <blockquote className="text-[16px] sm:text-[18px] md:text-[19px] text-[var(--text-primary)] font-normal leading-relaxed mb-3">
                  &ldquo;Enjoy exploring and experimenting with new tools and technologies — digging into how a tool works to identify gaps and imagining new products around them. Passionate about research, documentation, and design, alongside dancing and creative writing; I build and write original stories.&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-2 text-[12px] text-[var(--text-secondary)] font-accent">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">#ProductIdeation</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">#CreativeWriting</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">#DanceRhythm</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">#StoryBuilder</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Fun Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {interestCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = activeCard === card.id;

              return (
                <motion.div
                  key={card.id}
                  id={`interest-card-${card.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-6 flex flex-col justify-between transition-all duration-300 cursor-default hover:shadow-xl hover:-translate-y-1 ${card.borderHover}`}
                >
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
                          <Icon className={`w-4 h-4 ${card.accentColor}`} />
                        </div>
                        <span className="text-lg">{card.emoji}</span>
                      </div>

                      <span className={`font-accent text-[10.5px] uppercase tracking-[1.5px] font-semibold px-2.5 py-0.5 rounded-full border ${card.bgBadge}`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="font-bold text-[17px] text-[var(--text-primary)] mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Fun Fact pill */}
                  <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11.5px] text-[var(--text-secondary)] font-accent">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{card.funFact}</span>
                    </span>
                    <span className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity">
                      ✦
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
