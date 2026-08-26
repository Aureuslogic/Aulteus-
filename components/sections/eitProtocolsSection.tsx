'use client';

import { useInView } from '@/hooks/useInView';
import ProtocolCards from './protocolCards';

export default function EitProtocolsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="protocols-section section"
      id="eit"
      aria-labelledby="eit-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Layer 05, expanded</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="eit-heading" style={{ maxWidth: '17ch' }}>
          EIT. The Emotionally Intelligent Trader.
        </h2>
        <p className={`section-p sr sr-d2${inView ? ' visible' : ''}`}>
          Bad analysis can cause losses. Bad habits do worse. The revenge entry. The size
          you already knew was wrong. The trade taken because sitting still felt like
          losing.
        </p>
        <p className={`section-p sr sr-d3${inView ? ' visible' : ''}`} style={{ color: 'var(--gold-bright)', marginTop: '0.8rem' }}>
          Six protocols. Run in order. Before capital is ever at risk.
        </p>

        <ProtocolCards variant="home" />

        <p className={`protocols-origin sr sr-d4${inView ? ' visible' : ''}`}>
          EIT was built and proven at{' '}
          <a href="https://www.capitalmarketsacademy.com" target="_blank" rel="noopener noreferrer">
            Capital Markets Academy
          </a>
          . On Aulteus it is part of the mentorship, applied live against the five layers
          in the daily coaching room.{' '}
          <a href="/eit">Read the full EIT framework →</a>
        </p>
      </div>
    </section>
  );
}
