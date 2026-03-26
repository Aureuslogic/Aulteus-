'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import '../../app/globals.css'

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
      <div>
        <Image src='/assets/logo-new.png' width={120} height={100} alt='logo' />
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
          Inventor
        </button>
         {/* <a
          href='/online-launch'
          className="hover:text-aureus-gold transition-colors py-2"
        >
          Online Launch
        </a> */}
        <a
          href="https://aureus-logic.vercel.app/login" target='_blank'
          className="text-white font-bold bg-black cursor-pointer px-4 py-2 rounded transition-colors"
        >
          Login
        </a>
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
                {/* <a
          href='/online-launch'
          className="hover:text-aureus-gold transition-colors"
        >
          Online Launch
        </a> */}
               <a
          href="https://aureus-logic.vercel.app/login" target='_blank'
          className="text-white font-bold bg-black cursor-pointer px-4 py-2 rounded transition-colors"
        >
          Login
        </a>
          </div>
        </div>
      )}
    </nav>
  );
}