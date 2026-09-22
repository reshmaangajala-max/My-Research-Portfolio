import React, { useState } from 'react';

interface WallCardsProps {
  animated?: boolean;
}

// Round Amethyst Pushpin with Pin Pop animation
export function AmethystPushpin({
  className = '',
  popDelay = 0,
  animated = false,
}: {
  className?: string;
  popDelay?: number;
  animated?: boolean;
}) {
  return (
    <div
      className={`absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        transform: animated ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
        transition: `transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) ${popDelay}ms`,
      }}
      aria-hidden="true"
    >
      <div className="relative w-5 h-5 group-hover:animate-pin-wobble">
        {/* Tiny needle shadow on paper */}
        <div className="absolute top-3 left-3 w-3 h-2 bg-black/60 rounded-full blur-[1px] -rotate-45" />
        {/* Amethyst Pushpin head */}
        <div
          className="w-5 h-5 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.7)]"
          style={{
            background:
              'radial-gradient(circle at 35% 35%, #DDD0F3 0%, #B799E6 25%, #9570C6 60%, #5B358F 100%)',
          }}
        >
          {/* Specular gloss highlight */}
          <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white/85 rounded-full blur-[0.3px]" />
        </div>
      </div>
    </div>
  );
}

// Rusty Paperclip SVG Component
function RustyPaperclip({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none z-20 ${className}`} aria-hidden="true">
      <svg
        width="22"
        height="38"
        viewBox="0 0 22 38"
        fill="none"
        className="drop-shadow-[1px_2px_3px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <linearGradient id="rust-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A85935" />
            <stop offset="40%" stopColor="#8B4A2B" />
            <stop offset="70%" stopColor="#B5673A" />
            <stop offset="100%" stopColor="#6E351E" />
          </linearGradient>
        </defs>
        <path
          d="M 6 12 L 6 27 C 6 32, 16 32, 16 27 L 16 8 C 16 3, 7 3, 7 8 L 7 23 C 7 26, 12 26, 12 23 L 12 11"
          stroke="url(#rust-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dark rust pitting spots */}
        <circle cx="6" cy="18" r="0.75" fill="#4A2312" />
        <circle cx="16" cy="22" r="0.75" fill="#4A2312" />
        <circle cx="12" cy="16" r="0.6" fill="#3D1C0E" />
      </svg>
    </div>
  );
}

// Old Translucent Masking Tape
function OldMaskingTape({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute z-20 pointer-events-none ${className}`}
      style={{
        clipPath:
          'polygon(0% 12%, 3% 0%, 97% 2%, 100% 15%, 98% 88%, 96% 100%, 3% 97%, 0% 85%)',
      }}
      aria-hidden="true"
    >
      <div className="w-16 sm:w-20 h-5 sm:h-6 bg-[#E4D8BE]/75 backdrop-blur-[1px] border-y border-[#D6C5A2]/60 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 4px)',
          }}
        />
      </div>
    </div>
  );
}

// Rusty Staple Component
function RustyStaple({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute z-20 pointer-events-none w-8 h-2.5 ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#4E2F1F] via-[#8E5336] to-[#5A3825] rounded-[0.5px] shadow-[0_1px_2px_rgba(0,0,0,0.6)] border-t border-[#B06E4B]/40" />
      <div className="flex justify-between px-0.5 -mt-0.5">
        <div className="w-0.5 h-1 bg-[#2B170D] rounded-full" />
        <div className="w-0.5 h-1 bg-[#2B170D] rounded-full" />
      </div>
    </div>
  );
}

export function WallCards({ animated = false }: WallCardsProps) {
  const [reyoImgError, setReyoImgError] = useState(false);
  const [taraImgError, setTaraImgError] = useState(false);
  const [evImgError, setEvImgError] = useState(false);
  const [meImgError, setMeImgError] = useState(false);

  // Staggered load delays clockwise from top-left:
  // Reyo: 1300ms, Tara: 1450ms, Polaroid: 1600ms, EV: 1750ms
  const reyoDelay = 1300;
  const taraDelay = 1450;
  const polaroidDelay = 1600;
  const evDelay = 1750;

  return (
    <div className="w-full max-w-sm md:max-w-3xl min-[1100px]:max-w-none mx-auto min-[1100px]:contents flex flex-col md:grid md:grid-cols-2 min-[1100px]:block gap-8 md:gap-10 min-[1100px]:gap-0 items-center justify-items-center">
      {/* ========================================================
          1) REYO — top-left
          Desktop (≥1100px): left 5vw, top 13vh, rotate -4°
          Card width: clamp(220px, 19vw, 320px)
          ======================================================== */}
      <div
        className="w-full sm:w-[280px] md:w-[clamp(240px,36vw,310px)] min-[1100px]:w-[clamp(220px,19vw,320px)] min-[1100px]:absolute min-[1100px]:left-[5vw] min-[1100px]:top-[13vh] z-20"
        style={{
          transform: animated
            ? 'translateY(0) scale(1)'
            : 'translateY(12px) scale(1.04)',
          opacity: animated ? 1 : 0,
          transition: `transform 500ms ease-out ${reyoDelay}ms, opacity 400ms ease ${reyoDelay}ms`,
        }}
      >
        <a
          id="card-reyo"
          href="#reyo-case-study"
          className="group block relative w-full p-3.5 sm:p-4 rounded-[2px] shadow-[2px_10px_24px_rgba(0,0,0,0.65)] hover:shadow-[4px_16px_34px_rgba(0,0,0,0.85)] transition-all duration-250 ease-out hover:-translate-y-1.5 -rotate-2 md:-rotate-4 min-[1100px]:-rotate-4 hover:rotate-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
          style={{
            backgroundColor: '#C4A57A', // Kraft brown base
            clipPath:
              'polygon(0% 4px, 2% 0px, 98% 3px, 100% 6px, 99% 97%, 97% 100%, 3% 98%, 0% 95%)',
            boxShadow: 'inset 0 0 16px rgba(92, 58, 25, 0.38), 2px 10px 24px rgba(0,0,0,0.65)',
            backgroundImage: `
              radial-gradient(ellipse at 85% 15%, rgba(139, 90, 43, 0.28) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(110, 68, 30, 0.22) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0,0,0,0.12) 0%, transparent 12px)
            `,
          }}
        >
          {/* Amethyst Pushpin with pop delay */}
          <AmethystPushpin className="top-1.5 left-1/2" popDelay={reyoDelay + 100} animated={animated} />

          {/* Screenshot as PRINTED PHOTO: 6px off-white border, 16:10, rotated 1.5° */}
          <div className="relative mb-3">
            <div
              className="w-full aspect-[16/10] bg-[#F6F1EA] p-[6px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transform rotate-[1.5deg]"
              style={{
                clipPath: 'polygon(1% 0%, 99% 1%, 98% 99%, 0% 98%)',
              }}
            >
              <div className="w-full h-full overflow-hidden bg-[#1E2026] relative">
                {!reyoImgError ? (
                  <img
                    src="/wall/reyo.png"
                    alt="Reyo case study screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => setReyoImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#F6F1EA] text-[#3B2A20]">
                    <span className="font-special-elite text-xs uppercase tracking-wider font-bold">
                      Reyo
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Rusty Paperclip clipping top-right corner of screenshot */}
            <RustyPaperclip className="-top-2 right-1.5" />
          </div>

          {/* Text Content */}
          <div className="space-y-1 text-left text-[#3B2A20]/90">
            {/* Typewriter label in Special Elite, 12px, letter-spacing 0.12em */}
            <p className="font-special-elite text-[12px] tracking-[0.12em] uppercase font-bold text-[#3B2A20]/80">
              CASE STUDY 01
            </p>

            {/* Project name, Plus Jakarta Sans 600, 20px */}
            <h3 className="font-jakarta font-semibold text-[20px] text-[#3B2A20] leading-tight">
              Reyo
            </h3>

            {/* Handwritten one-liner in Caveat 600, 20px */}
            <p className="font-caveat font-semibold text-[20px] text-[#3B2A20]/90 leading-tight">
              A video memory for designers — built solo.
            </p>

            {/* Bottom-right corner: "read →" in Caveat, amethyst */}
            <div className="pt-1 flex justify-end">
              <span className="font-caveat font-semibold text-[19px] text-[#9570C6] group-hover:translate-x-1 transition-transform">
                read →
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* ========================================================
          2) TARA — top-right
          Desktop (≥1100px): right 5vw, top 12vh, rotate 3°
          Card width: clamp(220px, 19vw, 320px)
          ======================================================== */}
      <div
        className="w-full sm:w-[280px] md:w-[clamp(240px,36vw,310px)] min-[1100px]:w-[clamp(220px,19vw,320px)] min-[1100px]:absolute min-[1100px]:right-[5vw] min-[1100px]:top-[12vh] z-20"
        style={{
          transform: animated
            ? 'translateY(0) scale(1)'
            : 'translateY(12px) scale(1.04)',
          opacity: animated ? 1 : 0,
          transition: `transform 500ms ease-out ${taraDelay}ms, opacity 400ms ease ${taraDelay}ms`,
        }}
      >
        <a
          id="card-tara"
          href="#tara-case-study"
          className="group block relative w-full p-3.5 sm:p-4 rounded-[2px] shadow-[2px_10px_24px_rgba(0,0,0,0.65)] hover:shadow-[4px_16px_34px_rgba(0,0,0,0.85)] transition-all duration-250 ease-out hover:-translate-y-1.5 rotate-2 md:rotate-3 min-[1100px]:rotate-3 hover:rotate-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
          style={{
            backgroundColor: '#E6D5AE', // Yellowed parchment
            clipPath:
              'polygon(1% 2px, 97% 0px, 100% 4px, 98% 98%, 95% 100%, 2% 97%, 0% 93%)',
            boxShadow: 'inset 0 0 18px rgba(110, 70, 25, 0.42), 2px 10px 24px rgba(0,0,0,0.65)',
            backgroundImage: `
              radial-gradient(circle at 35% 35%, rgba(160, 110, 50, 0.3) 0%, transparent 45%),
              radial-gradient(circle at 80% 75%, rgba(135, 90, 40, 0.28) 0%, transparent 50%),
              linear-gradient(225deg, rgba(80, 50, 20, 0.15) 0%, transparent 10px)
            `,
          }}
        >
          {/* Amethyst Pushpin with pop delay */}
          <AmethystPushpin className="top-1.5 left-1/2" popDelay={taraDelay + 100} animated={animated} />

          {/* Screenshot as PRINTED PHOTO: 6px off-white border, 16:10, rotated -1.5° */}
          <div className="relative mb-3">
            <div
              className="w-full aspect-[16/10] bg-[#F6F1EA] p-[6px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transform -rotate-[1.5deg]"
              style={{
                clipPath: 'polygon(0% 1%, 99% 0%, 98% 99%, 1% 98%)',
              }}
            >
              <div className="w-full h-full overflow-hidden bg-[#111827] relative">
                {!taraImgError ? (
                  <img
                    src="/wall/tara.png"
                    alt="Tara case study screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => setTaraImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#F6F1EA] text-[#3B2A20]">
                    <span className="font-special-elite text-xs uppercase tracking-wider font-bold">
                      Tara
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Strip of old masking tape holding screenshot's top-left corner */}
            <OldMaskingTape className="-top-2 -left-1 -rotate-12" />
          </div>

          {/* Text Content */}
          <div className="space-y-1 text-left text-[#3B2A20]/90">
            {/* Typewriter label in Special Elite, 12px, letter-spacing 0.12em */}
            <p className="font-special-elite text-[12px] tracking-[0.12em] uppercase font-bold text-[#3B2A20]/80">
              CASE STUDY 02
            </p>

            {/* Project name, Plus Jakarta Sans 600, 20px */}
            <h3 className="font-jakarta font-semibold text-[20px] text-[#3B2A20] leading-tight">
              Tara
            </h3>

            {/* Handwritten one-liner in Caveat 600, 20px */}
            <p className="font-caveat font-semibold text-[20px] text-[#3B2A20]/90 leading-tight">
              A life-admin companion that notices what you&apos;d miss.
            </p>

            {/* Bottom-right corner: "read →" in Caveat, amethyst */}
            <div className="pt-1 flex justify-end">
              <span className="font-caveat font-semibold text-[19px] text-[#9570C6] group-hover:translate-x-1 transition-transform">
                read →
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* ========================================================
          3) EV — bottom-left
          Desktop (≥1100px): left 6vw, bottom 15vh, rotate 3°
          Card width: clamp(220px, 19vw, 320px)
          NOT a link, no hover lift, only subtle pin wobble
          ======================================================== */}
      <div
        className="w-full sm:w-[280px] md:w-[clamp(240px,36vw,310px)] min-[1100px]:w-[clamp(220px,19vw,320px)] min-[1100px]:absolute min-[1100px]:left-[6vw] min-[1100px]:bottom-[15vh] z-20"
        style={{
          transform: animated
            ? 'translateY(0) scale(1)'
            : 'translateY(12px) scale(1.04)',
          opacity: animated ? 1 : 0,
          transition: `transform 500ms ease-out ${evDelay}ms, opacity 400ms ease ${evDelay}ms`,
        }}
      >
        <div
          id="card-ev-research"
          className="group relative w-full p-3.5 sm:p-4 rounded-[2px] shadow-[2px_10px_24px_rgba(0,0,0,0.65)] select-none -rotate-1.5 md:rotate-3 min-[1100px]:rotate-3"
          style={{
            backgroundColor: '#EDE3CC', // Old ruled notebook page base
            clipPath:
              'polygon(0% 2px, 99% 0px, 98% 97%, 100% 100%, 1% 99%, 0% 6%)',
            boxShadow: 'inset 0 0 14px rgba(100, 75, 40, 0.3), 2px 10px 24px rgba(0,0,0,0.65)',
            // Faded blue horizontal lines + faded red margin line + curled bottom corner
            backgroundImage: `
              linear-gradient(315deg, rgba(70, 50, 30, 0.25) 0%, transparent 14px),
              linear-gradient(to right, transparent 24px, rgba(215, 110, 110, 0.5) 24px, rgba(215, 110, 110, 0.5) 25.5px, transparent 25.5px),
              repeating-linear-gradient(to bottom, transparent 0, transparent 22px, rgba(140, 165, 195, 0.45) 22px, rgba(140, 165, 195, 0.45) 23px)
            `,
          }}
        >
          {/* Amethyst Pushpin with pop delay (wobbles on group hover) */}
          <AmethystPushpin className="top-1.5 left-1/2" popDelay={evDelay + 100} animated={animated} />

          {/* Screenshot as PRINTED PHOTO: 6px off-white border, 16:10, rotated 1° */}
          <div className="relative mb-3 pl-3">
            <div
              className="w-full aspect-[16/10] bg-[#F6F1EA] p-[6px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transform rotate-[1deg]"
              style={{
                clipPath: 'polygon(1% 0%, 99% 1%, 98% 99%, 0% 98%)',
              }}
            >
              <div className="w-full h-full overflow-hidden bg-[#1E293B] relative">
                {!evImgError ? (
                  <img
                    src="/wall/ev.png"
                    alt="EV for young riders research preview"
                    className="w-full h-full object-cover"
                    onError={() => setEvImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#F6F1EA] text-[#3B2A20]">
                    <span className="font-special-elite text-xs uppercase tracking-wider font-bold">
                      EV Research
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Rusty staple across screenshot's top edge */}
            <RustyStaple className="-top-1.5 left-1/2 -translate-x-1/2" />
          </div>

          {/* Text Content */}
          <div className="space-y-1 text-left text-[#3B2A20]/90 pl-3">
            {/* Typewriter label in Special Elite, 12px, letter-spacing 0.12em */}
            <p className="font-special-elite text-[12px] tracking-[0.12em] uppercase font-bold text-[#3B2A20]/80">
              FIELD RESEARCH 03
            </p>

            {/* Project name, Plus Jakarta Sans 600, 20px */}
            <h3 className="font-jakarta font-semibold text-[20px] text-[#3B2A20] leading-tight">
              EV for young riders
            </h3>

            {/* Handwritten one-liner in Caveat 600, 20px */}
            <p className="font-caveat font-semibold text-[20px] text-[#3B2A20]/90 leading-tight">
              What young riders want from their next EV.
            </p>

            {/* Bottom-right corner: small lavender stamp-style tag "coming soon" */}
            <div className="pt-1.5 flex justify-end">
              <span className="inline-block bg-[#DDD0F3] border border-[#9570C6]/50 text-[#4C1D95] px-2 py-0.5 rounded-[2px] font-mono text-[10px] uppercase font-bold tracking-wider shadow-xs transform rotate-1">
                coming soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          4) POLAROID — bottom-right
          Desktop (≥1100px): right 6vw, bottom 14vh, rotate -5°
          Card width: clamp(220px, 19vw, 320px)
          Real <a href="#about">
          ======================================================== */}
      <div
        className="w-full sm:w-[280px] md:w-[clamp(240px,36vw,310px)] min-[1100px]:w-[clamp(220px,19vw,320px)] min-[1100px]:absolute min-[1100px]:right-[6vw] min-[1100px]:bottom-[14vh] z-20"
        style={{
          transform: animated
            ? 'translateY(0) scale(1)'
            : 'translateY(12px) scale(1.04)',
          opacity: animated ? 1 : 0,
          transition: `transform 500ms ease-out ${polaroidDelay}ms, opacity 400ms ease ${polaroidDelay}ms`,
        }}
      >
        <a
          id="card-polaroid"
          href="#about"
          className="group block relative w-full p-3 pb-8 sm:pb-9 rounded-[2px] shadow-[2px_10px_24px_rgba(0,0,0,0.65)] hover:shadow-[4px_16px_34px_rgba(0,0,0,0.85)] transition-all duration-250 ease-out hover:-translate-y-1.5 rotate-2 md:-rotate-5 min-[1100px]:-rotate-5 hover:rotate-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
          style={{
            backgroundColor: '#EFE6D6', // Classic aged off-white Polaroid frame
            boxShadow: 'inset 0 0 12px rgba(140, 110, 60, 0.25), 2px 10px 24px rgba(0,0,0,0.65)',
            clipPath: 'polygon(1% 0%, 99% 1%, 98% 99%, 0% 98%)',
          }}
        >
          {/* Amethyst Pushpin with pop delay */}
          <AmethystPushpin className="top-1.5 left-1/2" popDelay={polaroidDelay + 100} animated={animated} />

          {/* Photo: Square, object-fit cover */}
          <div className="w-full aspect-square bg-[#DDD0F3] overflow-hidden rounded-[1px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.35)] relative mb-3">
            {!meImgError ? (
              <img
                src="/wall/me-polaroid.jpg"
                alt="Reshma Angajala smiling, wearing glasses"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={() => setMeImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#DDD0F3] text-[#4C1D95] text-center">
                <span className="font-caveat font-bold text-xl">Reshma</span>
              </div>
            )}
          </div>

          {/* Handwritten on Polaroid's thick bottom border in Caveat 600, 22px */}
          <div className="text-center">
            <span className="font-caveat font-semibold text-[22px] text-[#3B2A20] leading-none select-none">
              that&apos;s me ✦
            </span>
          </div>

          {/* Taped to its side, slightly overlapping, small torn lavender note (rotated ~6°) */}
          <div
            className="absolute -top-3 -left-8 sm:-left-12 w-28 sm:w-32 bg-[#DDD0F3] text-[#1B1A1F] p-2 rounded-[2px] shadow-[2px_6px_14px_rgba(0,0,0,0.45)] transform rotate-[6deg] pointer-events-none z-30"
            style={{
              clipPath: 'polygon(2% 4%, 98% 0%, 100% 96%, 1% 98%)',
            }}
          >
            {/* Tiny tape on note */}
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#E4D8BE]/80 backdrop-blur-[1px] -rotate-6 shadow-xs"
              style={{ clipPath: 'polygon(0% 10%, 100% 0%, 95% 95%, 5% 100%)' }}
            />
            <p className="font-caveat font-semibold text-[18px] text-[#1B1A1F] leading-tight text-center">
              psst — I write dark fantasy when I&apos;m not designing.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
