'use client';

import { ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const scrollToAccess = () => {
    const element = document.getElementById('access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-12 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
      <div className="inline-block mb-6 px-3 py-1 border border-aureus-gold rounded-full text-xs font-bold tracking-widest text-aureus-gold uppercase">
        Institutional Grade Decision Framework
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 text-aureus-dark">
        Stop Guessing. <br /> Start Trading with{' '}
        <br />
        <span className="text-gold-gradient">Institutional Precision.</span>
      </h1>

      <p className="text-lg md:text-xl text-aureus-dark mb-10 font-light max-w-4xl mx-auto leading-relaxed">
        The retail market is designed to make you fail. We teach you the{' '}
        <span className="font-serif font-bold italic text-aureus-dark highlight-underline">
          &quot;Banker&apos;s Code&quot;
        </span>
        —the exact framework used by the top 1% to dominate Forex, Gold, Oil and
        Indices.
      </p>

      {/* Featured Snippet Block */}
      <div className="bg-white border-l-4 border-aureus-gold shadow-lg p-6 md:p-8 text-left max-w-3xl mx-auto rounded-r-lg mb-12">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-aureus-gold shrink-0 mt-1" />
          <div>
            <h3 className="font-serif font-bold text-lg mb-2">
              What is Aureus Logic?
            </h3>
            <p className="text-aureus-dark leading-relaxed">
              Aureus Logic is a non linear decision asset framework expressed
              through Agentic AI. It helps traders decide whether to act, remain
              neutral, or wait during uncertain market conditions. It does not
              place trades, is not a trading platform, and can be used alongside
              any trading platform worldwide.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAccess}
        className="inline-block gold-gradient text-white px-8 py-4 rounded font-medium tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all transform duration-300 uppercase text-sm"
      >
        Access The Banker&apos;s Code
      </button>
    </header>
  );
}