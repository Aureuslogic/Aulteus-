'use client';

import { useInView } from '@/hooks/useInView';

export default function BridgeSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="bridge-section section"
      aria-labelledby="bridge-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner" style={{ maxWidth: '780px', margin: '0 auto' }}>
        <h2 className={`section-h sr${inView ? ' visible' : ''}`} id="bridge-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
          Two things decide the outcome.
        </h2>

        <div className="bridge-cols">
          <div className={`sr sr-d1${inView ? ' visible' : ''}`}>
            <span className="bridge-col-label">Understanding</span>
            <p className="bridge-col-text">What you technically understand from the charts, the news and geopolitics.</p>
          </div>
          <div className="bridge-divider" aria-hidden="true" />
          <div className={`sr sr-d2${inView ? ' visible' : ''}`}>
            <span className="bridge-col-label">Action</span>
            <p className="bridge-col-text">How you and your community learn to take action, or not take action.</p>
          </div>
        </div>

        <p className={`bridge-statement sr sr-d3${inView ? ' visible' : ''}`}>
          Five layers govern the market.
          <br />
          <span>Six protocols govern you.</span>
        </p>
      </div>
    </section>
  );
}
