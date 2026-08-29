import { motion } from 'motion/react';

const taxonomyLevels = ['Topic', 'Objective', 'Concept', 'Skill'];

export function TaxonomyDiagram() {
  return (
    <div className="flex flex-col items-center pt-2">
      {taxonomyLevels.map((level, idx) => (
        <div key={level} className="flex flex-col items-center">
          {/* Level box */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.35,
              delay: idx * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-[104px] h-[32px] border border-[var(--border)] bg-[var(--diag-box-bg)] rounded-[6px] flex items-center justify-center text-[11px] text-[var(--text-primary)] font-accent tracking-wide transition-colors duration-300 select-none shadow-sm"
          >
            {level}
          </motion.div>

          {/* Connecting line (if not last) */}
          {idx < taxonomyLevels.length - 1 && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.25,
                delay: idx * 0.15 + 0.12,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: 'top' }}
              className="w-[1px] h-[16px] bg-[var(--accent)]"
            />
          )}
        </div>
      ))}
    </div>
  );
}
