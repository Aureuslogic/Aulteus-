'use client';

import { useRef, useEffect, useState } from 'react';

const LAYERS = [
  {
    idx: 'Layer 01',
    title: 'Macro Context',
    body: 'Understand the economic environment before a single chart is opened. News cycles, central bank posture, and geopolitical tension all govern price before technicals ever can.',
  },
  {
    idx: 'Layer 02',
    title: 'Liquidity Engineering',
    body: 'Institutions move price toward liquidity pools — stop clusters, equal highs/lows, and order blocks. We map these before entry.',
  },
  {
    idx: 'Layer 03',
    title: 'Gap Analysis',
    body: 'Fair Value Gaps and imbalance zones reveal where price intends to return. They are not coincidences — they are the footprint of institutional order flow.',
  },
  {
    idx: 'Layer 04',
    title: 'Technical Precision',
    body: 'With context established, precise entry models are applied: Break of Structure, Change of Character, displacement, and confirmation triggers.',
  },
  {
    idx: 'Layer 05',
    title: 'Emotional Intelligence',
    body: 'No framework survives contact with fear and greed. The fifth layer is a governance protocol for the mind — the most under-estimated edge in trading.',
  },
];

export default function FrameworkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const headEl = headRef.current;
    if (!headEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(headEl);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(sectionEl);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="framework-section section"
      id="framework"
      aria-labelledby="framework-heading"
      ref={sectionRef}
    >
      <div className="section-inner">
        <div ref={headRef}>
          <p className={`eyebrow sr${visible ? ' visible' : ''}`}>The Five-Layer System</p>
          <h2 className={`section-h sr sr-d1${visible ? ' visible' : ''}`} id="framework-heading">
            A decision framework built on institutional logic
          </h2>
          <p className={`section-p sr sr-d2${visible ? ' visible' : ''}`}>
            Aulteus Logic is not a strategy. It is a governance system. Each layer
            filters the market through a different lens so that by the time you
            reach execution, you are acting on signal — not noise.
          </p>
        </div>

        <div className="framework-grid" role="list">
          {LAYERS.map((layer, i) => (
            <article
              key={layer.idx}
              className={`fw-card sr sr-d${i + 1}${cardsVisible ? ' visible' : ''}`}
              role="listitem"
            >
              <div className="fw-idx">{layer.idx}</div>
              <h3 className="fw-title">{layer.title}</h3>
              <p className="fw-body">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
