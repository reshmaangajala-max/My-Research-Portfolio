import { motion } from 'motion/react';

export function Chapter01Origin() {
  return (
    <section
      id="ch-01-origin"
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
              01
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              THE PROBLEM
            </span>
          </div>

          {/* Chapter Main Title */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I kept saving things I knew I’d need later.
          </h2>

          <p className="font-light text-[17px] sm:text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[840px] mb-8">
            Finding them again was the hard part. Every time I spotted a clever layout constraint, a tricky Figma auto-layout trick, or a design system walkthrough, I hit save — into YouTube playlists, browser bookmarks, or Notion dumps.
          </p>

          {/* Core Problem Visual Callout */}
          <div className="p-6 md:p-7 rounded-[16px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-glow-rest)] mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] aurora-gradient" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-[17px] sm:text-[19px] font-normal text-[var(--text-primary)] leading-relaxed italic">
                “The problem was that ‘later’ eventually arrived... and I couldn’t find the 30-second solution anymore.”
              </p>
              <span className="font-mono text-[12px] text-red-400 bg-red-950/30 border border-red-500/30 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                The Bookmark Graveyard Effect
              </span>
            </div>
          </div>

          {/* Visual Proof: Cluttered Saves & Bookmarks Across Platforms */}
          <div className="mb-8 rounded-[16px] overflow-hidden border border-[var(--border)] bg-[#070b14] shadow-[var(--card-glow-rest)]">
            <div className="relative w-full aspect-[16/9] bg-[#070b14] overflow-hidden flex items-center justify-center">
              <img
                src="/saves-cluttered.png"
                alt="Saves from everywhere across different apps and platforms"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Closing transition */}
          <div className="flex items-center gap-3 text-[14.5px] text-[var(--text-primary)] font-medium p-4 rounded-[12px] bg-[var(--surface-elevated)] border border-[var(--border)]">
            <span className="text-[var(--accent)] font-mono font-bold">→</span>
            <span>I knew I had this problem. But was I the only one, or did other designers struggle with the exact same breakdown?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
