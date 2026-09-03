import { useEffect, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  viewMode?: 'portfolio' | 'reyo-case-study' | 'renew-case-study';
  onNavigateHome?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  secondary?: boolean;
}

const portfolioNavItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

const reyoNavItems: NavItem[] = [
  { label: 'Product', href: '#ch-00-product' },
  { label: 'Problem', href: '#ch-01-origin' },
  { label: 'Research', href: '#ch-02-research' },
  { label: 'Audience', href: '#ch-03-audience' },
  { label: 'Landscape', href: '#ch-04-competition', secondary: true },
  { label: 'Exploration', href: '#ch-05-exploration' },
  { label: 'Decisions', href: '#ch-07-decisions' },
  { label: 'Flow', href: '#ch-08-experience', secondary: true },
  { label: 'Design', href: '#ch-10-feel' },
  { label: 'Testing', href: '#ch-11-testing' },
  { label: 'Build', href: '#ch-12-building' },
  { label: 'Next', href: '#ch-14-next' },
];

const renewNavItems: NavItem[] = [
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
      if (viewMode === 'reyo-case-study') {
        const reyoScrollItems = [
          { id: 'ch-14-next', navId: 'ch-14-next' },
          { id: 'ch-13-product-testing', navId: 'ch-12-building' },
          { id: 'ch-12-building', navId: 'ch-12-building' },
          { id: 'ch-11-testing', navId: 'ch-11-testing' },
          { id: 'ch-10-feel', navId: 'ch-10-feel' },
          { id: 'ch-09-architecture', navId: 'ch-08-experience' },
          { id: 'ch-08-experience', navId: 'ch-08-experience' },
          { id: 'ch-07-decisions', navId: 'ch-07-decisions' },
          { id: 'ch-06-possibility', navId: 'ch-05-exploration' },
          { id: 'ch-05-exploration', navId: 'ch-05-exploration' },
          { id: 'ch-04-competition', navId: 'ch-04-competition' },
          { id: 'ch-03-audience', navId: 'ch-03-audience' },
          { id: 'ch-02-research', navId: 'ch-02-research' },
          { id: 'ch-01-origin', navId: 'ch-01-origin' },
          { id: 'ch-00-product', navId: 'ch-00-product' },
        ];

        for (const item of reyoScrollItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 80) {
              setActiveSection(item.navId);
              return;
            }
          }
        }
      } else if (viewMode === 'renew-case-study') {
        const renewSectionIds = [
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

        for (const id of renewSectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 100) {
              setActiveSection(id);
              return;
            }
          }
        }
      } else {
        const portfolioSectionIds = ['education', 'projects', 'experience', 'skills', 'about'];

        for (const id of portfolioSectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 100) {
              setActiveSection(id);
              return;
            }
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
      const yOffset = -60;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
              className="group text-[26px] font-semibold cursor-pointer flex items-center transition-all duration-300 font-handwriting tracking-wide leading-none shrink-0"
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
            <nav
              className={`hidden md:flex items-center ${
                viewMode === 'reyo-case-study'
                  ? 'gap-2.5 lg:gap-3.5 xl:gap-5'
                  : 'space-x-8'
              }`}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-[12px] xl:text-[13px] font-light tracking-wide transition-colors duration-200 py-1 whitespace-nowrap ${
                      item.secondary ? 'hidden lg:inline-block' : ''
                    } ${
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
