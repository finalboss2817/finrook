import React, { useState } from 'react';
import { ArrowUpRight, Check, Compass, Users, Calendar, Video, ArrowRight } from 'lucide-react';

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
      title: 'I want to build or upgrade my brand.',
      summary: 'You want a sharp, consistent identity, clear market positioning, and marketing that looks cohesive across every platform.',
      serviceName: 'Brand Management',
      ctaLabel: 'Plan Your Brand Move',
      deliverables: [
        'Complete visual identity system & logo styling',
        'Website & packaging design guidelines',
        'Clear marketing messaging & brand story',
        'Social media visual templates & active direction',
      ],
      firstStep: 'We evaluate your current presence, identify where it looks fragmented, and map out a practical upgrade plan.',
    },
    {
      id: 'creator',
      icon: Users,
      title: 'I am a creator looking for brand deals.',
      summary: 'You have an audience and want real paid sponsorships, commercial deal representation, and contract protection.',
      serviceName: 'Creator Management / Brand Deals',
      ctaLabel: 'Connect With Our Talent Desk',
      deliverables: [
        'Creator media kit and commercial rate card creation',
        'Direct pitching to relevant brands and agencies',
        'Legal contract review and payment protection',
        'Sponsorship deliverable tracking and coordination',
      ],
      firstStep: 'We audit your social media metrics, audience demographic, and match you with prospective brands.',
    },
    {
      id: 'event',
      icon: Calendar,
      title: 'I need to organise a live event.',
      summary: 'You need an experienced team to handle staging, audio/video production, artist coordination, permits, and on-ground logistics.',
      serviceName: 'Event Management',
      ctaLabel: 'Start Your Event Brief',
      deliverables: [
        'Event concept, stage rigging & technical blueprint',
        'Sound, lighting, LED screens, and vendor management',
        'Artist, performer & VIP hospitality coordination',
        'On-ground operations and safety crew for the event day',
      ],
      firstStep: 'We discuss your expected guest count, venue, timeline, and key milestones to produce an actionable run-sheet.',
    },
    {
      id: 'content',
      icon: Video,
      title: 'I need high-impact videos & content.',
      summary: 'You need professional short-form videos, reels, commercial photography, and a steady publishing calendar.',
      serviceName: 'Content Creation / Management',
      ctaLabel: 'Schedule a Content Shoot',
      deliverables: [
        'Hook-driven scriptwriting and video storyboards',
        'Cinema-grade shooting on location or in-studio',
        'Color grading, sound design, and vertical formats',
        'Curated monthly content calendar and posting roadmap',
      ],
      firstStep: 'We review your target audience, identify winning video angles, and schedule your first production batch.',
    },
  ];

  const activePathway = pathways.find((p) => p.id === selectedPathwayId) || pathways[0];

  return (
    <section
      id="pathways"
      className="py-24 px-6 lg:px-16 bg-[#F5F2EB] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">WHERE DO YOU FIT</span>
          <span className="text-[#5C5952]">CHAPTER 05 · CHOOSE YOUR MOVE</span>
        </div>

        {/* Narrative Section Header */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-3">
            Tailored Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            Your next move starts <br />
            <span className="text-[#E1382B]">with what you need today.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C5952] leading-relaxed font-normal">
            You don’t have to book everything at once. Select your immediate priority below to see our direct deliverables and first step.
          </p>
        </div>

        {/* 4 Pathway Option Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathways.map((path) => {
            const Icon = path.icon;
            const isSelected = selectedPathwayId === path.id;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => setSelectedPathwayId(path.id)}
                className={`p-6 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#E1382B] shadow-md ring-2 ring-[#E1382B]/20'
                    : 'bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] border-[#E5DFC0] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isSelected
                          ? 'bg-[#E1382B] text-white'
                          : 'bg-[#F2EDE4] text-[#141518]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E1382B] font-bold bg-[#FFF1F0] px-2 py-0.5 rounded">
                        Selected
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#141518] leading-snug">
                    {path.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#5C5952] leading-relaxed">
                    {path.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE6D8] flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#E1382B]' : 'text-[#8C887E]'}>
                    {path.serviceName}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isSelected ? 'text-[#E1382B]' : 'text-[#8C887E]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pathway Deep Dive Card */}
        <div className="mt-8 bg-[#FFFFFF] rounded-2xl border border-[#E5DFC0] p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E1382B] mb-2">
                <span>Pathway Scope</span>
                <span className="text-[#C5A869]">·</span>
                <span className="text-[#6E6A61]">{activePathway.serviceName}</span>
              </div>

              <h4 className="text-2xl font-bold text-[#141518]">
                {activePathway.title}
              </h4>

              <div className="mt-5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8C887E] font-bold mb-3">
                  What Finrook Delivers For This Move:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePathway.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4843]">
                      <div className="w-5 h-5 rounded-full bg-[#FFF1F0] text-[#E1382B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 font-bold" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#FAF8F5] rounded-xl border border-[#E5DFC0] text-xs sm:text-sm text-[#5C5952]">
                <span className="font-bold text-[#141518]">The First Step: </span>
                <span>{activePathway.firstStep}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="w-full sm:w-auto flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onSelectPathwayForInquiry(
                      activePathway.serviceName,
                      `I am interested in: "${activePathway.title}"`
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-bold text-white bg-[#E1382B] hover:bg-[#C92F23] rounded-lg shadow-xs transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>{activePathway.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#8C887E]">
                  Direct follow-up within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
