const PRESS = [
  { name: 'BusinessDay', href: 'https://businessday.ng/life/article/aulteus-logic-the-market-doesnt-care-what-you-think-about/' },
  { name: 'Brainz Magazine', href: 'https://www.brainzmagazine.com/post/5-forex-and-stock-market-trading-secrets-you-need-to-know-to-succeed-as-a-trader' },
];

export default function PressStrip() {
  return (
    <div className="press-strip">
      <div className="section-inner">
        <p className="eyebrow">The framework has featured in</p>
        <div className="press-list">
          {PRESS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
