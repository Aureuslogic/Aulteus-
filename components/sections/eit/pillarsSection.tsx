'use client';

import { useInView } from '@/hooks/useInView';

const PILLARS = [
  {
    title: 'Technical Trading',
    body: 'Learn to trade forex, gold, oil and indices with precision, using the essential technical tools of professional traders, taught live and daily by traders who trade.',
  },
  {
    title: 'News & Geopolitics',
    body: 'Markets move on the world. We train you to read news and geopolitical events and turn global awareness into informed decisions.',
  },
  {
    title: 'Emotional Mastery & Accountability',
    body: 'Master your emotions inside structured accountability groups, so discipline is never something you have to find alone.',
  },
];

export default function PillarsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="pillars-section section"
      aria-labelledby="pillars-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>What we train</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="pillars-heading" style={{ maxWidth: '24ch' }}>
          Technical skill, market awareness, emotional mastery.
        </h2>
        <p className={`section-p sr sr-d2${inView ? ' visible' : ''}`}>
          Three pillars, held together by one framework.
        </p>

        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`pillar-card sr sr-d${i + 1}${inView ? ' visible' : ''}`}>
              <div className="pillar-n">Pillar {String(i + 1).padStart(2, '0')}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
