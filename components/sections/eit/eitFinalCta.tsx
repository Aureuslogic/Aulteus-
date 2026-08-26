export default function EitFinalCta() {
  return (
    <section className="eit-finalcta" id="join" aria-labelledby="eit-finalcta-heading">
      <div className="section-inner">
        <span className="live-badge"><i /> The coaching room is live daily</span>
        <h2 id="eit-finalcta-heading">
          The framework is here.<span className="g">The training is inside.</span>
        </h2>
        <div className="cta-actions" style={{ marginTop: '2.2rem' }}>
          <a
            href="https://aureus-logic.vercel.app/app?plan=mentorship"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Join the Community
          </a>
          <a href="#start" className="btn-outline">Start with the free lesson</a>
        </div>
        <p className="honest">
          To be clear about what this is. Aulteus Logic is an educational community. We
          teach a decision framework and we sit with you while you learn to apply it. We
          are not authorised or regulated by the Financial Conduct Authority, we do not
          give advice or personal recommendations, we do not trade your account, and we
          promise no outcome. Trading carries a risk of loss and many people who trade
          lose money. Come to learn, and only ever risk what you can afford to lose.
        </p>
      </div>
    </section>
  );
}
