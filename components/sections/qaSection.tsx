'use client';

import { useInView } from '@/hooks/useInView';

const QUESTIONS = [
  {
    q: 'What is Aulteus Logic?',
    a: 'Aulteus Logic is a UK forex and commodities education provider founded by Sam Onigbanjo. It teaches a decision framework of five market layers and six EIT behaviour protocols through a live daily coaching room covering forex, gold, oil and indices. It is educational only and is not authorised or regulated by the Financial Conduct Authority.',
  },
  {
    q: 'What is the EIT framework?',
    a: 'EIT stands for Emotionally Intelligent Trader. It is a behaviour framework of six protocols that a trader runs every trading day, starting with a pre-trade Traffic Light check before any capital is at risk. It governs conduct rather than predicting price.',
  },
  {
    q: 'How do I stop revenge trading and overtrading?',
    a: 'Revenge trading and overtrading are habit problems, not analysis problems. They are usually reduced by replacing in-the-moment judgement with a fixed pre-trade check run in the same order every time, and by being accountable to other traders rather than deciding alone.',
  },
  {
    q: 'Can a complete beginner learn to trade forex and commodities?',
    a: 'Yes. We teach from first principles in a live daily coaching room covering forex, gold, oil and indices. No finance degree is required. Trading carries a risk of loss and many people who trade lose money, so learning should always come before capital is risked.',
  },
  {
    q: 'What happens in a live trading coaching room?',
    a: 'The daily War Room is a live session where the five-layer framework is applied to real market conditions out loud, the EIT protocols are run in front of members, and questions are answered while price is still forming rather than afterwards.',
  },
];

export default function QaSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="qa-section section"
      id="questions"
      aria-labelledby="qa-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner" style={{ maxWidth: '780px', margin: '0 auto' }}>
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>Questions people ask</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="qa-heading">
          Straight answers, before you go further
        </h2>

        <div className="qa-list">
          {QUESTIONS.map((item, i) => (
            <div key={item.q} className={`qa-item sr sr-d${Math.min(i + 2, 6)}${inView ? ' visible' : ''}`}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
