import React, { useState } from 'react';

interface BrowserMockupProps {
  src: string;
  alt: string;
  caption: string;
}

export function BrowserMockup({ src, alt, caption }: BrowserMockupProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full overflow-hidden rounded-[24px] bg-[#FFFDF9] border border-[#3B2A20]/[0.08] shadow-[0_4px_20px_rgba(59,42,32,0.04)] transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_32px_rgba(59,42,32,0.09)]">
        {/* Browser Mockup Top Bar in #EFE8DE with three dots */}
        <div className="w-full bg-[#EFE8DE] px-4 py-3 flex items-center gap-2 border-b border-[#3B2A20]/[0.06]">
          <span className="w-3 h-3 rounded-full bg-[#3B2A20]/25 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#3B2A20]/20 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#3B2A20]/20 inline-block" />
        </div>

        {/* Screen Content */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/10] bg-[#DDD0F3] relative overflow-hidden flex items-center justify-center">
          {!hasError ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#DDD0F3] text-center">
              <span className="font-fraunces font-semibold text-xl sm:text-2xl text-[#3B2A20]">
                {alt}
              </span>
              <span className="font-caveat text-base text-[#3B2A20]/75 mt-1">
                {caption}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Caveat caption underneath */}
      <p className="mt-3 font-caveat font-semibold text-[20px] text-[#3B2A20]/80 text-center">
        {caption}
      </p>
    </div>
  );
}
