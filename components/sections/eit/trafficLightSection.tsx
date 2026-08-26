'use client';

import { useInView } from '@/hooks/useInView';

const LIGHTS = [
  { cls: 'green', title: 'Green State', body: 'Conditions and conduct both clear. The plan may proceed.' },
  { cls: 'amber', title: 'Amber State', body: 'Something is unresolved. Size, timing or state of mind. Proceed only with what the check permits.' },
  { cls: 'red', title: 'Red State', body: 'No trade. Not a smaller one, not a careful one. None.' },
];

export default function TrafficLightSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="traffic-section section"
      id="traffic"
      aria-labelledby="traffic-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>The EIT Traffic Light Check</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="traffic-heading" style={{ maxWidth: '20ch' }}>
          Protocol 01, and the only one we publish.
        </h2>
        <p className={`section-p sr sr-d2${inView ? ' visible' : ''}`}>
          Before capital is ever at risk, every EIT trader runs one check. Three states.
          One decision.
        </p>

        <div className="traffic-lights">
          {LIGHTS.map((light, i) => (
            <div key={light.title} className={`traffic-light ${light.cls} sr sr-d${i + 1}${inView ? ' visible' : ''}`}>
              <div className="dot" aria-hidden="true" />
              <h3>{light.title}</h3>
              <p>{light.body}</p>
            </div>
          ))}
        </div>

        <p className={`traffic-taught sr sr-d4${inView ? ' visible' : ''}`}>
          What each state means, and what it requires of you, is taught inside the
          mentorship.
        </p>
      </div>
    </section>
  );
}
