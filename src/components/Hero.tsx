import { motion } from 'motion/react';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-screen flex flex-col justify-center items-center bg-[var(--bg)] px-6 text-center select-none overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-[800px] mx-auto flex flex-col items-center relative z-10">
        {/* Step 1: Thin centered gradient line draws left-to-right across 40% (0s - 0.8s) */}
        <div className="w-[40%] max-w-[280px] h-[1px] mb-6 overflow-hidden flex justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
            className="w-full h-full aurora-gradient opacity-90 rounded-full"
          />
        </div>

        {/* Step 2: Role Label (0.3s, 0.4s duration) */}
        <motion.div
          id="hero-label"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[4px] sm:tracking-[5px] mb-4"
        >
          PRODUCT ENGINEER · RESEARCH EXPERT
        </motion.div>

        {/* Step 3: Name with aurora-text (0.6s, 0.6s duration, slide up from 30px) */}
        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-tight tracking-tight mb-4 group cursor-default"
        >
          <span className="aurora-text drop-shadow-[0_0_30px_rgba(167,139,250,0.12)]">
            Hi! I&apos;m Reshma
          </span>
        </motion.h1>

        {/* Step 4: Tagline (0.9s, 0.5s duration, slide up 20px) */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
          className="font-light text-[var(--text-secondary)] text-[17px] sm:text-[19px] md:text-[21px] leading-relaxed max-w-[660px]"
        >
          Bridging rigorous user research and product engineering to build scalable, human-centered systems.
        </motion.p>
      </div>

      {/* Step 5: Scroll indicator at bottom center (1.5s, 0.3s duration) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <button
          id="hero-scroll-indicator"
          onClick={scrollToAbout}
          className="cursor-pointer group p-2 flex flex-col items-center"
          aria-label="Scroll down to About section"
        >
          {/* Vertical line 28px tall, accent color, opacity 0.4 */}
          <div className="relative w-[1px] h-[28px] bg-[var(--accent)]/40 overflow-visible flex justify-center">
            {/* Small dot 5px with aurora gradient + fading trail */}
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
            >
              {/* Subtle trailing glow */}
              <div className="absolute -top-[6px] left-0 w-[5px] h-[6px] rounded-full bg-[var(--accent)]/30 blur-[1px]" />
            </motion.div>
          </div>
        </button>
      </motion.div>
    </section>
  );
}
