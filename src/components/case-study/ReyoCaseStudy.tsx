import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  Play,
  Bookmark,
  Sparkles,
  Tv,
  CheckCircle2,
  ArrowRight,
  Layers,
  Search,
  Users,
  Compass,
  Map,
  Palette,
  ChevronDown,
} from 'lucide-react';

interface ReyoCaseStudyProps {
  onBackToPortfolio: () => void;
}

// Sticky notes data for "You've experienced this too" (The Problem)
const problemNotes = [
  {
    id: 'note-1',
    label: 'MID-PROJECT',
    copy: "You're working on a project in Illustrator, Figma, Premiere Pro, After Effects — whatever it is — and you need a reference.",
    rotate: -3,
    desktopOffsetClass: 'md:translate-y-0',
    isPayoff: false,
  },
  {
    id: 'note-2',
    label: 'SO YOU GO LOOKING',
    copy: "You switch gears and go searching — YouTube, Pinterest, Medium, your screenshot folder, your notes.",
    rotate: 2,
    desktopOffsetClass: 'md:translate-y-5',
    isPayoff: false,
  },
  {
    id: 'note-3',
    label: 'STILL NOTHING?',
    copy: "So you go straight to ChatGPT or Claude and ask it to generate something close enough.",
    rotate: -4,
    desktopOffsetClass: 'md:-translate-y-[15px]',
    isPayoff: false,
  },
  {
    id: 'note-4',
    label: 'TURNS OUT',
    copy: "That exact reference was already saved. You just couldn't find it when it mattered.",
    rotate: 3,
    desktopOffsetClass: 'md:translate-y-2.5',
    isPayoff: true,
  },
];

// Scattered sticky-note layout with pop/scale entrance and accessibility support
function ProblemStickyNotes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-10 sm:mt-14 pt-4 pb-6 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-7 xl:gap-8 items-start w-full">
      {problemNotes.map((note, index) => (
        <motion.div
          key={note.id}
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 14 }
          }
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }
          }
          className={`w-full ${note.desktopOffsetClass}`}
        >
          {/* Individual sticky note card with individual rotation angle */}
          <div
            style={{ transform: `rotate(${note.rotate}deg)` }}
            className={`w-full min-h-[220px] sm:min-h-[240px] rounded-[14px] p-6 flex flex-col justify-start text-left transition-transform duration-200 hover:scale-[1.02] ${
              note.isPayoff
                ? 'bg-[#DDD0F3] border border-[#9570C6] shadow-[0_12px_28px_rgba(149,112,198,0.22)]'
                : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_8px_24px_rgba(59,42,32,0.07)]'
            }`}
          >
            {/* Label inside the note, above body copy */}
            <span
              className={`font-jakarta font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.05em] mb-3 block ${
                note.isPayoff ? 'text-[#5C3D88]' : 'text-[#3B2A20]/60'
              }`}
            >
              {note.label}
            </span>

            {/* Verbatim copy */}
            <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-[1.6]">
              {note.copy}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Data for "One tool. Every source. The right moment." (The Fix)
const cycleStops = [
  {
    id: 'capture',
    tag: 'CAPTURE',
    copy: "Every save — from every app you've ever used — lands in one place.",
  },
  {
    id: 'understand',
    tag: 'UNDERSTAND',
    copy: "It doesn't just store the video. It watches, reads, and understands what's in it.",
  },
  {
    id: 'organize',
    tag: 'ORGANIZE',
    copy: "No more five-tab archaeology. Everything's sorted for you, automatically.",
  },
  {
    id: 'retrieve',
    tag: 'RETRIEVE',
    copy: "Working in any software tool (Illustrator, Figma, Premiere Pro)? Hit a shortcut. Reyo brings the exact reference to you — not the other way around.",
  },
];

const desktopStopLayouts = [
  // STOP 0 — 12 o'clock: CAPTURE
  {
    markerStyle: { top: 'calc(50% - 155px)', left: '50%' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { bottom: 'calc(50% + 155px)', left: '50%' },
    lineClass: '-translate-x-1/2 w-[1.5px] h-7',
    cardStyle: { bottom: 'calc(50% + 182px)', left: '50%' },
    cardClass: '-translate-x-1/2 w-[330px]',
  },
  // STOP 1 — 3 o'clock: UNDERSTAND
  {
    markerStyle: { top: '50%', left: 'calc(50% + 155px)' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { top: '50%', left: 'calc(50% + 155px)' },
    lineClass: '-translate-y-1/2 h-[1.5px] w-7',
    cardStyle: { top: '50%', left: 'calc(50% + 182px)' },
    cardClass: '-translate-y-1/2 w-[300px]',
  },
  // STOP 2 — 6 o'clock: ORGANIZE
  {
    markerStyle: { top: 'calc(50% + 155px)', left: '50%' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { top: 'calc(50% + 155px)', left: '50%' },
    lineClass: '-translate-x-1/2 w-[1.5px] h-7',
    cardStyle: { top: 'calc(50% + 182px)', left: '50%' },
    cardClass: '-translate-x-1/2 w-[330px]',
  },
  // STOP 3 — 9 o'clock: RETRIEVE
  {
    markerStyle: { top: '50%', left: 'calc(50% - 155px)' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { top: '50%', right: 'calc(50% + 155px)' },
    lineClass: '-translate-y-1/2 h-[1.5px] w-7',
    cardStyle: { top: '50%', right: 'calc(50% + 182px)' },
    cardClass: '-translate-y-1/2 w-[320px]',
  },
];

// Circular loop diagram on desktop, vertical flow on mobile
function ReyoCycleLoop() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStop, setActiveStop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const elem = containerRef.current;
    if (!elem) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;
    const interval = setInterval(() => {
      setActiveStop((prev) => (prev + 1) % 4);
    }, 1800); // 7.2s revolution / 4 stops
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isInView]);

  return (
    <div ref={containerRef} className="w-full relative">
      <style>{`
        @keyframes reyoCircleLoop {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* ========================================================
          DESKTOP CIRCULAR LOOP (md and above)
          ======================================================== */}
      <div className="hidden md:flex items-center justify-center min-h-[640px] max-w-[980px] mx-auto relative my-4">
        {/* Central Ring SVG */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width="310"
          height="310"
          viewBox="0 0 310 310"
          fill="none"
        >
          {/* Base continuous circle */}
          <circle
            cx="155"
            cy="155"
            r="154"
            stroke="#3B2A20"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
          {/* Subtle amethyst dotted accent overlay */}
          <circle
            cx="155"
            cy="155"
            r="154"
            stroke="#9570C6"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Center Emblem */}
        <div className="w-28 h-28 rounded-full bg-[#DDD0F3]/30 border border-[#9570C6]/20 flex flex-col items-center justify-center p-3 text-center pointer-events-none z-0">
          <Sparkles className="w-5 h-5 text-[#9570C6] mb-1" />
          <span className="font-fraunces font-semibold text-[15px] text-[#3B2A20] leading-tight">
            Reyo
          </span>
        </div>

        {/* Continuous moving dot around the circle (slow 7.2s loop) */}
        {!shouldReduceMotion && isInView && (
          <div
            className="absolute left-1/2 top-1/2 w-[310px] h-[310px] -ml-[155px] -mt-[155px] pointer-events-none z-20"
            style={{
              animation: 'reyoCircleLoop 7.2s linear infinite',
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#9570C6] shadow-[0_0_12px_rgba(149,112,198,0.7)] ring-2 ring-[#FFFDF9]" />
          </div>
        )}

        {/* 4 STOPS AND CARDS: 12, 3, 6, 9 o'clock */}
        {cycleStops.map((stop, index) => {
          const layout = desktopStopLayouts[index];
          const isHighlighted = shouldReduceMotion ? index === 0 : activeStop === index;

          return (
            <div key={stop.id}>
              {/* Marker dot on ring */}
              <div
                style={layout.markerStyle}
                className={`absolute z-10 w-3.5 h-3.5 rounded-full ring-4 transition-all duration-350 ease-in-out ${layout.markerClass} ${
                  isHighlighted
                    ? 'bg-[#9570C6] ring-[#DDD0F3]'
                    : 'bg-[#3B2A20]/30 ring-[#F6F1EA]'
                }`}
              />

              {/* Short connecting line */}
              <div
                style={layout.lineStyle}
                className={`absolute transition-colors duration-350 ease-in-out ${layout.lineClass} ${
                  isHighlighted ? 'bg-[#9570C6]' : 'bg-[#3B2A20]/20'
                }`}
              />

              {/* Micro-copy card */}
              <div
                style={layout.cardStyle}
                className={`absolute rounded-[14px] p-5 text-left transition-colors duration-350 ease-in-out transition-shadow duration-350 ${layout.cardClass} ${
                  isHighlighted
                    ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_12px_28px_rgba(149,112,198,0.25)]'
                    : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_6px_20px_rgba(59,42,32,0.06)]'
                }`}
              >
                <span
                  className={`font-jakarta font-semibold text-[13px] uppercase tracking-[0.03em] mb-1.5 block transition-colors duration-350 ease-in-out ${
                    isHighlighted ? 'text-white' : 'text-[#9570C6]'
                  }`}
                >
                  {stop.tag}
                </span>
                <p
                  className={`font-jakarta font-normal text-[14.5px] leading-relaxed transition-colors duration-350 ease-in-out ${
                    isHighlighted ? 'text-white' : 'text-[#3B2A20]'
                  }`}
                >
                  {stop.copy}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================
          MOBILE VERTICAL FLOW (below md)
          ======================================================== */}
      <div className="md:hidden relative pl-8 space-y-7 w-full my-6 text-left">
        {/* Continuous thin vertical connecting line */}
        <div
          className="absolute left-[7px] top-3 bottom-6 w-[1.5px] bg-[#3B2A20]/15"
          aria-hidden="true"
        />

        {/* Mobile traveling dot along the vertical line */}
        {!shouldReduceMotion && isInView && (
          <div
            className="absolute left-[3px] w-2.5 h-2.5 rounded-full bg-[#9570C6] shadow-[0_0_8px_rgba(149,112,198,0.8)] z-20 transition-all duration-700 ease-in-out"
            style={{
              top: `calc(${activeStop * 25}% + 14px)`,
            }}
          />
        )}

        {cycleStops.map((stop, index) => {
          const isHighlighted = shouldReduceMotion ? index === 0 : activeStop === index;
          return (
            <div key={stop.id} className="relative">
              {/* Marker dot on the vertical line */}
              <div
                className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full ring-4 transition-all duration-350 ease-in-out z-10 ${
                  isHighlighted
                    ? 'bg-[#9570C6] ring-[#DDD0F3]'
                    : 'bg-[#3B2A20]/30 ring-[#F6F1EA]'
                }`}
              />

              {/* Sticky-note style micro-copy card */}
              <div
                className={`rounded-[14px] p-5 text-left transition-colors duration-350 ease-in-out transition-shadow duration-350 ${
                  isHighlighted
                    ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_10px_24px_rgba(149,112,198,0.22)]'
                    : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_4px_16px_rgba(59,42,32,0.05)]'
                }`}
              >
                {/* Tag Label */}
                <span
                  className={`font-jakarta font-semibold text-[13px] uppercase tracking-[0.03em] mb-1.5 block transition-colors duration-350 ease-in-out ${
                    isHighlighted ? 'text-white' : 'text-[#9570C6]'
                  }`}
                >
                  {stop.tag}
                </span>

                {/* Copy */}
                <p
                  className={`font-jakarta font-normal text-[15px] leading-relaxed transition-colors duration-350 ease-in-out ${
                    isHighlighted ? 'text-white' : 'text-[#3B2A20]'
                  }`}
                >
                  {stop.copy}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// FadeSection for intersection observer animations (fade up 16px, 500ms, once only)
function CaseStudyFadeSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const elem = ref.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elem);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Data for "Behind the loop" (How I built it)
interface BuildPanel {
  step: string;
  tag: string;
  heading: string;
  bullets: string[];
  statRow?: { number: string; label: string }[];
  visualTag: string;
  visualTitle: string;
  visualDescription: string;
}

const buildPanels: BuildPanel[] = [
  {
    step: '01',
    tag: 'USER RESEARCH',
    heading: "First, I made sure I wasn't the only one",
    bullets: [
      "Talked to designers directly to find out exactly where the problem was hitting them",
      "Not a guess — the real pain point, from real conversations",
    ],
    visualTag: 'USER RESEARCH',
    visualTitle: 'Research & Survey Visual',
    visualDescription: 'Design interview synthesis, survey findings & verbatim quotes',
  },
  {
    step: '02',
    tag: 'COMPETITIVE AUDIT / MARKET RESEARCH',
    heading: "Then I checked what's already out there",
    bullets: [
      "It's 2026 — a new AI tool launches every day, so I had to know: does one already solve this?",
      "Went through international and Indian tools, deep-dived YouTube, explored every emerging idea in the space",
      "Found close attempts. Nothing that actually closed the gap",
    ],
    visualTag: 'COMPETITIVE ANALYSIS',
    visualTitle: 'Competitive Analysis Visual',
    visualDescription: 'Tool audit & feature gap matrix across international & regional apps',
  },
  {
    step: '03',
    tag: 'BRAINSTORMING / PLANNING',
    heading: "So I sat down with Claude and tested the idea",
    bullets: [
      "Walked Claude through the gap I'd found — could I actually build something to fill it?",
      "Validated it technically, then planned the whole thing — tech stack, what to build first, what to lock for later",
    ],
    visualTag: 'PLANNING & ROADMAP',
    visualTitle: 'Planning / Roadmap Visual',
    visualDescription: 'Technical feasibility breakdown, tech stack choices & phased release plan',
  },
  {
    step: '04',
    tag: 'BRANDING & VISUAL DIRECTION',
    heading: "Then I gave it a personality",
    bullets: [
      "Chose the typography, color, tone, and positioning",
      "Named it, gave it a visual identity — not just a UI",
    ],
    visualTag: 'BRAND VISUAL',
    visualTitle: 'Brand & Identity Visual',
    visualDescription: 'Typography, color system, tone & positioning',
  },
  {
    step: '05',
    tag: 'WIREFRAMES',
    heading: "Then I sketched it out",
    bullets: [
      "Rough wireframes first — structure before polish",
      "Ran them through AI tools, refined until the flow actually made sense",
    ],
    visualTag: 'WIREFRAMES',
    visualTitle: 'Wireframe Visual',
    visualDescription: 'Early structure sketches & flow refinement',
  },
  {
    step: '06',
    tag: 'UI',
    heading: "Then I made it real",
    bullets: [
      "Refined until it passed real UX principles — not just \"looks good,\" but functions well",
      "Built the frontend, then the backend",
    ],
    visualTag: 'UI',
    visualTitle: 'Final UI Visual',
    visualDescription: 'Finished interface screens',
  },
  {
    step: '07',
    tag: 'TESTING',
    heading: "Then I tested it on myself, for real",
    bullets: [
      "Connected my own YouTube account and tried it live in Figma — first",
      "Tested the backend too — how deeply it understands and classifies each video",
    ],
    statRow: [
      { number: '[NUMBER]', label: 'saves processed' },
      { number: '[NUMBER]%', label: 'transcribed' },
      { number: '[NUMBER]%', label: 'classified' },
    ],
    visualTag: 'PRODUCT SCREENSHOT / DEMO',
    visualTitle: 'Product Screenshot / Demo Visual',
    visualDescription: 'Live test environment showing in-app shortcut retrieval & video transcription classification',
  },
];

function getStepIcon(step: string) {
  switch (step) {
    case '01':
      return <Users className="w-6 h-6 stroke-[1.8]" />;
    case '02':
      return <Compass className="w-6 h-6 stroke-[1.8]" />;
    case '03':
      return <Map className="w-6 h-6 stroke-[1.8]" />;
    case '04':
      return <Palette className="w-6 h-6 stroke-[1.8]" />;
    case '05':
      return <Layers className="w-6 h-6 stroke-[1.8]" />;
    case '06':
      return <Sparkles className="w-6 h-6 stroke-[1.8]" />;
    case '07':
    default:
      return <Play className="w-6 h-6 stroke-[1.8]" />;
  }
}

function BehindTheLoopSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      const stepIndex = Math.min(6, Math.floor(progress * 7));
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduceMotion, isMobile]);

  const jumpToStep = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const containerTop = currentScrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScrollY = containerTop + (idx + 0.5) * (totalScrollable / 7);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  // Stacked fallback for prefers-reduced-motion or mobile viewports (no scroll-pinning)
  if (shouldReduceMotion || isMobile) {
    return (
      <section aria-label="How I built it: Behind the loop" className="text-left w-full">
        {/* Section Heading */}
        <div className="text-left mb-8 sm:mb-12">
          <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2">
            HOW I BUILT IT
          </span>
          <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
            Behind the loop
          </h2>
        </div>

        {/* 7 Stacked Panels */}
        <div className="w-screen -ml-[calc((100vw-100%)/2)] flex flex-col border-y border-[#3B2A20]/15 shadow-[0_4px_30px_rgba(59,42,32,0.04)]">
          {buildPanels.map((panel, idx) => (
            <div
              key={panel.step}
              className="w-full flex flex-col border-b border-[#3B2A20]/15 last:border-b-0"
            >
              {/* Text side */}
              <div className="w-full bg-[#F6F1EA] px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-start text-left">
                {/* Step indicator label for mobile */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="font-jakarta font-semibold text-[12px] uppercase tracking-[0.04em] text-[#9570C6]">
                    Step {idx + 1} of 7 — {panel.tag}
                  </span>
                </div>

                <h3 className="font-fraunces font-semibold text-[18px] sm:text-[21px] text-[#3B2A20] leading-snug mb-3.5">
                  {panel.heading}
                </h3>

                <ul className="space-y-3">
                  {panel.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#9570C6] shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span className="font-jakarta font-normal text-[15px] text-[#3B2A20] leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {panel.statRow && (
                  <div className="mt-6 pt-5 border-t border-[#3B2A20]/15 flex flex-wrap items-baseline gap-6">
                    {panel.statRow.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="font-fraunces font-semibold text-[20px] text-[#9570C6] leading-tight">
                          {stat.number}
                        </span>
                        <span className="font-jakarta font-normal text-[12px] text-[#3B2A20]/75 mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Single clean placeholder card side */}
              <div className="w-full bg-[#2A1E17] px-6 py-10 flex items-center justify-center">
                <div className="w-full max-w-[380px] rounded-[18px] border border-[#F6F1EA]/15 bg-[#1E140E] p-7 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-[#9570C6]/20 border border-[#9570C6]/40 flex items-center justify-center mb-4 text-[#DDD0F3]">
                    {getStepIcon(panel.step)}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#9570C6]/15 border border-[#9570C6]/30 text-[#DDD0F3] font-jakarta font-semibold text-[11px] uppercase tracking-[0.05em] mb-2.5">
                    {panel.visualTag}
                  </span>
                  <h4 className="font-fraunces font-semibold text-[17px] text-[#F6F1EA] mb-1.5 leading-snug">
                    {panel.visualTitle}
                  </h4>
                  <p className="font-jakarta text-[13px] text-[#F6F1EA]/65 leading-relaxed max-w-[280px]">
                    {panel.visualDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Pinned / Sticky Viewport-Height Section (100vh)
  return (
    <div
      ref={containerRef}
      className="relative w-screen -ml-[calc((100vw-100%)/2)] h-[420vh]"
      aria-label="How I built it: Behind the loop"
    >
      {/* Pinned Viewport Container (sticky at top, stays for the scroll duration) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-row border-y border-[#3B2A20]/15 shadow-[0_4px_30px_rgba(59,42,32,0.04)]">
        {/* Left Side: Cream Background with Single Strictly Left-Aligned Text Column */}
        <div className="w-1/2 bg-[#F6F1EA] h-full flex flex-col justify-between py-10 lg:py-12 pl-[max(2.5rem,calc((100vw-1120px)/2+1.5rem))] pr-8 lg:pr-14 border-r border-[#3B2A20]/10">
          {/* Top block: Horizontal step indicator (01–07) + Section Header */}
          <div className="w-full max-w-[480px] text-left shrink-0">
            {/* Horizontal step indicator row: 01 — 02 — 03 — 04 — 05 — 06 — 07 */}
            <div
              className="flex items-center gap-2 mb-7 select-none"
              aria-label="Step progress"
            >
              {buildPanels.map((panel, idx) => {
                const isActive = activeStep === idx;
                return (
                  <React.Fragment key={panel.step}>
                    {idx > 0 && (
                      <span className="text-[#3B2A20]/25 select-none font-light text-[13px]">
                        —
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => jumpToStep(idx)}
                      className={`font-jakarta text-[13px] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9570C6] rounded-xs ${
                        isActive
                          ? 'font-bold text-[#9570C6]'
                          : 'font-medium text-[#3B2A20]/40 hover:text-[#3B2A20]/75'
                      }`}
                      aria-label={`Jump to step ${panel.step}: ${panel.tag}`}
                    >
                      {panel.step}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>

            {/* "HOW I BUILT IT" eyebrow */}
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-1">
              HOW I BUILT IT
            </span>

            {/* "Behind the loop" heading — visual anchor */}
            <h2 className="font-fraunces font-semibold text-[32px] lg:text-[38px] text-[#3B2A20] leading-tight">
              Behind the loop
            </h2>
          </div>

          {/* Dynamic Content Container below a FIXED vertical gap of 52px (never shrinks or collapses) */}
          <div className="w-full max-w-[480px] mt-12 lg:mt-14 flex-1 flex flex-col justify-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="w-full text-left"
              >
                {/* Small step tag */}
                <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.04em] text-[#9570C6] block mb-2 sm:mb-2.5">
                  {buildPanels[activeStep].tag}
                </span>

                {/* Step Heading — 20-25% smaller than before so Behind the loop is the clear anchor */}
                <h3 className="font-fraunces font-semibold text-[18px] lg:text-[21px] text-[#3B2A20] leading-snug mb-3.5 sm:mb-4">
                  {buildPanels[activeStep].heading}
                </h3>

                {/* Bullets */}
                <ul className="space-y-3 sm:space-y-3.5">
                  {buildPanels[activeStep].bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#9570C6] shrink-0 mt-2.5"
                        aria-hidden="true"
                      />
                      <span className="font-jakarta font-normal text-[15px] lg:text-[16px] text-[#3B2A20] leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Optional Stat Row for Panel 7 */}
                {buildPanels[activeStep].statRow && (
                  <div className="mt-6 pt-5 border-t border-[#3B2A20]/15 flex flex-wrap items-baseline gap-6 sm:gap-8">
                    {buildPanels[activeStep].statRow!.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="font-fraunces font-semibold text-[20px] lg:text-[23px] text-[#9570C6] leading-tight tracking-tight">
                          {stat.number}
                        </span>
                        <span className="font-jakarta font-normal text-[12.5px] lg:text-[13px] text-[#3B2A20]/75 mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subdued Footer Hint (strictly left-aligned) */}
          <div className="w-full max-w-[480px] shrink-0 pt-4 text-left text-[12px] font-jakarta text-[#3B2A20]/45 flex items-center gap-2 select-none">
            <span>Scroll down to step through 01–07</span>
            <span className="inline-block" aria-hidden="true">↓</span>
          </div>
        </div>

        {/* Right Side: Dark Background with SINGLE Clean Placeholder Card */}
        <div className="w-1/2 bg-[#2A1E17] h-full flex items-center justify-center p-8 lg:p-12 pr-[max(2.5rem,calc((100vw-1120px)/2+1.5rem))] pl-8 lg:pl-12">
          <div className="w-full max-w-[440px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -12 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="w-full rounded-[20px] border border-[#F6F1EA]/15 bg-[#1E140E] p-8 lg:p-10 flex flex-col items-center justify-center text-center shadow-2xl"
              >
                {/* One Icon */}
                <div className="w-14 h-14 rounded-full bg-[#9570C6]/20 border border-[#9570C6]/40 flex items-center justify-center mb-5 text-[#DDD0F3]">
                  {getStepIcon(buildPanels[activeStep].step)}
                </div>

                {/* One Label */}
                <span className="px-3.5 py-1 rounded-full bg-[#9570C6]/15 border border-[#9570C6]/30 text-[#DDD0F3] font-jakarta font-semibold text-[11px] lg:text-[12px] uppercase tracking-[0.05em] mb-3">
                  {buildPanels[activeStep].visualTag}
                </span>

                {/* Visual Title */}
                <h4 className="font-fraunces font-semibold text-[19px] lg:text-[21px] text-[#F6F1EA] mb-2 leading-snug">
                  {buildPanels[activeStep].visualTitle}
                </h4>

                {/* One Short Caption Line Underneath */}
                <p className="font-jakarta text-[13.5px] lg:text-[14px] text-[#F6F1EA]/65 max-w-[300px] leading-relaxed">
                  {buildPanels[activeStep].visualDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Challenges & Trade-offs cards with hover-swap highlight
function ChallengesTradeoffsCards() {
  const [hoveredCard, setHoveredCard] = useState<'challenges' | 'tradeoffs' | null>(null);

  // Default state: 'tradeoffs' is highlighted.
  // Hovering 'challenges' swaps highlight to 'challenges'.
  // Leaving 'challenges' returns highlight to 'tradeoffs'.
  const isChallengesHighlighted = hoveredCard === 'challenges';
  const isTradeoffsHighlighted = !isChallengesHighlighted;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {/* CARD 1 — "Challenges I Faced" */}
      <div
        onMouseEnter={() => setHoveredCard('challenges')}
        onMouseLeave={() => setHoveredCard(null)}
        className={`rounded-[12px] p-7 sm:p-9 flex flex-col justify-start transition-all duration-300 ease-out ${
          isChallengesHighlighted
            ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_8px_24px_rgba(149,112,198,0.22)]'
            : 'bg-[#F6F1EA] border border-[#3B2A20]/15 shadow-[0_2px_12px_rgba(59,42,32,0.03)]'
        }`}
      >
        <h3
          className={`font-fraunces font-semibold text-[22px] sm:text-[24px] leading-snug mb-5 sm:mb-6 transition-colors duration-300 ${
            isChallengesHighlighted ? 'text-white' : 'text-[#3B2A20]'
          }`}
        >
          Challenges I Faced
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isChallengesHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isChallengesHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              Teaching a system to actually understand a video — not just store it — took longer than I expected
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isChallengesHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isChallengesHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              I&apos;m not an engineer. Learning the backend fast enough to keep building meant leaning hard on Claude and ChatGPT
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isChallengesHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isChallengesHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              Classification isn&apos;t fully done yet — some saves are smarter than others right now
            </span>
          </li>
        </ul>
      </div>

      {/* CARD 2 — "Trade-offs" */}
      <div
        onMouseEnter={() => setHoveredCard('tradeoffs')}
        onMouseLeave={() => setHoveredCard(null)}
        className={`rounded-[12px] p-7 sm:p-9 flex flex-col justify-start transition-all duration-300 ease-out ${
          isTradeoffsHighlighted
            ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_8px_24px_rgba(149,112,198,0.22)]'
            : 'bg-[#F6F1EA] border border-[#3B2A20]/15 shadow-[0_2px_12px_rgba(59,42,32,0.03)]'
        }`}
      >
        <h3
          className={`font-fraunces font-semibold text-[22px] sm:text-[24px] leading-snug mb-5 sm:mb-6 transition-colors duration-300 ${
            isTradeoffsHighlighted ? 'text-white' : 'text-[#3B2A20]'
          }`}
        >
          Trade-offs
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              Built for YouTube first, not everything at once — depth over breadth, for now
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              Picked speed over perfect accuracy. A working v1 beats a flawless one that never ships
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2.5 transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'bg-[#DDD0F3]' : 'bg-[#9570C6]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-jakarta font-normal text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
                isTradeoffsHighlighted ? 'text-white' : 'text-[#3B2A20]'
              }`}
            >
              Leaned on AI tools to move fast, knowing I&apos;d need to actually learn the stack properly later
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Tap-to-reveal Before & After cards in The Outcome section
function OutcomeRevealCards() {
  const shouldReduceMotion = useReducedMotion();
  const [isAfterExpanded, setIsAfterExpanded] = useState(false);

  // If user prefers reduced motion, show both cards permanently in revealed state
  if (shouldReduceMotion) {
    return (
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 1: Before (Always open, static) */}
        <div className="bg-[#EDE5D8] border border-[#3B2A20]/20 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(59,42,32,0.05)] min-h-[170px] sm:min-h-[180px]">
          <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20]/60 mb-2.5 block">
            BEFORE
          </span>
          <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
            Digging through a 40-minute video, hoping you remember roughly where the part you need is.
          </p>
        </div>

        {/* Card 2: After (Revealed directly) */}
        <div className="bg-[#DDD0F3] border border-[#9570C6]/40 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(149,112,198,0.12)] min-h-[170px] sm:min-h-[180px]">
          <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20] mb-2.5 block">
            AFTER
          </span>
          <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
            Ask. Get the exact moment. 30 seconds.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* CARD 1 — "Before" (STATIC, ALWAYS OPEN, NO TAP INTERACTION) */}
      <div className="w-full bg-[#EDE5D8] border border-[#3B2A20]/20 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(59,42,32,0.04)] min-h-[170px] sm:min-h-[180px]">
        <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20]/60 mb-2.5 block">
          BEFORE
        </span>
        <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
          Digging through a 40-minute video, hoping you remember roughly where the part you need is.
        </p>
      </div>

      {/* CARD 2 — "After" (EXPAND / UNFOLD ON TAP) */}
      <div className="w-full">
        <button
          type="button"
          onClick={() => setIsAfterExpanded((prev) => !prev)}
          aria-expanded={isAfterExpanded}
          aria-label={isAfterExpanded ? 'Collapse After card' : 'Expand After card to see result'}
          className={`w-full min-h-[170px] sm:min-h-[180px] rounded-[16px] p-6 text-center flex flex-col items-center justify-center transition-all duration-300 ease-out cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none select-none ${
            isAfterExpanded
              ? 'bg-[#DDD0F3] border border-[#9570C6]/50 shadow-[0_6px_20px_rgba(149,112,198,0.18)]'
              : 'bg-[#F6F1EA] border border-[#9570C6]/30 shadow-[0_2px_12px_rgba(59,42,32,0.03)] hover:border-[#9570C6]/60'
          }`}
        >
          <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.08em] text-[#3B2A20]">
            AFTER
          </span>

          <AnimatePresence initial={false}>
            {isAfterExpanded ? (
              <motion.div
                key="after-revealed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden flex flex-col items-center mt-2.5"
              >
                <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
                  Ask. Get the exact moment. 30 seconds.
                </p>
                <span className="mt-2.5 text-[11px] font-jakarta text-[#3B2A20]/45 block">
                  tap to close
                </span>
              </motion.div>
            ) : (
              <motion.span
                key="after-closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2.5 text-[12px] font-jakarta text-[#3B2A20]/50 flex items-center gap-1.5"
              >
                <ChevronDown className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                tap to see
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

export function ReyoCaseStudy({ onBackToPortfolio }: ReyoCaseStudyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [savesImgError, setSavesImgError] = useState(false);

  // Set document title
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Reyo — Case Study · Reshma Angajala';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    return () => {
      document.title = prevTitle;
    };
  }, []);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F6F1EA] text-[#3B2A20] font-normal selection:bg-[#9570C6]/20 selection:text-[#9570C6] relative overflow-x-clip">
      {/* ========================================================
          PAGE CHROME
          - Thin amethyst reading-progress bar across the very top
          - Round close button (X) fixed top-right, links back to homepage
          ======================================================== */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#9570C6] z-50 transition-all duration-75 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onBackToPortfolio}
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#3B2A20]/10 flex items-center justify-center text-[#3B2A20] hover:text-[#9570C6] hover:border-[#9570C6]/40 transition-all shadow-[0_2px_12px_rgba(59,42,32,0.06)] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none active:scale-95"
        aria-label="Close and return to homepage"
      >
        <X className="w-5 h-5 stroke-[2.2]" />
      </button>

      {/* Main Centred Column, max-width 1120px, side padding 24px */}
      <main className="w-full max-w-[1120px] mx-auto px-6 pt-16 sm:pt-24 pb-24 space-y-[72px] md:space-y-[120px]">
        {/* ========================================================
            HEADER
            ======================================================== */}
        <header className="w-full text-left">
          {/* 1. Tag row (above the heading) */}
          <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
            <span className="px-3 py-1 rounded-full border border-[#3B2A20]/20 font-jakarta font-medium text-[13px] text-[#3B2A20] whitespace-nowrap">
              Desktop App
            </span>
            <span className="px-3 py-1 rounded-full border border-[#3B2A20]/20 font-jakarta font-medium text-[13px] text-[#3B2A20] whitespace-nowrap">
              Browser Extension
            </span>
          </div>

          {/* 2. Heading & 3. "0 → 1 Project" tag */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
            <h1 className="font-fraunces font-semibold text-[clamp(40px,6vw,72px)] text-[#3B2A20] leading-[1.08] tracking-tight max-w-3xl">
              The 30-second answer, not the 40-minute video
            </h1>
            <div className="shrink-0 sm:pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#DDD0F3] border border-[#9570C6] text-[#9570C6] font-jakarta font-semibold text-[12px] uppercase tracking-[0.03em] whitespace-nowrap">
                0 → 1 Project
              </span>
            </div>
          </div>

          {/* 4. Overview line (directly below heading, before the My role/Timeline/Status row) */}
          <p className="mt-8 sm:mt-10 font-jakarta font-normal text-[18px] sm:text-[20px] text-[#3B2A20] leading-relaxed max-w-[640px]">
            Every designer&apos;s got a graveyard of saved videos, images, and articles — scattered across five different apps, none of which talk to each other. Reyo remembers what you saved and finds the exact moment, so you stop replaying a 40-minute tutorial to find one 10-second detail.
          </p>

          {/* 5. Meta block */}
          <div className="mt-8 sm:mt-10 space-y-6 max-w-4xl text-[17px] font-jakarta leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                My role
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                Everything: research, product design, and building it end to end
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                Timeline
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                5 months · ongoing
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                Status
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                Working product, in active development
              </span>
            </div>
          </div>

          {/* Hero Video (full column width, rounded 24px) */}
          <div className="mt-12 sm:mt-16 w-full">
            <div className="w-full overflow-hidden rounded-[24px] bg-[#131313] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#3B2A20]/[0.08]">
              {!videoError ? (
                <video
                  src="/work/reyo/hero.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full aspect-[16/9] object-cover"
                  onError={() => setVideoError(true)}
                  aria-label="Product video of Reyo in action"
                />
              ) : (
                <div className="w-full aspect-[16/9] bg-[#131313] flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#9570C6]/20 flex items-center justify-center mb-3">
                    <Play className="w-8 h-8 text-[#9570C6] fill-[#9570C6] ml-1" />
                  </div>
                  <span className="font-fraunces font-semibold text-2xl text-[#F6F1EA]">
                    Product video
                  </span>
                </div>
              )}
            </div>

            {/* Caption below in Caveat 600, 20px, centred */}
            <p className="mt-3 font-caveat font-semibold text-[20px] text-[#3B2A20]/80 text-center">
              a quick look at Reyo in action
            </p>
          </div>
        </header>

        {/* ========================================================
            SECTION 1 — THE PROBLEM
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The problem: You've experienced this too" className="text-left">
            {/* Small eyebrow/kicker label */}
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2">
              THE PROBLEM
            </span>

            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
              You&apos;ve experienced this too
            </h2>

            {/* Scattered sticky-note layout */}
            <ProblemStickyNotes />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 2 — THE FIX
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The fix: One tool. Every source. The right moment." className="text-left md:text-center">
            {/* Small eyebrow label above it, same style as "THE PROBLEM" */}
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 text-left md:text-center">
              THE FIX
            </span>

            {/* SECTION HEADING */}
            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight text-left md:text-center">
              One tool. Every source. The right moment.
            </h2>

            {/* INTRO LINE (below heading, before the loop): "So this is where Reyo enters." */}
            <p className="font-jakarta font-medium text-[18px] sm:text-[20px] text-[#3B2A20] text-left md:text-center mt-3 sm:mt-4 mb-8 sm:mb-12">
              So this is where Reyo enters.
            </p>

            {/* CIRCULAR LOOP DIAGRAM (Desktop) & VERTICAL FLOW (Mobile) */}
            <ReyoCycleLoop />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 3 — HOW I BUILT IT
            ======================================================== */}
        <BehindTheLoopSection />

        {/* ========================================================
            SECTION 4 — CHALLENGES & TRADE-OFFS
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="Challenges and trade-offs" className="text-left">
            {/* SECTION HEADING */}
            <div className="text-left mb-8 sm:mb-10">
              <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 sm:mb-2.5">
                CHALLENGES &amp; TRADE-OFFS
              </span>
              <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
                What I ran into. What I chose.
              </h2>
            </div>

            {/* TWO-CARD ROW WITH HOVER-SWAP HIGHLIGHT */}
            <ChallengesTradeoffsCards />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 5 — THE OUTCOME
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The outcome: Full circle" className="text-center">
            {/* SECTION HEADING (centered) */}
            <div className="text-center mb-8 sm:mb-10">
              <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 sm:mb-2.5">
                THE OUTCOME
              </span>
              <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
                Full circle
              </h2>
            </div>

            {/* TWO TAP-TO-REVEAL CARDS */}
            <OutcomeRevealCards />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 6 — WHAT I LEARNED
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="What I learned" className="text-left">
            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
              What I learned
            </h2>

            {/* Three white cards in a row (stack on mobile) */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[21px] sm:text-[22px] text-[#3B2A20] leading-snug">
                  Let research disagree with you
                </h3>
                <p className="mt-3 font-jakarta text-[16px] text-[#3B2A20]/65 leading-relaxed">
                  My survey pointed at Instagram. The technology pointed at YouTube. Saying that out loud made the product sharper.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[21px] sm:text-[22px] text-[#3B2A20] leading-snug">
                  Design and build aren&apos;t separate
                </h3>
                <p className="mt-3 font-jakarta text-[16px] text-[#3B2A20]/65 leading-relaxed">
                  Building Reyo myself showed me which ideas were real and which only worked in Figma.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[21px] sm:text-[22px] text-[#3B2A20] leading-snug">
                  Constraints are design input
                </h3>
                <p className="mt-3 font-jakarta text-[16px] text-[#3B2A20]/65 leading-relaxed">
                  A 20-request daily limit shaped the whole experience — the queue, the status, the waiting states.
                </p>
              </div>
            </div>
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            CLOSING
            ======================================================== */}
        <CaseStudyFadeSection>
          <div className="pt-8 sm:pt-14 text-center flex flex-col items-center">
            {/* Centred, Fraunces 600, clamp(36px, 5vw, 56px): "Thank you for reading ✦" */}
            <h2 className="font-fraunces font-semibold text-[clamp(36px,5vw,56px)] text-[#3B2A20] leading-tight">
              Thank you for reading ✦
            </h2>

            {/* Two buttons: "Back to portfolio" and "Email me" */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="px-8 py-3.5 rounded-full bg-[#F6F1EA] text-[#3B2A20] border border-[#3B2A20] hover:bg-[#EDE5D8] font-jakarta font-medium text-[16px] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none active:scale-[0.98]"
              >
                Back to portfolio
              </button>
              <a
                href="mailto:reshmaangajala@gmail.com"
                className="px-8 py-3.5 rounded-full bg-[#9570C6] text-[#F6F1EA] hover:bg-[#835db6] font-jakarta font-medium text-[16px] transition-all duration-200 shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none active:scale-[0.98]"
              >
                Email me
              </a>
            </div>
          </div>
        </CaseStudyFadeSection>
      </main>
    </div>
  );
}
