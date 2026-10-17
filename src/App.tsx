import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ChapterOneHero } from './components/ChapterOneHero';
import { ChapterTwoDisconnect } from './components/ChapterTwoDisconnect';
import { ChapterThreeServices } from './components/ChapterThreeServices';
import { ChapterFourPathways } from './components/ChapterFourPathways';
import { ChapterFiveWorkflow } from './components/ChapterFiveWorkflow';
import { ChapterSixPrinciples } from './components/ChapterSixPrinciples';
import { ChapterSevenInquiry } from './components/ChapterSevenInquiry';
import { StoryProgress } from './components/StoryProgress';
import { Footer } from './components/Footer';

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('Brand Management');
  const [selectedNote, setSelectedNote] = useState<string>('');

  // Scroll listener to update active narrative chapter
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', chapter: 1 },
        { id: 'story', chapter: 2 },
        { id: 'arenas', chapter: 3 },
        { id: 'pathways', chapter: 4 },
        { id: 'playbook', chapter: 5 },
        { id: 'rules', chapter: 6 },
        { id: 'inquiry', chapter: 7 },
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapter(sections[i].chapter);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectChapter = (chapterNum: number) => {
    const sectionMap: Record<number, string> = {
      1: 'hero',
      2: 'story',
      3: 'arenas',
      4: 'pathways',
      5: 'playbook',
      6: 'rules',
      7: 'inquiry',
    };
    const targetId = sectionMap[chapterNum];
    if (targetId) {
      scrollToSection(targetId);
    }
  };

  const handleNavigateToInquiry = (service?: string, note?: string) => {
    if (service) setSelectedService(service);
    if (note) setSelectedNote(note);
    scrollToSection('inquiry');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F4F4F5] flex flex-col selection:bg-[#FF2B06] selection:text-white">
      {/* Top Bar Navigation */}
      <Navigation onNavigateToInquiry={() => handleNavigateToInquiry()} />

      {/* Floating Story Progress Tracker */}
      <StoryProgress
        activeChapter={activeChapter}
        onSelectChapter={handleSelectChapter}
      />

      <main className="flex-1">
        {/* Chapter 01: Before the Move */}
        <ChapterOneHero
          onExploreStory={() => scrollToSection('story')}
          onMakeMove={() => handleNavigateToInquiry()}
        />

        {/* Chapter 02: The Disconnect (Straightforward Reality Check) */}
        <ChapterTwoDisconnect />

        {/* Chapter 03: Four Arenas (Visual High-Res Showcases) */}
        <ChapterThreeServices
          onSelectService={(service) =>
            handleNavigateToInquiry(service, `Inquiring about ${service}.`)
          }
        />

        {/* Chapter 04: Choose Your Move (Interactive Pathway Selection) */}
        <ChapterFourPathways
          onSelectPathwayForInquiry={(service, note) =>
            handleNavigateToInquiry(service, note)
          }
        />

        {/* Chapter 05: How It Works (Methodology) */}
        <ChapterFiveWorkflow />

        {/* Chapter 06: The Standard (Core Principles) */}
        <ChapterSixPrinciples />

        {/* Chapter 07: Your Next Move (Inquiry Form & Direct Channels) */}
        <ChapterSevenInquiry
          initialService={selectedService}
          initialNote={selectedNote}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
