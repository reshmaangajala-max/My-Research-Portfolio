import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, Pause, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  line: string;
  statusText?: string;
  href: string;
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  device?: 'laptop' | 'phone';
  fitMode?: 'cover' | 'contain';
}

// Order: Reyo (index 0, active by default), Tara (index 1); arrows loop
const projects: ProjectItem[] = [
  {
    id: 'reyo',
    title: 'Reyo',
    badge: '0 → 1 Product',
    line: 'A save-and-retrieve tool that remembers what you saved — and finds it in 30 seconds, not 40 minutes.',
    statusText: 'Working out the details..',
    href: '#reyo-case-study',
    imageSrc: '/reyo-figma.png',
  },
  {
    id: 'tara',
    title: 'Tara',
    badge: 'Concept & UI',
    line: "A proactive reminder assistant that catches the things you'd forget — before they become a problem.",
    statusText: 'Working out the details..',
    href: '#tara-case-study',
    imageSrc: '/tara-home-horizon.png',
    device: 'phone',
  },
];

function PhoneMockup({ project }: { project: ProjectItem }) {
  return (
    <motion.a
      key={project.id}
      href={project.href}
      aria-label={`Open ${project.title} case study`}
      data-testid={`phone-mockup-${project.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group/phone relative isolate mx-auto block w-[min(100%,240px)] md:w-[calc((min(78vh,720px)_-_20px)_*_0.459_+_20px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9570C6] rounded-[36px] md:rounded-[46px]"
    >
      <div className="absolute -inset-8 md:-inset-14 -z-10 rounded-full bg-[#9570C6]/25 blur-3xl pointer-events-none" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[18%] h-[9%] w-[3px] rounded-r-sm bg-[#2A2A2E]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[31%] h-[14%] w-[3px] rounded-r-sm bg-[#2A2A2E]" aria-hidden="true" />
      <div className="relative rounded-[36px] md:rounded-[46px] p-[8px] md:p-[10px] bg-[linear-gradient(150deg,#3A3A40_0%,#17171A_35%,#0C0C0E_100%)] border border-white/10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover/phone:-translate-y-1">
        <div className="relative w-full aspect-[268/584] overflow-hidden rounded-[28px] md:rounded-[36px] bg-black">
          <img
            src={project.imageSrc}
            alt={`${project.title} home screen`}
            data-testid={`work-image-${project.id}`}
            className="absolute inset-0 block w-full h-full object-cover"
          />
          <span className="absolute top-[1.6%] left-1/2 -translate-x-1/2 w-[9px] h-[9px] md:w-[11px] md:h-[11px] rounded-full bg-black ring-1 ring-white/10" aria-hidden="true" />
        </div>
      </div>
    </motion.a>
  );
}

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[activeIndex];
  const prevProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];

  // Guarantee autoplay whenever active project changes
  useEffect(() => {
    if (videoRef.current && currentProject.videoSrc) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [currentProject.id, currentProject.videoSrc]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="work"
      className="w-full bg-[#221812] text-[#F6F1EA] py-20 sm:py-28 md:py-36 overflow-hidden relative select-none scroll-mt-20 border-y border-[#3B2A20]/40"
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

      <div className="w-full max-w-[1120px] mx-auto px-5 sm:px-6 relative z-10">
        {/* SECTION HEADER: Centered "My Work" Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-fraunces font-semibold text-[38px] sm:text-[48px] md:text-[56px] text-[#F6F1EA] leading-tight tracking-tight">
            My Work
          </h2>
        </div>

        {/* ============================================================ */}
        {/* LAPTOP MOCKUP WITH LEFT AND RIGHT SCROLL INDICATORS          */}
        {/* ============================================================ */}
        <div className="relative w-full flex items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {/* LEFT SCROLL INDICATION */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Previous project: ${prevProject.title}`}
            className="group/prev flex flex-col items-center gap-2 shrink-0 z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9570C6] rounded-full"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#F6F1EA]/20 bg-[#2D1F17]/90 text-[#F6F1EA] flex items-center justify-center transition-all duration-200 group-hover/prev:border-[#DDD0F3] group-hover/prev:text-[#DDD0F3] group-hover/prev:bg-[#3B2A20] group-hover/prev:scale-105 shadow-xl active:scale-95">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <span className="hidden md:block font-jakarta text-[13px] text-[#F6F1EA]/60 group-hover/prev:text-[#DDD0F3] transition-colors whitespace-nowrap">
              {prevProject.title}
            </span>
          </button>

          {/* CENTER: MACBOOK MOCKUP */}
          <div className="w-full max-w-[820px] relative">
            {currentProject.device === 'phone' ? (
              <PhoneMockup project={currentProject} />
            ) : (
            <a
              href={currentProject.href}
              className="group/laptop block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9570C6] rounded-[24px]"
              aria-label={`Open ${currentProject.title} case study`}
            >
              {/* Top Display Bezel */}
              <div className="w-full bg-[#18181A] rounded-t-[18px] sm:rounded-t-[26px] p-2.5 sm:p-4 pb-3 sm:pb-4 border border-[#27272A] shadow-2xl relative">
                {/* Camera Notch at top center */}
                <div
                  className="w-20 sm:w-28 h-3.5 sm:h-5 bg-[#18181A] rounded-b-[10px] mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Camera lens */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#09090B] border border-[#27272A] relative flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#10B981]/50" />
                  </div>
                </div>

                {/* Inner Screen Display (aspect ~ 16:10) */}
                <div className="w-full aspect-[16/10] bg-[#14110F] rounded-[8px] sm:rounded-[14px] overflow-hidden relative border border-white/5 flex items-center justify-center">
                  {/* Subtle screen reflection gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.04] pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  {/* Top-right "Open Case Study" indicator on hover */}
                  <div className="absolute top-3.5 right-4 z-20 opacity-0 group-hover/laptop:opacity-100 transition-opacity duration-200 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDD0F3]/25 border border-[#DDD0F3]/40 text-[#DDD0F3] text-[12px] font-jakarta font-medium backdrop-blur-md shadow-lg">
                    <span>Open Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Dynamic screen content: Video if available, else decorative dashed placeholder */}
                  <AnimatePresence mode="wait">
                    {currentProject.imageSrc ? (
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center bg-[#2B211C]"
                      >
                        <img
                          src={currentProject.imageSrc}
                          alt={`${currentProject.title} product visual`}
                          data-testid={`work-image-${currentProject.id}`}
                          className="block w-full h-full max-w-full object-cover object-center"
                        />
                      </motion.div>
                    ) : currentProject.videoSrc ? (
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full h-full relative flex items-center justify-center bg-black"
                      >
                        <video
                          ref={videoRef}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          poster={currentProject.posterSrc}
                          className={`w-full h-full ${
                            currentProject.fitMode === 'contain'
                              ? 'object-contain p-2 sm:p-4'
                              : 'object-cover object-center'
                          }`}
                        >
                          <source src={currentProject.videoSrc} type="video/mp4" />
                        </video>

                        {/* Bottom-left play / pause control badge */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={togglePlayPause}
                            aria-label={isPlaying ? 'Pause video' : 'Play video'}
                            className="p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 text-[#F6F1EA] border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                          >
                            {isPlaying ? (
                              <Pause className="w-3.5 h-3.5 fill-current" />
                            ) : (
                              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                            )}
                          </button>
                          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] text-[#F6F1EA]/80 font-jakarta backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Figma Prototype
                          </span>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>

              {/* Laptop Chassis / Aluminum Base */}
              <div className="relative w-[103%] -left-[1.5%] h-3.5 sm:h-5 bg-gradient-to-b from-[#E4E4E7] via-[#D4D4D8] to-[#9CA3AF] rounded-b-[10px] sm:rounded-b-[14px] shadow-[0_24px_50px_rgba(0,0,0,0.65)] flex items-start justify-center">
                {/* Center thumb recess / display opening lip */}
                <div
                  className="w-24 sm:w-36 h-2 sm:h-2.5 bg-[#221812] rounded-b-md opacity-90 shadow-inner"
                  aria-hidden="true"
                />

                {/* Subtle rubber feet pads underneath */}
                <div
                  className="absolute -bottom-1 left-8 sm:left-12 w-8 sm:w-14 h-1 bg-[#18181B] rounded-full"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-1 right-8 sm:right-12 w-8 sm:w-14 h-1 bg-[#18181B] rounded-full"
                  aria-hidden="true"
                />
              </div>
            </a>
            )}
          </div>

          {/* RIGHT SCROLL INDICATION */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Next project: ${nextProject.title}`}
            className="group/next flex flex-col items-center gap-2 shrink-0 z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9570C6] rounded-full"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#F6F1EA]/20 bg-[#2D1F17]/90 text-[#F6F1EA] flex items-center justify-center transition-all duration-200 group-hover/next:border-[#DDD0F3] group-hover/next:text-[#DDD0F3] group-hover/next:bg-[#3B2A20] group-hover/next:scale-105 shadow-xl active:scale-95">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <span className="hidden md:block font-jakarta text-[13px] text-[#F6F1EA]/60 group-hover/next:text-[#DDD0F3] transition-colors whitespace-nowrap">
              {nextProject.title}
            </span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* CENTERED PROJECT DESCRIPTION BELOW THE MOCKUP               */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-14 text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <span className="font-jakarta text-[12px] sm:text-[13px] uppercase tracking-[0.16em] text-[#DDD0F3] font-semibold mb-2 block">
            {currentProject.badge}
          </span>

          {/* Project Title: Fraunces 600 */}
          <h3 className="font-fraunces font-semibold text-[34px] sm:text-[44px] md:text-[50px] text-[#F6F1EA] leading-tight tracking-tight">
            {currentProject.title}
          </h3>

          {/* One short line / explanation */}
          <p className="mt-3 font-jakarta font-normal text-[16px] sm:text-[18px] text-[#F6F1EA]/80 leading-relaxed max-w-xl">
            {currentProject.line}
          </p>

          {/* Centered CTA Button: "Open case study →" */}
          <div className="mt-6 sm:mt-7 flex items-center justify-center">
            <a
              href={currentProject.href}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#DDD0F3] text-[#3B2A20] font-jakarta font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95 group/btn cursor-pointer"
            >
              <span>Open case study</span>
              <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>

          {/* Pagination dots (Reyo, Tara) */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Switch to ${p.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-9 bg-[#DDD0F3]'
                    : 'w-2.5 bg-[#F6F1EA]/25 hover:bg-[#F6F1EA]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
