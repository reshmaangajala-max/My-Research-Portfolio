import { motion } from 'motion/react';

export function RenewImpact() {
  return (
    <section
      id="offload-takeaway"
      className="w-full bg-[var(--bg)] py-24 md:py-36 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-[920px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Centered takeaway statement exactly matching the attached design */}
          <p className="font-normal text-[18px] sm:text-[22px] md:text-[24px] text-[var(--text-primary)] leading-[1.8] sm:leading-[1.85] tracking-tight">
            Offload demonstrated that structured research can turn a vague brief — &ldquo;explore a reminder app idea&rdquo; — into a clearly differentiated product direction backed by evidence. Every product principle traces back to a specific research finding. Every feature decision has a &ldquo;because users told us&rdquo; behind it. The project paused, but the research methodology and documentation practice I built here carried directly into my independent work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
