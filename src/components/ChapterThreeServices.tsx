import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Compass, Users, Calendar, Video } from 'lucide-react';

interface ChapterThreeServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const ChapterThreeServices: React.FC<ChapterThreeServicesProps> = ({
  onSelectService,
}) => {
  const [activeScene, setActiveScene] = useState<number>(0);

  const scenes = [
    {
      id: 'brand',
      num: '01',
      category: 'The Brand',
      icon: Compass,
      headline: 'Make your brand recognisable.',
      copy: 'Your brand is more than a name or a logo. It is how people see your business, understand what you offer, and remember you. Finrook helps manage how your brand looks, communicates, and appears across its platforms.',
      image: '/src/assets/images/finrook_brand_scene_1792255093449.jpg',
      imageAlt: 'Editorial design studio with typography specimens and brand identity guidelines',
      services: [
        'Brand identity and positioning',
        'Brand communication and messaging',
        'Social media planning and management',
        'Campaign planning and execution',
        'Consistent brand presentation',
      ],
      cta: "Let's Build Your Brand",
      serviceParam: 'Brand Management',
    },
    {
      id: 'creator',
      num: '02',
      category: 'The Creator',
      icon: Users,
      headline: 'Turn your talent into opportunities.',
      copy: 'Creators have ideas, skills, and audiences. Brands have products, services, and stories to tell. The right collaboration brings them together. Finrook helps creators explore brand deals and helps businesses find suitable creators for their campaigns.',
      image: '/src/assets/images/finrook_creator_scene_1792255095438.jpg',
      imageAlt: 'Creator studio with cinema camera and storyboard frames',
      services: [
        'Creator management and representation',
        'Brand deal sourcing and coordination',
        'Creator and brand matching',
        'Sponsored content coordination',
        'Campaign communication and deliverables',
      ],
      cta: 'Explore Creator Partnerships',
      serviceParam: 'Creator Management / Brand Deals',
      disclaimer: 'Transparent partnerships grounded in fit, quality, and mutual alignment.',
    },
    {
      id: 'event',
      num: '03',
      category: 'The Event',
      icon: Calendar,
      headline: 'From the first plan to the final moment.',
      copy: 'Some occasions need to bring a company together. Others need to bring a crowd to life. Whatever the occasion, the details matter. Finrook helps plan and coordinate events from the initial idea to on-ground execution.',
      image: '/src/assets/images/finrook_event_scene_1792255095112.jpg',
      imageAlt: 'Architectural event hall with stage production and attendees',
      services: [
        'Corporate events and conferences',
        'College festivals and student events',
        'Product launches and brand activations',
        'Private celebrations and galas',
        'Exhibitions and networking events',
        'Venue, vendor, stage, and guest coordination',
      ],
      cta: "Let's Plan Your Event",
      serviceParam: 'Event Management',
    },
    {
      id: 'content',
      num: '04',
      category: 'The Content',
      icon: Video,
      headline: 'Give your ideas something to say.',
      copy: 'Good content helps people understand your brand, discover what you do, and remember why it matters. Finrook helps plan, create, and manage content that gives your communication a clear purpose.',
      image: '/src/assets/images/finrook_content_scene_1792255095120.jpg',
      imageAlt: 'Content creation suite with moodboard wall and video timeline editing',
      services: [
        'Content planning and strategy',
        'Reels and short-form videos',
        'Photography and video production',
        'Campaign creative and scripting',
        'Captions and publishing schedules',
        'Social media content management',
      ],
      cta: 'Create With Finrook',
      serviceParam: 'Content Creation / Management',
    },
  ];

  const current = scenes[activeScene];

  return (
    <section
      id="arenas"
      className="py-24 px-6 lg:px-16 bg-[#0A0A0A] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#1E1E1E] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE FOUR CAPABILITIES</span>
          <span>CHAPTER 03 · FOUR WAYS TO MAKE THE MOVE</span>
        </div>

        {/* Narrative Intro */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF2B06] mb-3">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Four distinct environments. <br />
            <span className="text-[#FF2B06]">One guided move.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            Every business and creator faces a different next step. Choose a capability below to explore how Finrook supports your goals.
          </p>
        </div>

        {/* Scene Navigation Tabs */}
        <div className="mt-10 border-b border-[#222222] flex overflow-x-auto gap-2 sm:gap-4 pb-px">
          {scenes.map((s, idx) => {
            const isActive = activeScene === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScene(idx)}
                className={`py-3.5 px-4 sm:px-6 text-left border-b-2 transition-all whitespace-nowrap cursor-pointer rounded-t-md ${
                  isActive
                    ? 'border-[#FF2B06] text-white bg-[#141414]'
                    : 'border-transparent text-[#71717A] hover:text-white hover:bg-[#111111]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#71717A]">
                  SCENE {s.num}
                </div>
                <div className="text-base font-semibold mt-0.5">
                  {s.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scene Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with natural proportions */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#141414] border border-[#27272A] shadow-md">
              <img
                src={current.image}
                alt={current.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono bg-black/70 px-2.5 py-1 rounded-sm border border-[#333333]">
                  {current.category}
                </span>
                <span className="text-[#A1A1AA]">Finrook Capability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Services */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-2 font-medium">
              Scene {current.num} · {current.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {current.headline}
            </h3>

            <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed font-normal">
              {current.copy}
            </p>

            {/* Services List */}
            <div className="mt-6 pt-6 border-t border-[#1E1E1E]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                Key Deliverables:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#E4E4E7]">
                {current.services.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#FF2B06] font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {current.disclaimer && (
              <p className="mt-4 text-xs text-[#71717A] italic">
                {current.disclaimer}
              </p>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onSelectService(current.serviceParam)}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md cursor-pointer shadow-sm"
              >
                <span>{current.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setActiveScene((activeScene + 1) % scenes.length)}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors cursor-pointer py-2"
              >
                <span>Next: {scenes[(activeScene + 1) % scenes.length].category}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
