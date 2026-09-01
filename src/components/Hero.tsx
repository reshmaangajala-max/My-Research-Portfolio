import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ROTATING_PHRASES = [
  'PRODUCT DESIGNER',
  'RESEARCH LOVER',
  'TURNING ZERO TO ONE INTO A FULL PRODUCT',
  'I LOVE BUILDING NEW FUTURISTIC PRODUCTS',
  'EXPLORING AI TOOLS AND HOW THEY WORK',
  'DESIGNING THINGS PEOPLE ADORE',
  'PRODUCT THINKER',
  'VISUAL DESIGN LOVER',
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[var(--bg)] px-6 py-24 text-center select-none overflow-hidden transition-colors duration-500"
    >
      {/* ============================================================ */}
      {/* 6. SUBTLE PRODUCT THINKING & EXPLORATION BACKGROUND SYSTEM  */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.08)_0%,rgba(125,211,252,0.03)_40%,transparent_75%)] blur-3xl" />

        {/* Floating Wireframe Fragment 1: UI Card Frame (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: [0.25, 0.45, 0.25],
            y: [-4, 6, -4],
            rotate: [-2, 1, -2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          className="hidden md:block absolute top-[18%] left-[8%] lg:left-[12%] w-44 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-3 backdrop-blur-[2px] shadow-sm"
        >
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]/50" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-10 h-1.5 rounded-full bg-white/10 ml-auto" />
          </div>
          <div className="space-y-1.5">
            <div className="w-3/4 h-2 rounded bg-white/15" />
            <div className="w-1/2 h-1.5 rounded bg-[var(--accent)]/30" />
          </div>
        </motion.div>

        {/* Floating Wireframe Fragment 2: Interactive Node / Prototype Connection (Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [5, -7, 5],
            rotate: [2, -1, 2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          className="hidden md:flex flex-col items-center gap-2 absolute top-[20%] right-[8%] lg:right-[13%]"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--accent)]/25 bg-[var(--surface)]/50 backdrop-blur-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[10px] font-accent uppercase tracking-widest text-[var(--accent)]/80">
              Prototype Node
            </span>
          </div>
          {/* Subtle connector stem */}
          <div className="w-[1px] h-6 bg-gradient-to-b from-[var(--accent)]/30 to-transparent" />
        </motion.div>

        {/* Floating Wireframe Fragment 3: Toggle Switch & Slider Control (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [4, -5, 4],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          className="hidden lg:block absolute bottom-[22%] left-[10%] w-36 rounded-lg border border-white/10 bg-[var(--surface)]/30 p-2.5 backdrop-blur-[2px]"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-1.5 rounded bg-white/20" />
            <div className="w-5 h-2.5 rounded-full bg-[var(--accent)]/40 flex items-center px-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white ml-auto" />
            </div>
          </div>
          <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-[var(--accent)] to-[var(--gradient-2)] opacity-60" />
          </div>
        </motion.div>

        {/* Floating Wireframe Fragment 4: Product Logic & Insight Token (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
          className="hidden lg:block absolute bottom-[24%] right-[11%] rounded-lg border border-[var(--border)] bg-[var(--surface)]/40 p-2.5 backdrop-blur-[2px]"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-md bg-[var(--accent)]/15 flex items-center justify-center text-[9px] text-[var(--accent)] font-mono">
              ✦
            </div>
            <div className="space-y-1">
              <div className="w-16 h-1.5 rounded bg-white/20" />
              <div className="w-10 h-1.5 rounded bg-white/10" />
            </div>
          </div>
        </motion.div>

        {/* Subtle grid accent background */}
        <div
          className="absolute inset-0 opacity-[0.025] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* MAIN HERO CONTENT (STAGGERED ANIMATION HIERARCHY)           */}
      {/* ============================================================ */}
      <div className="max-w-[780px] mx-auto flex flex-col items-center relative z-10">
        {/* 1. DYNAMIC EYEBROW / ROTATING TEXT (Step 1 on load: delay 0.1s) */}
        <motion.div
          id="hero-rotating-eyebrow"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[36px] flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)]/80 border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping opacity-75" />
            <div className="overflow-hidden min-w-[200px] sm:min-w-[280px] md:min-w-[340px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_PHRASES[phraseIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-[11.5px] sm:text-[12.5px] md:text-[13px] font-accent font-semibold tracking-[2px] sm:tracking-[2.5px] text-[var(--accent)] uppercase whitespace-nowrap"
                >
                  {ROTATING_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* 2. MAIN HERO HEADING (Step 2 on load: delay 0.3s) */}
        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-[40px] sm:text-[54px] md:text-[64px] lg:text-[70px] leading-[1.08] tracking-tight mb-6 cursor-default"
        >
          <span className="aurora-text drop-shadow-[0_0_35px_rgba(167,139,250,0.18)]">
            Hello, I’m Reshma.
          </span>
        </motion.h1>

        {/* 3. SUPPORTING STATEMENT (Step 3 on load: delay 0.5s) */}
        <motion.div
          id="hero-supporting-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mx-auto text-center flex flex-col items-center"
        >
          {/* Main white text / lead sentence with stronger emphasis */}
          <p
            id="hero-supporting-lead"
            className="text-[var(--text-primary)] font-medium text-[19px] sm:text-[22px] md:text-[24px] leading-snug mb-3.5"
          >
            I like to call myself a mini entrepreneur.
          </p>

          {/* Paragraph below: smaller, lighter, constrained width */}
          <p
            id="hero-supporting-body"
            className="text-[var(--text-secondary)] font-light text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.75] max-w-[620px]"
          >
            I’ve always loved coming up with ideas, figuring out what people might need, and thinking about how those ideas could become something real.
          </p>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* SCROLL INDICATOR                                             */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <button
          id="hero-scroll-indicator"
          onClick={scrollToAbout}
          className="cursor-pointer group p-2 flex flex-col items-center"
          aria-label="Scroll down to About section"
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
            >
              <div className="absolute -top-[6px] left-0 w-[5px] h-[6px] rounded-full bg-[var(--accent)]/30 blur-[1px]" />
            </motion.div>
          </div>
        </button>
      </motion.div>
    </section>
  );
}
