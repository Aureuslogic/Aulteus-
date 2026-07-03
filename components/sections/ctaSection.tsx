'use client';

export default function CtaSection() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <p className="eyebrow" style={{ textAlign: 'center' }}>The Decision Is Yours</p>
      <h2
        className="section-h"
        id="cta-heading"
        style={{ maxWidth: '640px', margin: '0 auto 1.2rem', textAlign: 'center', fontSize: 'clamp(1.9rem, 3vw, 2.7rem)' }}
      >
        Stop trading your opinion.<br />
        Start governing your decisions.
      </h2>
      <p className="cta-body">
        Every session you enter without a decision framework is a session governed
        by emotion. Aulteus Logic changes that — permanently.
      </p>
      <div className="cta-actions">
        <a href="#access" className="btn-gold" onClick={scrollTo('access')}>
          Secure Access Now
        </a>
        <a href="#framework" className="btn-outline" onClick={scrollTo('framework')}>
          Explore the Framework
        </a>
      </div>
    </section>
  );
}
