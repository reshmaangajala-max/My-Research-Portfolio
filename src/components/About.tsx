import { motion } from 'motion/react';

export function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[var(--surface)] py-32 md:py-44 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle ambient light gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-start text-left">
          {/* 1. Small Eyebrow */}
          <motion.div
            id="philosophy-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-accent font-semibold tracking-[4px] text-[var(--accent)] uppercase">
              THIS IS WHAT I BELIEVE IN.
            </span>
          </motion.div>

          {/* 2. Main Statement — Line 1 (Curiosity / Attraction with subtle visual spark) */}
          <motion.div
            id="philosophy-line-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-4 md:mb-6"
          >
            <h2 className="font-medium text-[28px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[1.18] tracking-tight text-[var(--text-secondary)]">
              <span className="relative inline-block text-[var(--text-primary)] font-semibold">
                Aesthetics
                {/* Subtle visual spark representing curiosity and attraction */}
                <span
                  className="inline-block ml-2.5 sm:ml-3 text-[var(--accent)] align-middle text-[18px] sm:text-[24px] md:text-[28px] animate-pulse opacity-90 select-none"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </span>{' '}
              make people curious to try a product.
            </h2>
          </motion.div>

          {/* 3. Main Statement — Line 2 (Thoughtful Experience / Retention with continuous line) */}
          <motion.div
            id="philosophy-line-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10 md:mb-14 max-w-[940px]"
          >
            <h2 className="font-bold text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.14] tracking-tight text-[var(--text-primary)]">
              But a{' '}
              <span className="relative inline-block aurora-text">
                thoughtful experience
              </span>{' '}
              makes them stay.
            </h2>

            {/* Subtle continuous line representing experience continuation & staying engaged */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="mt-6 h-[1.5px] w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/50 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* 4. Supporting Line */}
          <motion.p
            id="philosophy-supporting-line"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-[17px] md:text-[18px] font-light text-[var(--text-secondary)] tracking-wide leading-relaxed"
          >
            This is how I approach every project and idea.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
