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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <FinrookLogo size={36} primaryColor="#FF4D38" contrastColor="#141518" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-xl text-[#141518] leading-none">
                FINROOK
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4D38] mt-0.5">
                Agency
              </span>
            </div>
          </button>

          {/* Desktop Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Talk to a Strategist Pill Button (Chakli Style) */}
            <button
              onClick={() => onOpenModal()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#FF4D38] hover:bg-[#E63F2C] px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group"
            >
              <span>Talk to a strategist</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Chakli-style Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#141518] hover:text-[#FF4D38] bg-[#F2EDE4] hover:bg-[#EAE4D7] px-3.5 py-2.5 rounded-full transition-all"
              aria-label="Toggle Navigation Menu"
            >
              <span>Menu</span>
              <div className="w-4 h-3 flex flex-col justify-between items-end">
                <span className="w-4 h-[2px] bg-[#141518] rounded-full"></span>
                <span className="w-2.5 h-[2px] bg-[#FF4D38] rounded-full"></span>
                <span className="w-3.5 h-[2px] bg-[#141518] rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Chakli-style Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141518] text-[#FAF8F5] flex flex-col justify-between p-8 sm:p-14 animate-fadeIn">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#2A2C35] pb-6">
            <div className="flex items-center gap-3">
              <FinrookLogo size={36} primaryColor="#FF4D38" contrastColor="#FFFFFF" />
              <span className="font-black text-xl tracking-tight text-white">FINROOK</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-xs uppercase font-bold text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-full transition-all"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Menu Links with Numbered Prefix */}
          <div className="max-w-4xl mx-auto w-full my-auto py-12">
            <nav className="space-y-6">
              {[
                { number: '01', title: 'Home', id: 'hero' },
                { number: '02', title: 'Agency Services', id: 'services' },
                { number: '03', title: 'Case Studies & Proof', id: 'work' },
                { number: '04', title: 'The Finrook Process', id: 'process' },
                { number: '05', title: 'Talk to Us / Inquiry', id: 'contact' },
              ].map((item) => (
                <div key={item.number} className="group relative overflow-hidden">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-baseline gap-4 sm:gap-8 text-3xl sm:text-5xl md:text-6xl font-black text-white/80 hover:text-white hover:translate-x-3 transition-all duration-300 text-left"
                  >
                    <span className="text-sm sm:text-lg font-bold text-[#FF4D38] tracking-widest">
                      {item.number}
                    </span>
                    <span>{item.title}.</span>
                  </button>
                  <div className="h-[1px] bg-white/10 mt-5 group-hover:bg-[#FF4D38]/40 transition-colors"></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Bar inside Menu */}
          <div className="border-t border-[#2A2C35] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex items-center gap-4">
              <span>Direct Line: <strong className="text-white tracking-wider">+91 99203 •••••</strong></span>
              <span>•</span>
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:9920300750"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                <Phone className="w-3 h-3 text-[#FF4D38]" />
                Call Now
              </a>
              <a
                href="https://wa.me/919920300750"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-medium transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
