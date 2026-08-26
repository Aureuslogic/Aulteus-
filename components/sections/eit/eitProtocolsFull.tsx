'use client';

import { useInView } from '@/hooks/useInView';
import ProtocolCards from '../protocolCards';

export default function EitProtocolsFull() {
  const { ref, inView } = useInView();

  return (
    <section
      className="protocols-section section"
      id="protocols"
      aria-labelledby="protocols-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Inside the framework</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="protocols-heading" style={{ maxWidth: '20ch' }}>
          Six protocols. One is public. Five are earned.
        </h2>
        <p className={`section-p sr sr-d2${inView ? ' visible' : ''}`}>
          Our members run all six every trading day. We publish the name of the first.
          The rest are revealed inside.
        </p>

        <ProtocolCards variant="eit" />
      </div>
    </section>
  );
}
