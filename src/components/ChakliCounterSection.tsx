import React from 'react';
import { Compass, Users, Calendar, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

interface ChakliCounterSectionProps {
  onOpenModal: () => void;
}

export const ChakliCounterSection: React.FC<ChakliCounterSectionProps> = ({
  onOpenModal,
}) => {
  const pillars = [
    {
      step: '01',
      title: 'Brand Management',
      subtitle: 'Identity, Positioning & Packaging',
      description: 'Aligning typography, color systems, packaging, and messaging into one unmistakable, cohesive brand.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Creator Management',
      subtitle: 'Brand Deals & Talent Protection',
      description: 'Representing creators, sourcing real brand campaigns, and negotiating transparent contracts with fair terms.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Event Management',
      subtitle: 'Conferences, Festivals & Launches',
      description: 'Taking an empty space and transforming it with stage design, line-array audio, lighting, and seamless crowd flow.',
      icon: Calendar,
    },
    {
      step: '04',
      title: 'Content Creation',
      subtitle: 'Studio Shoots & Short-Form Video',
      description: 'Scripting, shooting, and editing high-retention video content and digital assets engineered to build real audiences.',
      icon: Video,
    },
  ];

  return (
    <section className="py-24 bg-[#141518] text-[#FAF8F5] relative overflow-hidden">
      {/* Background chess architectural lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF4D38_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Main statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-3.5 py-1.5 rounded-full">
            <FinrookLogo size={16} primaryColor="#FF4D38" contrastColor="#FFFFFF" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              The Rook’s Commitment
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Every move planned with clarity. <br />
            <span className="text-[#FF4D38]">Backed by the rook.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            We focus on four specialized disciplines under one roof. No disconnected agencies, no inflated claims — just disciplined strategy and dependable execution.
          </p>
        </div>

        {/* 4 Core Discipline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C1E24] border border-[#2A2C35] rounded-3xl p-6 sm:p-8 text-left hover:border-[#FF4D38]/60 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#FF4D38]">
                      {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FF4D38]/10 text-[#FF4D38] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-[#FF4D38] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#FF4D38] font-semibold mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2C35] flex items-center gap-2 text-[11px] text-white/40 group-hover:text-white/70 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D38]" />
                  <span>Strategic coordination</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#1C1E24] border border-[#2A2C35]">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Ready to plan your next move?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              Consult directly with our strategist to outline deliverables and timelines.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FF4D38] hover:bg-[#E63F2C] text-white font-bold text-sm transition-all shadow-md group shrink-0 cursor-pointer"
          >
            <span>Talk to a strategist</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
