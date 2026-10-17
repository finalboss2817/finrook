import React, { useState } from 'react';
import { ArrowUpRight, Check, Compass, Users, Calendar, Video } from 'lucide-react';

interface ChapterFourPathwaysProps {
  onSelectPathwayForInquiry: (service: string, note?: string) => void;
}

export const ChapterFourPathways: React.FC<ChapterFourPathwaysProps> = ({
  onSelectPathwayForInquiry,
}) => {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>('brand');

  const pathways = [
    {
      id: 'brand',
      icon: Compass,
      title: 'I want to grow my brand.',
      summary: 'Help me build a consistent brand presence and manage how my business communicates.',
      serviceName: 'Brand Management',
      ctaLabel: 'Start Brand Consultation',
      deliverables: [
        'Complete brand identity & positioning guidelines',
        'Cross-platform messaging & tone framework',
        'Social media planning and active governance',
        'Long-term visual consistency across channels',
      ],
      firstStep: 'We review your current brand assets and outline a clear step-by-step transformation plan.',
    },
    {
      id: 'creator',
      icon: Users,
      title: "I'm a creator looking for opportunities.",
      summary: 'Help me explore brand collaborations and manage partnership opportunities.',
      serviceName: 'Creator Management / Brand Deals',
      ctaLabel: 'Discuss Creator Roster',
      deliverables: [
        'Media kit & commercial rate card alignment',
        'Sourcing paid brand deals that fit your voice',
        'Contract review and legal clarity',
        'Deliverable tracking and timely payments',
      ],
      firstStep: 'We evaluate your content and audience to connect you with suitable brand partners.',
    },
    {
      id: 'event',
      icon: Calendar,
      title: 'I need to organise an event.',
      summary: 'Help me plan and coordinate an event from the initial idea to execution.',
      serviceName: 'Event Management',
      ctaLabel: 'Initiate Event Brief',
      deliverables: [
        'Event concept, theme design & staging blueprint',
        'Complete vendor sourcing, venue management & technical run-sheet',
        'Artist, speaker & guest experience coordination',
        'Full on-ground execution team for show day',
      ],
      firstStep: 'We discuss your anticipated guest count, location, timeline, and key milestones.',
    },
    {
      id: 'content',
      icon: Video,
      title: 'I need content for my business.',
      summary: 'Help me plan, create, and manage content for my brand.',
      serviceName: 'Content Creation / Management',
      ctaLabel: 'Brief Content Production',
      deliverables: [
        'Short-form reels and videos with strong narrative hooks',
        'Commercial brand photography and asset library',
        'Publishing calendars with targeted captions',
        'Fast editing turnarounds and recurring monthly assets',
      ],
      firstStep: 'We map out a quarterly content roadmap and schedule shoot days.',
    },
  ];

  const current = pathways.find((p) => p.id === selectedPathwayId) || pathways[0];

  return (
    <section
      id="pathways"
      className="py-24 px-6 lg:px-16 bg-[#0E0E0E] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#222222] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE GUIDED SELECTION</span>
          <span>CHAPTER 04 · DIFFERENT GOALS, ONE NEXT MOVE</span>
        </div>

        {/* Narrative Intro */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF2B06] mb-3">
            Your Next Move
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your next move starts with <br />
            <span className="text-[#FF2B06]">what you need.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            You don&apos;t need to know every step yet. Start with your primary goal, and we will work through the plan together.
          </p>
        </div>

        {/* 4 Interactive Pathway Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {pathways.map((path) => {
            const isSelected = selectedPathwayId === path.id;
            const Icon = path.icon;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => setSelectedPathwayId(path.id)}
                className={`text-left p-6 sm:p-7 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#181818] border-[#FF2B06] shadow-md ring-1 ring-[#FF2B06]/30'
                    : 'bg-[#121212] hover:bg-[#161616] border-[#222222]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-md transition-colors ${
                        isSelected
                          ? 'bg-[#FF2B06] text-white'
                          : 'bg-[#1E1E1E] text-[#A1A1AA]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                      {path.serviceName}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'border-[#FF2B06] bg-[#FF2B06] text-white'
                        : 'border-[#333333] text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-5">
                  {path.title}
                </h3>

                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {path.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-[#FF2B06] font-semibold' : 'text-[#71717A]'}>
                    {isSelected ? 'Currently Selected' : 'Click to select this path'}
                  </span>
                  <span className="text-[#71717A]">BACKED BY THE ROOK</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pathway Deep-Dive Box */}
        <div className="mt-8 bg-[#141414] border border-[#27272A] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#222222]">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-1">
                Selected Focus · {current.serviceName}
              </div>
              <h4 className="text-2xl font-bold text-white">
                {current.title}
              </h4>
              <p className="text-sm text-[#A1A1AA] mt-1">
                {current.summary}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onSelectPathwayForInquiry(
                  current.serviceName,
                  `Selected pathway: "${current.title}"`
                )
              }
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md shadow-sm shrink-0 cursor-pointer"
            >
              <span>{current.ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                Key Scope of Work:
              </div>
              <ul className="space-y-2 text-sm text-[#E4E4E7]">
                {current.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#FF2B06] font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-[#181818] rounded-md border border-[#27272A]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-2 font-semibold">
                Initial Step:
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {current.firstStep}
              </p>
              <div className="mt-4 pt-3 border-t border-[#27272A] text-xs text-[#71717A]">
                Every project is structured with transparent milestones and mutual approval.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
