import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const columns = [
  {
    title: 'Reminder Apps',
    isHero: false,
    traits: [
      { text: 'Manual entry only', negative: true },
      { text: 'General tasks', negative: false },
      { text: 'No document understanding', negative: true },
      { text: 'User creates every reminder', negative: true },
    ],
    examples: 'Todoist, Any.do, Google Reminders, TickTick',
  },
  {
    title: 'Finance & Document Apps',
    isHero: false,
    traits: [
      { text: 'Auto-detects in one category only', negative: true },
      { text: 'Subscriptions OR finance only', negative: true },
      { text: 'Requires bank access or specific document format', negative: false },
      { text: 'Cloud-dependent & third-party sync', negative: true },
    ],
    examples: 'Truebill / Rocket Money, Cleo, Sortifyd',
  },
  {
    title: 'Tara',
    isHero: true,
    traits: [
      { text: 'Auto-detects across ALL categories', negative: false },
      { text: 'Insurance, bills, vehicle, medical, subscriptions, government', negative: false },
      { text: 'Camera scan + share sheet + email capture', negative: false },
      { text: 'Privacy-first, on-device processing by default', negative: false },
      { text: "Doesn't just remind — helps resolve obligations", negative: false },
    ],
    examples: 'Tara — Your Digital Best Friend',
  },
];

export function RenewValueProposition() {
  return (
    <section
      id="renew-value-prop"
      className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            UNIQUE VALUE PROPOSITION
          </div>

          <h2
            id="renew-value-prop-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            What Makes This Different
          </h2>

          {/* 3-Column Positioning Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {columns.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-[16px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  col.isHero
                    ? 'bg-[var(--surface)] border-2 border-[var(--accent)] shadow-[0_0_30px_rgba(167,139,250,0.15)] relative'
                    : 'bg-[var(--surface)] border border-[var(--border)] shadow-sm'
                }`}
              >
                {col.isHero && (
                  <div className="absolute -top-3.5 left-6 bg-[var(--accent)] text-[#18181B] font-accent text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full shadow-sm">
                    Proposed Product
                  </div>
                )}

                <div>
                  <h3
                    className={`text-[20px] font-bold tracking-tight mb-6 ${
                      col.isHero ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {col.title}
                  </h3>

                  <ul className="flex flex-col gap-3.5 mb-8">
                    {col.traits.map((trait, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-[14px]">
                        {col.isHero ? (
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                        ) : trait.negative ? (
                          <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] mt-2 shrink-0" />
                        )}
                        <span
                          className={
                            col.isHero
                              ? 'text-[var(--text-primary)] font-medium leading-snug'
                              : 'text-[var(--text-secondary)] font-light leading-snug'
                          }
                        >
                          {trait.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="font-accent uppercase tracking-wider text-[10px] text-[var(--text-secondary)] block mb-1">
                    Examples
                  </span>
                  <span className="text-[12px] text-[var(--text-secondary)] font-light">
                    {col.examples}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
