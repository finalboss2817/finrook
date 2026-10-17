import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

interface NavigationProps {
  onNavigateToInquiry: (service?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigateToInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'What We Do', href: '#arenas' },
    { label: 'Choose Your Move', href: '#pathways' },
    { label: 'How It Works', href: '#playbook' },
    { label: 'The Standard', href: '#rules' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Brand Wordmark with Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3 group whitespace-nowrap shrink-0"
        >
          <FinrookLogo size={36} />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#FF2B06] transition-colors">
            FINROOK
          </span>
        </a>

        {/* Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => onNavigateToInquiry()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md cursor-pointer shadow-sm"
          >
            <span>Make Your Move</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#FF2B06] focus:outline-hidden"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 text-[#A1A1AA] hover:text-[#FF2B06] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#222222]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToInquiry();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-center text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md"
              >
                Make Your Move
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
