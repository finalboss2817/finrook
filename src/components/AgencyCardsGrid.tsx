import React, { useState } from 'react';
import { ArrowUpRight, Check, Compass, Users, Calendar, Video, Sparkles } from 'lucide-react';

import brandImg from '../assets/images/finrook_brand_scene_1792255093449.jpg';
import creatorImg from '../assets/images/finrook_creator_scene_1792255095438.jpg';
import eventImg from '../assets/images/finrook_event_scene_1792255095112.jpg';
import contentImg from '../assets/images/finrook_content_scene_1792255095120.jpg';

interface AgencyCardsGridProps {
  onSelectService: (serviceName: string) => void;
}

export const AgencyCardsGrid: React.FC<AgencyCardsGridProps> = ({ onSelectService }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Brand Management & Strategy',
      badge: 'Identity & Recognition',
      description: 'Make your business look, speak, and feel like one unified brand. No mismatched fonts, scattered graphics, or confusing messaging.',
      image: brandImg,
      icon: Compass,
      deliverables: [
        'Complete brand identity & visual style guides',
        'Market positioning & competitive differentiation',
        'Packaging, product collateral & launch design',
        'Ongoing brand consistency & quality control',
      ],
      tag: 'Brand Identity',
    },
    {
      id: 2,
      number: '02',
      title: 'Creator Deals & Management',
      badge: 'Talent & Partnerships',
      description: 'We represent ambitious creators and connect them to real, high-value brand deals. And we help brands sponsor creators who actually fit their audience.',
      image: creatorImg,
      icon: Users,
      deliverables: [
        'Creator representation & pitch deck building',
        'Direct brand deal sourcing & commercial contracts',
        'Audience-matched brand collaborations',
        'Deliverable tracking & timely payment handling',
      ],
      tag: 'Creator Deals',
    },
    {
      id: 3,
      number: '03',
      title: 'Live Event & Experiential Production',
      badge: 'Stage & Audience',
      description: 'From packed college festivals to polished corporate conferences and product launches. We handle everything from the stage floor to the final applause.',
      image: eventImg,
      icon: Calendar,
      deliverables: [
        'Full venue layout, stage architecture & lighting',
        'Audio-visual production & on-ground crew direction',
        'Crowd flow, ticketing & artist coordination',
        'Event branding, signage & social coverage',
      ],
      tag: 'Event Management',
    },
    {
      id: 4,
      number: '04',
      title: 'Content Creation & Media Management',
      badge: 'Social & Production',
      description: 'Stop posting filler content. We script, shoot, edit, and distribute scroll-stopping videos and photos that build loyal followings and drive revenue.',
      image: contentImg,
      icon: Video,
      deliverables: [
        'High-frequency viral short-form video (Reels & Shorts)',
        'Commercial brand film production & ad creatives',
        'Content calendar strategy & daily distribution',
        'Community management & audience engagement',
      ],
      tag: 'Content Production',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Chakli-style Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D38] bg-[#FF4D38]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            Our Core Verticals
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#141518] leading-tight mb-4">
            We are a strategic agency that brings{' '}
            <span className="text-[#FF4D38]">real business results.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#646770] leading-relaxed">
            No endless jargon or buzzwords. We focus on four clear pillars that actually move the needle for your business, talent, or event.
          </p>
        </div>

        {/* 2x2 Agency Cards Grid (Chakli Agency Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectService(service.title)}
                className="group relative bg-[#FFFFFF] rounded-3xl border border-[#E5DFC0] hover:border-[#FF4D38] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Top Row: Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-[#FF4D38] tracking-tighter">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#646770] bg-[#FAF8F5] border border-[#ECE6D8] px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] group-hover:bg-[#FF4D38] text-[#141518] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Layered Image Showcase (Chakli Style figure + figcaption) */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-[#141518] shadow-inner">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Floating pill on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {service.tag}
                    </span>
                    <span className="text-xs font-semibold text-white/90 bg-[#FF4D38] px-2.5 py-0.5 rounded-full">
                      Click to Consult
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div>
                  <h3 className="text-2xl font-black text-[#141518] mb-2.5 group-hover:text-[#FF4D38] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#646770] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Plain-Language Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#ECE6D8]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B4E58]">
                        <Check className="w-4 h-4 text-[#FF4D38] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-bold text-[#141518] group-hover:text-[#FF4D38] transition-colors">
                  <span>Explore this vertical with our strategist</span>
                  <span className="underline underline-offset-4">Talk to strategist &rarr;</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
