'use client';

import { useInView } from '@/hooks/useInView';

const LOCKED_PROTOCOLS = [2, 3, 4, 5, 6];

export default function ProtocolCards({ variant = 'home' }: { variant?: 'home' | 'eit' }) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="protocols-grid" role="list">
      <article className={`protocol-card open sr sr-d1${inView ? ' visible' : ''}`} role="listitem">
        <div className="protocol-n">Protocol 01</div>
        <h3>The Traffic Light System</h3>
        <p>
          {variant === 'eit'
            ? 'The pre-trade check every EIT trader runs before capital is ever at risk.'
            : 'The pre-trade check, run before capital is at risk.'}
        </p>
        {variant === 'eit' && <div className="protocol-tag">Taught inside</div>}
      </article>

      {LOCKED_PROTOCOLS.map((n, i) => (
        <article
          key={n}
          className={`protocol-card shut sr sr-d${Math.min(i + 2, 6)}${inView ? ' visible' : ''}`}
          role="listitem"
        >
          <div className="protocol-n">Protocol {String(n).padStart(2, '0')}</div>
          <h3>{variant === 'eit' ? '●●●●●●●●' : 'Members only'}</h3>
          {variant === 'eit' && (
            <>
              <p>Revealed when you join.</p>
              <div className="protocol-tag">Members only</div>
            </>
          )}
        </article>
      ))}
    </div>
  );
}
