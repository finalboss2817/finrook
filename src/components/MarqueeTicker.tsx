import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'Brand Management',
    'Creator Partnerships',
    'Brand Deals & Sourcing',
    'Live Event Production',
    'College Festivals',
    'High-Impact Social Video',
    'Viral Campaign Planning',
    'Packaging & Identity',
    'Influencer Marketing',
    'Backed By The Rook',
  ];

  return (
    <div className="w-full bg-[#141518] text-[#FAF8F5] py-4 overflow-hidden border-y border-[#2A2C35] select-none">
      <div className="flex w-max animate-marquee">
        {/* First repetition */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => (
            <div key={`item1-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
              <span className="text-sm font-extrabold tracking-wider uppercase text-white/90">
                {item}
              </span>
              <FinrookLogo size={14} primaryColor="#FF4D38" contrastColor="#141518" />
            </div>
          ))}
        </div>

        {/* Second repetition for seamless loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`item2-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
              <span className="text-sm font-extrabold tracking-wider uppercase text-white/90">
                {item}
              </span>
              <FinrookLogo size={14} primaryColor="#FF4D38" contrastColor="#141518" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
