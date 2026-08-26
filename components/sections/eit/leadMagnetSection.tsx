export default function LeadMagnetSection() {
  return (
    <section className="lead-section section" id="start" aria-labelledby="lead-heading">
      <div className="section-inner">
        <div className="lead-box">
          <p className="eyebrow">Start without spending anything</p>
          <h2 className="section-h" id="lead-heading">Take the introductory lesson first.</h2>
          <p>
            You do not have to decide today. Sit in on an introductory forex lesson, read
            the trading book, and see whether the way we think matches the way you want
            to learn.
          </p>
          <div className="freebie-tags">
            <span className="freebie-tag">Free introductory lesson</span>
            <span className="freebie-tag">Free trading book</span>
          </div>
          <div className="hero-actions" style={{ marginTop: '1.6rem' }}>
            <a
              href="mailto:Hello@aulteuslogic.com?subject=Free%20introductory%20lesson%20and%20trading%20book"
              className="btn-gold"
            >
              Request both
            </a>
            <a href="#protocols" className="btn-outline">
              Read the framework again
            </a>
          </div>
          <p className="lead-fineprint">
            Both are available on request. No obligation, and no pressure to join
            anything.
          </p>
        </div>
      </div>
    </section>
  );
}
