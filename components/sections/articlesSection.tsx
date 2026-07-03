'use client';

import { useInView } from '@/hooks/useInView';

const ARTICLES = [
  {
    source: 'BusinessDay',
    title: 'Aulteus Logic: "The market doesn\'t care what you think about."',
    desc: 'Sam Onigbanjo on decision governance, the cost of emotional trading, and why most retail traders fail before they start.',
    href: 'https://businessday.ng/life/article/aulteus-logic-the-market-doesnt-care-what-you-think-about/',
    arrow: 'Read on BusinessDay →',
  },
  {
    source: 'Brainz Magazine',
    title: '5 Forex and Stock Market Trading Secrets You Need to Know to Succeed as a Trader',
    desc: 'The institutional insights most retail traders never access — published in Brainz Magazine\'s executive series.',
    href: 'https://www.brainzmagazine.com/post/5-forex-and-stock-market-trading-secrets-you-need-to-know-to-succeed-as-a-trader',
    arrow: 'Read on Brainz Magazine →',
  },
];

export default function ArticlesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="articles-section section"
      aria-labelledby="articles-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`}>As Published</p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="articles-heading">
          Featured in leading publications
        </h2>

        <div className="articles-grid">
          {ARTICLES.map((a, i) => (
            <a
              key={a.source}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`article-card sr sr-d${i + 2}${inView ? ' visible' : ''}`}
              aria-label={`${a.title} — read on ${a.source}`}
            >
              <div className="article-source">{a.source}</div>
              <h3 className="article-title">{a.title}</h3>
              <p className="article-desc">{a.desc}</p>
              <span className="article-arrow">{a.arrow}</span>
            </a>
          ))}

          <div
            className={`article-card article-card-placeholder sr sr-d4${inView ? ' visible' : ''}`}
            aria-hidden="true"
          >
            <div className="article-source" style={{ color: 'var(--white-dim)' }}>Coming Soon</div>
            <h3 className="article-title" style={{ color: 'var(--white-dim)' }}>Next Feature</h3>
            <p className="article-desc">More editorial coverage of the Aulteus Logic decision framework is in development.</p>
            <span className="article-arrow article-arrow-muted">Pending publication</span>
          </div>
        </div>
      </div>
    </section>
  );
}
