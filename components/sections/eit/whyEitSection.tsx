'use client';

import { useInView } from '@/hooks/useInView';

const HABITS = [
  { text: 'Revenge trading after a loss', hot: true },
  { text: 'Overtrading after a win', hot: false },
  { text: 'FOMO entries', hot: true },
  { text: 'Oversized positions', hot: false },
  { text: 'Moved stop losses', hot: true },
  { text: 'One more trade', hot: false },
];

export default function WhyEitSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="why-section section"
      aria-labelledby="why-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Why EIT exists</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`}>
          Bad trading habits, not bad analysis, destroy most trading accounts.
        </h2>

        <div className={`habit-pills sr sr-d2${inView ? ' visible' : ''}`}>
          {HABITS.map((h) => (
            <span key={h.text} className={`habit-pill${h.hot ? ' hot' : ''}`}>{h.text}</span>
          ))}
        </div>

        <p className={`why-body sr sr-d3${inView ? ' visible' : ''}`}>
          If you are serious about learning to trade forex properly, or about fixing the
          habits that keep costing you money, you need more than another strategy. You
          need a system that governs behaviour. That is what EIT was built for.
        </p>
      </div>
    </section>
  );
}
