import { useState } from 'react';
import { motion } from 'motion/react';
import { StatCounter } from './StatCounter';
import { TaxonomyDiagram } from './TaxonomyDiagram';

interface ProjectsProps {
  onOpenReyoCaseStudy?: () => void;
  onOpenRenewCaseStudy?: () => void;
}

export function Projects({ onOpenReyoCaseStudy, onOpenRenewCaseStudy }: ProjectsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="projects" className="w-full bg-[var(--bg)] py-24 md:py-32 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            PROJECTS
          </div>

          {/* Section heading */}
          <h2
            id="projects-heading"
            className="font-bold text-[24px] sm:text-[28px] text-[var(--text-primary)] mb-12 tracking-tight"
          >
            What I&apos;ve Built
          </h2>

          {/* Three project cards stacked vertically with 48px gap */}
          <div className="flex flex-col gap-12">
            {/* PROJECT 1 — REYO (featured) */}
            <div
              id="project-card-reyo"
              onMouseEnter={() => setHoveredCard('reyo')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-[16px] p-6 sm:p-8 md:p-10 bg-[var(--surface)] transition-all duration-350 ease-out cursor-default ${
                hoveredCard === 'reyo'
                  ? '-translate-y-[5px] shadow-[var(--card-glow-hover)]'
                  : 'shadow-[var(--card-glow-rest)]'
              }`}
            >
              {/* Card gradient border wrapper on hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-350 ${
                  hoveredCard === 'reyo' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3), var(--gradient-1))',
                  backgroundSize: '300% 300%',
                  animation: 'aurora-shift 8s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Card regular static border when not hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none border border-[var(--border)] transition-opacity duration-350 ${
                  hoveredCard === 'reyo' ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Left border stripe: 3px wide at rest with aurora gradient flowing through, widens to 5px on hover */}
              <div
                className={`absolute left-0 top-0 bottom-0 rounded-l-[16px] aurora-gradient transition-all duration-350 ${
                  hoveredCard === 'reyo' ? 'w-[5px]' : 'w-[3px]'
                }`}
              />

              {/* Internal Layout: 58% left / 42% right on desktop, stacked on mobile */}
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left column (58%) */}
                <div className="w-full lg:w-[58%] flex flex-col items-start">
                  {/* Badge: gradient background for featured */}
                  <span className="inline-block aurora-gradient text-white font-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-sm">
                    FEATURED
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-[22px] text-[var(--text-primary)] tracking-tight mb-1">
                    Reyo
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[14px] text-[var(--text-secondary)] font-light mb-3.5">
                    Save-and-Retrieval Tool for Designers
                  </p>

                  {/* 14px gap (handled by mb-3.5) */}

                  {/* Description */}
                  <p className="text-[15px] text-[var(--text-primary)] font-light leading-[1.75] mb-6">
                    Conceived and applied a metadata and taxonomy classification framework — topic, objective, concept, skill — so designers can retrieve the exact moment they need from a saved video, instead of a flat list of bookmarks. Conducted primary research and competitive analysis. Self-taught full-stack development to build independently using LLM-based tagging.
                  </p>

                  {/* Tech tags (Space Grotesk 11px, border-only pills, secondary text) */}
                  <div className="flex flex-wrap items-center gap-2 font-accent text-[11px] text-[var(--text-secondary)] mb-6">
                    <span className="border border-[var(--border)] px-2.5 py-1 rounded">Spring Boot</span>
                    <span className="text-[var(--border)]">·</span>
                    <span className="border border-[var(--border)] px-2.5 py-1 rounded">Next.js</span>
                    <span className="text-[var(--border)]">·</span>
                    <span className="border border-[var(--border)] px-2.5 py-1 rounded">LLM Classification</span>
                  </div>

                  {/* View Case Study Button */}
                  <button
                    id="reyo-case-study-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenReyoCaseStudy?.();
                    }}
                    className="group/btn inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors py-1 cursor-pointer focus:outline-none"
                  >
                    <span>Read Full Research Case Study</span>
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>

                {/* Right column (42%): stats & taxonomy diagram */}
                <div className="w-full lg:w-[42%] flex flex-col justify-between pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8">
                  {/* Stats list with 24px between each */}
                  <div className="flex flex-col sm:flex-row lg:flex-col justify-between gap-6">
                    {/* Stat 1: 170+ (lead accent stat, counts up, glows on finish) */}
                    <div className="flex flex-col">
                      <div className="text-[44px] md:text-[48px] leading-none">
                        <StatCounter numericTarget={170} suffix="+" isAccent={true} />
                      </div>
                      <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                        VIDEOS PROCESSED
                      </span>
                    </div>

                    {/* Stat 2: 91% (primary text, counts up) */}
                    <div className="flex flex-col">
                      <div className="text-[44px] md:text-[48px] leading-none">
                        <StatCounter numericTarget={91} suffix="%" isAccent={false} />
                      </div>
                      <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                        TRANSCRIPT COVERAGE
                      </span>
                    </div>

                    {/* Stat 3: Solo (primary text) */}
                    <div className="flex flex-col">
                      <div className="text-[40px] md:text-[48px] leading-none">
                        <StatCounter staticValue="Solo" isAccent={false} />
                      </div>
                      <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                        BUILT END-TO-END
                      </span>
                    </div>
                  </div>

                  {/* Taxonomy Diagram */}
                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <TaxonomyDiagram />
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 2 — RENEW */}
            <div
              id="project-card-renew"
              onMouseEnter={() => setHoveredCard('renew')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-[16px] p-6 sm:p-8 md:p-10 bg-[var(--surface)] transition-all duration-350 ease-out cursor-default ${
                hoveredCard === 'renew'
                  ? '-translate-y-[5px] shadow-[var(--card-glow-hover)]'
                  : 'shadow-sm'
              }`}
            >
              {/* Card gradient border wrapper on hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-350 ${
                  hoveredCard === 'renew' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3), var(--gradient-1))',
                  backgroundSize: '300% 300%',
                  animation: 'aurora-shift 8s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Card regular static border when not hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none border border-[var(--border)] transition-opacity duration-350 ${
                  hoveredCard === 'renew' ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Left border stripe: 3px wide static accent color, widens to 5px on hover */}
              <div
                className={`absolute left-0 top-0 bottom-0 rounded-l-[16px] bg-[var(--accent)] transition-all duration-350 ${
                  hoveredCard === 'renew' ? 'w-[5px]' : 'w-[3px]'
                }`}
              />

              {/* Internal Layout */}
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left column (58%) */}
                <div className="w-full lg:w-[58%] flex flex-col items-start">
                  {/* Non-featured badge */}
                  <span className="inline-block bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)] font-accent text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    COMPANY CASE STUDY
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-[22px] text-[var(--text-primary)] tracking-tight mb-1">
                    Renew
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[14px] text-[var(--text-secondary)] font-light mb-3.5">
                    AI Life Admin Assistant · Company Case Study
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[var(--text-primary)] font-light leading-[1.75] mb-6">
                    Designed and circulated a primary user survey and conducted internal team interviews, combined with competitive analysis, to define product principles and value proposition. Translated research findings into a working prototype covering five core user flows, documenting technical trade-offs.
                  </p>

                  {/* View Case Study Button */}
                  <button
                    id="renew-case-study-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenRenewCaseStudy?.();
                    }}
                    className="group/btn inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors py-1 cursor-pointer focus:outline-none"
                  >
                    <span>Read Full Research Case Study</span>
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>

                {/* Right column (42%): stats */}
                <div className="w-full lg:w-[42%] flex flex-col sm:flex-row lg:flex-col justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8">
                  {/* Stat 1: 10 (accent, counts up, glows on finish) */}
                  <div className="flex flex-col">
                    <div className="text-[44px] md:text-[48px] leading-none">
                      <StatCounter numericTarget={10} isAccent={true} />
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      RESPONDENTS
                    </span>
                  </div>

                  {/* Stat 2: 5 (primary text, counts up) */}
                  <div className="flex flex-col">
                    <div className="text-[44px] md:text-[48px] leading-none">
                      <StatCounter numericTarget={5} isAccent={false} />
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      USER FLOWS
                    </span>
                  </div>

                  {/* Stat 3: Concept → Prototype (primary text, 16px) */}
                  <div className="flex flex-col">
                    <div className="font-medium text-[16px] text-[var(--text-primary)] font-accent pt-2">
                      Concept → Prototype
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      STAGE REACHED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 3 — EV CONCEPT */}
            <div
              id="project-card-ev"
              onMouseEnter={() => setHoveredCard('ev')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-[16px] p-6 sm:p-8 md:p-10 bg-[var(--surface)] transition-all duration-350 ease-out cursor-default ${
                hoveredCard === 'ev'
                  ? '-translate-y-[5px] shadow-[var(--card-glow-hover)]'
                  : 'shadow-sm'
              }`}
            >
              {/* Card gradient border wrapper on hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-350 ${
                  hoveredCard === 'ev' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3), var(--gradient-1))',
                  backgroundSize: '300% 300%',
                  animation: 'aurora-shift 8s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Card regular static border when not hover */}
              <div
                className={`absolute inset-0 rounded-[16px] pointer-events-none border border-[var(--border)] transition-opacity duration-350 ${
                  hoveredCard === 'ev' ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Left border stripe: 3px wide static accent color, widens to 5px on hover */}
              <div
                className={`absolute left-0 top-0 bottom-0 rounded-l-[16px] bg-[var(--accent)] transition-all duration-350 ${
                  hoveredCard === 'ev' ? 'w-[5px]' : 'w-[3px]'
                }`}
              />

              {/* Internal Layout */}
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left column (58%) */}
                <div className="w-full lg:w-[58%] flex flex-col items-start">
                  {/* Non-featured badge */}
                  <span className="inline-block bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)] font-accent text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    MARKET RESEARCH
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-[22px] text-[var(--text-primary)] tracking-tight mb-1">
                    EV Concept for Women Riders
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[14px] text-[var(--text-secondary)] font-light mb-3.5">
                    Market & Problem-Space Research
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[var(--text-primary)] font-light leading-[1.75]">
                    Conducted in-person primary research, interviewing engineering students across multiple disciplines, to explore a women-focused EV product concept. Performed secondary research, competitor app analysis, and SWOT analysis. Documented findings and a proposed solution direction referenced by leadership and the AI/ML team.
                  </p>
                </div>

                {/* Right column (42%): stats */}
                <div className="w-full lg:w-[42%] flex flex-col sm:flex-row lg:flex-col justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8">
                  {/* Stat 1: 4 (accent, counts up, glows on finish) */}
                  <div className="flex flex-col">
                    <div className="text-[44px] md:text-[48px] leading-none">
                      <StatCounter numericTarget={4} isAccent={true} />
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      DISCIPLINES INTERVIEWED
                    </span>
                  </div>

                  {/* Stat 2: SWOT (primary text, 20px) */}
                  <div className="flex flex-col">
                    <div className="font-medium text-[20px] text-[var(--text-primary)] font-accent pt-1">
                      SWOT
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      ANALYSIS TYPE
                    </span>
                  </div>

                  {/* Stat 3: Leadership (primary text, 16px) */}
                  <div className="flex flex-col">
                    <div className="font-medium text-[16px] text-[var(--text-primary)] font-accent pt-1">
                      Leadership
                    </div>
                    <span className="font-accent text-[10px] uppercase text-[var(--text-secondary)] tracking-[2px] mt-2 font-normal">
                      REFERENCED BY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
