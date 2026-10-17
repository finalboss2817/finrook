import React, { useState } from 'react';
import { Eye, FileCheck, GitFork, Flag } from 'lucide-react';

export const ChapterFiveWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Eye,
      summary: "Tell us what you're trying to achieve, what you have in mind, and what matters most.",
      details: [
        'Initial discovery call to unpack your vision, target audience, and constraints.',
        'Review of existing assets, past campaign outcomes, or venue requirements.',
        'Definition of realistic success markers without vanity hype or false promises.',
      ],
      clientRole: 'You share your core ambition, preferences, and non-negotiables.',
    },
    {
      num: '02',
      title: 'Plan',
      icon: FileCheck,
      summary: 'We discuss the details, timeline, budget, and responsibilities before agreeing on the approach.',
      details: [
        'Documented roadmap outlining every deliverable, timeline, and milestone.',
        'Transparent budget allocation covering talent, logistics, media, and tools.',
        'Clear delineation of who handles what so nothing falls through the cracks.',
      ],
      clientRole: 'You review and approve the scope with total clarity before any commitment.',
    },
    {
      num: '03',
      title: 'Coordinate',
      icon: GitFork,
      summary: 'We organise the agreed tasks, people, content, suppliers, or partnerships required for the work.',
      details: [
        'Direct coordination with creators, videographers, venues, sound crews, or press.',
        'Creation and distribution of call sheets, tech riders, and creative briefs.',
        'Active timeline management with regular checkpoints and proactive alerts.',
      ],
      clientRole: 'You stay focused on your primary business while we orchestrate the moving parts.',
    },
    {
      num: '04',
      title: 'Execute',
      icon: Flag,
      summary: 'We carry out the agreed plan and keep you informed as the work progresses.',
      details: [
        'On-ground event supervision, live content rollouts, or campaign delivery.',
        'Real-time problem solving and quality control at every stage of execution.',
        'Clean post-event wrap-up, asset delivery, and wrap documentation.',
      ],
      clientRole: 'You witness the planned move come to fruition with complete peace of mind.',
    },
  ];

  return (
    <section
      id="playbook"
      className="py-24 px-6 lg:px-16 bg-[#0A0A0A] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#1E1E1E] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE METHODOLOGY</span>
          <span>CHAPTER 05 · THE WORK BEHIND THE MOVE</span>
        </div>

        {/* Narrative Intro */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF2B06] mb-3">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A good result begins <br />
            <span className="text-[#FF2B06]">long before the final moment.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            Orderly execution is not an accident. We break down the journey from first conversation to final delivery into four clear, reassuring stages.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const stepNumber = idx + 1;
            const isCurrent = stepNumber === activeStep;
            const Icon = st.icon;

            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(stepNumber)}
                className={`p-6 rounded-lg border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#141414] border-[#FF2B06] shadow-sm'
                    : 'bg-[#101010] border-[#222222] hover:border-[#333333]'
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                  <span
                    className={`w-9 h-9 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                      isCurrent
                        ? 'bg-[#FF2B06] text-white'
                        : 'bg-[#1C1C1C] text-[#A1A1AA]'
                    }`}
                  >
                    {st.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#FF2B06]' : 'text-[#71717A]'}`} />
                </div>

                <h3 className="text-xl font-bold text-white mt-4">
                  {st.title}
                </h3>

                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {st.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-[#222222]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] mb-2 font-semibold">
                    What happens:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D4D4D8]">
                    {st.details.map((d) => (
                      <li key={d} className="flex items-start gap-1.5">
                        <span className="text-[#FF2B06]">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#222222] text-[11px] text-[#A1A1AA]">
                  <span className="font-semibold text-white">Your role: </span>
                  {st.clientRole}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 p-5 bg-[#121212] border border-[#222222] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div>
            <span className="font-semibold text-white">Transparent Progress: </span>
            Every step has an agreed sign-off before the next begins. No surprise charges or unexpected scope changes.
          </div>
          <span className="font-mono text-[#71717A] shrink-0">
            Systematic · Predictable · Grounded
          </span>
        </div>
      </div>
    </section>
  );
};
