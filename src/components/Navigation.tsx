import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, MessageCircle, X } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

interface NavigationProps {
  onOpenModal: (service?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenModal,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E5DFC0]/70 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <FinrookLogo size={32} primaryColor="#FF4D38" contrastColor="#141518" />
            <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-[#141518] leading-none">
              FINROOK
            </span>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Talk to a Strategist Button */}
            <button
              onClick={() => onOpenModal()}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-white bg-[#FF4D38] hover:bg-[#E63F2C] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <span className="hidden xs:inline">Talk to a strategist</span>
              <span className="xs:hidden">Consult</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-wider font-bold text-[#141518] hover:text-[#FF4D38] bg-[#F2EDE4] hover:bg-[#EAE4D7] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer min-h-[36px]"
              aria-label="Toggle Navigation Menu"
            >
              <span className="text-[11px] sm:text-xs">Menu</span>
              <div className="w-3.5 sm:w-4 h-3 flex flex-col justify-between items-end">
                <span className="w-3.5 sm:w-4 h-[2px] bg-[#141518] rounded-full"></span>
                <span className="w-2 sm:w-2.5 h-[2px] bg-[#FF4D38] rounded-full"></span>
                <span className="w-3 sm:w-3.5 h-[2px] bg-[#141518] rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Chakli-style Fullscreen Menu Overlay with scroll safety */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141518] text-[#FAF8F5] flex flex-col justify-between p-5 sm:p-10 md:p-14 overflow-y-auto animate-fadeIn min-h-screen">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#2A2C35] pb-5 sm:pb-6 shrink-0">
            <div className="flex items-center gap-3">
              <FinrookLogo size={32} primaryColor="#FF4D38" contrastColor="#FFFFFF" />
              <span className="font-black text-lg sm:text-xl tracking-tight text-white">FINROOK</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-xs uppercase font-bold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Menu Links with Numbered Prefix */}
          <div className="max-w-4xl mx-auto w-full my-auto py-8 sm:py-12">
            <nav className="space-y-4 sm:space-y-6">
              {[
                { number: '01', title: 'Home', id: 'hero' },
                { number: '02', title: 'Agency Services', id: 'services' },
                { number: '03', title: 'Scope & Deliverables', id: 'work' },
                { number: '04', title: 'The Finrook Process', id: 'playbook' },
                { number: '05', title: 'Talk to Us / Inquiry', id: 'inquiry' },
              ].map((item) => (
                <div key={item.number} className="group relative overflow-hidden">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-baseline gap-3 sm:gap-6 md:gap-8 text-2xl sm:text-4xl md:text-5xl font-black text-white/80 hover:text-white hover:translate-x-2 sm:hover:translate-x-3 transition-all duration-300 text-left cursor-pointer w-full"
                  >
                    <span className="text-xs sm:text-base font-bold text-[#FF4D38] tracking-widest font-mono">
                      {item.number}
                    </span>
                    <span className="break-words">{item.title}.</span>
                  </button>
                  <div className="h-[1px] bg-white/10 mt-3 sm:mt-5 group-hover:bg-[#FF4D38]/40 transition-colors"></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Bar inside Menu */}
          <div className="border-t border-[#2A2C35] pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60 shrink-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span>Direct Line: <strong className="text-white tracking-wider">+91 99203 •••••</strong></span>
              <span className="hidden xs:inline">•</span>
              <span>Mumbai • Dubai, UAE • Manila, Philippines</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <a
                href="tel:9920300750"
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF4D38]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919920300750"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-medium transition-colors text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
