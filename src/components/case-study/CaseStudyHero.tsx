import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';

interface CaseStudyHeroProps {
  onBack: () => void;
}

export function CaseStudyHero({ onBack }: CaseStudyHeroProps) {
  const scrollToNext = () => {
    const el = document.getElementById('ch-00-product') || document.getElementById('ch-01-origin');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="case-study-hero"
      className="relative w-full min-h-screen flex flex-col justify-center bg-[var(--bg)] px-6 py-20 lg:py-0 transition-colors duration-500 overflow-hidden select-none"
    >
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        <div className="w-full lg:max-w-[65%] flex flex-col items-start text-left">
          {/* Back link: fades in at 0s */}
          <motion.button
            id="case-study-back-link"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            onClick={onBack}
            className="text-[13px] font-light text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer mb-6 flex items-center gap-1.5 focus:outline-none"
          >
            ← Back to Portfolio
          </motion.button>

          {/* 24px gap */}

          {/* Label: fades in at 0.2s */}
          <motion.div
            id="case-study-label"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-accent text-[11px] uppercase tracking-[4px] text-[var(--accent)] font-medium mb-4"
          >
            PRODUCT CASE STUDY
          </motion.div>

          {/* 16px gap */}

          {/* Title: 0.4s, slides up 30px */}
          <motion.h1
            id="case-study-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-2"
          >
            <span className="aurora-text drop-shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              Reyo
            </span>
          </motion.h1>

          {/* 8px gap */}

          {/* Subtitle: 0.7s */}
          <motion.p
            id="case-study-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            className="font-light text-[20px] sm:text-[22px] text-[var(--text-primary)] leading-snug mb-8"
          >
            Save-and-Retrieval Tool for Designers
          </motion.p>

          {/* Central Origin Question with Handwritten Annotation & Hand-drawn Arrow: 0.9s */}
          <motion.div
            id="case-study-problem-stmt-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            className="relative mb-12 w-full max-w-[900px]"
          >
            {/* The Main Question */}
            <p
              id="case-study-problem-stmt"
              className="text-[20px] sm:text-[23px] md:text-[26px] font-normal text-[var(--text-primary)] leading-[1.4] tracking-tight pr-4"
            >
              “Why can’t designers find what they saved at the moment they need it, without researching or breaking the flow again?”
            </p>

            {/* Handwritten Notebook Note + Rough Hand-Drawn Sketch Arrow */}
            <div className="mt-3 sm:mt-2 flex items-center gap-2.5 text-[#c4b5fd]/80 dark:text-[#c4b5fd]/75 select-none">
              {/* Hand-drawn sketchy curved arrow */}
              <svg
                width="42"
                height="28"
                viewBox="0 0 52 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 stroke-current text-[#c4b5fd]/70 -rotate-6"
                aria-hidden="true"
              >
                {/* Main curved sketchy stroke */}
                <path
                  d="M48 26 C 36 28, 20 25, 8 10"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeDasharray="0.5 0.5"
                />
                {/* Rough arrow tip barb 1 */}
                <path
                  d="M6 18 C 6.5 14, 7.5 10, 8 9"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                {/* Rough arrow tip barb 2 */}
                <path
                  d="M17 11 C 12 9.5, 8.5 9, 8 9"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>

              {/* Handwritten note text */}
              <span className="font-handwriting text-[19px] sm:text-[21px] md:text-[22px] tracking-wide -rotate-1 text-[#c4b5fd]/90">
                this is where Reyo started
              </span>
            </div>
          </motion.div>

          {/* 40px gap */}

          {/* Research summary strip: 1.1s, staggered 0.1s */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: 25 Survey Responses */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={25} isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Survey Responses
              </span>
            </motion.div>

            {/* Card 2: 12 Competitor Tools Tested */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={12} isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Competitor Tools Tested
              </span>
            </motion.div>

            {/* Card 3: 205 Videos Indexed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[32px] sm:text-[36px] leading-none mb-2">
                <StatCounter numericTarget={205} isAccent={true} />
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Videos Indexed
              </span>
            </motion.div>

            {/* Card 4: 4 months Solo Research & Build */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4, ease: 'easeOut' }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="text-[30px] sm:text-[36px] leading-none mb-2 font-accent font-light text-[var(--accent)]">
                4 months
              </div>
              <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[1.5px] leading-tight">
                Solo Research & Build
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
