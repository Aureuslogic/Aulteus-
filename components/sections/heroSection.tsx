'use client';

import { useEffect, useRef, useState } from 'react';

const RADIUS = 110;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TOTAL = 20;

export default function HeroSection() {
  const [count, setCount] = useState(TOTAL);
  const [active, setActive] = useState(true);
  const progressRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.strokeDasharray = String(CIRCUMFERENCE);
      progressRef.current.style.strokeDashoffset = '0';
    }

    const id = setInterval(() => {
      setCount((prev) => {
        const next = prev <= 1 ? TOTAL : prev - 1;
        setActive(next !== TOTAL);
        if (progressRef.current) {
          const offset = CIRCUMFERENCE - (next / TOTAL) * CIRCUMFERENCE;
          progressRef.current.style.strokeDashoffset = String(offset);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Aulteus Logic — institutional decision framework">
      <div className="hero-bg-lines" aria-hidden="true" />
      <div className="hero-inner">
        {/* Left: copy — stagger in on mount */}
        <div>
          <p className="hero-eyebrow hero-anim hero-anim-d1">Non Linear Decision Intelligence</p>
          <h1 className="hero-headline hero-anim hero-anim-d2">
            The market decides<br />
            in <em>20 seconds.</em><br />
            Are you ready?
          </h1>
          <p className="hero-sub hero-anim hero-anim-d3">
            Aulteus Logic is the institutional decision framework that governs
            whether you act, stay neutral, or wait — in Forex, Gold, Oil and Indices.
          </p>
          <div className="hero-actions hero-anim hero-anim-d4">
            <a href="#access" className="btn-gold" onClick={scrollTo('access')}>
              Secure Access
            </a>
            <a href="#framework" className="btn-outline" onClick={scrollTo('framework')}>
              View Framework
            </a>
          </div>
          <div className="hero-partner hero-anim hero-anim-d5">
            <span className="partner-label">Official Trading Partner</span>
            <span className="partner-dot" aria-hidden="true" />
            <span className="partner-name">Trade Nation</span>
          </div>
        </div>

        {/* Right: animated decision-window clock */}
        <div className="clock-wrapper hero-anim hero-anim-d3" aria-hidden="true">
          <div className="clock-container">
            <svg className="clock-svg" viewBox="0 0 260 260">
              <circle className="clock-ring-outer" cx="130" cy="130" r="126" />
              <circle className="clock-track" cx="130" cy="130" r={RADIUS} />
              <circle
                ref={progressRef}
                className="clock-progress"
                cx="130"
                cy="130"
                r={RADIUS}
                style={{
                  strokeDasharray: CIRCUMFERENCE,
                  strokeDashoffset: 0,
                  transition: 'stroke-dashoffset 0.9s linear',
                }}
              />
            </svg>
            <div className="clock-inner">
              <span className="clock-number">{String(count).padStart(2, '0')}</span>
              <span className="clock-unit">seconds</span>
              <span className={`clock-state${active ? ' visible' : ''}`}>
                {active ? '● ACTIVE' : '○ RESET'}
              </span>
            </div>
          </div>
          <p className="clock-caption">Decision Window</p>
          <p className="clock-sub">
            The window between signal and execution. Most traders miss it.
          </p>
        </div>
      </div>
    </section>
  );
}
