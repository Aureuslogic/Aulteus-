'use client';

import { useInView } from '@/hooks/useInView';

export default function PartnerSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="partner-section section"
      aria-labelledby="partner-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <div className="partner-inner">
          {/* Left: copy */}
          <div className={`sr-left${inView ? ' visible' : ''}`}>
            <p className="eyebrow">Official Trading Partner</p>
            <h2 className="section-h" id="partner-heading">
              Execute with an institution-grade broker
            </h2>
            <p className="section-p">
              Aulteus Logic has partnered with Trade Nation to give members
              access to a regulated, low-cost trading environment. The framework
              governs your decisions. Trade Nation is where you execute them.
            </p>
            <p className="section-p" style={{ marginTop: '1rem' }}>
              Trade Nation is regulated by the FCA (UK), FSCA (South Africa),
              SCB (Bahamas), ASIC (Australia), and FSA (Seychelles).
            </p>
          </div>

          {/* Right: partner card */}
          <div className={`partner-block sr-right${inView ? ' visible' : ''}`}>
            <div className="partner-logo">Trade Nation</div>
            <div className="partner-official-tag">Official Aulteus Logic Partner</div>
            <p className="partner-desc">
              Tight spreads. No dealing desk. Regulated globally.
              Open a free account and trade alongside Aulteus Logic members worldwide.
            </p>
            <a
              href="https://tradenation.com"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-gold"
              style={{ display: 'inline-block' }}
            >
              Open a Free Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
