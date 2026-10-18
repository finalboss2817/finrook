import React from 'react';
import { ArrowUp, Phone, MessageCircle, Mail } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141518] text-[#FAF8F5] py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-[#2A2C33]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#2A2C33]">
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <FinrookLogo size={34} contrastColor="#FAF8F5" primaryColor="#E1382B" />
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  FINROOK
                </span>
              </div>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#E1382B] font-semibold">
                Your next move backed by the rook.
              </p>
              <p className="mt-2.5 sm:mt-3 text-xs text-[#A09C94] max-w-sm leading-relaxed">
                Strategic brand management, creator sponsorships and partnerships, live event management of all kinds, and high-impact digital content creation.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 text-xs text-[#737068] font-mono">
              © {new Date().getFullYear()} Finrook. All rights reserved.
            </div>
          </div>

          {/* Capabilities Navigation */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E1382B] font-bold mb-3 sm:mb-4">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-[#A09C94]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Brand Management & Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Creator Management & Deals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Live Event Coordination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Content Creation & Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiry Phone */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E1382B] font-bold mb-4">
              Direct Contact
            </div>
            <ul className="space-y-3 text-xs text-[#A09C94]">
              <li>
                <a
                  href="tel:+919920300750"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E1382B]" />
                  <span>Call: <strong className="text-white/90 group-hover:text-white tracking-wider">+91 99203 •••••</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919920300750?text=Hi%20Finrook%2C%20I%20would%20like%20to%20discuss%20my%20next%20move"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@finrook.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E1382B]" />
                  <span>Email: hello@finrook.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-[#2A2C33]">
              <span className="text-[11px] font-mono text-[#737068]">
                LOCATIONS: Mumbai, India • Dubai, UAE • Manila, Philippines
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737068]">
          <div>
            Built with clarity. No buzzwords, no fluff.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
