import React from 'react';

interface SkillBrick {
  text: string;
  isSkill: true;
  accent?: 'lavender' | 'cream' | 'default';
}

interface AmbientBrick {
  isSkill: false;
  widthClass?: string;
  pattern?: 'dots' | 'lines' | 'plain' | 'accent';
}

type BrickItem = SkillBrick | AmbientBrick;

// 4 interlocking masonry courses (running bond) creating a full tactile soft brick wall
const wallRows: BrickItem[][] = [
  // Course 1
  [
    { isSkill: false, widthClass: 'w-12 sm:w-16', pattern: 'dots' },
    { text: 'Product Design', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-10 sm:w-14', pattern: 'plain' },
    { text: 'User Research', isSkill: true, accent: 'lavender' },
    { isSkill: false, widthClass: 'w-14 sm:w-20', pattern: 'lines' },
    { text: 'Survey Design', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-10 sm:w-16', pattern: 'plain' },
  ],
  // Course 2 (offset running bond)
  [
    { text: 'Competitive Analysis', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-14 sm:w-18', pattern: 'plain' },
    { text: 'Wireframing & Prototyping', isSkill: true, accent: 'lavender' },
    { isSkill: false, widthClass: 'w-10 sm:w-14', pattern: 'dots' },
    { text: 'Interaction Design', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-12 sm:w-20', pattern: 'plain' },
  ],
  // Course 3
  [
    { isSkill: false, widthClass: 'w-16 sm:w-24', pattern: 'lines' },
    { text: 'Design Systems', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-10 sm:w-14', pattern: 'plain' },
    { text: 'High-fidelity UI', isSkill: true, accent: 'lavender' },
    { text: 'AI-assisted Building', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-12 sm:w-16', pattern: 'dots' },
    { text: 'HTML / CSS / JS', isSkill: true, accent: 'default' },
    { isSkill: false, widthClass: 'w-10 sm:w-14', pattern: 'plain' },
  ],
  // Course 4 (foundation row with subtle tactile balance)
  [
    { isSkill: false, widthClass: 'w-24 sm:w-36', pattern: 'plain' },
    { isSkill: false, widthClass: 'w-32 sm:w-48', pattern: 'dots' },
    { isSkill: false, widthClass: 'w-28 sm:w-40', pattern: 'lines' },
    { isSkill: false, widthClass: 'w-36 sm:w-56', pattern: 'plain' },
    { isSkill: false, widthClass: 'w-24 sm:w-32', pattern: 'dots' },
  ],
];

export function WhatIBringSection() {
  return (
    <section
      id="skills"
      aria-label="What I bring to the table"
      className="w-full py-20 sm:py-28 md:py-36 text-left scroll-mt-20"
    >
      {/* Section Heading: Fraunces 600 */}
      <div className="mb-10 sm:mb-14">
        <h2 className="font-fraunces font-semibold text-[34px] sm:text-[42px] md:text-[48px] text-[#3B2A20] leading-tight">
          What I bring to the table
        </h2>
        <p className="mt-2.5 font-jakarta font-normal text-[16px] sm:text-[17px] text-[#3B2A20]/75 max-w-xl">
          Core capabilities, user research frameworks, and craft principles built brick by brick.
        </p>
      </div>

      {/* THE SOFT BRICK WALL */}
      <div className="relative w-full rounded-[24px] sm:rounded-[28px] bg-[#EAE2D7] p-3 sm:p-5 md:p-6 shadow-[inset_0_2px_8px_rgba(59,42,32,0.06),0_12px_32px_rgba(59,42,32,0.04)] border border-[#3B2A20]/15 overflow-hidden">
        {/* Subtle mortar grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#3B2A20 1px, transparent 1px)`,
            backgroundSize: '12px 12px',
          }}
          aria-hidden="true"
        />

        {/* Brick Courses (Rows) with mortar gaps */}
        <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3.5">
          {wallRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-3.5 w-full"
            >
              {row.map((brick, brickIndex) => {
                if (brick.isSkill) {
                  return (
                    <div
                      key={brickIndex}
                      className={`group relative flex-grow sm:flex-grow-0 px-5 sm:px-6 py-3 sm:py-3.5 rounded-[8px] sm:rounded-[10px] text-center sm:text-left cursor-default select-none transition-all duration-200 ease-out
                        shadow-[0_2px_6px_rgba(59,42,32,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]
                        hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(59,42,32,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)]
                        ${
                          brick.accent === 'lavender'
                            ? 'bg-[#E5DAF2] border border-[#9570C6]/30 hover:border-[#9570C6] hover:bg-[#DDD0F3]'
                            : 'bg-[#FAF7F2] border border-[#3B2A20]/15 hover:border-[#9570C6]/60 hover:bg-[#FFFDF9]'
                        }`}
                    >
                      {/* Subtle brick bevel line */}
                      <div className="absolute inset-x-2 top-0.5 h-[1px] bg-white/60 rounded-full pointer-events-none" />

                      {/* Stamped Skill Text */}
                      <span className="relative z-10 font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#3B2A20] tracking-tight whitespace-nowrap block group-hover:text-[#281C15]">
                        {brick.text}
                      </span>
                    </div>
                  );
                }

                // Ambient spacer brick (completes the masonry wall pattern)
                const ambient = brick as AmbientBrick;
                return (
                  <div
                    key={brickIndex}
                    aria-hidden="true"
                    className={`hidden sm:flex items-center justify-center h-[46px] sm:h-[50px] ${
                      ambient.widthClass || 'w-16'
                    } rounded-[8px] sm:rounded-[10px] bg-[#F2ECE3] border border-[#3B2A20]/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_1px_3px_rgba(59,42,32,0.04)] select-none opacity-80`}
                  >
                    {/* Decorative tactile texture inside ambient brick */}
                    {ambient.pattern === 'dots' && (
                      <div className="flex gap-1.5 opacity-25">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B2A20]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B2A20]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B2A20]" />
                      </div>
                    )}
                    {ambient.pattern === 'lines' && (
                      <div className="flex flex-col gap-1 w-5 opacity-20">
                        <div className="h-[1.5px] bg-[#3B2A20] rounded-full w-full" />
                        <div className="h-[1.5px] bg-[#3B2A20] rounded-full w-3/4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
