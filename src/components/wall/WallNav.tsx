import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WallNavProps {
  onNavigate?: (href: string) => void;
}

export function WallNav({ onNavigate }: WallNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work', isDownload: false },
    { label: 'About', href: '#about', isDownload: false },
    { label: 'Contact', href: '#contact', isDownload: false },
    { label: 'Resume', href: '/resume.pdf', isDownload: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isDownload?: boolean) => {
    if (!isDownload && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
      setMobileMenuOpen(false);
      if (onNavigate) onNavigate(href);
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full px-5 sm:px-8 md:px-12 py-4 sm:py-5 flex items-center justify-between pointer-events-auto">
      {/* Brand: "Reshma" in Caveat 600, 26px, cream */}
      <a
        href="#"
        className="font-caveat font-semibold text-[26px] text-[#F6F1EA] hover:text-[#DDD0F3] transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-[2px]"
      >
        Reshma
      </a>

      {/* Desktop Nav: Plus Jakarta Sans 500, 14px, cream at 80% opacity, gap 28px */}
      <nav
        aria-label="Portfolio Navigation"
        className="hidden md:flex items-center gap-[28px]"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            download={link.isDownload ? 'Reshma_Angajala_Resume.pdf' : undefined}
            onClick={(e) => handleLinkClick(e, link.href, link.isDownload)}
            className="nav-link-draw font-jakarta font-medium text-[14px] text-[#F6F1EA]/80 hover:text-[#DDD0F3] transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-[2px]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button (<768px) */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label="Open menu"
          className="font-jakarta font-medium text-[14px] text-[#F6F1EA] px-3.5 py-1.5 rounded-[4px] border border-[#F6F1EA]/25 bg-black/20 backdrop-blur-xs hover:border-[#DDD0F3] hover:text-[#DDD0F3] transition-all focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col p-6 text-left"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm mx-auto bg-[#2E2E31] border border-white/10 rounded-lg p-6 shadow-2xl mt-12 text-[#F6F1EA]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="font-caveat font-semibold text-2xl text-[#F6F1EA]">Reshma</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.isDownload ? 'Reshma_Angajala_Resume.pdf' : undefined}
                  onClick={(e) => handleLinkClick(e, link.href, link.isDownload)}
                  className="font-jakarta font-medium text-[17px] text-[#F6F1EA] hover:text-[#DDD0F3] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#9570C6]">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
