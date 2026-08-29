import { motion } from 'motion/react';

export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-6 overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="w-full h-[1px] bg-[var(--accent)] opacity-40"
      />
    </div>
  );
}
