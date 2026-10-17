import React from 'react';
import { ShieldCheck, Target, Eye } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const ChapterSixPrinciples: React.FC = () => {
  const principles = [
    {
      icon: ShieldCheck,
      number: '01',
      title: 'Clarity before commitment',
      description:
        'Understand the proposed work, responsibilities, and next steps before moving forward. We never lock you into ambiguous contracts or begin work without mutual alignment.',
    },
    {
      icon: Target,
      number: '02',
      title: 'Planning with purpose',
      description:
        'Make decisions based on your goals, requirements, and budget. We tailor resources around what will actually move the needle for your business or audience.',
    },
    {
      icon: Eye,
      number: '03',
      title: 'Execution you can follow',
      description:
        'Know what is being worked on, what is needed from you, and what comes next. Clear communication loops ensure you never have to guess project status.',
    },
  ];

  return (
    <section
      id="rules"
      className="py-24 px-6 lg:px-16 bg-[#0E0E0E] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#222222] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE STANDARD</span>
          <span>CHAPTER 06 · BEHIND EVERY GOOD MOVE</span>
        </div>

        {/* Narrative Intro */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF2B06] mb-3">
            Our Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            You bring the ambition. <br />
            <span className="text-[#FF2B06]">We&apos;ll help with the moving parts.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            You don&apos;t need to coordinate every detail alone. Finrook gives you one place to start, a clear conversation about what you need, and a team to help manage the work we&apos;ve agreed to take on.
          </p>
        </div>

        {/* 3 Principles Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr) => {
            const Icon = pr.icon;
            return (
              <div
                key={pr.number}
                className="p-7 rounded-lg bg-[#141414] border border-[#222222] hover:border-[#333333] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                    <span className="text-xs font-mono font-bold text-[#FF2B06]">
                      PRINCIPLE {pr.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#FF2B06]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mt-5">
                    {pr.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#222222] flex items-center gap-2 text-xs font-mono text-[#71717A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF2B06]" />
                  <span>The Finrook Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-bar */}
        <div className="mt-12 border-t border-[#222222] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-2.5 text-sm text-white font-medium">
            <FinrookLogo size={20} />
            <span>&ldquo;Your next move backed by the rook.&rdquo;</span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">
            Finrook Core Doctrine
          </div>
        </div>
      </div>
    </section>
  );
};
