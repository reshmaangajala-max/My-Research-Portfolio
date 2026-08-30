import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { PersonalInterests } from './components/PersonalInterests';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { ReyoCaseStudy } from './components/case-study/ReyoCaseStudy';
import { RenewCaseStudy } from './components/renew-case-study/RenewCaseStudy';

export function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'reyo-case-study' | 'renew-case-study'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#tara-case-study' || hash === '#tara' || hash === '#offload-case-study' || hash === '#offload' || hash === '#renew-case-study' || hash === '#renew') {
        return 'renew-case-study';
      }
      if (hash === '#reyo-case-study' || hash === '#reyo' || hash.startsWith('#case-study')) {
        return 'reyo-case-study';
      }
    }
    return 'portfolio';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#tara-case-study' || hash === '#tara' || hash === '#offload-case-study' || hash === '#offload' || hash === '#renew-case-study' || hash === '#renew') {
        setCurrentView('renew-case-study');
      } else if (hash === '#reyo-case-study' || hash === '#reyo' || hash.startsWith('#case-study')) {
        setCurrentView('reyo-case-study');
      } else {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openReyoCaseStudy = () => {
    window.location.hash = '#reyo-case-study';
    setCurrentView('reyo-case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openRenewCaseStudy = () => {
    window.location.hash = '#tara-case-study';
    setCurrentView('renew-case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToPortfolio = () => {
    window.location.hash = '#projects';
    setCurrentView('portfolio');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500 font-normal">
        <Navbar
          viewMode={currentView}
          onNavigateHome={backToPortfolio}
        />
        {currentView === 'reyo-case-study' ? (
          <main>
            <ReyoCaseStudy onBackToPortfolio={backToPortfolio} />
          </main>
        ) : currentView === 'renew-case-study' ? (
          <main>
            <RenewCaseStudy onBackToPortfolio={backToPortfolio} />
          </main>
        ) : (
          <>
            <main>
              <Hero />
              <About />
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <Experience />
              <SectionDivider />
              <Projects
                onOpenReyoCaseStudy={openReyoCaseStudy}
                onOpenRenewCaseStudy={openRenewCaseStudy}
              />
              <SectionDivider />
              <Education />
              <SectionDivider />
              <PersonalInterests />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

