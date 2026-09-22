import React, { useState, useEffect } from 'react';

export function HomeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'work' | 'about' | 'case-studies' | 'resume' | ''>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const contactElem = document.getElementById('contact');
      const aboutElem = document.getElementById('about');
      const workElem = document.getElementById('work');

      const scrollPos = window.scrollY + 200;
      if (contactElem && scrollPos >= contactElem.offsetTop) {
        setActiveTab('');
      } else if (aboutElem && scrollPos >= aboutElem.offsetTop) {
        setActiveTab('about');
      } else if (workElem && scrollPos >= workElem.offsetTop) {
        setActiveTab('work');
      } else {
        setActiveTab('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, tabName: 'work' | 'about' | 'case-studies') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(tabName);
    const elem = document.getElementById(id);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F1EA]/95 backdrop-blur-md border-b border-[#3B2A20]/10 shadow-[0_2px_16px_rgba(59,42,32,0.06)]'
          : 'bg-[#F6F1EA] border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* LOGO: "Reshma" in Fraunces Walnut + small decorative spark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', window.location.pathname);
          }}
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-md"
          aria-label="Reshma Home"
        >
          <span className="font-fraunces font-bold text-[22px] sm:text-[25px] text-[#3B2A20] tracking-tight">
            Reshma
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#9570C6] transition-transform duration-300 group-hover:rotate-45"
            aria-hidden="true"
          >
            <path d="M12 2l2.2 6.8 6.8 2.2-6.8 2.2L12 20l-2.2-6.8-6.8-2.2 6.8-2.2L12 2z" />
          </svg>
        </a>

        {/* CENTER NAV LINKS: Work, About, Case Studies, Resume */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8 font-jakarta font-medium text-[15px] text-[#3B2A20]"
        >
          <a
            href="#work"
            onClick={scrollToSection('work', 'work')}
            className={`transition-colors duration-150 relative py-1 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none ${
              activeTab === 'work'
                ? 'text-[#9570C6] font-semibold'
                : 'hover:text-[#9570C6]'
            }`}
          >
            Work
            {activeTab === 'work' && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#9570C6] rounded-full" />
            )}
          </a>

          <a
            href="#about"
            onClick={scrollToSection('about', 'about')}
            className={`transition-colors duration-150 relative py-1 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none ${
              activeTab === 'about'
                ? 'text-[#9570C6] font-semibold'
                : 'hover:text-[#9570C6]'
            }`}
          >
            About
            {activeTab === 'about' && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#9570C6] rounded-full" />
            )}
          </a>

          <a
            href="#work"
            onClick={scrollToSection('work', 'case-studies')}
            className={`transition-colors duration-150 relative py-1 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none ${
              activeTab === 'case-studies'
                ? 'text-[#9570C6] font-semibold'
                : 'hover:text-[#9570C6]'
            }`}
          >
            Case Studies
            {activeTab === 'case-studies' && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#9570C6] rounded-full" />
            )}
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 relative py-1 hover:text-[#9570C6] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
          >
            Resume
          </a>
        </nav>

        {/* RIGHT CTA BUTTON: "Let's Talk" — pill button, Amethyst background, Cream text */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById('contact');
              if (elem) {
                const topOffset = elem.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
                window.history.pushState(null, '', '#contact');
              }
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#9570C6] text-[#F6F1EA] hover:bg-[#835db6] font-jakarta font-medium text-[14px] sm:text-[15px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none whitespace-nowrap"
          >
            <span>Let&apos;s Talk</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* MOBILE NAV BAR (secondary compact bar on small screens) */}
      <div className="flex md:hidden items-center justify-center gap-5 px-4 py-2 border-t border-[#3B2A20]/[0.06] bg-[#F6F1EA] font-jakarta font-medium text-[13px] text-[#3B2A20]">
        <a
          href="#work"
          onClick={scrollToSection('work', 'work')}
          className={`py-0.5 ${activeTab === 'work' ? 'text-[#9570C6] font-semibold' : 'hover:text-[#9570C6]'}`}
        >
          Work
        </a>
        <span className="text-[#3B2A20]/25 select-none" aria-hidden="true">·</span>
        <a
          href="#about"
          onClick={scrollToSection('about', 'about')}
          className={`py-0.5 ${activeTab === 'about' ? 'text-[#9570C6] font-semibold' : 'hover:text-[#9570C6]'}`}
        >
          About
        </a>
        <span className="text-[#3B2A20]/25 select-none" aria-hidden="true">·</span>
        <a
          href="#work"
          onClick={scrollToSection('work', 'case-studies')}
          className={`py-0.5 ${activeTab === 'case-studies' ? 'text-[#9570C6] font-semibold' : 'hover:text-[#9570C6]'}`}
        >
          Case Studies
        </a>
        <span className="text-[#3B2A20]/25 select-none" aria-hidden="true">·</span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-0.5 hover:text-[#9570C6]"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
