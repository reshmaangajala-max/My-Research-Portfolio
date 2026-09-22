import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  line: string;
  placeholderLabel: string;
  href: string;
}

const projects: ProjectItem[] = [
  {
    id: 'reyo',
    title: 'Reyo',
    line: 'A save-and-retrieve tool that remembers what you saved — and finds it in 30 seconds, not 40 minutes.',
    placeholderLabel: 'REYO — PRODUCT VISUAL',
    href: '#reyo-case-study',
  },
  {
    id: 'tara',
    title: 'Tara',
    line: "A proactive reminder assistant that catches the things you'd forget — before they become a problem.",
    placeholderLabel: 'TARA — PRODUCT VISUAL',
    href: '#tara-case-study',
  },
  {
    id: 'ev-project',
    title: 'EV Project',
    line: "A research deep-dive into EV adoption — talking to riders, students, and professionals to find out what's really stopping them.",
    placeholderLabel: 'EV PROJECT — VISUAL',
    href: '#ev-project',
  },
];

export function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate nearest visible card index
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length > 0) {
      const center = scrollLeft + clientWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const diff = Math.abs(center - childCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setCurrentIndex(closestIdx);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const targetIdx =
      direction === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(projects.length - 1, currentIndex + 1);

    if (children[targetIdx]) {
      children[targetIdx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    } else {
      const scrollOffset = el.clientWidth * 0.85;
      el.scrollBy({
        left: direction === 'left' ? -scrollOffset : scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <section
      id="work"
      className="w-full bg-[#221812] text-[#F6F1EA] py-20 sm:py-28 md:py-36 overflow-hidden relative scroll-mt-20 border-y border-[#3B2A20]/40"
    >
      {/* Subtle organic background ambiance matching dark panels */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F6F1EA 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1120px] mx-auto px-6 relative z-10">
        {/* SECTION HEADER: Centered "My Work" Title + Arrow Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 sm:mb-14">
          {/* Placeholder spacer on left for desktop symmetry */}
          <div className="hidden sm:block w-24" aria-hidden="true" />

          {/* Big centered title: Fraunces 600 in Cream */}
          <h2 className="font-fraunces font-semibold text-[38px] sm:text-[48px] md:text-[54px] text-[#F6F1EA] text-center leading-tight tracking-tight">
            My Work
          </h2>

          {/* Arrow Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByDirection('left')}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-[#F6F1EA]/20 bg-[#2E2018] text-[#F6F1EA] flex items-center justify-center transition-all duration-200 hover:border-[#DDD0F3] hover:text-[#DDD0F3] hover:bg-[#3B2A20] disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none cursor-pointer shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection('right')}
              disabled={!canScrollRight}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-[#F6F1EA]/20 bg-[#2E2018] text-[#F6F1EA] flex items-center justify-center transition-all duration-200 hover:border-[#DDD0F3] hover:text-[#DDD0F3] hover:bg-[#3B2A20] disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none cursor-pointer shadow-xs active:scale-95"
            >
              <ArrowRight className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SCROLL TRACK */}
        <div
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 sm:gap-8 pb-6 pt-2 px-1 focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Projects horizontal carousel"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[88vw] sm:w-[620px] md:w-[720px] lg:w-[800px] shrink-0 snap-start"
            >
              {/* Clickable Card Link */}
              <a
                href={project.href}
                className="group block w-full text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9570C6] rounded-[24px]"
                aria-label={`Open ${project.title} case study`}
              >
                {/* Top: Large Placeholder Image Area (full width of the card) */}
                <div className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[240px] sm:min-h-[340px] md:min-h-[400px] rounded-[24px] bg-[#2D2119] border border-[#F6F1EA]/15 flex items-center justify-center p-6 text-center transition-all duration-300 group-hover:border-[#DDD0F3]/60 group-hover:bg-[#392A20] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] md:text-[15px] uppercase tracking-[0.14em] text-[#DDD0F3]/85 select-none transition-colors duration-300 group-hover:text-[#F6F1EA]">
                    {project.placeholderLabel}
                  </span>
                </div>

                {/* Below the image: left-aligned info + CTA */}
                <div className="pt-6 sm:pt-7 flex flex-col items-start text-left">
                  {/* Project Title: Fraunces 600 */}
                  <h3 className="font-fraunces font-semibold text-[26px] sm:text-[32px] md:text-[36px] text-[#F6F1EA] leading-tight transition-colors duration-300 group-hover:text-[#DDD0F3]">
                    {project.title}
                  </h3>

                  {/* One short line: Plus Jakarta Sans 400 */}
                  <p className="mt-2.5 sm:mt-3 font-jakarta font-normal text-[16px] sm:text-[17px] text-[#F6F1EA]/80 leading-relaxed max-w-2xl">
                    {project.line}
                  </p>

                  {/* CTA: "Open →" in Lavender with arrow icon */}
                  <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#DDD0F3] transition-colors duration-300 group-hover:text-white">
                    <span>Open</span>
                    <ArrowRight
                      className="w-4 h-4 stroke-[2.4] transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination indicators under the carousel */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to project ${idx + 1}: ${p.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#DDD0F3]'
                  : 'w-2 bg-[#F6F1EA]/25 hover:bg-[#F6F1EA]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
