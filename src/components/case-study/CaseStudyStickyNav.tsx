import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUp, Compass } from 'lucide-react';

export interface ChapterNavSection {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
}

export const REYO_CHAPTERS: ChapterNavSection[] = [
  { id: 'ch-00-product', number: '00', title: 'This is Reyo (The Product)', shortLabel: 'The Product' },
  { id: 'ch-01-origin', number: '01', title: 'Where the Idea Came From', shortLabel: 'Origin' },
  { id: 'ch-02-research', number: '02', title: 'I had the problem. But was I the only one?', shortLabel: 'Research' },
  { id: 'ch-03-audience', number: '03', title: 'Who Am I Building For?', shortLabel: 'Audience' },
  { id: 'ch-04-competition', number: '04', title: 'What Already Exists?', shortLabel: 'Competition' },
  { id: 'ch-05-exploration', number: '05', title: "I knew I didn't want to build another bookmark list", shortLabel: 'Exploration' },
  { id: 'ch-06-possibility', number: '06', title: 'What Is Actually Possible?', shortLabel: 'Feasibility' },
  { id: 'ch-07-decisions', number: '07', title: 'What Did I Decide to Build First?', shortLabel: 'Decisions' },
  { id: 'ch-08-experience', number: '08', title: 'How Should the Experience Work?', shortLabel: 'Experience' },
  { id: 'ch-09-architecture', number: '09', title: 'How Should Information Be Organized?', shortLabel: 'Architecture' },
  { id: 'ch-10-feel', number: '10', title: 'What Should Reyo Feel Like?', shortLabel: 'Design System' },
  { id: 'ch-11-testing', number: '11', title: "I put the prototype in front of 5 designers. Here's what broke, and what I changed", shortLabel: 'Testing' },
  { id: 'ch-12-building', number: '12', title: 'Building the Real Product', shortLabel: 'Build' },
  { id: 'ch-13-product-testing', number: '13', title: 'Testing the Working Product', shortLabel: 'Live Tests' },
  { id: 'ch-14-next', number: '14', title: 'What Is Next', shortLabel: 'Next' },
];

interface CaseStudyStickyNavProps {
  onBack: () => void;
}

export function CaseStudyStickyNav({ onBack }: CaseStudyStickyNavProps) {
  const [activeSection, setActiveSection] = useState<string>('ch-00-product');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section based on scroll position
      for (let i = REYO_CHAPTERS.length - 1; i >= 0; i--) {
        const section = document.getElementById(REYO_CHAPTERS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(REYO_CHAPTERS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const currentChapter = REYO_CHAPTERS.find((c) => c.id === activeSection) || REYO_CHAPTERS[0];

  return (
    <>
      {/* Top sticky bar */}
      <div className="sticky top-0 z-40 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
        {/* Continuous scroll progress line at very top */}
        <div className="h-[2px] w-full bg-[var(--surface-elevated)] overflow-hidden">
          <div
            className="h-full aurora-gradient transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[52px] flex items-center justify-between gap-3">
          {/* Left: Back button & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBack}
              className="text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer py-1"
            >
              <span>←</span>
              <span className="hidden sm:inline">Portfolio</span>
            </button>
            <span className="text-[var(--border)] hidden sm:inline">/</span>
            <span className="font-accent text-[12px] font-semibold text-[var(--text-primary)]">
              Reyo <span className="text-[var(--text-secondary)] font-normal hidden md:inline">· 0→1 Product Case Study</span>
            </span>
          </div>

          {/* Center/Right: Quick Chapter Selector Dropdown / Current Chapter Display */}
          <div className="relative flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] text-[12px] text-[var(--text-primary)] transition-all cursor-pointer shadow-sm"
              aria-label="Toggle chapters menu"
            >
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
                {currentChapter.number}
              </span>
              <span className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px] truncate text-left font-medium">
                {currentChapter.title}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--text-secondary)] transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-180 text-[var(--accent)]' : ''
                }`}
              />
            </button>

            {/* Scroll to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dropdown Menu of all 18 chapters */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[53px] right-4 sm:right-6 w-[92vw] sm:w-[380px] max-h-[75vh] overflow-y-auto bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[14px] p-2 shadow-2xl z-50 divide-y divide-[var(--border)]/40"
            >
              <div className="p-2.5 pb-2">
                <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[var(--accent)]" />
                  Table of Contents (18 Chapters)
                </span>
              </div>
              <div className="py-1 space-y-0.5">
                {REYO_CHAPTERS.map((chapter) => {
                  const isActive = chapter.id === activeSection;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => scrollToSection(chapter.id)}
                      className={`w-full text-left px-3 py-2 rounded-[8px] text-[12px] flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-semibold border border-[var(--accent)]/30'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-[11px] opacity-70 shrink-0">
                          {chapter.number}
                        </span>
                        <span className="truncate">{chapter.title}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
