import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Split, ArrowRight } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const ChapterTwoDisconnect: React.FC = () => {
  const [showAligned, setShowAligned] = useState(false);

  const pillars = [
    {
      id: 1,
      title: 'Your Brand',
      tag: '01 · Identity & Positioning',
      alone: 'A generic logo, inconsistent fonts on social media, and no clear reason why a customer or sponsor should pick you over anyone else.',
      withRook: 'A sharp, distinctive visual presence and crisp messaging that immediately makes your business look established, premium, and trustworthy.',
    },
    {
      id: 2,
      title: 'Creator Deals',
      tag: '02 · Partnerships & Sponsorships',
      alone: 'Brands pitching lowball barter deals instead of real money, endless back-and-forth email delays, and chasing late invoices for months.',
      withRook: 'Real commercial brand deals, transparent contracts that protect your rights, and sponsorships matched to your actual audience.',
    },
    {
      id: 3,
      title: 'Live Events',
      tag: '03 · Real-World Production',
      alone: 'Unreliable vendors, sound check delays, ticket sales moving slowly, and you running around backstage stressed out of your mind on show day.',
      withRook: 'A packed venue, punchy audio and stage lighting, smooth crowd check-ins, and an on-ground crew handling every logistical fire.',
    },
    {
      id: 4,
      title: 'Content & Videos',
      tag: '04 · Creative Media',
      alone: 'Spending hours filming random reels that barely reach 200 views, burning yourself out trying to feed the algorithms without a roadmap.',
      withRook: 'Clear storytelling and high-hook videos shot with cinema lenses and good lighting, planned on a consistent schedule that builds genuine fans.',
    },
  ];

  return (
    <section
      id="story"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#F5F2EB] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-5 sm:pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">THE REALITY CHECK</span>
          <span className="text-[#5C5952]">CHAPTER 03 · THE DISCONNECT</span>
        </div>

        {/* Narrative Heading */}
        <div className="mt-8 sm:mt-12 max-w-3xl">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-2.5 sm:mb-3">
            Why Ambitious Moves Stall
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            Having an idea is one thing. <br />
            <span className="text-[#E1382B]">Connecting the pieces is another.</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#5C5952] leading-relaxed font-normal">
            A brand needs direction. A creator needs genuine paid opportunities. An event needs technical coordination and crowd momentum. And content needs purpose. When these pieces operate in silos, you burn time and money.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 p-1.5 sm:p-2 rounded-xl bg-[#FFFFFF] border border-[#E5DFC0] w-full xs:w-fit shadow-xs">
            <button
              type="button"
              onClick={() => setShowAligned(false)}
              className={`w-full xs:w-auto px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                !showAligned
                  ? 'bg-[#141518] text-white shadow-2xs'
                  : 'text-[#6E6A61] hover:text-[#141518]'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-[#E1382B]" />
              <span>Without Direction</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAligned(true)}
              className={`w-full xs:w-auto px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                showAligned
                  ? 'bg-[#E1382B] text-white shadow-2xs'
                  : 'text-[#6E6A61] hover:text-[#141518]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Backed by the Rook</span>
            </button>
          </div>
        </div>

        {/* Pillars Comparison Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-5 sm:p-7 rounded-2xl border transition-all duration-300 ${
                showAligned
                  ? 'bg-[#FFFFFF] border-[#C5A869]/60 shadow-sm'
                  : 'bg-[#FFFFFF] border-[#E5DFC0] shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#ECE6D8]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E1382B]">
                  {pillar.tag}
                </span>
                <span className="text-xs font-mono text-[#8C887E]">0{pillar.id}</span>
              </div>

              <h3 className="text-xl font-bold text-[#141518] mt-4">
                {pillar.title}
              </h3>

              <div className="mt-4 min-h-[96px] flex flex-col justify-center">
                {showAligned ? (
                  <div className="flex items-start gap-3 text-sm text-[#141518] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#E1382B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#E1382B]">With Finrook: </span>
                      <span className="text-[#4A4843]">{pillar.withRook}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 text-sm text-[#6E6A61] leading-relaxed">
                    <AlertCircle className="w-5 h-5 text-[#8C887E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#141518]">On Your Own: </span>
                      <span>{pillar.alone}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-[#ECE6D8] flex items-center justify-between text-xs text-[#8C887E]">
                <span>Status:</span>
                <span className={`font-mono font-bold ${showAligned ? 'text-[#E1382B]' : 'text-[#8C887E]'}`}>
                  {showAligned ? 'STRATEGY LOCKED' : 'DISCONNECTED'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Footnote */}
        <div className="mt-10 p-6 bg-[#FFFFFF] rounded-xl border border-[#E5DFC0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <FinrookLogo size={32} />
            <div>
              <div className="font-bold text-sm text-[#141518]">
                Finrook integrates your entire creative and operational pipeline.
              </div>
              <div className="text-xs text-[#6E6A61]">
                No fragmented vendors. One unified team backing your moves.
              </div>
            </div>
          </div>

          <a
            href="#arenas"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E1382B] hover:text-[#C92F23] transition-colors uppercase tracking-wider"
          >
            <span>See the Four Disciplines</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
