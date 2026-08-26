'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

const TERMINAL_LINES = [
  { cls: 't-p', text: '> Aulteus Logic Agentic AI — XAUUSD Analysis' },
  { cls: 't-c', text: '// 2024-03-15 08:43 UTC' },
  { cls: '',    text: '' },
  { cls: 't-s', text: 'MACRO_CONTEXT:' },
  { cls: 't-v', text: '  DXY bearish bias confirmed' },
  { cls: 't-v', text: '  CPI data released — below forecast' },
  { cls: 't-v', text: '  Risk-on environment detected' },
  { cls: '',    text: '' },
  { cls: 't-s', text: 'LIQUIDITY_MAP:' },
  { cls: 't-v', text: '  Buy-side pool: 2034.50 (swept ✓)' },
  { cls: 't-w', text: '  Sell-side pool: 2018.00 (active)' },
  { cls: '',    text: '' },
  { cls: 't-s', text: 'DECISION:' },
  { cls: 't-ok', text: '  ✓ LONG — FVG retest at 2021.80' },
  { cls: 't-ok', text: '  Target: 2034.50 | SL: 2016.00' },
  { cls: '',    text: '' },
  { cls: 't-c', text: '// Confidence: HIGH — all 5 layers aligned' },
];

const POINTS = [
  {
    title: 'Reads the market in real time',
    body: 'The Agentic AI processes macro data, liquidity zones, and price structure simultaneously — the way an institutional desk analyst would.',
  },
  {
    title: 'Outputs a governance decision',
    body: 'Not a prediction. A structured answer: Act, Stay Neutral, or Wait. With the reasoning shown so you remain in control.',
  },
  {
    title: 'Works on any platform',
    body: 'Use it alongside MT4, MT5, TradingView, or eToro. Aulteus Logic governs the decision — your broker executes it.',
  },
];

export default function AiSection() {
  const { ref: sectionRef, inView } = useInView();
  const [visibleLines, setVisibleLines] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!inView) return;
    timersRef.current = TERMINAL_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 400 + i * 110)
    );
    return () => timersRef.current.forEach(clearTimeout);
  }, [inView]);

  return (
    <section
      className="ai-section section"
      id="ai"
      aria-labelledby="ai-heading"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <div className="ai-inner">
          {/* Left: copy */}
          <div>
            <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Agentic AI</p>
            <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="ai-heading">
              Decision intelligence, not signal hunting
            </h2>
            <p className={`section-p sr sr-d2${inView ? ' visible' : ''}`}>
              The Aulteus Logic Agentic AI applies the five-layer framework in
              real time, returning a structured decision — not a chart pattern
              to interpret.
            </p>
            <div className="ai-points">
              {POINTS.map((p, i) => (
                <div key={p.title} className={`ai-point sr sr-d${i + 3}${inView ? ' visible' : ''}`}>
                  <span className="ai-point-dot" aria-hidden="true" />
                  <div>
                    <div className="ai-point-title">{p.title}</div>
                    <div className="ai-point-body">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: typewriter terminal */}
          <div className={`terminal sr-right${inView ? ' visible' : ''}`} role="img" aria-label="Example Agentic AI output for XAUUSD">
            <div className="terminal-bar">
              <span className="t-dot t-dot-r" />
              <span className="t-dot t-dot-y" />
              <span className="t-dot t-dot-g" />
              <span className="terminal-title">aulteus-ai — decision engine</span>
            </div>
            <div className="terminal-body">
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) =>
                line.text === '' ? (
                  <div key={i}>&nbsp;</div>
                ) : (
                  <div key={i}>
                    <span className={line.cls}>{line.text}</span>
                  </div>
                )
              )}
              {/* Blinking cursor while typing */}
              {visibleLines < TERMINAL_LINES.length && (
                <div><span className="terminal-cursor" /></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
