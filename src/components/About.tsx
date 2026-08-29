import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="flex flex-col text-left">
          {/* Pull quote with animated vertical accent line */}
          <div className="relative pl-6 md:pl-8">
            {/* Animated vertical accent line (draws top-to-bottom, 0.5s) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-0 top-1 bottom-1 w-[2px] bg-[var(--accent)]"
            />

            {/* Quote text (fades in, 0.5s, delay 0.2s) */}
            <motion.blockquote
              id="about-pullquote"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-[var(--text-primary)] text-[20px] sm:text-[23px] md:text-[26px] leading-[1.45] tracking-tight"
            >
              “I find the gap between what people need and what tools give them — then I document it, structure it, and build toward closing it.”
            </motion.blockquote>
          </div>

          {/* 32px gap */}
          <div className="h-8" />

          {/* Professional narrative summary (fades in, 0.4s, delay 0.4s) */}
          <motion.p
            id="about-summary"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
            className="font-light text-[17px] text-[var(--text-primary)] leading-[1.75]"
          >
            Product engineer and research expert with a Computer Science background. I&apos;ve spent the past year conducting deep primary and secondary research, organizing findings into structured documentation, and building systems that turn complex requirements into clean, scalable architectures. I work at the intersection of user research, product engineering, and thoughtful systems design.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
