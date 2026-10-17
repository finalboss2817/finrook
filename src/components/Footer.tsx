import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white py-16 px-6 lg:px-16 border-t border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E1E1E]">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <FinrookLogo size={36} />
                <span className="text-xl font-bold tracking-tight text-white">
                  FINROOK
                </span>
              </div>
              <p className="mt-3 text-sm text-[#FF2B06] font-medium">
                Your next move backed by the rook.
              </p>
              <p className="mt-3 text-xs text-[#71717A] max-w-sm leading-relaxed">
                Working across brand management, creator sponsorships, event production of all scales, and digital content creation.
              </p>
            </div>

            <div className="mt-8 text-xs text-[#52525B] font-mono">
              © {new Date().getFullYear()} Finrook. All rights reserved.
            </div>
          </div>

          {/* Capabilities Navigation */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-4">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li>
                <a href="#arenas" className="hover:text-white transition-colors">
                  Brand Management & Identity
                </a>
              </li>
              <li>
                <a href="#arenas" className="hover:text-white transition-colors">
                  Creator Management & Deals
                </a>
              </li>
              <li>
                <a href="#arenas" className="hover:text-white transition-colors">
                  Live Event Coordination
                </a>
              </li>
              <li>
                <a href="#arenas" className="hover:text-white transition-colors">
                  Content Creation & Production
                </a>
              </li>
            </ul>
          </div>

          {/* Story Navigation */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-4">
              The Journey
            </div>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  01 Before the Move
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  02 The Disconnect
                </a>
              </li>
              <li>
                <a href="#arenas" className="hover:text-white transition-colors">
                  03 Four Arenas
                </a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-white transition-colors">
                  04 Your Move
                </a>
              </li>
              <li>
                <a href="#playbook" className="hover:text-white transition-colors">
                  05 The Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] mb-4">
              Contact
            </div>
            <div className="space-y-2 text-xs text-[#A1A1AA]">
              <div>
                <a
                  href="mailto:hello@finrook.com"
                  className="hover:text-white transition-colors"
                >
                  hello@finrook.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+919920300750"
                  className="hover:text-[#FF2B06] transition-colors"
                >
                  +91 99203 00750
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#71717A]">
                Global Operations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-2">
            <span>Every great move starts with an idea.</span>
            <span aria-hidden="true">·</span>
            <span className="text-white font-medium">Backed by the rook.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FF2B06] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
