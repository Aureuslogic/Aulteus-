'use client';

import { useInView } from '@/hooks/useInView';

const STEPS = [
  {
    label: 'Alone',
    title: 'No one sees the trade before you take it',
    body: 'Just you, late, deciding under pressure.',
  },
  {
    label: 'Structured',
    title: 'The check runs before you do',
    body: 'Protocol 01 first. Every time. In order.',
    lit: true,
  },
  {
    label: 'Held',
    title: 'You stop carrying it on your own',
    body: 'A live room, and people who have sat where you sit.',
  },
];

export default function EitJourneySection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="eit-journey-section section"
      id="eit-journey"
      aria-labelledby="eit-journey-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>The EIT Framework</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="eit-journey-heading">
          It was never a determination problem. It was a structure problem.
        </h2>
        <p className={`eit-journey-beat sr sr-d2${inView ? ' visible' : ''}`}>
          <b>You were not in the right community</b>
          when the information was taught and shared.
        </p>
        <p className={`eit-journey-note sr sr-d3${inView ? ' visible' : ''}`}>
          Underestimating the news. Chasing the noise. Trading without structure.
          <br />
          <br />
          <strong>Structure, Patterns and Live Community</strong> are what change that.
        </p>

        <div className="journey-grid">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className={`journey-step${step.lit ? ' lit' : ''} sr sr-d${i + 1}${inView ? ' visible' : ''}`}
            >
              <div className="journey-step-label">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <p className={`eit-journey-payoff sr sr-d4${inView ? ' visible' : ''}`}>
          Trading is not a time-dependent job.
          <br />
          It is about little but precise timing,
          <span className="hi"> and less doubt.</span>
        </p>
      </div>
    </section>
  );
}
