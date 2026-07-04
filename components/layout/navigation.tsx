'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="site-nav" style={{ borderBottomColor: scrolled ? 'var(--border-dim)' : 'transparent' }}>
      {/* Logo */}
      <Link href="/" className="nav-logo" aria-label="Aulteus Logic home">
        <span className="nav-logo-mark">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <polygon points="8,2 14,6 14,10 8,14 2,10 2,6" strokeWidth="1.5" stroke="currentColor" fill="none" />
          </svg>
        </span>
        Aulteus Logic™
      </Link>

      {/* Desktop links */}
      <ul className="nav-links" role="list">
        <li><button onClick={() => scrollTo('framework')} className="nav-links a" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white-dim)', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s', fontFamily: 'inherit' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-dim)')}>Framework</button></li>
        <li><button onClick={() => scrollTo('ai')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white-dim)', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s', fontFamily: 'inherit' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-dim)')}>Agentic AI</button></li>
        <li><button onClick={() => scrollTo('results')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white-dim)', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s', fontFamily: 'inherit' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-dim)')}>Results</button></li>
        <li><button onClick={() => scrollTo('inventor')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white-dim)', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s', fontFamily: 'inherit' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-dim)')}>Inventor</button></li>
        <li>
          <a href="https://aureus-logic.vercel.app/login" target="_blank" rel="noopener noreferrer" className="nav-login" style={{ color: 'var(--white-dim)', border: '1px solid var(--border-dim)', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}>Login</a>
        </li>
        <li>
          <button onClick={() => scrollTo('access')} className="nav-cta" style={{ background: 'var(--gold)', color: 'var(--black)', padding: '0.45rem 1.2rem', borderRadius: '4px', fontWeight: 600, letterSpacing: '0.04em', border: 'none', cursor: 'pointer', fontSize: '0.88rem', fontFamily: 'inherit', transition: 'background 0.2s' }} onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-bright)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}>Secure Access</button>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white)', padding: '0.5rem' }}
        className="mobile-menu-btn"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          {open
            ? <><line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
            : <><line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, background: 'rgba(8,8,16,0.98)', borderBottom: '1px solid var(--border-dim)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 99 }}>
          {['framework', 'ai', 'results', 'inventor', 'access'].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--white-dim)', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', padding: '0.4rem 0' }}>
              {id === 'ai' ? 'Agentic AI' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <a href="https://aureus-logic.vercel.app/login" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', padding: '0.4rem 0' }}>Login →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
