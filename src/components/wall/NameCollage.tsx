import React from 'react';

interface NameCollageProps {
  animated: boolean;
}

export function NameCollage({ animated }: NameCollageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none pointer-events-auto">
      <h1 className="font-fraunces font-semibold text-[44px] sm:text-[60px] md:text-[76px] tracking-tight text-[#F6F1EA] drop-shadow-md">
        Reshma Angajala
      </h1>
      <p className="font-jakarta text-[14px] sm:text-[16px] text-[#DDD0F3] tracking-widest uppercase mt-2 opacity-90">
        Product Designer · Systems & Architecture
      </p>
    </div>
  );
}
