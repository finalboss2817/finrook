import React from 'react';
import { ShieldCheck, Target, Eye, ArrowUpRight } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const ChapterSixPrinciples: React.FC = () => {
  const principles = [
    {
      icon: ShieldCheck,
      number: '01',
      title: 'Clarity before commitment',
      description:
        'You will always understand the proposed deliverables, the exact costs, responsibilities, and next steps before signing or paying a single rupee. No hidden agency retainers or surprise fees.',
    },
    {
      icon: Target,
      number: '02',
      title: 'Planning with real purpose',
      description:
        'Every decision must serve a real goal—whether that is building genuine brand authority, selling out event tickets, or closing paid brand sponsorships. We don’t waste your budget on empty vanity metrics.',
    },
    {
      icon: Eye,
      number: '03',
      title: 'Execution you can follow',
      description:
        'You will always know what is being worked on, what is required from you, and what milestone comes next. Clean communication loops ensure you never have to wonder where your project stands.',
    },
  ];

  return (
    <section
      id="rules"
      className="py-24 px-6 lg:px-16 bg-[#F5F2EB] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">THE STANDARD</span>
          <span className="text-[#5C5952]">CHAPTER 07 · BEHIND EVERY GOOD MOVE</span>
        </div>

        {/* Narrative Section Header */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-3">
            Our Working Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            You bring the ambition. <br />
            <span className="text-[#E1382B]">We back you with the rook.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C5952] leading-relaxed font-normal">
            You don’t have to figure out brand design, brand deals, event coordination, and video shoots alone. Finrook gives you one dependable team that cares about the outcome as much as you do.
          </p>
        </div>

        {/* 3 Principles Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr) => {
            const Icon = pr.icon;
            return (
              <div
                key={pr.number}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5DFC0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#FFF1F0] text-[#E1382B] rounded-xl border border-[#FFE4E1]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#C5A869]">
                      {pr.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141518]">
                    {pr.title}
                  </h3>

                  <p className="mt-3.5 text-sm text-[#5C5952] leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#ECE6D8] flex items-center gap-2 text-xs font-semibold text-[#141518]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1382B]" />
                  <span>Guaranteed on every project</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Banner */}
        <div className="mt-12 p-8 bg-[#FFFFFF] rounded-2xl border border-[#E5DFC0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <FinrookLogo size={44} />
            <div>
              <div className="text-lg font-bold text-[#141518]">
                Ready to talk through your next move?
              </div>
              <div className="text-xs text-[#6E6A61] mt-0.5">
                Connect directly with our team for strategic guidance and execution planning.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919920300750?text=Hi%20Finrook%2C%20I%20would%20like%20to%20discuss%20my%20next%20move"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E1382B] hover:bg-[#C92F23] text-white text-xs font-bold rounded-lg shadow-xs transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
          >
            <span>Message on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
