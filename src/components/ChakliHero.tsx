import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Shield, Trophy } from 'lucide-react';
import { CinematicRook } from './CinematicRook';
import { FinrookLogo } from './FinrookLogo';

interface ChakliHeroProps {
  onOpenModal: (service?: string) => void;
  onDiscoverClick: () => void;
}

export const ChakliHero: React.FC<ChakliHeroProps> = ({
  onOpenModal,
  onDiscoverClick,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinate (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-18 overflow-hidden">
      {/* Subtle architectural background grid & gradient aura */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#141518_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient warm light aura */}
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF4D38]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#E5DFC0]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div 
              style={{
                transform: `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px)`,
                transition: 'transform 0.2s ease-out'
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5DFC0] shadow-sm mb-5 sm:mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D38] animate-pulse shrink-0"></span>
              <span className="text-[11px] sm:text-xs font-bold text-[#141518] tracking-wide uppercase truncate">
                4 Strategic Verticals • One Unified Agency
              </span>
            </div>

            {/* Main Punchy Heading Strictly Aligned with 4 Core Services */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-black tracking-tight text-[#141518] leading-[1.12] mb-5 sm:mb-6">
              Brand Management, Creator Deals, Events & Content.{' '}
              <span className="relative inline-block text-[#FF4D38]">
                Backed by the Rook.
                <svg className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#FF4D38" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[#4B4E58] mb-4 sm:mb-5 max-w-2xl leading-relaxed">
              Your next move backed by the rook. We guide and execute brand management, creator sponsorships, live experiential events, and high-impact content under one roof.
            </p>

            {/* Interactive 4 Services Quick Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 w-full">
              {[
                { name: 'Brand Management', label: '1. Brand Management' },
                { name: 'Creator Deals', label: '2. Creator Deals & Sourcing' },
                { name: 'Event Management', label: '3. Event Management' },
                { name: 'Content Creation', label: '4. Content Creation' }
              ].map((service) => (
                <button
                  key={service.name}
                  onClick={() => onOpenModal(service.name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#141518] hover:text-white border border-[#D8D2C4] text-[#141518] text-[11px] sm:text-xs font-bold transition-all shadow-2xs hover:shadow group cursor-pointer"
                  title={`Discuss ${service.name}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D38]"></span>
                  <span>{service.label}</span>
                  <ArrowRight className="w-3 h-3 text-[#646770] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {/* Plain-Language Agency Introduction (Zero Jargon) */}
            <p className="text-xs sm:text-sm md:text-base text-[#646770] mb-7 sm:mb-8 max-w-xl leading-relaxed">
              We are an advertising & strategic management agency operating across Mumbai, Dubai (UAE), and Manila (Philippines). Whether you are building an iconic brand identity, securing creator brand deals, managing live events, or producing high-impact content — we back your every move with dependable execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-8">
              <button
                onClick={() => onOpenModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FF4D38] hover:bg-[#E63F2C] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Talk to a strategist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F2EDE4] text-[#141518] font-bold text-sm sm:text-base border border-[#D8D2C4] shadow-sm hover:shadow transition-all group cursor-pointer"
              >
                <span>Discover our work</span>
                <ArrowDown className="w-4 h-4 text-[#FF4D38] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Availability Indicator */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#646770]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-[#141518]">Open for new briefs & partnerships</span>
              <span className="text-[#D8D2C4]">•</span>
              <span>Mumbai • Dubai, UAE • Manila, Philippines</span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Cinematic Rook & Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full px-2 sm:px-0">
            
            {/* The 3D Rook Canvas */}
            <div className="w-full aspect-square max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] relative rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F5EFE6] border border-[#E5DFC0] shadow-xl p-3 sm:p-4 flex items-center justify-center overflow-hidden">
              
              {/* Background ambient ring */}
              <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-dashed border-[#D8D2C4]/60 pointer-events-none"></div>
              
              {/* Cinematic 3D Rook */}
              <CinematicRook className="w-full h-full" size="lg" interactive={true} />

              {/* Center Plinth Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5DFC0] text-[10px] sm:text-[11px] font-bold text-[#141518] shadow-sm flex items-center gap-2 pointer-events-none whitespace-nowrap">
                <FinrookLogo size={14} primaryColor="#FF4D38" contrastColor="#141518" />
                <span>The Rook • Guide of Every Move</span>
              </div>
            </div>

            {/* Floating Parallax Card 1 */}
            <div
              style={{
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="absolute -top-3 sm:-top-4 left-1 sm:-left-6 bg-[#FFFFFF] p-2.5 sm:p-3.5 rounded-2xl shadow-lg border border-[#E5DFC0] flex items-center gap-2.5 sm:gap-3 animate-float pointer-events-none scale-90 sm:scale-100 origin-top-left"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-[#FF4D38]/10 text-[#FF4D38] flex items-center justify-center font-bold shrink-0">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-[#141518]">Backed By Strategy</p>
                <p className="text-[10px] sm:text-[11px] text-[#646770]">No guesswork, clear outcomes</p>
              </div>
            </div>

            {/* Floating Parallax Card 2 */}
            <div
              style={{
                transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="absolute -bottom-4 sm:-bottom-6 right-1 sm:-right-6 bg-[#FFFFFF] p-2.5 sm:p-3.5 rounded-2xl shadow-lg border border-[#E5DFC0] flex items-center gap-2.5 sm:gap-3 pointer-events-none scale-90 sm:scale-100 origin-bottom-right"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
                <Trophy className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-[#141518]">End-to-End Execution</p>
                <p className="text-[10px] sm:text-[11px] text-[#646770]">Brand, creators, events & media</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
