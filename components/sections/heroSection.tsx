'use client';

import { useEffect, useRef, useState } from 'react';

const RADIUS = 110;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TOTAL = 20;

const round = (n: number) => Number(n.toFixed(4));

const TICKS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  const major = i % 3 === 0;
  const outer = 132;
  const inner = major ? 121 : 125;
  return {
    key: i,
    major,
    x1: round(130 + outer * Math.cos(angle)),
    y1: round(130 + outer * Math.sin(angle)),
    x2: round(130 + inner * Math.cos(angle)),
    y2: round(130 + inner * Math.sin(angle)),
  };
});

const CANDLES = [
  { x: 10, top: 210, bottom: 240, wickTop: 200, wickBottom: 248, up: true },
  { x: 34, top: 190, bottom: 218, wickTop: 182, wickBottom: 226, up: true },
  { x: 58, top: 205, bottom: 230, wickTop: 198, wickBottom: 238, up: false },
  { x: 82, top: 160, bottom: 200, wickTop: 150, wickBottom: 208, up: true },
  { x: 106, top: 175, bottom: 198, wickTop: 168, wickBottom: 205, up: false },
  { x: 130, top: 130, bottom: 172, wickTop: 120, wickBottom: 180, up: true },
  { x: 154, top: 145, bottom: 168, wickTop: 138, wickBottom: 176, up: false },
  { x: 178, top: 95, bottom: 140, wickTop: 86, wickBottom: 150, up: true },
  { x: 202, top: 108, bottom: 132, wickTop: 100, wickBottom: 140, up: false },
  { x: 226, top: 55, bottom: 102, wickTop: 46, wickBottom: 110, up: true },
];

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
      <div className="hero-chart-bg" aria-hidden="true">
        <svg viewBox="0 0 240 260" preserveAspectRatio="xMaxYMax meet">
          {CANDLES.map((c) => (
            <g key={c.x}>
              <line className="candle-wick" x1={c.x + 6} y1={c.wickTop} x2={c.x + 6} y2={c.wickBottom} />
              <rect
                className={c.up ? 'candle-up' : 'candle-down'}
                x={c.x} y={c.top} width="12" height={c.bottom - c.top}
              />
            </g>
          ))}
          <path
            className="chart-line"
            d="M 10 224 L 34 204 L 58 217 L 82 180 L 106 186 L 130 151 L 154 156 L 178 117 L 202 120 L 226 78"
          />
        </svg>
      </div>
      <span className="hero-watermark" aria-hidden="true">20</span>
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
            <a href="/challenge" className="btn-outline">
              Start with EIT
            </a>
          </div>
          <div className="hero-partner hero-anim hero-anim-d5">
            <span className="hero-assets partner-label" aria-hidden="true">
              <span className="live-dot" /> Forex · Gold · Oil · Indices
            </span>
            <span className="partner-tag">
              <span className="partner-label">Partner</span>
              <span className="partner-dot" aria-hidden="true" />
              <span className="partner-name">eToro</span>
            </span>
          </div>
        </div>

        {/* Right: animated decision-window clock */}
        <div className="clock-wrapper hero-anim hero-anim-d3" aria-hidden="true">
          <div className="clock-container">
            <svg className="clock-svg" viewBox="0 0 260 260">
              <circle className="clock-ring-outer" cx="130" cy="130" r="126" />
              {TICKS.map((t) => (
                <line
                  key={t.key}
                  className={`clock-tick${t.major ? ' major' : ''}`}
                  x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
                />
              ))}
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
