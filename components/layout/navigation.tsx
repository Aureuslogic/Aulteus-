'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-2xl font-serif font-bold tracking-tight text-aureus-dark">
        AUREUS <span className="text-aureus-gold">LOGIC</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <button
          onClick={() => scrollToSection('philosophy')}
          className="hover:text-aureus-gold transition-colors"
        >
          The Code
        </button>
        <button
          onClick={() => scrollToSection('framework')}
          className="hover:text-aureus-gold transition-colors"
        >
          The Framework
        </button>
        <button
          onClick={() => scrollToSection('author')}
          className="hover:text-aureus-gold transition-colors"
        >
          Author
        </button>
        <button
          onClick={() => scrollToSection('access')}
          className="text-aureus-gold font-bold"
        >
          Get Access
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-aureus-dark"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white p-6 shadow-xl z-50">
          <div className="flex flex-col gap-4 text-center">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="block py-2"
            >
              The Code
            </button>
            <button
              onClick={() => scrollToSection('framework')}
              className="block py-2"
            >
              The Framework
            </button>
            <button
              onClick={() => scrollToSection('author')}
              className="block py-2"
            >
              Author
            </button>
            <button
              onClick={() => scrollToSection('access')}
              className="block py-2 text-aureus-gold font-bold"
            >
              Get Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}