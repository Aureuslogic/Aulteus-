import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Aulteus Logic',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: 'var(--black)',
        color: 'var(--white)',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-m)',
            fontSize: '0.7rem',
            color: 'var(--gold)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Error 404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-d)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.2rem',
            color: 'var(--white)',
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            color: 'var(--white-dim)',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.75,
            maxWidth: '400px',
            margin: '0 auto 2.5rem',
          }}
        >
          The page you are looking for does not exist or has been moved.
          Return to the homepage to access the Aulteus Logic decision framework.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'var(--gold)',
            color: 'var(--black)',
            padding: '0.85rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.88rem',
            letterSpacing: '0.03em',
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
