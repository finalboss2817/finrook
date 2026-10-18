import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Compass, Users, Calendar, Video, CheckCircle } from 'lucide-react';

interface ChapterThreeServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const ChapterThreeServices: React.FC<ChapterThreeServicesProps> = ({
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const scenes = [
    {
      id: 'brand',
      num: '01',
      category: 'Brand Management',
      icon: Compass,
      headline: 'Make your business instantly recognisable.',
      copy: 'A real brand is much more than a logo. It is the impression you leave in the first five seconds, how your packaging feels, and the reputation that makes customers trust you without hesitation. We build and protect your brand so you always look like the market leader.',
      image: '/src/assets/images/finrook_brand_scene_1792255093449.jpg',
      imageAlt: 'Editorial design studio with typography specimens and brand identity guidelines',
      services: [
        'Brand identity, typography, and color styling',
        'Packaging design and physical brand assets',
        'Clear brand voice and marketing messaging',
        'Social media design templates and governance',
        'Campaign positioning and visual consistency',
      ],
      cta: 'Build Your Brand With Us',
      serviceParam: 'Brand Management',
    },
    {
      id: 'creator',
      num: '02',
      category: 'Creator Management & Deals',
      icon: Users,
      headline: 'Turn your audience into real revenue.',
      copy: 'Creators have talent and an engaged following. Brands have marketing budgets and products they want to promote. We act as the bridge: pitching you to top brands, negotiating commercial terms, locking in clear contracts, and making sure you get paid on time.',
      image: '/src/assets/images/finrook_creator_scene_1792255095438.jpg',
      imageAlt: 'Creator studio with cinema camera and storyboard frames',
      services: [
        'Dedicated talent representation and management',
        'Paid sponsorship sourcing and brand negotiations',
        'Contract review and legal payment protection',
        'Brand campaign deliverables coordination',
        'Long-term creator career monetization roadmap',
      ],
      cta: 'Explore Creator Deals',
      serviceParam: 'Creator Management / Brand Deals',
      disclaimer: 'Transparent partnerships. We protect creators from bad deals and unpaid deliverables.',
    },
    {
      id: 'event',
      num: '03',
      category: 'Event Management',
      icon: Calendar,
      headline: 'Flawless execution from concept to show day.',
      copy: 'Whether it is a college cultural fest, an intimate brand launch, a corporate conference, or a massive concert, the secret to a great event is in the details. We handle staging, sound, lighting, artist bookings, crowd flow, and on-ground logistics so you can actually enjoy the event.',
      image: '/src/assets/images/finrook_event_scene_1792255095112.jpg',
      imageAlt: 'Architectural event hall during an evening celebration with ambient lighting',
      services: [
        'College festivals, fests, and campus activations',
        'Corporate summits, product launches, and gala dinners',
        'Concerts, artist bookings, and stage design',
        'Audio, video, lighting, and stage rigging management',
        'On-ground security, permits, and vendor coordination',
      ],
      cta: 'Plan Your Next Event',
      serviceParam: 'Event Management',
    },
    {
      id: 'content',
      num: '04',
      category: 'Content Creation & Management',
      icon: Video,
      headline: 'Videos and creative assets that stop the scroll.',
      copy: 'Social media moves fast. If your content looks amateur or repeats the same stale format, people keep scrolling. We plan, script, shoot, and edit high-impact videos, photo series, and campaigns designed to keep viewers watching and taking action.',
      image: '/src/assets/images/finrook_content_scene_1792255094970.jpg',
      imageAlt: 'Content creation suite with moodboard and video editing monitor',
      services: [
        'Short-form reels, TikToks, and YouTube Shorts production',
        'Studio and on-location commercial photography',
        'Scriptwriting, creative hooks, and storyboarding',
        'Color grading, motion graphics, and audio mixing',
        'Monthly content calendars and publishing schedules',
      ],
      cta: 'Produce High-Impact Content',
      serviceParam: 'Content Creation / Management',
    },
  ];

  const current = scenes[activeTab];
  const Icon = current.icon;

  return (
    <section
      id="arenas"
      className="py-24 px-6 lg:px-16 bg-[#FAF8F5] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">FOUR DISCIPLINES</span>
          <span className="text-[#5C5952]">CHAPTER 04 · WHAT WE DO</span>
        </div>

        {/* Narrative Section Header */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-3">
            Integrated Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            Four disciplines. <br />
            <span className="text-[#E1382B]">One coordinated standard.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C5952] leading-relaxed font-normal">
            We don’t treat these as separate silos. When you work with Finrook, your brand, your creators, your events, and your content feed each other to build unstoppable momentum.
          </p>
        </div>

        {/* Discipline Tabs */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-[#E5DFC0] pb-4">
          {scenes.map((s, idx) => {
            const TabIcon = s.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#141518] text-white shadow-xs'
                    : 'bg-[#FFFFFF] text-[#6E6A61] hover:text-[#141518] hover:bg-[#F2EDE4] border border-[#E5DFC0]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-[#E1382B]' : 'text-[#8C887E]'}`} />
                <span>{s.category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-[#2E313D] text-[#E1382B]' : 'bg-[#ECE6D8] text-[#6E6A61]'}`}>
                  {s.num}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Showcase */}
        <div className="mt-10 bg-[#FFFFFF] rounded-2xl border border-[#E5DFC0] p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#E5DFC0] aspect-[16/10] bg-[#FAF8F5] shadow-xs">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#E5DFC0] text-xs font-mono font-bold text-[#141518] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E1382B]" />
              <span>DISCIPLINE {current.num}</span>
            </div>
          </div>

          {/* Right Column: Copy & Deliverables */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E1382B]">
              <Icon className="w-4 h-4" />
              <span>{current.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141518] mt-3 leading-snug">
              {current.headline}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#5C5952] leading-relaxed">
              {current.copy}
            </p>

            <div className="mt-6 pt-6 border-t border-[#ECE6D8]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-3">
                Key Responsibilities Handled:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.services.map((srv, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A4843]">
                    <CheckCircle className="w-4 h-4 text-[#E1382B] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {current.disclaimer && (
              <div className="mt-4 text-xs text-[#8C887E] italic">
                * {current.disclaimer}
              </div>
            )}

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectService(current.serviceParam)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#E1382B] hover:bg-[#C92F23] transition-colors rounded-lg shadow-xs cursor-pointer uppercase tracking-wider"
              >
                <span>{current.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
