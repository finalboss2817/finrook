import React, { useState } from 'react';
import { Eye, FileCheck, GitFork, Flag, CheckCircle } from 'lucide-react';

export const ChapterFiveWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Eye,
      summary: 'Tell us what you are trying to build, what you have in mind, and what matters most to your brand or event.',
      details: [
        'Initial discovery call to understand your vision, target audience, and non-negotiables.',
        'Review of existing brand assets, past event footage, or media kits.',
        'Definition of realistic, achievable milestones without false promises or vanity hype.',
      ],
      clientRole: 'You share your vision, budget parameters, and deadlines.',
    },
    {
      num: '02',
      title: 'Plan',
      icon: FileCheck,
      summary: 'We map out the timeline, deliverables, responsibilities, and clear costs before you commit to anything.',
      details: [
        'A written roadmap outlining every single deliverable and milestone.',
        'Transparent budget allocations covering talent, equipment, logistics, and media.',
        'Clear agreements so everyone knows who is responsible for each piece.',
      ],
      clientRole: 'You review and approve the roadmap with 100% clarity before work begins.',
    },
    {
      num: '03',
      title: 'Coordinate',
      icon: GitFork,
      summary: 'We organize the agreed tasks, people, venues, creators, suppliers, and equipment.',
      details: [
        'Direct coordination with videographers, brands, venues, sound crews, or printers.',
        'Production of call sheets, tech riders, and creative briefs.',
        'Active timeline management with regular checkpoints so you never have to chase updates.',
      ],
      clientRole: 'You focus on your day-to-day business while we orchestrate the moving parts.',
    },
    {
      num: '04',
      title: 'Execute',
      icon: Flag,
      summary: 'We carry out the plan on the ground, solve unforeseen issues live, and deliver the final assets.',
      details: [
        'On-ground event supervision, live filming, or scheduled campaign rollouts.',
        'Real-time problem solving and strict quality control at every stage.',
        'Clean post-event wrap-up, asset delivery, and wrap documentation.',
      ],
      clientRole: 'You see your move come to life with complete peace of mind.',
    },
  ];

  return (
    <section
      id="playbook"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#FAF8F5] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-5 sm:pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">THE METHODOLOGY</span>
          <span className="text-[#5C5952]">CHAPTER 06 · HOW IT WORKS</span>
        </div>

        {/* Narrative Section Header */}
        <div className="mt-8 sm:mt-12 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-2.5 sm:mb-3">
            Execution Playbook
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            How an ambitious idea <br />
            <span className="text-[#E1382B]">turns into an executed move.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#5C5952] leading-relaxed font-normal">
            No endless confusion or ghosting. Every collaboration follows four straightforward steps with full transparency from day one.
          </p>
        </div>

        {/* 4 Step Horizontal / Grid Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((st) => {
            const Icon = st.icon;
            const isSelected = activeStep === Number(st.num);
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => setActiveStep(Number(st.num))}
                className={`p-4 sm:p-6 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#E1382B] shadow-md ring-2 ring-[#E1382B]/20'
                    : 'bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] border-[#E5DFC0] shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg ${
                      isSelected
                        ? 'bg-[#E1382B] text-white'
                        : 'bg-[#F2EDE4] text-[#141518]'
                    }`}
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span
                    className={`text-[11px] sm:text-xs font-mono font-bold ${
                      isSelected ? 'text-[#E1382B]' : 'text-[#8C887E]'
                    }`}
                  >
                    STEP {st.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#141518]">
                  {st.title}
                </h3>

                <p className="mt-2 text-xs text-[#5C5952] leading-relaxed line-clamp-3">
                  {st.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Panel */}
        {(() => {
          const current = steps[activeStep - 1] || steps[0];
          const Icon = current.icon;
          return (
            <div className="mt-6 sm:mt-8 p-5 sm:p-8 lg:p-10 bg-[#FFFFFF] rounded-2xl border border-[#E5DFC0] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#ECE6D8]">
                <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3 bg-[#FFF1F0] text-[#E1382B] rounded-xl border border-[#FFE4E1] shrink-0">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#E1382B]">
                      Step {current.num} of 04
                    </div>
                    <h4 className="text-lg sm:text-2xl font-bold text-[#141518]">
                      {current.title}: {current.summary}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                  <button
                    type="button"
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-bold rounded-lg border border-[#E5DFC0] text-[#6E6A61] disabled:opacity-40 hover:bg-[#F2EDE4] cursor-pointer text-center"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === 4}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-bold rounded-lg bg-[#141518] text-white disabled:opacity-40 hover:bg-[#282C3A] cursor-pointer text-center"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8C887E] font-bold mb-3">
                    Finrook Execution Checklist:
                  </div>
                  <ul className="space-y-3">
                    {current.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#4A4843]">
                        <CheckCircle className="w-4 h-4 text-[#E1382B] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 bg-[#FAF8F5] p-5 rounded-xl border border-[#E5DFC0]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                    What We Need From You:
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5952] leading-relaxed">
                    {current.clientRole}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
