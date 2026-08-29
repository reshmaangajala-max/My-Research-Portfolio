import { useEffect, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  viewMode?: 'portfolio' | 'reyo-case-study' | 'renew-case-study';
  onNavigateHome?: () => void;
}

const portfolioNavItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

const reyoNavItems = [
  { label: 'Context', href: '#case-study-context' },
  { label: 'Methodology', href: '#case-study-methodology' },
  { label: 'Primary', href: '#case-study-primary-research' },
  { label: 'Secondary', href: '#case-study-secondary-research' },
  { label: 'Analysis', href: '#case-study-content-analysis' },
  { label: 'Synthesis', href: '#case-study-synthesis' },
  { label: 'Trade-offs', href: '#case-study-tradeoffs' },
  { label: 'Impact', href: '#case-study-impact' },
];

const renewNavItems = [
  { label: 'Context', href: '#renew-context' },
  { label: 'Methodology', href: '#renew-methodology' },
  { label: 'Primary', href: '#renew-primary-research' },
  { label: 'Secondary', href: '#renew-secondary-research' },
  { label: 'Synthesis', href: '#renew-synthesis' },
  { label: 'UVP', href: '#renew-value-prop' },
  { label: 'Deliverables', href: '#renew-deliverables' },
  { label: 'Impact', href: '#renew-impact' },
];

export function Navbar({ viewMode = 'portfolio', onNavigateHome }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isRotating, setIsRotating] = useState(false);

  const isCaseStudy = viewMode === 'reyo-case-study' || viewMode === 'renew-case-study';
  const navItems =
    viewMode === 'reyo-case-study'
      ? reyoNavItems
      : viewMode === 'renew-case-study'
      ? renewNavItems
      : portfolioNavItems;

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after 40% of viewport height
      const scrollThreshold = window.innerHeight * 0.4;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section
      let sectionIds: string[] = [];
      if (viewMode === 'reyo-case-study') {
        sectionIds = [
          'case-study-documentation',
          'case-study-impact',
          'case-study-tradeoffs',
          'case-study-synthesis',
          'case-study-content-analysis',
          'case-study-secondary-research',
          'case-study-primary-research',
          'case-study-methodology',
          'case-study-context',
        ];
      } else if (viewMode === 'renew-case-study') {
        sectionIds = [
          'renew-documentation',
          'renew-impact',
          'renew-ending',
          'renew-deliverables',
          'renew-value-prop',
          'renew-synthesis',
          'renew-secondary-research',
          'renew-primary-research',
          'renew-methodology',
          'renew-context',
        ];
      } else {
        sectionIds = ['education', 'projects', 'experience', 'skills', 'about'];
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY <= scrollThreshold) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMonogramClick = () => {
    if (isCaseStudy && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleThemeToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          id="main-nav"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50 h-14 bg-[var(--bg)]/85 backdrop-blur-[16px] border-b border-[var(--border)] transition-colors duration-500"
        >
          <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between">
            {/* Left logo: Reshma in handwritten font */}
            <button
              id="nav-monogram-btn"
              onClick={handleMonogramClick}
              className="group text-[26px] font-semibold cursor-pointer flex items-center transition-all duration-300 font-handwriting tracking-wide leading-none"
              aria-label={isCaseStudy ? 'Back to Portfolio' : 'Scroll to top'}
              title={isCaseStudy ? 'Back to Portfolio' : 'Scroll to top'}
            >
              <span className="text-[var(--accent)] group-hover:hidden transition-colors duration-300">
                Reshma
              </span>
              <span className="hidden group-hover:inline-block aurora-text">
                Reshma
              </span>
            </button>

            {/* Desktop & Tablet Navigation links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-[13px] font-light tracking-wide transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[var(--accent)] font-medium'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Theme Toggle Button */}
            <div className="flex items-center">
              <button
                id="theme-toggle-btn"
                onClick={handleThemeToggle}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <motion.div
                  animate={{ rotate: isRotating ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-[18px] h-[18px]" />
                  ) : (
                    <Moon className="w-[18px] h-[18px]" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
