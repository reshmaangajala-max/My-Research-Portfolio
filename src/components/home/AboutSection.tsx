import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PenTool } from 'lucide-react';
import polaroidImg from '../../assets/images/WhatsApp Image 2026-08-08 at 5.50.48 PM.jpeg';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [imgSrc, setImgSrc] = useState(polaroidImg);

  // Animation variants
  const getCardTransition = (delay: number) => {
    if (shouldReduceMotion) return { duration: 0 };
    return {
      duration: 0.45,
      ease: [0.175, 0.885, 0.32, 1.2],
      delay,
    };
  };

  return (
    <section
      id="about"
      className="w-full bg-[#221812] text-[#F6F1EA] py-20 sm:py-28 md:py-36 overflow-hidden relative select-none scroll-mt-20 border-y border-[#3B2A20]/40"
    >
      {/* Subtle organic background ambiance */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F6F1EA 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1120px] mx-auto px-6 relative z-10">
        {/* TOP HEADING: "Working with me" in Fraunces 600 with playful handcrafted baseline */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-fraunces font-semibold text-[38px] sm:text-[48px] md:text-[56px] text-[#F6F1EA] tracking-tight leading-tight flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="inline-block transform -rotate-1.5 transition-transform hover:rotate-0">
              Working
            </span>
            <span className="inline-block transform rotate-1 transition-transform hover:rotate-0">
              with
            </span>
            <span className="inline-block transform -rotate-1 text-[#DDD0F3] transition-transform hover:rotate-0">
              me
            </span>
          </h2>
          {/* Small tagline underneath: "(a few honest notes)" */}
          <p className="mt-3 font-jakarta font-normal text-[15px] sm:text-[17px] text-[#F6F1EA]/70">
            (a few honest notes)
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (Full Scattered Collage)                       */}
        {/* ============================================================ */}
        <div className="hidden md:flex relative w-full min-h-[660px] lg:min-h-[720px] items-center justify-center">
          {/* 1. CENTER ELEMENT — Polaroid photo */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.05)}
            className="relative z-20 group"
          >
            {/* Top Red Pushpin accent */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 w-4 h-4 rounded-full bg-[#E03131] border-2 border-white shadow-[0_2px_6px_rgba(0,0,0,0.4)] flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>

            {/* Polaroid frame: Cream border, thicker bottom for caption, drop shadow, slight 2-3deg rotation */}
            <div className="w-[260px] lg:w-[285px] bg-[#FAF7F2] p-3.5 lg:p-4 pb-10 lg:pb-12 rounded-[6px] shadow-[0_22px_50px_rgba(0,0,0,0.55),0_6px_16px_rgba(0,0,0,0.3)] border border-[#3B2A20]/15 transform rotate-[2.5deg] group-hover:rotate-0 transition-transform duration-300 ease-out">
              {/* Photo in portrait mode */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[3px] bg-[#DDD0F3]/30 border border-[#3B2A20]/10">
                <img
                  src={imgSrc}
                  alt="Reshma Angajala smiling, wearing glasses"
                  className="w-full h-full object-cover"
                  onError={() => setImgSrc('/reshma-polaroid.jpeg')}
                />
              </div>

              {/* Caption handwritten under the photo: Caveat font, Walnut */}
              <p className="font-caveat font-semibold text-[22px] lg:text-[25px] text-[#3B2A20] text-center mt-3.5 lg:mt-4 leading-none tracking-wide select-none">
                Let&apos;s build something real
              </p>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* SCATTERED ELEMENTS AROUND THE CENTER PHOTO                 */}
          {/* ========================================================== */}

          {/* 1. Sticky note (Lavender bg, Walnut text): "asks a lot of questions" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.15)}
            className="absolute left-[6%] lg:left-[8%] top-[16%] z-10"
          >
            <div className="relative bg-[#DDD0F3] text-[#3B2A20] rounded-[4px] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.3)] border border-[#3B2A20]/10 transform -rotate-6 hover:rotate-0 transition-transform duration-200">
              {/* Tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-[#F6F1EA]/60 backdrop-blur-xs border border-white/30 rotate-2 shadow-2xs" />
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                asks a lot of questions
              </span>
            </div>
          </motion.div>

          {/* 2. Speech-bubble shape (Cream bg, Amethyst border, small tail): "makes lists when stuck" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.25)}
            className="absolute right-[5%] lg:right-[8%] top-[14%] z-10"
          >
            <div className="relative bg-[#F6F1EA] text-[#3B2A20] border-2 border-[#9570C6] rounded-[20px] px-4.5 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.3)] transform rotate-4 hover:rotate-0 transition-transform duration-200">
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                makes lists when stuck
              </span>
              {/* Tail pointing outward-left */}
              <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-[#F6F1EA] border-l-2 border-b-2 border-[#9570C6] transform -rotate-45" />
            </div>
          </motion.div>

          {/* 3. Torn-paper tag (Cream bg, rough edge): "dances between deadlines" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.35)}
            className="absolute left-[3%] lg:left-[5%] top-[48%] z-10"
          >
            <div className="relative bg-[#F6F1EA] text-[#3B2A20] px-4 py-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.3)] border border-[#3B2A20]/15 rounded-[2px] transform -rotate-4 hover:rotate-0 transition-transform duration-200">
              {/* Washi tape at top */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-9 h-4 bg-[#DDD0F3]/70 backdrop-blur-xs border border-white/40 -rotate-1 shadow-2xs" />
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                dances between deadlines
              </span>
            </div>
          </motion.div>

          {/* 4. Sticky note (Amethyst bg, Cream text): "writes dark fantasy at 2am" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.45)}
            className="absolute left-[9%] lg:left-[12%] bottom-[14%] z-10"
          >
            <div className="relative bg-[#9570C6] text-[#F6F1EA] rounded-[4px] px-4 py-3 shadow-[0_12px_26px_rgba(0,0,0,0.35)] border border-[#9570C6]/40 transform rotate-6 hover:rotate-0 transition-transform duration-200">
              {/* Tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-[#F6F1EA]/60 backdrop-blur-xs border border-white/30 -rotate-2 shadow-2xs" />
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                writes dark fantasy at 2am
              </span>
            </div>
          </motion.div>

          {/* 5. Speech-bubble (Cream bg, Walnut border): "cares how every click feels" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.55)}
            className="absolute right-[4%] lg:right-[6%] top-[48%] z-10"
          >
            <div className="relative bg-[#F6F1EA] text-[#3B2A20] border-2 border-[#3B2A20] rounded-[20px] px-4.5 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.3)] transform -rotate-5 hover:rotate-0 transition-transform duration-200">
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                cares how every click feels
              </span>
              {/* Tail pointing right */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#F6F1EA] border-r-2 border-b-2 border-[#3B2A20] transform rotate-45" />
            </div>
          </motion.div>

          {/* 6. Sticky note (Lavender bg, Walnut text): "research first, always" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.65)}
            className="absolute right-[8%] lg:right-[11%] bottom-[16%] z-10"
          >
            <div className="relative bg-[#DDD0F3] text-[#3B2A20] rounded-[4px] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.3)] border border-[#3B2A20]/10 transform rotate-5 hover:rotate-0 transition-transform duration-200">
              {/* Pushpin */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9570C6] border border-white shadow-2xs" />
              <span className="font-jakarta font-medium text-[15px] whitespace-nowrap block">
                research first, always
              </span>
            </div>
          </motion.div>

          {/* 7. Small torn-paper tag: "makes the mess make sense" */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.75)}
            className="absolute left-[30%] lg:left-[33%] bottom-[5%] z-10"
          >
            <div className="relative bg-[#F6F1EA] text-[#3B2A20] px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.3)] border border-[#3B2A20]/15 rounded-[2px] transform -rotate-3 hover:rotate-0 transition-transform duration-200">
              {/* Tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#DDD0F3]/60 backdrop-blur-xs border border-white/30 rotate-2 shadow-2xs" />
              <span className="font-jakarta font-medium text-[14px] whitespace-nowrap block">
                makes the mess make sense
              </span>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* DECORATIVE ICON BADGES (2-3 small square chips)            */}
          {/* ========================================================== */}

          {/* Figma icon badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.3)}
            className="absolute left-[20%] lg:left-[22%] top-[8%] z-10"
            title="Figma"
          >
            <div className="relative w-11 h-11 rounded-[10px] bg-[#FAF7F2] shadow-[0_6px_18px_rgba(0,0,0,0.35)] border border-[#3B2A20]/15 flex items-center justify-center p-2 transform rotate-8 hover:rotate-0 transition-transform duration-200">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#F6F1EA]/70 backdrop-blur-xs border border-white/40 -rotate-2" />
              <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none" aria-label="Figma">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
              </svg>
            </div>
          </motion.div>

          {/* Notion icon badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.4)}
            className="absolute right-[20%] lg:right-[23%] top-[7%] z-10"
            title="Notion"
          >
            <div className="relative w-11 h-11 rounded-[10px] bg-[#FAF7F2] shadow-[0_6px_18px_rgba(0,0,0,0.35)] border border-[#3B2A20]/15 flex items-center justify-center p-2.5 transform -rotate-7 hover:rotate-0 transition-transform duration-200">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#F6F1EA]/70 backdrop-blur-xs border border-white/40 rotate-3" />
              <svg className="w-5 h-5 text-[#3B2A20]" viewBox="0 0 100 100" fill="currentColor" aria-label="Notion">
                <path d="M6.07 8.07l61.88-6.19c7.22-.72 9.03 1.81 11.2 5.06l13.73 20.24c1.81 2.89 1.45 6.14-1.81 6.5l-6.86.72v53.48c0 4.7-2.17 7.23-7.95 7.59L17.27 99.66c-4.7.36-7.23-1.45-8.67-5.06L.65 80.87c-1.08-3.25 0-5.78 3.25-6.14l6.14-.72V15.3c0-3.98 1.81-6.87 6.03-7.23zm69.46 16.62L61.88 9.51c-.72-1.08-2.17-1.45-4.34-1.08l-37.94 3.61c-1.81.36-2.53 1.81-2.53 3.61v64.68c0 2.17 1.08 3.25 3.25 3.25l39.03-3.61c2.17-.36 3.25-1.81 3.25-3.61V25.77c0-1.45.36-2.17 1.08-2.17.72 0 1.45.72 2.17 1.81l9.76 14.81c.72 1.08 1.45 1.08 2.17 0l2.89-4.34c.72-1.08.72-2.17 0-3.25L75.53 24.69z" />
              </svg>
            </div>
          </motion.div>

          {/* Design Tool (PenTool) badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={getCardTransition(0.7)}
            className="absolute right-[22%] lg:right-[25%] bottom-[7%] z-10"
            title="Design Tool"
          >
            <div className="relative w-11 h-11 rounded-[10px] bg-[#FAF7F2] shadow-[0_6px_18px_rgba(0,0,0,0.35)] border border-[#3B2A20]/15 flex items-center justify-center p-2.5 transform rotate-3 hover:rotate-0 transition-transform duration-200">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9570C6] border border-white shadow-2xs" />
              <PenTool className="w-5 h-5 text-[#3B2A20]" />
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE LAYOUT (Clean Stacked & Flowing Version)              */}
        {/* ============================================================ */}
        <div className="flex md:hidden flex-col items-center w-full">
          {/* Polaroid photo at top */}
          <div className="relative z-20 mb-8">
            {/* Top Red Pushpin */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-3.5 h-3.5 rounded-full bg-[#E03131] border-2 border-white shadow-md flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-1 h-1 rounded-full bg-white/70" />
            </div>

            <div className="w-[230px] sm:w-[260px] bg-[#FAF7F2] p-3 sm:p-3.5 pb-9 sm:pb-10 rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.45)] border border-[#3B2A20]/15 transform rotate-[2deg]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[3px] bg-[#DDD0F3]/30 border border-[#3B2A20]/10">
                <img
                  src={imgSrc}
                  alt="Reshma Angajala smiling, wearing glasses"
                  className="w-full h-full object-cover"
                  onError={() => setImgSrc('/reshma-polaroid.jpeg')}
                />
              </div>
              <p className="font-caveat font-semibold text-[21px] text-[#3B2A20] text-center mt-3 leading-none tracking-wide select-none">
                Let&apos;s build something real
              </p>
            </div>
          </div>

          {/* Tool badges in a compact row */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Figma badge */}
            <div className="w-9 h-9 rounded-[8px] bg-[#FAF7F2] shadow-sm border border-[#3B2A20]/15 flex items-center justify-center p-1.5 transform -rotate-3">
              <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
              </svg>
            </div>
            {/* Notion badge */}
            <div className="w-9 h-9 rounded-[8px] bg-[#FAF7F2] shadow-sm border border-[#3B2A20]/15 flex items-center justify-center p-2 transform rotate-2">
              <svg className="w-4 h-4 text-[#3B2A20]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M6.07 8.07l61.88-6.19c7.22-.72 9.03 1.81 11.2 5.06l13.73 20.24c1.81 2.89 1.45 6.14-1.81 6.5l-6.86.72v53.48c0 4.7-2.17 7.23-7.95 7.59L17.27 99.66c-4.7.36-7.23-1.45-8.67-5.06L.65 80.87c-1.08-3.25 0-5.78 3.25-6.14l6.14-.72V15.3c0-3.98 1.81-6.87 6.03-7.23zm69.46 16.62L61.88 9.51c-.72-1.08-2.17-1.45-4.34-1.08l-37.94 3.61c-1.81.36-2.53 1.81-2.53 3.61v64.68c0 2.17 1.08 3.25 3.25 3.25l39.03-3.61c2.17-.36 3.25-1.81 3.25-3.61V25.77c0-1.45.36-2.17 1.08-2.17.72 0 1.45.72 2.17 1.81l9.76 14.81c.72 1.08 1.45 1.08 2.17 0l2.89-4.34c.72-1.08.72-2.17 0-3.25L75.53 24.69z" />
              </svg>
            </div>
            {/* PenTool badge */}
            <div className="w-9 h-9 rounded-[8px] bg-[#FAF7F2] shadow-sm border border-[#3B2A20]/15 flex items-center justify-center p-2 transform -rotate-1">
              <PenTool className="w-4 h-4 text-[#3B2A20]" />
            </div>
          </div>

          {/* The 6-7 phrase elements in a soft flowing wrap below */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 max-w-[460px] px-2">
            {/* 1 */}
            <div className="bg-[#DDD0F3] text-[#3B2A20] rounded-[4px] px-3.5 py-2 shadow-sm border border-[#3B2A20]/10 transform -rotate-2">
              <span className="font-jakarta font-medium text-[14px]">
                asks a lot of questions
              </span>
            </div>

            {/* 2 */}
            <div className="bg-[#F6F1EA] text-[#3B2A20] border-2 border-[#9570C6] rounded-[18px] px-3.5 py-1.5 shadow-sm transform rotate-2">
              <span className="font-jakarta font-medium text-[14px]">
                makes lists when stuck
              </span>
            </div>

            {/* 3 */}
            <div className="bg-[#F6F1EA] text-[#3B2A20] px-3.5 py-2 shadow-sm border border-[#3B2A20]/15 rounded-[2px] transform -rotate-1">
              <span className="font-jakarta font-medium text-[14px]">
                dances between deadlines
              </span>
            </div>

            {/* 4 */}
            <div className="bg-[#9570C6] text-[#F6F1EA] rounded-[4px] px-3.5 py-2 shadow-sm border border-[#9570C6]/30 transform rotate-3">
              <span className="font-jakarta font-medium text-[14px]">
                writes dark fantasy at 2am
              </span>
            </div>

            {/* 5 */}
            <div className="bg-[#F6F1EA] text-[#3B2A20] border-2 border-[#3B2A20] rounded-[18px] px-3.5 py-1.5 shadow-sm transform -rotate-2">
              <span className="font-jakarta font-medium text-[14px]">
                cares how every click feels
              </span>
            </div>

            {/* 6 */}
            <div className="bg-[#DDD0F3] text-[#3B2A20] rounded-[4px] px-3.5 py-2 shadow-sm border border-[#3B2A20]/10 transform rotate-2">
              <span className="font-jakarta font-medium text-[14px]">
                research first, always
              </span>
            </div>

            {/* 7 */}
            <div className="bg-[#F6F1EA] text-[#3B2A20] px-3.5 py-2 shadow-sm border border-[#3B2A20]/15 rounded-[2px] transform -rotate-1">
              <span className="font-jakarta font-medium text-[14px]">
                makes the mess make sense
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
