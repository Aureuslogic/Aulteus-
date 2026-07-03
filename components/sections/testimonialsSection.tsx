'use client';

import { useInView } from '@/hooks/useInView';

const TESTIMONIALS = [
  {
    name: 'Itunnu',
    tag: 'Framework Member',
    text: "Before Aulteus Logic I was trading on emotion and losing consistently. The framework gave me a system to actually govern my decisions. For the first time I feel like I know what I'm doing and why.",
  },
  {
    name: 'Karly B',
    tag: 'Complete Mentorship Member',
    text: "The Agentic AI is unlike anything I've seen. It doesn't just give you a signal — it explains the reasoning at every layer. That transparency is what makes you a better trader, not just a follower.",
  },
  {
    name: 'Phadera',
    tag: 'Framework Member',
    text: "I've done other courses. None of them gave me what Aulteus Logic gave me — a repeatable decision protocol. The War Room alone is worth everything. Watching Sam apply the framework live is the best education I've had.",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="testimonials-section section"
      id="results"
      aria-labelledby="results-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Member Results</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="results-heading">
          What happens when traders govern decisions
        </h2>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className={`testi-card sr sr-d${i + 2}${inView ? ' visible' : ''}`}
            >
              <div className="testi-mark" aria-hidden="true">&ldquo;</div>
              <p className="testi-text">{t.text}</p>
              <footer>
                <div className="testi-name">{t.name}</div>
                <div className="testi-tag">{t.tag}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className={`testi-disclaimer sr sr-d5${inView ? ' visible' : ''}`}>
          Individual results vary. Past performance is not indicative of future results.
          Trading involves risk. These testimonials reflect personal experience and do not constitute financial advice.
        </p>
      </div>
    </section>
  );
}
