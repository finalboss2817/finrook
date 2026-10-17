import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const ChapterTwoDisconnect: React.FC = () => {
  const [isAligned, setIsAligned] = useState(false);

  const pillars = [
    {
      id: 1,
      title: 'Your Brand',
      tag: '01 · Identity',
      alone: 'A cheap logo, mismatched fonts on social media, and no clear way to explain why someone should choose you.',
      withRook: 'A sharp, distinctive look and clear message that immediately commands respect when someone lands on your page.',
    },
    {
      id: 2,
      title: 'Creator Deals',
      tag: '02 · Partnerships',
      alone: 'Brands offering you free merchandise instead of real money, endless back-and-forth emails, and delayed payments.',
      withRook: 'Real paid brand deals, transparent contracts that protect you, and partnerships aligned with your audience.',
    },
    {
      id: 3,
      title: 'Live Events',
      tag: '03 · Execution',
      alone: 'Flaky suppliers, late sound crews, ticket sales lagging, and you running around stressed out of your mind on show day.',
      withRook: 'A packed room, electric sound and lighting, flawless staging, and an on-ground crew handling every single issue.',
    },
    {
      id: 4,
      title: 'Content & Videos',
      tag: '04 · Media',
      alone: 'Spending hours making random reels that get 200 views, burning out trying to feed algorithms alone.',
      withRook: 'High-hook videos and photography shot on cinema gear, scripted cleanly, and delivered on a planned schedule.',
    },
  ];

  return (
    <section
      id="story"
      className="py-24 px-6 lg:px-16 bg-[#0E0E0E] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#222222] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE REALITY CHECK</span>
          <span>CHAPTER 02 · THE DISCONNECT</span>
        </div>

        {/* Narrative Heading */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Having an idea is one thing. <br />
            <span className="text-[#FF2B06]">Bringing it all together is another.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            A brand needs direction. A creator needs the right opportunities. An event needs people, planning, and timing. And content needs a reason to exist.
          </p>

          <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            When everything is handled separately, the little details quickly turn into headaches that stall great projects. Finrook brings the right people, planning, and execution under one roof.
          </p>
        </div>

        {/* State Toggle */}
        <div className="mt-10 flex flex-wrap items-center gap-3 p-1.5 bg-[#141414] border border-[#27272A] rounded-lg max-w-md">
          <button
            type="button"
            onClick={() => setIsAligned(false)}
            className={`flex-1 py-2 px-4 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              !isAligned
                ? 'bg-[#27272A] text-white shadow-xs'
                : 'text-[#71717A] hover:text-white'
            }`}
          >
            Doing It Alone
          </button>
          <button
            type="button"
            onClick={() => setIsAligned(true)}
            className={`flex-1 py-2 px-4 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              isAligned
                ? 'bg-[#FF2B06] text-white shadow-xs'
                : 'text-[#71717A] hover:text-white'
            }`}
          >
            Backed by Finrook
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className={`p-6 rounded-lg border transition-all duration-200 ${
                isAligned
                  ? 'bg-[#141414] border-[#FF2B06]/40 shadow-sm'
                  : 'bg-[#111111] border-[#222222]'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#222222] text-xs">
                <span className="font-mono text-[#71717A]">{p.tag}</span>
                <span
                  className={`px-2 py-0.5 rounded-sm font-mono text-[11px] ${
                    isAligned
                      ? 'bg-[#FF2B06]/15 text-[#FF2B06]'
                      : 'bg-[#1A1A1A] text-[#71717A]'
                  }`}
                >
                  {isAligned ? 'Coordinated' : 'Siloed'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4">
                {p.title}
              </h3>

              <div className="mt-3 text-sm leading-relaxed">
                {isAligned ? (
                  <div className="flex items-start gap-2.5 text-[#F4F4F5]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF2B06] shrink-0 mt-0.5" />
                    <span>{p.withRook}</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5 text-[#A1A1AA]">
                    <AlertCircle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
                    <span>{p.alone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Anchor Footer */}
        <div className="mt-8 flex items-center justify-between text-xs text-[#71717A] border-t border-[#1E1E1E] pt-6">
          <div className="flex items-center gap-2">
            <FinrookLogo size={18} />
            <span>One partner. All moving parts aligned.</span>
          </div>
          <span className="font-mono">FINROOK EXECUTION</span>
        </div>
      </div>
    </section>
  );
};
