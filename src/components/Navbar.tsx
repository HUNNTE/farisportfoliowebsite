import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenCodeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact', 'awards'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
    { label: 'Awards', href: '#awards', id: 'awards' },
  ];

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5 sm:py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#home"
          id="brand-logo-link"
          className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0"
        >
          <div className="w-8 h-8 rounded bg-black text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shrink-0 transition-opacity group-hover:opacity-85">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="truncate">
            <span className="block text-xs sm:text-sm font-bold text-black tracking-tight group-hover:text-neutral-700 transition-colors truncate">
              {PERSONAL_INFO.name}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-500 font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
              <span className="truncate">Available for Hire</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors duration-150 ${
                  isActive
                    ? 'text-black font-semibold bg-gray-100'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            id="nav-contact-cta"
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Action & Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-2.5 py-1.5 text-xs font-medium rounded bg-black text-white hover:bg-neutral-800 transition-colors flex items-center gap-1"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-gray-200 text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden px-4 pt-3 pb-5 mt-2 bg-white border-b border-gray-200 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-sm rounded transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-gray-100 text-black font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-gray-400 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-medium rounded bg-black text-white hover:bg-neutral-800 transition-colors block"
              >
                Contact Aulia Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
