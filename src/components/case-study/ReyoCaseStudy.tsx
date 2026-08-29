import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyContext } from './CaseStudyContext';
import { CaseStudyMethodology } from './CaseStudyMethodology';
import { CaseStudyPrimaryResearch } from './CaseStudyPrimaryResearch';
import { CaseStudySecondaryResearch } from './CaseStudySecondaryResearch';
import { CaseStudyContentAnalysis } from './CaseStudyContentAnalysis';
import { CaseStudySynthesis } from './CaseStudySynthesis';
import { CaseStudyTradeoffs } from './CaseStudyTradeoffs';
import { CaseStudyImpact } from './CaseStudyImpact';
import { CaseStudyDocumentation } from './CaseStudyDocumentation';
import { SectionDivider } from '../SectionDivider';
import { Footer } from '../Footer';

interface ReyoCaseStudyProps {
  onBackToPortfolio: () => void;
}

export function ReyoCaseStudy({ onBackToPortfolio }: ReyoCaseStudyProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500 font-normal">
      <CaseStudyHero onBack={onBackToPortfolio} />
      <SectionDivider />
      <CaseStudyContext />
      <SectionDivider />
      <CaseStudyMethodology />
      <SectionDivider />
      <CaseStudyPrimaryResearch />
      <SectionDivider />
      <CaseStudySecondaryResearch />
      <SectionDivider />
      <CaseStudyContentAnalysis />
      <SectionDivider />
      <CaseStudySynthesis />
      <SectionDivider />
      <CaseStudyTradeoffs />
      <SectionDivider />
      <CaseStudyImpact />
      <SectionDivider />
      <CaseStudyDocumentation />
      <Footer />
    </div>
  );
}
