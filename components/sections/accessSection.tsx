const PLANS = [
  {
    tier: 'Framework Only',
    title: 'Decision Framework Access',
    features: [
      'Access to the Aulteus Logic decision asset framework',
      'Daily live War Room decision sessions',
      'One-to-one onboarding',
      'Agentic AI decision tool access',
    ],
    cta: 'Select Access',
    href: 'https://aureus-logic.vercel.app/app?plan=standard',
    featured: false,
  },
  {
    tier: 'Complete Mentorship',
    title: 'The Aulteus Logic Complete Mentorship',
    features: [
      'Full Education — How Banks Trade',
      'Access to the Aulteus Logic decision asset framework',
      'Daily live War Room decision sessions',
      'One-to-one onboarding and framework orientation',
      'Agentic AI decision tool — full access',
    ],
    cta: 'Join The 1%',
    href: 'https://aureus-logic.vercel.app/app?plan=mentorship',
    featured: true,
  },
];

function CheckIcon() {
  return (
    <span className="feature-check" aria-hidden="true">
      <svg viewBox="0 0 10 10" fill="none">
        <polyline points="2,5 4.5,7.5 8,3" />
      </svg>
    </span>
  );
}

export default function AccessSection() {
  return (
    <section className="access-section section" id="access" aria-labelledby="access-heading">
      <div className="section-inner">
        <p className="eyebrow">Choose Your Path</p>
        <h2 className="section-h" id="access-heading">Secure Your Unfair Advantage</h2>
        <p className="section-p">
          Both programmes give you access to the Aulteus Logic decision framework.
          The Complete Mentorship adds structured education, live sessions, and ongoing support.
        </p>

        <div className="access-grid">
          {PLANS.map((plan) => (
            <div key={plan.tier} className={`access-card${plan.featured ? ' featured' : ''}`}>
              <div className="access-tier">{plan.tier}</div>
              <h3 className="access-title">{plan.title}</h3>
              <ul className="access-features" role="list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`access-btn ${plan.featured ? 'access-btn-primary' : 'access-btn-secondary'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
