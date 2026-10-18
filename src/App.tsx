import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ChakliHero } from './components/ChakliHero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AgencyCardsGrid } from './components/AgencyCardsGrid';
import { InteractiveProofShowcase } from './components/InteractiveProofShowcase';
import { ChakliCounterSection } from './components/ChakliCounterSection';
import { ChapterTwoDisconnect } from './components/ChapterTwoDisconnect';
import { ChapterFiveWorkflow } from './components/ChapterFiveWorkflow';
import { ChapterSixPrinciples } from './components/ChapterSixPrinciples';
import { ChapterSevenInquiry } from './components/ChapterSevenInquiry';
import { Footer } from './components/Footer';
import { TalkToStrategistModal } from './components/TalkToStrategistModal';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Brand Management');

  const handleOpenModal = (service?: string) => {
    if (service) {
      setModalService(service);
    }
    setIsModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141518] selection:bg-[#FF4D38] selection:text-white flex flex-col antialiased">
      {/* Elevated Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Chakli-Style Header & Navigation */}
      <Navigation
        onOpenModal={handleOpenModal}
        onScrollToSection={handleScrollToSection}
      />

      <main className="flex-1">
        {/* 1. Chakli-Style Hero with Bold Tagline, 3D Rook & Floating Elements */}
        <ChakliHero
          onOpenModal={handleOpenModal}
          onDiscoverClick={() => handleScrollToSection('services')}
        />

        {/* 2. Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. Agency Showcase Grid ("We are a strategic agency that brings real business results") */}
        <AgencyCardsGrid
          onSelectService={(serviceName) => handleOpenModal(serviceName)}
        />

        {/* 4. Interactive Tabbed Deliverables Showcase */}
        <InteractiveProofShowcase
          onOpenModal={(serviceName) => handleOpenModal(serviceName)}
        />

        {/* 5. The Rook's Commitment Across 4 Disciplines */}
        <ChakliCounterSection
          onOpenModal={() => handleOpenModal('General Consultation')}
        />

        {/* 6. The Disconnect: Going it alone vs Backed by the Rook */}
        <ChapterTwoDisconnect />

        {/* 7. The 4-Step Process (Understand, Plan, Coordinate, Execute) */}
        <ChapterFiveWorkflow />

        {/* 8. Core Working Principles */}
        <ChapterSixPrinciples />

        {/* 9. Direct Inquiry Suite with Masked Phone & WhatsApp */}
        <section id="contact">
          <ChapterSevenInquiry initialService={modalService} />
        </section>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Chakli-style Quick Inquiry / Talk to Strategist Modal */}
      <TalkToStrategistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
};

export default App;
