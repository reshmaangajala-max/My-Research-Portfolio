import React, { useState, useEffect, useRef } from 'react';
import { WallNav } from './WallNav';
import { DustCanvas } from './DustCanvas';
import { NameCollage } from './NameCollage';
import { WallCards } from './WallCards';
import { WoodLedge } from './WoodLedge';
import { ScrollLine } from './ScrollLine';

export function DreamersWall() {
  const [animated, setAnimated] = useState(false);
  const [spotlightDrift, setSpotlightDrift] = useState(0);

  const targetDriftRef = useRef(0);
  const currentDriftRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Check animation session status and reduced motion
  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem('dreamers_wall_seen') === 'true';
    } catch {
      alreadySeen = false;
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion || alreadySeen) {
      setAnimated(true);
    } else {
      // Trigger the sequence
      const timer = setTimeout(() => {
        setAnimated(true);
        try {
          sessionStorage.setItem('dreamers_wall_seen', 'true');
        } catch {}
      }, 50);

      return () => clearTimeout(timer);
    }
  }, []);

  // Spotlight drift towards cursor (desktop only, disabled for touch / reduced motion)
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isSmallScreen = window.innerWidth < 1100;

    if (isReducedMotion || isTouch || isSmallScreen) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Max ~40px drift: normalized -1 to +1 multiplied by 40
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetDriftRef.current = Math.max(-40, Math.min(40, normalizedX * 40));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth easing loop
    const animate = () => {
      const diff = targetDriftRef.current - currentDriftRef.current;
      currentDriftRef.current += diff * 0.05;
      setSpotlightDrift(Math.round(currentDriftRef.current * 10) / 10);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#3A3A3C]">
      {/* Target for #work */}
      <div id="work" className="sr-only">Work</div>

      {/* ========================================================
          SCREEN 1: THE DREAMER'S WALL
          100vw × 100vh, no scroll on desktop (≥1100px)
          ======================================================== */}
      <section
        id="dreamers-wall"
        aria-label="Reshma Angajala Dreamer's Wall Hero"
        className="relative w-full min-h-screen min-[1100px]:h-screen min-[1100px]:max-h-screen min-[1100px]:overflow-hidden select-none bg-[#3A3A3C] text-white flex flex-col justify-between"
      >
        {/* ========================================================
            LAYER 1: WALL TEXTURE & SPOTLIGHT BACKGROUND
            ======================================================== */}
        {/* Base radial spotlight gradient: #8A8886 at light hit rising from #3A3A3C edges */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
          style={{
            background: `radial-gradient(ellipse 70% 65% at calc(50% + ${spotlightDrift}px) 10%, #8A8886 0%, #5C5A59 40%, #3A3A3C 75%, #242426 100%)`,
          }}
        />

        {/* Faint Visible Light Cone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen transition-transform duration-75 ease-out"
          style={{
            background: `conic-gradient(from 158deg at calc(50% + ${spotlightDrift}px) -20px, transparent 0deg, rgba(255, 255, 255, 0.12) 18deg, rgba(255, 255, 255, 0.18) 22deg, rgba(255, 255, 255, 0.12) 26deg, transparent 44deg)`,
          }}
        />

        {/* Plaster Noise Texture (feTurbulence at ~8% opacity) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08] mix-blend-overlay z-[5]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="wall-plaster-texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#wall-plaster-texture)" />
        </svg>

        {/* Subtle Vignette in dark corners */}
        <div
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] z-[6]"
          aria-hidden="true"
        />

        {/* ========================================================
            LAYER 2: FLOATING DUST MOTES
            ======================================================== */}
        <DustCanvas spotlightXOffset={spotlightDrift} />

        {/* ========================================================
            LAYER 3: TOP NAVIGATION
            ======================================================== */}
        <WallNav />

        {/* ========================================================
            LAYER 4: MAIN CONTENT
            Centre: Name (highest z-index, never overlapped)
            4 Corner objects: Reyo, Tara, EV, Polaroid
            ======================================================== */}
        <div className="relative w-full flex-1 flex flex-col justify-start min-[1100px]:justify-center items-center px-4 sm:px-6 pt-24 pb-8 min-[1100px]:py-0 z-20">
          {/* CENTRE: NAME (Vertical centre sits at 44% of viewport height on desktop) */}
          <div className="w-full flex justify-center items-center my-6 min-[1100px]:my-0 min-[1100px]:absolute min-[1100px]:left-1/2 min-[1100px]:top-[44%] min-[1100px]:-translate-x-1/2 min-[1100px]:-translate-y-1/2 z-30 pointer-events-auto">
            <NameCollage animated={animated} />
          </div>

          {/* FOUR PINNED CORNER OBJECTS */}
          <div className="w-full z-20 pointer-events-auto">
            <WallCards animated={animated} />
          </div>

          {/* Scroll Line on Tablet (sits below 2x2 grid) */}
          <div className="mt-8 mb-6 min-[1100px]:hidden">
            <ScrollLine animated={animated} />
          </div>
        </div>

        {/* ========================================================
            LAYER 5: BOTTOM SCROLL LINE (DESKTOP: bottom 7vh)
            ======================================================== */}
        <div className="hidden min-[1100px]:block absolute bottom-[7vh] left-1/2 -translate-x-1/2 z-20">
          <ScrollLine animated={animated} />
        </div>

        {/* ========================================================
            LAYER 6: BOTTOM DARK WOOD LEDGE (EMPTY)
            ======================================================== */}
        <WoodLedge />
      </section>

      {/* ========================================================
          NEXT SECTION: #about
          Added as an empty section (100vh) so smooth-scroll works cleanly.
          (To be built in later turns per instructions)
          ======================================================== */}
      <section
        id="about"
        className="min-h-screen w-full bg-[#2A2A2C] border-t border-white/5 relative flex flex-col justify-center items-center p-8 text-center text-[#F6F1EA]"
      >
        <div id="contact" className="sr-only">Contact</div>
      </section>
    </div>
  );
}
