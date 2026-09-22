import React from 'react';

export function WoodLedge() {
  return (
    <div className="relative w-full z-20 md:absolute md:bottom-0 md:left-0 md:right-0 pointer-events-none select-none">
      {/* Picture Ledge Shelf */}
      <div className="relative w-full">
        {/* Top bevel highlight line: walnut highlight */}
        <div className="w-full h-[2.5px] bg-[#6E4933] border-t border-[#8A5E42]/80" />

        {/* Shelf face: Gradient #3B2A20 to #5A3E2B with subtle wood grain */}
        <div
          className="w-full h-6 sm:h-7 md:h-8 relative overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          style={{
            background: 'linear-gradient(to bottom, #3B2A20 0%, #4D3525 50%, #5A3E2B 100%)',
          }}
        >
          {/* Subtle wood grain lines */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, 
                  transparent 0px, 
                  transparent 35px, 
                  rgba(255,255,255,0.06) 35px, 
                  rgba(255,255,255,0.06) 36px, 
                  transparent 36px, 
                  transparent 75px
                ),
                linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 10%, rgba(0,0,0,0.4) 100%)
              `,
            }}
          />
        </div>

        {/* Deep drop shadow under the shelf */}
        <div className="w-full h-5 bg-gradient-to-b from-black/85 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
