import React from 'react';

interface ScrollLineProps {
  animated?: boolean;
}

export function ScrollLine({ animated = false }: ScrollLineProps) {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#about';
    }
  };

  return (
    <div
      className={`hidden md:flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-auto select-none ${
        animated ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: '2000ms' }}
    >
      <a
        href="#about"
        onClick={handleScrollToAbout}
        className="group flex flex-col items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded px-3 py-1 cursor-pointer"
        aria-label="Scroll to know more about Reshma"
      >
        <span className="font-caveat font-semibold text-[22px] text-[#F6F1EA]/85 group-hover:text-[#DDD0F3] transition-colors leading-none">
          scroll to know more
        </span>

        {/* Small hand-drawn curly arrow (inline SVG, cream stroke) bouncing 6px, 1.6s */}
        <div className="pt-0.5">
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#F6F1EA]/85 group-hover:stroke-[#DDD0F3] animate-arrow-bounce transition-colors"
            aria-hidden="true"
          >
            <path
              d="M 11 2 C 15 6, 6 11, 11 16 C 13 18, 12 21, 11 25"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 6 21 L 11 26 L 16 21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
