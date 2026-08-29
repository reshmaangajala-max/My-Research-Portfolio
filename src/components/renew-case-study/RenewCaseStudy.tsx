import { useEffect } from 'react';
import { RenewHero } from './RenewHero';
import { RenewContext } from './RenewContext';
import { RenewMethodology } from './RenewMethodology';
import { RenewPrimaryResearch } from './RenewPrimaryResearch';
import { RenewSecondaryResearch } from './RenewSecondaryResearch';
import { RenewSynthesis } from './RenewSynthesis';
import { RenewValueProposition } from './RenewValueProposition';
import { RenewDeliverables } from './RenewDeliverables';
import { OffloadPrototypePreview } from './OffloadPrototypePreview';
import { RenewImpact } from './RenewImpact';
import { SectionDivider } from '../SectionDivider';
import { Footer } from '../Footer';

interface RenewCaseStudyProps {
  onBackToPortfolio: () => void;
}

export function RenewCaseStudy({ onBackToPortfolio }: RenewCaseStudyProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500 font-normal">
      <RenewHero onBack={onBackToPortfolio} />
      <SectionDivider />
      <RenewContext />
      <SectionDivider />
      <RenewMethodology />
      <SectionDivider />
      <RenewPrimaryResearch />
      <SectionDivider />
      <RenewSecondaryResearch />
      <SectionDivider />
      <RenewSynthesis />
      <SectionDivider />
      <RenewValueProposition />
      <SectionDivider />
      <RenewDeliverables />
      <SectionDivider />
      <OffloadPrototypePreview />
      <SectionDivider />
      <RenewImpact />
      <Footer />
    </div>
  );
}
