import { useState, useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyStickyNav } from './CaseStudyStickyNav';
import { Chapter01Origin } from './Chapter01Origin';
import { Chapter02Validation } from './Chapter02Validation';
import { Chapter03ResearchFindings } from './Chapter03ResearchFindings';
import { Chapter04Audience } from './Chapter04Audience';
import { Chapter05Competition } from './Chapter05Competition';
import { Chapter06Ideation } from './Chapter06Ideation';
import { Chapter07Feasibility } from './Chapter07Feasibility';
import { Chapter08Decisions } from './Chapter08Decisions';
import { Chapter09ExperienceFlow } from './Chapter09ExperienceFlow';
import { Chapter10Architecture } from './Chapter10Architecture';
import { Chapter11DesignSystem } from './Chapter11DesignSystem';
import { Chapter12Wireframes } from './Chapter12Wireframes';
import { Chapter13Testing } from './Chapter13Testing';
import { Chapter14ChangesFeedback } from './Chapter14ChangesFeedback';
import { Chapter15FinalUI } from './Chapter15FinalUI';
import { Chapter16BuildingProduct } from './Chapter16BuildingProduct';
import { Chapter17TestingProduct } from './Chapter17TestingProduct';
import { Chapter18WhatIsNext } from './Chapter18WhatIsNext';
import { ResearchArtifactModal } from './artifacts/ResearchArtifactModal';
import { SectionDivider } from '../SectionDivider';
import { Footer } from '../Footer';

interface ReyoCaseStudyProps {
  onBackToPortfolio: () => void;
}

export function ReyoCaseStudy({ onBackToPortfolio }: ReyoCaseStudyProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState('interview-notes');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleOpenArtifact = (docId: string) => {
    setSelectedDocId(docId);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500 font-normal">
      {/* Sticky Progress & Chapter Navigation Bar */}
      <CaseStudyStickyNav onBack={onBackToPortfolio} />

      {/* Hero Header */}
      <CaseStudyHero onBack={onBackToPortfolio} />

      <SectionDivider />

      {/* 01 — WHERE THE IDEA CAME FROM */}
      <Chapter01Origin />

      <SectionDivider />

      {/* 02 — IS THIS ACTUALLY A REAL PROBLEM? */}
      <Chapter02Validation />

      <SectionDivider />

      {/* 03 — RESEARCH, VALIDATION AND WHAT I FOUND */}
      <Chapter03ResearchFindings onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 04 — WHO AM I BUILDING FOR? */}
      <Chapter04Audience />

      <SectionDivider />

      {/* 05 — WHAT ALREADY EXISTS? */}
      <Chapter05Competition onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 06 — WHAT COULD REYO BECOME? */}
      <Chapter06Ideation />

      <SectionDivider />

      {/* 07 — WHAT IS ACTUALLY POSSIBLE? */}
      <Chapter07Feasibility onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 08 — WHAT DID I DECIDE TO BUILD FIRST? */}
      <Chapter08Decisions />

      <SectionDivider />

      {/* 09 — HOW SHOULD THE EXPERIENCE WORK? */}
      <Chapter09ExperienceFlow />

      <SectionDivider />

      {/* 10 — HOW SHOULD INFORMATION BE ORGANIZED? */}
      <Chapter10Architecture onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 11 — WHAT SHOULD REYO FEEL LIKE? */}
      <Chapter11DesignSystem />

      <SectionDivider />

      {/* 12 — WIREFRAMES AND EARLY EXPLORATION */}
      <Chapter12Wireframes />

      <SectionDivider />

      {/* 13 — TESTING WITH DESIGNERS */}
      <Chapter13Testing />

      <SectionDivider />

      {/* 14 — WHAT I CHANGED AFTER FEEDBACK */}
      <Chapter14ChangesFeedback />

      <SectionDivider />

      {/* 15 — FINAL UI */}
      <Chapter15FinalUI />

      <SectionDivider />

      {/* 16 — BUILDING THE REAL PRODUCT */}
      <Chapter16BuildingProduct />

      <SectionDivider />

      {/* 17 — TESTING THE WORKING PRODUCT */}
      <Chapter17TestingProduct onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 18 — WHAT IS NEXT */}
      <Chapter18WhatIsNext onBackToPortfolio={onBackToPortfolio} />

      {/* Shared Research Artifacts Modal */}
      <ResearchArtifactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocId={selectedDocId}
      />

      <Footer />
    </div>
  );
}
