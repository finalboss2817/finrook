import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CinematicRook } from './CinematicRook';
import { FinrookLogo } from './FinrookLogo';

interface ChapterOneHeroProps {
  onExploreStory: () => void;
  onMakeMove: () => void;
}

export const ChapterOneHero: React.FC<ChapterOneHeroProps> = ({
  onExploreStory,
  onMakeMove,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 lg:px-16 bg-[#0A0A0A] border-b border-[#1E1E1E]"
    >
      {/* Chapter Marker Header */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-medium border-b border-[#1E1E1E] pb-3">
          <span className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#FF2B06]" />
            FINROOK
          </span>
          <span className="font-mono">CHAPTER 01 · BEFORE THE MOVE</span>
        </div>
      </div>

      {/* Main Hero Split Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Clear, Spacious, Confident Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-block text-xs font-semibold tracking-wider uppercase text-[#FF2B06] mb-4">
            Brand · Creator Deals · Events · Content
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Every great move <br />
            <span className="text-[#FF2B06]">starts somewhere.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-xl font-normal">
            An idea. An ambition. Something you want to build, bring together, or take further.
            The challenge isn&apos;t having the spark—it&apos;s turning it into something real without losing your mind in the execution.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onMakeMove}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md shadow-sm cursor-pointer"
            >
              <span>Make Your Next Move</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onExploreStory}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#D4D4D8] bg-[#141414] hover:bg-[#1E1E1E] border border-[#27272A] transition-colors rounded-md cursor-pointer"
            >
              <span>Explore The Story</span>
              <ArrowDown className="w-4 h-4 text-[#A1A1AA]" />
            </button>
          </div>

          {/* Clean Tagline Anchor */}
          <div className="mt-12 pt-6 border-t border-[#1E1E1E] flex items-center gap-3 text-xs text-[#71717A]">
            <FinrookLogo size={20} />
            <span className="font-semibold text-white">Finrook</span>
            <span aria-hidden="true">·</span>
            <span>Your next move backed by the rook.</span>
          </div>
        </div>

        {/* Right Column: Clean 3D Rook Presentation */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[440px] bg-[#111111] border border-[#222222] rounded-lg p-4 flex items-center justify-center shadow-lg">
            <CinematicRook interactive={true} className="w-full h-full" />

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#71717A] bg-[#0A0A0A]/90 py-1.5 px-3 rounded-md border border-[#1E1E1E]">
              <span className="text-[#FF2B06] font-semibold">THE ROOK</span>
              <span>INTERACTIVE · DRAG TO ROTATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs text-[#71717A]">
        <span>Scroll to see the challenge every ambitious move runs into</span>
        <button
          type="button"
          onClick={onExploreStory}
          className="hover:text-white flex items-center gap-1.5 transition-colors font-mono cursor-pointer"
        >
          <span>CHAPTER 02</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF2B06]" />
        </button>
      </div>
    </section>
  );
};
