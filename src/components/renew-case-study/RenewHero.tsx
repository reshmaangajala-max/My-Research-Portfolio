import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';

interface RenewHeroProps {
  onBack: () => void;
}

export function RenewHero({ onBack }: RenewHeroProps) {
  const scrollToNext = () => {
    const contextEl = document.getElementById('renew-context');
    if (contextEl) {
      contextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="renew-hero"
      className="relative w-full min-h-screen flex flex-col justify-center bg-[var(--bg)] px-6 py-20 lg:py-0 transition-colors duration-500 overflow-hidden select-none"
    >
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        <div className="w-full lg:max-w-[65%] flex flex-col items-start text-left">
          {/* Back link: fades in at 0s */}
          <motion.button
            id="renew-back-link"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            onClick={onBack}
            className="text-[13px] font-light text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer mb-6 flex items-center gap-1.5 focus:outline-none"
          >
            ← Back to Portfolio
          </motion.button>

          {/* Label: fades in at 0.2s */}
          <motion.div
            id="renew-hero-label"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-accent text-[11px] uppercase tracking-[4px] text-[var(--accent)] font-medium mb-4"
          >
            COMPANY CASE STUDY · HANYAA AUTO TECHNOLOGIES
          </motion.div>

          {/* Title: 0.4s, slides up 30px */}
          <motion.h1
            id="renew-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-2"
          >
            <span className="aurora-text drop-shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              Tara
            </span>
          </motion.h1>

          {/* Subtitle: 0.7s */}
          <motion.p
            id="renew-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            className="font-light text-[20px] sm:text-[22px] text-[var(--text-primary)] leading-snug mb-6"
          >
            Your Digital Best Friend
          </motion.p>

          {/* Problem statement: 0.9s */}
          <motion.p
            id="renew-problem-stmt"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            className="font-light text-[17px] sm:text-[18px] text-[var(--text-secondary)] italic leading-relaxed mb-10"
          >
            “If you&apos;re overwhelmed enough to forget, you&apos;ll forget to create the reminder too.”
          </motion.p>

          {/* Research summary strip: 1.1s, staggered 0.1s */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: 7 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={7} isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Team Discovery Conversations
              </span>
            </motion.div>

            {/* Card 2: 15 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={15} isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                External Survey Responses
              </span>
            </motion.div>

            {/* Card 3: 15+ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={15} suffix="+" isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Competitor Apps Analyzed
              </span>
            </motion.div>

            {/* Card 4: ~3 months */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[30px] sm:text-[36px] leading-none mb-2 font-accent font-light text-[var(--accent)]">
                ~3 months
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Research to Handover
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
      >
        <button
          onClick={scrollToNext}
          className="cursor-pointer group p-2 flex flex-col items-center focus:outline-none"
          aria-label="Scroll down to context"
        >
          <div className="relative w-[1px] h-[28px] bg-[var(--accent)]/40 overflow-visible flex justify-center">
            <motion.div
              animate={{
                y: [0, 24, 0],
                opacity: [0.9, 1, 0.3],
              }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative -left-[2px] w-[5px] h-[5px] rounded-full aurora-gradient shadow-[0_0_8px_rgba(167,139,250,0.6)]"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
