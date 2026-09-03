import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyStickyNav } from './CaseStudyStickyNav';
import { Chapter01Origin } from './Chapter01Origin';
import { Chapter02Validation } from './Chapter02Validation';
import { Chapter04Audience } from './Chapter04Audience';
import { Chapter05Competition } from './Chapter05Competition';
import { Chapter06Ideation } from './Chapter06Ideation';
import { Chapter07Feasibility } from './Chapter07Feasibility';
import { Chapter08Decisions } from './Chapter08Decisions';
import { Chapter09ExperienceFlow } from './Chapter09ExperienceFlow';
import { Chapter10Architecture } from './Chapter10Architecture';
import { Chapter11DesignSystem } from './Chapter11DesignSystem';
import { Chapter13Testing } from './Chapter13Testing';
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

      {/* 00 — THE PRODUCT (FINISHED PRODUCT FIRST) */}
      <Chapter15FinalUI />

      {/* Transition to how it was born */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-10 md:py-14 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <div className="flex-1 h-[1px] bg-[var(--accent)] opacity-30" />
          <span className="font-accent text-[12px] sm:text-[13px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium select-none whitespace-nowrap">
            Now, how it was born.
          </span>
          <div className="flex-1 h-[1px] bg-[var(--accent)] opacity-30" />
        </motion.div>
      </div>

      {/* 01 — WHERE THE IDEA CAME FROM */}
      <Chapter01Origin />

      <SectionDivider />

      {/* 02 — RESEARCH → INSIGHT → DECISION */}
      <Chapter02Validation onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 03 — WHO AM I BUILDING FOR? */}
      <Chapter04Audience />

      <SectionDivider />

      {/* 04 — WHAT ALREADY EXISTS? */}
      <Chapter05Competition onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 05 — EXPLORATION → STRUCTURE */}
      <Chapter06Ideation />

      <SectionDivider />

      {/* 06 — WHAT IS ACTUALLY POSSIBLE? */}
      <Chapter07Feasibility onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 07 — WHAT DID I DECIDE TO BUILD FIRST? */}
      <Chapter08Decisions />

      <SectionDivider />

      {/* 08 — HOW SHOULD THE EXPERIENCE WORK? */}
      <Chapter09ExperienceFlow />

      <SectionDivider />

      {/* 09 — HOW SHOULD INFORMATION BE ORGANIZED? */}
      <Chapter10Architecture onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 10 — WHAT SHOULD REYO FEEL LIKE? */}
      <Chapter11DesignSystem />

      <SectionDivider />

      {/* 11 — TESTING → ITERATION */}
      <Chapter13Testing />

      <SectionDivider />

      {/* 12 — BUILDING THE REAL PRODUCT */}
      <Chapter16BuildingProduct />

      <SectionDivider />

      {/* 13 — TESTING THE WORKING PRODUCT */}
      <Chapter17TestingProduct onOpenArtifact={handleOpenArtifact} />

      <SectionDivider />

      {/* 14 — WHAT IS NEXT */}
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
