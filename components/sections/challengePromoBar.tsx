import Link from 'next/link';

export default function ChallengePromoBar() {
  return (
    <div className="promo-bar">
      <Link href="/challenge" className="promo-bar-link">
        <span className="promo-bar-badge"><i />Live</span>
        <span>The 30 Day Trading Challenge — free, online, starts Wed 23 Sept</span>
        <span className="promo-bar-arrow">Learn more →</span>
      </Link>
    </div>
  );
}
