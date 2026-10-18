import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Sparkles, FileText, Check } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

import brandImg from '../assets/images/finrook_brand_scene_1792255093449.jpg';
import creatorImg from '../assets/images/finrook_creator_scene_1792255095438.jpg';
import eventImg from '../assets/images/finrook_event_scene_1792255095112.jpg';
import contentImg from '../assets/images/finrook_content_scene_1792255095120.jpg';

interface InteractiveProofShowcaseProps {
  onOpenModal: (serviceName: string) => void;
}

export const InteractiveProofShowcase: React.FC<InteractiveProofShowcaseProps> = ({
  onOpenModal,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const verticals = [
    {
      tabLabel: 'Brand Management',
      category: 'Visual Identity & Positioning',
      headline: 'Make Your Brand Feel Like One Brand',
      summary: 'From how your business looks to how it communicates, Finrook helps keep your brand consistent, credible, and recognizable across every customer touchpoint.',
      image: brandImg,
      pillars: [
        { title: 'Brand Identity & Positioning', desc: 'Distinct typography, cohesive color palette, and clear market differentiation.' },
        { title: 'Brand Communication', desc: 'A unified voice, messaging guidelines, and authentic brand copy across touchpoints.' },
        { title: 'Packaging & Collateral', desc: 'Physical product packaging, unboxing collateral, and retail-ready specifications.' },
        { title: 'Social & Campaign Systems', desc: 'Repeatable visual templates and campaign rules for internal and external teams.' },
      ],
      deliverables: [
        'Master visual brand style guide (color codes, typographic hierarchy, dos and don’ts)',
        'Full logo system with scalable vector exports for print, digital, and apparel',
        'Packaging dielines, label specifications, and retail mockups',
        'Comprehensive social media launch template kit',
      ],
      tagline: 'Strategic consistency that builds lasting brand equity.',
    },
    {
      tabLabel: 'Creator Deals',
      category: 'Creator Management & Partnerships',
      headline: 'Bring Talent and Opportunity Together',
      summary: 'Finrook helps creators explore real brand collaborations and helps businesses connect with creators who genuinely suit their campaigns.',
      image: creatorImg,
      pillars: [
        { title: 'Creator Representation', desc: 'Professional talent management handling incoming pitches, vetting brands, and scheduling.' },
        { title: 'Brand Deal Sourcing', desc: 'Active outreach connecting your channel to brands with real marketing budgets.' },
        { title: 'Creator & Brand Matching', desc: 'Ensuring alignment between brand values, creator voice, and real audience demographics.' },
        { title: 'Contract & Commercial Protection', desc: 'Transparent agreements that protect creator usage rights, revisions, and payment terms.' },
      ],
      deliverables: [
        'Curated creator media kit with audience breakdown and rate cards',
        'Standardized sponsor contracts protecting creator intellectual property',
        'Clear campaign briefs with defined milestones and revision caps',
        'Direct escrow tracking and timely commercial payout coordination',
      ],
      tagline: 'Talent protected. Deals managed. Opportunities maximized.',
    },
    {
      tabLabel: 'Event Management',
      category: 'Live Experiential & Production',
      headline: 'From an Empty Space to an Experience People Remember',
      summary: 'Finrook helps plan and coordinate events, bringing together the venue, people, suppliers, production, and details needed to make the occasion happen.',
      image: eventImg,
      pillars: [
        { title: 'Corporate Events & Summits', desc: 'Executive conferences, partner summits, and networking forums executed with precision.' },
        { title: 'College & Youth Festivals', desc: 'High-energy campus celebrations, multi-stage coordination, and live artist management.' },
        { title: 'Product Launches', desc: 'Immersive experiential setups, unveilings, and media-ready environments.' },
        { title: 'Technical Production & Rigging', desc: 'Professional audio-visual design, stage construction, lighting, and crowd logistics.' },
      ],
      deliverables: [
        'Comprehensive venue blueprint, stage 3D schematic, and seating plan',
        'Professional audio-visual tech riders, line-array sound, and stage lighting plot',
        'Minute-by-minute run of show (ROS) and backstage artist coordination plan',
        'Dedicated on-ground stage manager, vendor liaison, and emergency protocol team',
      ],
      tagline: 'End-to-end event execution without logistical chaos.',
    },
    {
      tabLabel: 'Content Creation',
      category: 'Production & Media Management',
      headline: 'Content Designed with Purpose and Narrative',
      summary: 'Creating high-quality media across video, photography, and digital campaigns that communicate your story clearly and stop the scroll.',
      image: contentImg,
      pillars: [
        { title: 'Studio Photography', desc: 'Professional product shoots, lifestyle portraits, and high-resolution catalog stills.' },
        { title: 'Short-Form Video Production', desc: 'High-hook Reels, Shorts, and ads with cinema lenses, clean sound, and sharp editing.' },
        { title: 'Digital Ad Assets', desc: 'Tailored motion graphics, ad variations, and promotional assets built for conversion.' },
        { title: 'Publishing Strategy', desc: 'Consistent production schedules, content calendar management, and audience growth cadence.' },
      ],
      deliverables: [
        'High-resolution video masters formatted for vertical (9:16) and horizontal (16:9) display',
        'Color-graded photo batch with professional retouching and web-optimized exports',
        'Dynamic motion subtitles, licensed music tracks, and crisp voice mixing',
        'Full cloud asset archive with organized master clips and source project files',
      ],
      tagline: 'Media crafted to capture attention and build genuine authority.',
    },
  ];

  const current = verticals[activeTab];

  return (
    <section id="work" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#ECE6D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <FinrookLogo size={18} primaryColor="#FF4D38" contrastColor="#141518" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D38]">
                Clear Deliverables
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#141518] leading-tight">
              Scope of Work for{' '}
              <span className="text-[#FF4D38] underline decoration-4 underline-offset-8">
                Every Move.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#646770] max-w-md">
            No vague promises or hidden gaps. Click each vertical to see the exact structure, pillars, and deliverables Finrook executes.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-3 p-1.5 bg-[#FFFFFF] rounded-2xl border border-[#E5DFC0] shadow-sm mb-8 sm:mb-10 w-full sm:w-fit">
          {verticals.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                activeTab === idx
                  ? 'bg-[#141518] text-[#FAF8F5] shadow-md'
                  : 'text-[#646770] hover:text-[#141518] hover:bg-[#FAF8F5]'
              }`}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content Card */}
        <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5DFC0] shadow-sm p-5 sm:p-8 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Image & Tagline */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#141518] shadow-md mb-4 group">
                <img
                  src={current.image}
                  alt={current.headline}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white text-[11px] sm:text-xs font-semibold">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20 truncate max-w-[55%]">
                    {current.category}
                  </span>
                  <span className="bg-[#FF4D38] px-2.5 py-1 rounded-full font-bold shrink-0">
                    Finrook Execution
                  </span>
                </div>
              </div>

              {/* Tagline Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE6D8] flex items-center gap-2.5 sm:gap-3">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF4D38] shrink-0" />
                <p className="text-xs sm:text-sm font-semibold text-[#141518]">
                  {current.tagline}
                </p>
              </div>
            </div>

            {/* Right Column: Narrative, Pillars & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF4D38] mb-1.5 block">
                  {current.category}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#141518] mb-2.5 sm:mb-3 leading-tight">
                  {current.headline}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-[#646770] leading-relaxed mb-5 sm:mb-6">
                  {current.summary}
                </p>

                {/* 4 Execution Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                  {current.pillars.map((pil, pIdx) => (
                    <div key={pIdx} className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border border-[#ECE6D8]">
                      <h4 className="text-xs font-bold text-[#141518] mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D38]"></span>
                        {pil.title}
                      </h4>
                      <p className="text-[11px] text-[#646770] leading-normal">
                        {pil.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-[#ECE6D8] mb-5 sm:mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141518] mb-3 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#FF4D38]" />
                    <span>Included in This Move</span>
                  </h4>
                  <div className="space-y-2">
                    {current.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B4E58]">
                        <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FF4D38] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-[#ECE6D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-xs text-[#646770]">
                  Need this move for your organization?
                </span>
                <button
                  onClick={() => onOpenModal(current.tabLabel)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#141518] hover:bg-[#FF4D38] text-white text-xs sm:text-sm font-bold transition-all shadow-sm group cursor-pointer"
                >
                  <span>Inquire about {current.tabLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
