import React from 'react';
import { HomeNavbar } from './HomeNavbar';
import { HeroSection } from './HeroSection';
import { WorkSection } from './WorkSection';
import { WhatIBringSection } from './WhatIBringSection';
import { AboutSection } from './AboutSection';
import { ClosingContactSection } from './ClosingContactSection';
import { FadeSection } from './FadeSection';

export function PortfolioHome() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#3B2A20] font-normal selection:bg-[#9570C6]/20 selection:text-[#9570C6] flex flex-col">
      {/* 1. NAVBAR (sticky, top, light/blur) */}
      <HomeNavbar />

      {/* 2. HERO SECTION (Light Cream background) */}
      <HeroSection />

      {/* 3. MY WORK SECTION (Full-width Dark Walnut background) */}
      <WorkSection />

      {/* 4. WHAT I BRING TO THE TABLE (Full-width Light Cream background) */}
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <FadeSection>
          <WhatIBringSection />
        </FadeSection>
      </div>

      {/* 5. ABOUT / WORKING WITH ME (Full-width Dark Walnut background) */}
      <AboutSection />

      {/* 6. CLOSING + CONTACT (Full-width Light Cream background) */}
      <div className="w-full max-w-[1120px] mx-auto px-6 flex-1 flex flex-col">
        <FadeSection>
          <ClosingContactSection />
        </FadeSection>
      </div>
    </div>
  );
}
