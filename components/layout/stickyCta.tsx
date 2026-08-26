'use client';

import { useEffect, useRef, useState } from 'react';

export default function StickyCta({ closeTargetId = 'join' }: { closeTargetId?: string }) {
  const [on, setOn] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero');
    const close = document.getElementById(closeTargetId);
    if (!hero) return;

    const update = () => {
      const passedHero = window.scrollY > hero.offsetHeight - 120;
      const atClose = close ? close.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
      setOn(passedHero && !atClose);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [closeTargetId]);

  return (
    <div className={`sticky-cta${on ? ' on' : ''}`} ref={barRef} aria-hidden={!on}>
      <div className="sticky-cta-inner">
        <div>
          <p className="sticky-cta-msg">The War Room is live daily. You do not have to learn this on your own.</p>
          <p className="sticky-cta-mini">Educational only. Not financial advice. Trading carries a risk of loss.</p>
        </div>
        <a href="https://aureus-logic.vercel.app/app?plan=mentorship" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Join the Community
        </a>
      </div>
    </div>
  );
}
