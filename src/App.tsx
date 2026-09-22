import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { PortfolioHome } from './components/home/PortfolioHome';
import { ReyoCaseStudy } from './components/case-study/ReyoCaseStudy';
import { TaraCaseStudy } from './components/case-study/TaraCaseStudy';
import { RenewCaseStudy } from './components/renew-case-study/RenewCaseStudy';

export function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'reyo-case-study' | 'tara-case-study' | 'renew-case-study'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#tara-case-study' || hash === '#tara') {
        return 'tara-case-study';
      }
      if (
        hash === '#offload-case-study' ||
        hash === '#offload' ||
        hash === '#renew-case-study' ||
        hash === '#renew' ||
        hash === '#ev-project' ||
        hash === '#ev-case-study' ||
        hash === '#ev'
      ) {
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
      if (hash === '#tara-case-study' || hash === '#tara') {
        setCurrentView('tara-case-study');
      } else if (
        hash === '#offload-case-study' ||
        hash === '#offload' ||
        hash === '#renew-case-study' ||
        hash === '#renew' ||
        hash === '#ev-project' ||
        hash === '#ev-case-study' ||
        hash === '#ev'
      ) {
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

  const backToPortfolio = () => {
    window.location.hash = '';
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div
        className={
          currentView === 'renew-case-study'
            ? 'min-h-screen bg-[#0f1117] text-[#e4e2de] font-normal overflow-x-hidden selection:bg-[#9570C6] selection:text-white'
            : 'min-h-screen bg-[#F6F1EA] text-[#3B2A20] font-normal overflow-x-clip selection:bg-[#9570C6]/20 selection:text-[#9570C6]'
        }
      >
        {currentView === 'renew-case-study' && (
          <Navbar
            viewMode={currentView}
            onNavigateHome={backToPortfolio}
          />
        )}
        {currentView === 'reyo-case-study' ? (
          <main>
            <ReyoCaseStudy onBackToPortfolio={backToPortfolio} />
          </main>
        ) : currentView === 'tara-case-study' ? (
          <main>
            <TaraCaseStudy onBackToPortfolio={backToPortfolio} />
          </main>
        ) : currentView === 'renew-case-study' ? (
          <main>
            <RenewCaseStudy onBackToPortfolio={backToPortfolio} />
          </main>
        ) : (
          <PortfolioHome />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

