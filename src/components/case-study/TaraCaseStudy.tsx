import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  Play,
  Sparkles,
  Users,
  Compass,
  Palette,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface TaraCaseStudyProps {
  onBackToPortfolio: () => void;
}

// ─────────────────────────────────────────────────────────────
// SECTION 2 — PROBLEM (Sticky Notes)
// ─────────────────────────────────────────────────────────────
const problemNotes = [
  {
    id: 'note-1',
    label: 'MID-DAY',
    copy: "You're deep in something else. The thing you were supposed to follow up on? Already gone from your head.",
    rotate: -3,
    desktopOffsetClass: 'md:translate-y-0',
    isPayoff: false,
  },
  {
    id: 'note-2',
    label: 'LATER THAT NIGHT',
    copy: "It comes back to you at 11pm, when there's nothing you can do about it.",
    rotate: 2,
    desktopOffsetClass: 'md:translate-y-5',
    isPayoff: false,
  },
  {
    id: 'note-3',
    label: 'NEXT MORNING',
    copy: 'You set five reminders to not forget again. You forget to check three of them.',
    rotate: -4,
    desktopOffsetClass: 'md:-translate-y-[15px]',
    isPayoff: false,
  },
  {
    id: 'note-4',
    label: 'TURNS OUT',
    copy: 'The problem was never remembering to set a reminder. It was needing one you didn\'t have to set.',
    rotate: 3,
    desktopOffsetClass: 'md:translate-y-2.5',
    isPayoff: true,
  },
];

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
          <div
            style={{ transform: `rotate(${note.rotate}deg)` }}
            className={`w-full min-h-[220px] sm:min-h-[240px] rounded-[14px] p-6 flex flex-col justify-start text-left transition-transform duration-200 hover:scale-[1.02] ${
              note.isPayoff
                ? 'bg-[#DDD0F3] border border-[#9570C6] shadow-[0_12px_28px_rgba(149,112,198,0.22)]'
                : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_8px_24px_rgba(59,42,32,0.07)]'
            }`}
          >
            <span
              className={`font-jakarta font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.05em] mb-3 block ${
                note.isPayoff ? 'text-[#5C3D88]' : 'text-[#3B2A20]/60'
              }`}
            >
              {note.label}
            </span>
            <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-[1.6]">
              {note.copy}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 3 — THE FIX (Circular Loop)
// ─────────────────────────────────────────────────────────────
const cycleStops = [
  {
    id: 'notice',
    tag: 'NOTICE',
    copy: 'Tara picks up on the things you mention you need to do — in passing, not as a formal task.',
  },
  {
    id: 'understand',
    tag: 'UNDERSTAND',
    copy: 'It figures out roughly when this actually matters to you, not just when you typed it.',
  },
  {
    id: 'hold',
    tag: 'HOLD',
    copy: 'It sits quietly instead of nagging you immediately — no instant popup, no clutter.',
  },
  {
    id: 'nudge',
    tag: 'NUDGE',
    copy: "It resurfaces right when it's actually relevant — not before, not after.",
  },
];

const desktopStopLayouts = [
  // STOP 0 — 12 o'clock: NOTICE
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
    cardClass: '-translate-y-1/2 w-[310px]',
  },
  // STOP 2 — 6 o'clock: HOLD
  {
    markerStyle: { top: 'calc(50% + 155px)', left: '50%' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { top: 'calc(50% + 155px)', left: '50%' },
    lineClass: '-translate-x-1/2 w-[1.5px] h-7',
    cardStyle: { top: 'calc(50% + 182px)', left: '50%' },
    cardClass: '-translate-x-1/2 w-[330px]',
  },
  // STOP 3 — 9 o'clock: NUDGE
  {
    markerStyle: { top: '50%', left: 'calc(50% - 155px)' },
    markerClass: '-translate-x-1/2 -translate-y-1/2',
    lineStyle: { top: '50%', right: 'calc(50% + 155px)' },
    lineClass: '-translate-y-1/2 h-[1.5px] w-7',
    cardStyle: { top: '50%', right: 'calc(50% + 182px)' },
    cardClass: '-translate-y-1/2 w-[320px]',
  },
];

function TaraCycleLoop() {
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
    }, 1800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isInView]);

  return (
    <div ref={containerRef} className="w-full relative">
      {/* DESKTOP CIRCULAR LOOP (md and above) */}
      <div className="hidden md:flex items-center justify-center min-h-[640px] max-w-[980px] mx-auto relative my-4">
        {/* Central Ring SVG */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width="310"
          height="310"
          viewBox="0 0 310 310"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="155"
            cy="155"
            r="154"
            stroke="#3B2A20"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
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

        {/* Center Emblem: "Tara" with space above for spark/logo */}
        <div className="w-28 h-28 rounded-full bg-[#DDD0F3]/30 border border-[#9570C6]/20 flex flex-col items-center justify-center p-3 text-center pointer-events-none z-0">
          <Sparkles className="w-5 h-5 text-[#9570C6] mb-1" />
          <span className="font-fraunces font-semibold text-[17px] text-[#3B2A20] leading-tight">
            Tara
          </span>
        </div>

        {/* 4 Peripheral Stops */}
        {cycleStops.map((stop, idx) => {
          const isHighlighted = activeStop === idx;
          const layout = desktopStopLayouts[idx];

          return (
            <React.Fragment key={stop.id}>
              {/* Ring Node Marker */}
              <div
                style={layout.markerStyle}
                className={`absolute z-10 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 pointer-events-none ${
                  layout.markerClass
                } ${
                  isHighlighted
                    ? 'bg-[#9570C6] border-white ring-4 ring-[#9570C6]/25 scale-125'
                    : 'bg-[#FFFDF9] border-[#3B2A20]/40'
                }`}
              />

              {/* Connecting leader line */}
              <div
                style={layout.lineStyle}
                className={`absolute transition-colors duration-300 pointer-events-none ${
                  layout.lineClass
                } ${isHighlighted ? 'bg-[#9570C6]' : 'bg-[#3B2A20]/15'}`}
              />

              {/* Information Card */}
              <div
                style={layout.cardStyle}
                className={`absolute z-20 ${layout.cardClass}`}
              >
                <div
                  className={`rounded-[14px] p-5 text-left transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_12px_28px_rgba(149,112,198,0.25)] scale-[1.02]'
                      : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_4px_16px_rgba(59,42,32,0.05)]'
                  }`}
                >
                  <span
                    className={`font-jakarta font-semibold text-[12px] uppercase tracking-[0.05em] mb-1.5 block transition-colors duration-300 ${
                      isHighlighted ? 'text-white' : 'text-[#9570C6]'
                    }`}
                  >
                    {stop.tag}
                  </span>
                  <p
                    className={`font-jakarta font-normal text-[14px] leading-relaxed transition-colors duration-300 ${
                      isHighlighted ? 'text-white' : 'text-[#3B2A20]'
                    }`}
                  >
                    {stop.copy}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* MOBILE VERTICAL FLOW (below md) */}
      <div className="flex md:hidden flex-col gap-4 max-w-[420px] mx-auto text-left relative pl-6 border-l-2 border-[#9570C6]/25 ml-4">
        {cycleStops.map((stop, idx) => {
          const isHighlighted = activeStop === idx;
          return (
            <div key={stop.id} className="relative">
              <span
                className={`absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#9570C6] border-white ring-3 ring-[#9570C6]/30 scale-110'
                    : 'bg-[#3B2A20]/30 border-[#F6F1EA]'
                }`}
              />
              <div
                className={`rounded-[14px] p-5 text-left transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#9570C6] border border-[#9570C6] shadow-[0_10px_24px_rgba(149,112,198,0.22)]'
                    : 'bg-[#FFFDF9] border border-[#3B2A20]/15 shadow-[0_4px_16px_rgba(59,42,32,0.05)]'
                }`}
              >
                <span
                  className={`font-jakarta font-semibold text-[13px] uppercase tracking-[0.03em] mb-1.5 block transition-colors duration-300 ${
                    isHighlighted ? 'text-white' : 'text-[#9570C6]'
                  }`}
                >
                  {stop.tag}
                </span>
                <p
                  className={`font-jakarta font-normal text-[15px] leading-relaxed transition-colors duration-300 ${
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

// ─────────────────────────────────────────────────────────────
// INTERSECTION FADE COMPONENT
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// SECTION 4 — HOW I APPROACHED IT (Pinned Steps 01–05)
// ─────────────────────────────────────────────────────────────
interface ApproachPanel {
  step: string;
  tag: string;
  heading: string;
  bullets: string[];
  statRow?: { number: string; label: string }[];
  visualTag: string;
  visualTitle: string;
  visualDescription: string;
}

const approachPanels: ApproachPanel[] = [
  {
    step: '01',
    tag: 'USER RESEARCH',
    heading: 'First, I checked if this was really a shared problem',
    bullets: [
      'Ran a survey — 15+ responses came back',
      'Talked informally with ~7 people on my team about how they actually handle follow-ups and reminders',
    ],
    statRow: [
      { number: '15+', label: 'survey responses' },
      { number: '~7', label: 'team conversations' },
    ],
    visualTag: 'USER RESEARCH',
    visualTitle: 'Research & Survey Visual',
    visualDescription: 'Survey findings, team interviews, and follow-up habits synthesis',
  },
  {
    step: '02',
    tag: 'PLANNING',
    heading: "Then I mapped out what 'proactive' actually meant",
    bullets: [
      "Reminders that wait for you to set them weren't the point — I needed to define what \"notices on its own\" could realistically mean for a v1",
      'Scoped it down to something buildable, not a full AI-does-everything promise',
    ],
    visualTag: 'PLANNING & SCOPE',
    visualTitle: 'Planning / Scope Visual',
    visualDescription: 'Boundary definition, v1 trigger logic, and feasibility scoping',
  },
  {
    step: '03',
    tag: 'BRANDING & VISUAL DIRECTION',
    heading: 'Then I gave it a personality',
    bullets: [
      "Chose a calmer, quieter visual tone than a typical urgent to-do app — this isn't supposed to nag you",
      'Named it, defined the tone and positioning',
    ],
    visualTag: 'BRAND VISUAL',
    visualTitle: 'Brand & Identity Visual',
    visualDescription: 'Calm typography, soft color system, and serene tone of voice',
  },
  {
    step: '04',
    tag: 'WIREFRAMES',
    heading: 'Then I sketched it out',
    bullets: [
      'Rough wireframes first — how a nudge actually surfaces without feeling like a notification you\'d swipe away unread',
      'Refined the flow until the "quiet until it matters" idea actually came through in the structure',
    ],
    visualTag: 'WIREFRAMES',
    visualTitle: 'Wireframe Visual',
    visualDescription: 'Low-friction nudge card explorations and quiet state structures',
  },
  {
    step: '05',
    tag: 'UI',
    heading: 'Then I made it real',
    bullets: [
      'Took the wireframes into full UI — refined against real UX principles, not just visual polish',
      'This is where it stands today: designed, not yet built',
    ],
    visualTag: 'FINAL UI',
    visualTitle: 'Final UI Visual',
    visualDescription: 'High-fidelity mobile screens & respectful glanceable nudge cards',
  },
];

function getApproachStepIcon(step: string) {
  switch (step) {
    case '01':
      return <Users className="w-6 h-6 stroke-[1.8]" />;
    case '02':
      return <Compass className="w-6 h-6 stroke-[1.8]" />;
    case '03':
      return <Palette className="w-6 h-6 stroke-[1.8]" />;
    case '04':
      return <Layers className="w-6 h-6 stroke-[1.8]" />;
    case '05':
    default:
      return <Sparkles className="w-6 h-6 stroke-[1.8]" />;
  }
}

function BehindTheNudgeSection() {
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
      const stepIndex = Math.min(4, Math.floor(progress * 5));
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
    const targetScrollY = containerTop + (idx + 0.5) * (totalScrollable / 5);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  // Stacked fallback for prefers-reduced-motion or mobile viewports
  if (shouldReduceMotion || isMobile) {
    return (
      <section aria-label="How I approached it: Behind the nudge" className="text-left w-full">
        <div className="text-left mb-8 sm:mb-12">
          <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2">
            HOW I APPROACHED IT
          </span>
          <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
            Behind the nudge
          </h2>
        </div>

        <div className="w-screen -ml-[calc((100vw-100%)/2)] flex flex-col border-y border-[#3B2A20]/15 shadow-[0_4px_30px_rgba(59,42,32,0.04)]">
          {approachPanels.map((panel, idx) => (
            <div
              key={panel.step}
              className="w-full flex flex-col border-b border-[#3B2A20]/15 last:border-b-0"
            >
              <div className="w-full bg-[#F6F1EA] px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="font-jakarta font-semibold text-[12px] uppercase tracking-[0.04em] text-[#9570C6]">
                    Step {idx + 1} of 5 — {panel.tag}
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

              <div className="w-full bg-[#2A1E17] px-6 py-10 flex items-center justify-center">
                <div className="w-full max-w-[380px] rounded-[18px] border border-[#F6F1EA]/15 bg-[#1E140E] p-7 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-[#9570C6]/20 border border-[#9570C6]/40 flex items-center justify-center mb-4 text-[#DDD0F3]">
                    {getApproachStepIcon(panel.step)}
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
      className="relative w-screen -ml-[calc((100vw-100%)/2)] h-[320vh]"
      aria-label="How I approached it: Behind the nudge"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-row border-y border-[#3B2A20]/15 shadow-[0_4px_30px_rgba(59,42,32,0.04)]">
        {/* Left Side: Cream Background with Single Strictly Left-Aligned Text Column */}
        <div className="w-1/2 bg-[#F6F1EA] h-full flex flex-col justify-between py-10 lg:py-12 pl-[max(2.5rem,calc((100vw-1120px)/2+1.5rem))] pr-8 lg:pr-14 border-r border-[#3B2A20]/10">
          {/* Top block: Horizontal step indicator (01–05) + Section Header */}
          <div className="w-full max-w-[480px] text-left shrink-0">
            <div
              className="flex items-center gap-2.5 mb-7 select-none"
              aria-label="Step progress"
            >
              {approachPanels.map((panel, idx) => {
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

            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-1">
              HOW I APPROACHED IT
            </span>

            <h2 className="font-fraunces font-semibold text-[32px] lg:text-[38px] text-[#3B2A20] leading-tight">
              Behind the nudge
            </h2>
          </div>

          {/* Dynamic Content Container */}
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
                <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.04em] text-[#9570C6] block mb-2 sm:mb-2.5">
                  {approachPanels[activeStep].tag}
                </span>

                <h3 className="font-fraunces font-semibold text-[18px] lg:text-[21px] text-[#3B2A20] leading-snug mb-3.5 sm:mb-4">
                  {approachPanels[activeStep].heading}
                </h3>

                <ul className="space-y-3 sm:space-y-3.5">
                  {approachPanels[activeStep].bullets.map((bullet, bIdx) => (
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

                {approachPanels[activeStep].statRow && (
                  <div className="mt-6 pt-5 border-t border-[#3B2A20]/15 flex flex-wrap items-baseline gap-6 sm:gap-8">
                    {approachPanels[activeStep].statRow!.map((stat, sIdx) => (
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

          <div className="w-full max-w-[480px] shrink-0 pt-4 text-left text-[12px] font-jakarta text-[#3B2A20]/45 flex items-center gap-2 select-none">
            <span>Scroll down to step through 01–05</span>
            <span className="inline-block" aria-hidden="true">↓</span>
          </div>
        </div>

        {/* Right Side: Dark Background with Placeholder Card */}
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
                <div className="w-14 h-14 rounded-full bg-[#9570C6]/20 border border-[#9570C6]/40 flex items-center justify-center mb-5 text-[#DDD0F3]">
                  {getApproachStepIcon(approachPanels[activeStep].step)}
                </div>

                <span className="px-3.5 py-1 rounded-full bg-[#9570C6]/15 border border-[#9570C6]/30 text-[#DDD0F3] font-jakarta font-semibold text-[11px] lg:text-[12px] uppercase tracking-[0.05em] mb-3">
                  {approachPanels[activeStep].visualTag}
                </span>

                <h4 className="font-fraunces font-semibold text-[19px] lg:text-[21px] text-[#F6F1EA] mb-2 leading-snug">
                  {approachPanels[activeStep].visualTitle}
                </h4>

                <p className="font-jakarta text-[13.5px] lg:text-[14px] text-[#F6F1EA]/65 max-w-[300px] leading-relaxed">
                  {approachPanels[activeStep].visualDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 5 — CHALLENGES & TRADE-OFFS (Two-card Hover-swap)
// ─────────────────────────────────────────────────────────────
function ChallengesTradeoffsCards() {
  const [hoveredCard, setHoveredCard] = useState<'challenges' | 'tradeoffs' | null>(null);

  // Default state: 'tradeoffs' is highlighted by default
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
              Defining &quot;proactive&quot; without it turning into a creepy always-watching feature was harder than expected
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
              I didn&apos;t have engineering resources to test the notice-and-nudge logic for real, so a lot of this stayed conceptual
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
              Small sample size on the research side — had to be careful not to over-claim what it proved
            </span>
          </li>
        </ul>
      </div>

      {/* CARD 2 — "Trade-offs" (highlighted by default) */}
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
              Chose calm/quiet interaction patterns over aggressive engagement — even though that likely means lower &quot;usage&quot; in a typical growth sense
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
              Designed for a narrow, well-defined use case first instead of a general-purpose reminder app
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
              Prioritized getting the interaction model right in UI over rushing into a build I couldn&apos;t properly support yet
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 6 — OUTCOME (Before/After tap cards)
// ─────────────────────────────────────────────────────────────
function OutcomeRevealCards() {
  const shouldReduceMotion = useReducedMotion();
  const [isAfterExpanded, setIsAfterExpanded] = useState(false);

  // If user prefers reduced motion, show both cards permanently in revealed state
  if (shouldReduceMotion) {
    return (
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="bg-[#EDE5D8] border border-[#3B2A20]/20 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(59,42,32,0.05)] min-h-[170px] sm:min-h-[180px]">
          <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20]/60 mb-2.5 block">
            BEFORE
          </span>
          <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
            Setting five reminders and still missing the thing that mattered.
          </p>
        </div>

        <div className="bg-[#DDD0F3] border border-[#9570C6]/40 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(149,112,198,0.12)] min-h-[170px] sm:min-h-[180px]">
          <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20] mb-2.5 block">
            AFTER
          </span>
          <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
            A nudge that shows up right when you need it — no setup required.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* CARD 1 — "Before" (STATIC, ALWAYS OPEN) */}
      <div className="w-full bg-[#EDE5D8] border border-[#3B2A20]/20 rounded-[16px] p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(59,42,32,0.04)] min-h-[170px] sm:min-h-[180px]">
        <span className="font-jakarta font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] text-[#3B2A20]/60 mb-2.5 block">
          BEFORE
        </span>
        <p className="font-jakarta font-normal text-[15px] sm:text-[16px] text-[#3B2A20] leading-relaxed">
          Setting five reminders and still missing the thing that mattered.
        </p>
      </div>

      {/* CARD 2 — "After" (EXPAND / REVEAL ON TAP) */}
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
                  A nudge that shows up right when you need it — no setup required.
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

// ─────────────────────────────────────────────────────────────
// MAIN CASE STUDY COMPONENT
// ─────────────────────────────────────────────────────────────
export function TaraCaseStudy({ onBackToPortfolio }: TaraCaseStudyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mediaError, setMediaError] = useState(false);

  // Set document title
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Tara — Case Study · Reshma Angajala';
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
      {/* Top Amethyst reading-progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#9570C6] z-50 transition-all duration-75 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Round close button (X) fixed top-right */}
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
            SECTION 1 — HEADER
            ======================================================== */}
        <header className="w-full text-left">
          {/* Tags above heading */}
          <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
            <span className="px-3 py-1 rounded-full border border-[#3B2A20]/20 font-jakarta font-medium text-[13px] text-[#3B2A20] whitespace-nowrap">
              Concept
            </span>
            <span className="px-3 py-1 rounded-full border border-[#3B2A20]/20 font-jakarta font-medium text-[13px] text-[#3B2A20] whitespace-nowrap">
              UI Design
            </span>
          </div>

          {/* Heading & 0 → 1 Project tag */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
            <h1 className="font-fraunces font-semibold text-[clamp(40px,6vw,72px)] text-[#3B2A20] leading-[1.08] tracking-tight max-w-3xl">
              The nudge you didn&apos;t have to ask for
            </h1>
            <div className="shrink-0 sm:pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#DDD0F3] border border-[#9570C6] text-[#9570C6] font-jakarta font-semibold text-[12px] uppercase tracking-[0.03em] whitespace-nowrap">
                0 → 1 Project
              </span>
            </div>
          </div>

          {/* Overview (2 lines) */}
          <p className="mt-8 sm:mt-10 font-jakarta font-normal text-[18px] sm:text-[20px] text-[#3B2A20] leading-relaxed max-w-[640px]">
            Most reminder apps wait for you to set them. Tara watches for the moment something&apos;s about to slip — and reminds you before you even think to ask.
          </p>

          {/* Meta block */}
          <div className="mt-8 sm:mt-10 space-y-6 max-w-4xl text-[17px] font-jakarta leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                My role
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                Research, product design, and UI — end to end
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                Timeline
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                4 weeks · Concept stage
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
              <span className="sm:w-[28%] text-[#3B2A20]/65 font-medium shrink-0">
                Status
              </span>
              <span className="sm:w-[72%] text-[#3B2A20] font-normal">
                Research and UI complete, not yet built/shipped
              </span>
            </div>
          </div>

          {/* Hero Media: Video or Poster Visual */}
          <div className="mt-12 sm:mt-16 w-full">
            <div className="w-full overflow-hidden rounded-[24px] bg-[#131313] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#3B2A20]/[0.08]">
              {!mediaError ? (
                <video
                  src="/tara-prototype.mp4"
                  poster="/tara-poster.png"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full aspect-[16/9] object-cover"
                  onError={() => setMediaError(true)}
                  aria-label="Tara interaction prototype walkthrough"
                />
              ) : (
                <img
                  src="/work/tara.png"
                  alt="Tara - The nudge you didn't have to ask for"
                  className="w-full aspect-[16/9] object-cover"
                />
              )}
            </div>

            <p className="mt-3 font-caveat font-semibold text-[20px] text-[#3B2A20]/80 text-center">
              a quick look at the Tara interaction model
            </p>
          </div>
        </header>

        {/* ========================================================
            SECTION 2 — THE PROBLEM
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The problem: You've forgotten this before" className="text-left">
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2">
              THE PROBLEM
            </span>

            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
              You&apos;ve forgotten this before
            </h2>

            <ProblemStickyNotes />

            {/* One-line problem statement below (centered, larger text) */}
            <div className="mt-8 sm:mt-12 pt-4 text-center max-w-2xl mx-auto">
              <p className="font-fraunces font-medium text-[22px] sm:text-[28px] text-[#3B2A20] leading-snug">
                &ldquo;Reminders shouldn&apos;t need to be remembered.&rdquo;
              </p>
            </div>
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 3 — THE FIX
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The fix: One nudge. The right moment. No setup." className="text-left md:text-center">
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 text-left md:text-center">
              THE FIX
            </span>

            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight text-left md:text-center">
              One nudge. The right moment. No setup.
            </h2>

            <p className="font-jakarta font-medium text-[18px] sm:text-[20px] text-[#3B2A20] text-left md:text-center mt-3 sm:mt-4 mb-8 sm:mb-12">
              So this is where Tara enters.
            </p>

            <TaraCycleLoop />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 4 — HOW I APPROACHED IT
            ======================================================== */}
        <BehindTheNudgeSection />

        {/* ========================================================
            SECTION 5 — CHALLENGES & TRADE-OFFS
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="Challenges and trade-offs" className="text-left">
            <div className="text-left mb-8 sm:mb-10">
              <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 sm:mb-2.5">
                CHALLENGES &amp; TRADE-OFFS
              </span>
              <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
                What I ran into. What I chose.
              </h2>
            </div>

            <ChallengesTradeoffsCards />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 6 — THE OUTCOME
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="The outcome: Full circle" className="text-center">
            <div className="text-center mb-8 sm:mb-10">
              <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2 sm:mb-2.5">
                THE OUTCOME
              </span>
              <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
                Full circle
              </h2>
            </div>

            <OutcomeRevealCards />
          </section>
        </CaseStudyFadeSection>

        {/* ========================================================
            SECTION 7 — WHAT I LEARNED + CLOSING
            ======================================================== */}
        <CaseStudyFadeSection>
          <section aria-label="What I learned: A few things I didn't expect" className="text-left">
            <span className="font-jakarta font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.05em] text-[#9570C6] block mb-2">
              WHAT I LEARNED
            </span>
            <h2 className="font-fraunces font-semibold text-[32px] sm:text-[40px] text-[#3B2A20] leading-tight">
              A few things I didn&apos;t expect
            </h2>

            {/* Three white cards in a row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[20px] sm:text-[21px] text-[#3B2A20] leading-snug">
                  Designing for restraint is harder than designing for engagement
                </h3>
                <p className="mt-3 font-jakarta text-[15px] sm:text-[16px] text-[#3B2A20]/70 leading-relaxed">
                  &ldquo;Do less, but at the right moment&rdquo; doesn&apos;t have an obvious playbook.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[20px] sm:text-[21px] text-[#3B2A20] leading-snug">
                  Small, informal research is still real research
                </h3>
                <p className="mt-3 font-jakarta text-[15px] sm:text-[16px] text-[#3B2A20]/70 leading-relaxed">
                  I just had to be honest about its limits instead of dressing it up.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#3B2A20]/[0.08] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(59,42,32,0.03)] flex flex-col">
                <h3 className="font-fraunces font-semibold text-[20px] sm:text-[21px] text-[#3B2A20] leading-snug">
                  Not every project needs to ship to be worth doing properly
                </h3>
                <p className="mt-3 font-jakarta text-[15px] sm:text-[16px] text-[#3B2A20]/70 leading-relaxed">
                  Deeply exploring the interaction model laid the groundwork for how I approach quiet UX.
                </p>
              </div>
            </div>
          </section>
        </CaseStudyFadeSection>

        {/* CLOSING */}
        <CaseStudyFadeSection>
          <div className="pt-8 sm:pt-14 text-center flex flex-col items-center">
            <h2 className="font-fraunces font-semibold text-[clamp(32px,4.5vw,52px)] text-[#3B2A20] leading-tight">
              Thanks for sticking with me this far
            </h2>

            <p className="mt-4 font-jakarta text-[17px] sm:text-[19px] text-[#3B2A20]/75 max-w-xl leading-relaxed">
              If you read all the way down here, you already know more about how I think than most interviews would. Let&apos;s talk.
            </p>

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
                Let&apos;s connect
              </a>
            </div>
          </div>
        </CaseStudyFadeSection>
      </main>
    </div>
  );
}
