export default function EitHero() {
  return (
    <section className="hero" aria-label="The EIT Framework — Emotionally Intelligent Trader">
      <div className="hero-bg-lines" aria-hidden="true" />
      <div className="section-inner">
        <p className="hero-eyebrow hero-anim hero-anim-d1">
          Aulteus Logic EIT &nbsp;·&nbsp; The Emotionally Intelligent Trader
        </p>
        <h1 className="hero-headline hero-anim hero-anim-d2" style={{ maxWidth: '19ch' }}>
          The market doesn&apos;t beat most traders.<br />
          <em>Their emotions do.</em>
        </h1>
        <p className="hero-sub hero-anim hero-anim-d3" style={{ maxWidth: '58ch' }}>
          EIT is the behaviour framework behind Aulteus Logic forex and commodities
          training. Six protocols, run every trading day, so that discipline stops being
          something you have to find on your own.
        </p>
        <div className="hero-actions hero-anim hero-anim-d4">
          <a href="/challenge" className="btn-gold">
            Start your EIT journey
          </a>
          <a href="#protocols" className="btn-outline">
            See the six protocols
          </a>
        </div>
        <p className="herorisk hero-anim hero-anim-d5">
          <strong>Educational only.</strong> We teach a decision framework. We give no
          advice and promise no outcome. Trading carries a risk of loss, and many people
          who trade lose money.
        </p>
      </div>
    </section>
  );
}
