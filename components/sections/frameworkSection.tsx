'use client';

import { useRef, useEffect, useState } from 'react';

const LAYERS = [
  {
    idx: '01',
    title: 'Macro Context',
    body: 'Understand the economic environment before a single chart is opened. News cycles, central bank posture, and geopolitical tension all govern price before technicals ever can.',
  },
  {
    idx: '02',
    title: 'Liquidity Engineering',
    body: 'Institutions move price toward liquidity pools — stop clusters, equal highs/lows, and order blocks. We map these before entry.',
  },
  {
    idx: '03',
    title: 'Gap Analysis',
    body: 'Fair Value Gaps and imbalance zones reveal where price intends to return. They are not coincidences — they are the footprint of institutional order flow.',
  },
  {
    idx: '04',
    title: 'Technical Precision',
    body: 'With context established, precise entry models are applied: Break of Structure, Change of Character, displacement, and confirmation triggers.',
  },
];

export default function FrameworkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [rowsVisible, setRowsVisible] = useState(false);

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
          setRowsVisible(true);
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
            Governing the market
          </h2>
          <p className={`section-p sr sr-d2${visible ? ' visible' : ''}`}>
            Applied in order. Context before charts. Each layer filters the market through
            a different lens so that by the time you reach execution, you are acting on
            signal — not noise.
          </p>
        </div>

        <div className="framework-layers" role="list">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.idx}
              className={`layer-row sr sr-d${i + 1}${rowsVisible ? ' visible' : ''}`}
              role="listitem"
            >
              <div className="layer-num">{layer.idx}</div>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ---- LAYER 05 FEATURE ---- */}
        <div className={`l5-feature sr sr-d5${rowsVisible ? ' visible' : ''}`}>
          <div className="l5-inner">
            <span className="l5-badge"><i /> The deciding layer</span>
            <div className="l5-lyr">Layer 05</div>
            <h3>Emotional Intelligence</h3>
            <p className="l5-say">Four layers read the market. This one reads you.</p>
            <p className="l5-body">
              No framework survives fear and greed. It is the layer most traders skip, and
              the only one with a system of its own. That system is EIT.
            </p>
            <a href="/eit#protocols" className="btn-gold">See the six protocols</a>
          </div>
        </div>
      </div>
    </section>
  );
}
