import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Mail, FileText, GraduationCap, User, Link as LinkIcon } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        // Focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstEl = focusableElements[0];
          const lastEl = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      // Focus first element in modal
      setTimeout(() => {
        if (modalRef.current) {
          const firstFocusable = modalRef.current.querySelector<HTMLElement>('button, [href]');
          firstFocusable?.focus();
        }
      }, 50);

      // Prevent body scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FAF7EE] text-[#1B1A1F] p-6 sm:p-8 md:p-10 rounded-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#E7E1D4] transform transition-transform"
        style={{
          clipPath:
            'polygon(0% 12px, 3% 2px, 6% 14px, 10% 3px, 14% 15px, 18% 2px, 22% 13px, 26% 1px, 30% 14px, 34% 4px, 38% 13px, 42% 1px, 46% 15px, 50% 2px, 54% 14px, 58% 1px, 62% 15px, 66% 3px, 70% 14px, 74% 2px, 78% 13px, 82% 4px, 86% 15px, 90% 2px, 94% 14px, 97% 1px, 100% 12px, 100% 100%, 0% 100%)',
        }}
      >
        {/* Paper fold creases */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, transparent 49.5%, rgba(0,0,0,0.08) 50%, transparent 50.5%),
              linear-gradient(to bottom, transparent 49.5%, rgba(0,0,0,0.08) 50%, transparent 50.5%)
            `,
          }}
        />

        {/* Paper texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.12) 1px, transparent 1px)',
            backgroundSize: '4px 4px',
          }}
        />

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          aria-label="Close about note"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#E5DFD3] hover:bg-[#D6CFC1] text-[#1B1A1F] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Note Header */}
        <div className="border-b border-[#E0D8C8] pb-4 mb-6">
          <div className="inline-block px-2.5 py-0.5 rounded bg-[#C9B6F2] text-[#4C1D95] font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
            UNFOLDED NOTE · ABOUT ME
          </div>
          <h2
            id="about-modal-title"
            className="font-archivo text-2xl sm:text-3xl font-black text-[#1B1A1F] tracking-tight uppercase"
          >
            Reshma Angajala
          </h2>
          <p className="font-caveat text-xl sm:text-2xl text-[#6B5A8A] font-bold mt-1">
            Product Designer &amp; Systems Thinker
          </p>
        </div>

        {/* Content Sections: Marked TODO for user to populate */}
        <div className="space-y-6 text-left">
          {/* 1. Short Bio */}
          <div className="p-4 rounded-[4px] bg-[#F2EDE2] border border-[#E2DAD0]">
            <div className="flex items-center gap-2 mb-2 text-[#4C1D95]">
              <User className="w-4 h-4" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                Short Bio (TODO)
              </span>
            </div>
            {/* TODO: User to customize bio text */}
            <div className="space-y-2 text-[14px] leading-relaxed text-[#2C2A31]">
              <p>
                <strong>TODO: Fill in short bio</strong> — Product designer with a computer science background, specializing in research-driven interface architectures, living design systems, and zero-friction user workflows.
              </p>
              <p className="text-xs text-[#666] italic">
                (Edit this bio to describe your design journey, specializations, and what drives your work.)
              </p>
            </div>
          </div>

          {/* 2. Education */}
          <div className="p-4 rounded-[4px] bg-[#F2EDE2] border border-[#E2DAD0]">
            <div className="flex items-center gap-2 mb-2 text-[#4C1D95]">
              <GraduationCap className="w-4 h-4" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                Education (TODO)
              </span>
            </div>
            {/* TODO: User to customize education */}
            <div className="space-y-1 text-[14px] leading-relaxed text-[#2C2A31]">
              <p className="font-semibold">
                TODO: B.Tech in Computer Science &amp; Engineering
              </p>
              <p className="text-xs text-[#555]">
                Centurion University of Technology and Management (2021 – 2025)
              </p>
            </div>
          </div>

          {/* 3. Links: LinkedIn, Email, Resume */}
          <div className="p-4 rounded-[4px] bg-[#F2EDE2] border border-[#E2DAD0]">
            <div className="flex items-center gap-2 mb-3 text-[#4C1D95]">
              <LinkIcon className="w-4 h-4" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                Direct Links (TODO: Verify)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/reshma-angajala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#FAF7EE] hover:bg-white border border-[#DDD5C7] text-xs font-medium text-[#1B1A1F] transition-all hover:border-[#9570C6] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9570C6]" />
              </a>

              {/* Email */}
              <a
                href="mailto:reshmaangajala@gmail.com"
                className="flex items-center justify-between p-2.5 rounded bg-[#FAF7EE] hover:bg-white border border-[#DDD5C7] text-xs font-medium text-[#1B1A1F] transition-all hover:border-[#9570C6] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
              >
                <span>Send Email</span>
                <Mail className="w-3.5 h-3.5 text-[#9570C6]" />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Reshma_Angajala_Resume.pdf"
                className="flex items-center justify-between p-2.5 rounded bg-[#FAF7EE] hover:bg-white border border-[#DDD5C7] text-xs font-medium text-[#1B1A1F] transition-all hover:border-[#9570C6] focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none"
              >
                <span>Download Resume</span>
                <FileText className="w-3.5 h-3.5 text-[#9570C6]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-[#E0D8C8] flex items-center justify-between text-xs text-[#777]">
          <span>Press ESC or click outside to fold note</span>
          <button
            onClick={onClose}
            className="text-xs font-bold font-mono text-[#4C1D95] hover:underline"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}
