import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import myPicNoBg from '../../assets/images/my pic no bg.png';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setMounted(true);
      return;
    }

    const timer = setTimeout(() => {
      setMounted(true);
    }, 40);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('work');
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', '#work');
    }
  };

  return (
    <section
      aria-label="Hero Introduction"
      className="w-full bg-[#F6F1EA] text-[#3B2A20] px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-20 md:pb-24 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT COLUMN: 5 cols on desktop, vertically centered */}
        <div
          className={`lg:col-span-5 flex flex-col items-start text-left transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Eyebrow tag: "PRODUCT DESIGNER" with spark/star icon */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#9570C6]"
              aria-hidden="true"
            >
              <path d="M12 2l2.2 6.8 6.8 2.2-6.8 2.2L12 20l-2.2-6.8-6.8-2.2 6.8-2.2L12 2z" />
            </svg>
            <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.16em] text-[#9570C6]">
              PRODUCT DESIGNER
            </span>
          </div>

          {/* Name, stacked on two lines: "RESHMA" / "ANGAJALA", Fraunces 700, Walnut */}
          <h1 className="font-fraunces font-bold text-[clamp(42px,6.5vw,82px)] text-[#3B2A20] uppercase tracking-[-0.03em] leading-[0.9] select-none">
            RESHMA
            <br />
            ANGAJALA
          </h1>

          {/* Short underline accent beneath the name in Amethyst */}
          <div className="w-48 sm:w-60 md:w-72 h-3.5 my-3.5 sm:my-4 text-[#9570C6]" aria-hidden="true">
            <svg viewBox="0 0 280 14" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M3 9C60 3.5 150 2.5 277 7C220 11 110 12.5 4 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Tagline paragraph (2-3 lines) */}
          <p className="font-jakarta font-normal text-[16px] sm:text-[17px] md:text-[18px] text-[#3B2A20]/80 leading-relaxed max-w-lg mb-7 sm:mb-8">
            A dreamer who designs for how every click feels — researching deeply, designing with intention, and caring about what happens the moment someone taps a button.
          </p>

          {/* CTA button: "View My Work" — pill button, Walnut background, Cream text, small arrow icon */}
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3B2A20] text-[#F6F1EA] hover:bg-[#2A1E17] font-jakarta font-medium text-[15px] sm:text-[16px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* RIGHT COLUMN: 7 cols on desktop, aligned neatly with right margin */}
        <div
          className={`lg:col-span-7 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0 transition-all duration-700 delay-150 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* COMPOSITION WRAPPER */}
          <div className="relative w-full max-w-[340px] sm:max-w-[490px] md:max-w-[550px] lg:max-w-[580px] flex items-center justify-center py-6 sm:py-8">
            {/* 1. SMALL DOT-GRID PATTERN (lower-right corner anchor) */}
            <div
              className="absolute -right-2 sm:-right-4 -bottom-3 sm:-bottom-4 z-0 pointer-events-none text-[#3B2A20]/25"
              aria-hidden="true"
            >
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 p-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current" />
                ))}
              </div>
            </div>

            {/* 2. HAND-DRAWN OPEN BOOK DOODLE (top-right corner above card) */}
            <div
              className="absolute -right-2 sm:right-2 -top-5 sm:-top-8 z-20 pointer-events-none text-[#3B2A20]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 80"
                fill="none"
                className="w-18 h-14 sm:w-24 sm:h-18 md:w-28 md:h-20 drop-shadow-xs"
              >
                {/* Left page outline */}
                <path
                  d="M50 24C38 18 22 17 8 20C7.5 20 7 20.5 7 21V59C7 59.5 7.5 60 8 60C22 57 38 58 50 64"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Right page outline */}
                <path
                  d="M50 24C62 18 78 17 92 20C92.5 20 93 20.5 93 21V59C93 59.5 92.5 60 92 60C78 57 62 58 50 64"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Center spine */}
                <path
                  d="M50 24V64"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Left page text lines */}
                <path d="M16 32C24 30.5 34 31 42 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path d="M16 41C24 39.5 34 40 42 43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path d="M16 50C24 48.5 34 49 42 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                {/* Right page text lines */}
                <path d="M58 34C66 31 76 30.5 84 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path d="M58 43C66 40 76 39.5 84 41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path d="M58 52C66 49 76 48.5 84 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                {/* Floating Amethyst spark above book */}
                <path d="M50 6L51.5 12L57.5 13.5L51.5 15L50 21L48.5 15L42.5 13.5L48.5 12L50 6Z" fill="#9570C6" />
              </svg>
            </div>

            {/* 3. LAVENDER LANDSCAPE CARD: wide proportion like before, with photo fitting top to bottom exactly */}
            <div
              className="w-full h-[230px] sm:h-[290px] md:h-[330px] lg:h-[355px] bg-[#DDD0F3] rounded-[28px] sm:rounded-[38px] md:rounded-[44px] rotate-[2.5deg] sm:rotate-[3.5deg] overflow-hidden relative flex items-end justify-center shadow-[0_16px_36px_rgba(149,112,198,0.22)] border border-[#DDD0F3]"
            >
              {!imgError ? (
                <img
                  src={myPicNoBg}
                  alt="Reshma Angajala"
                  onError={() => setImgError(true)}
                  className="h-full w-auto max-w-none object-contain object-bottom block select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(59,42,32,0.12)]"
                />
              ) : (
                <img
                  src="/my-pic-no-bg.png"
                  alt="Reshma Angajala"
                  className="h-full w-auto max-w-none object-contain object-bottom block select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(59,42,32,0.12)]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
