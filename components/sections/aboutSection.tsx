'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const CREDENTIALS = [
  'Enterprise Nation AI Adviser',
  'Chartered Institute of Marketing (CIM) Fellow',
  'Oxford Saïd Business School — Executive Education',
  'Over a decade in capital markets and corporate strategy',
  'Creator of the Aulteus Logic Non Linear Decision Framework',
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="about-section section"
      id="inventor"
      aria-labelledby="about-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <div className="about-inner">
          {/* Left: bio */}
          <div className={`sr-left${inView ? ' visible' : ''}`}>
            <p className="eyebrow">The Inventor</p>
            <div className="about-avatar" style={{ overflow: 'hidden', padding: 0 }}>
              <Image
                src="/assets/author.jpg"
                alt="Sam Onigbanjo, Inventor of Aulteus Logic"
                width={80}
                height={80}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h2 className="section-h" id="about-heading">Sam Onigbanjo</h2>
            <p className="section-p">
              After years in corporate strategy and capital markets, Sam Onigbanjo
              observed the same pattern repeatedly: intelligent people making poor
              decisions under market pressure — not because they lacked knowledge,
              but because they lacked a decision asset.
            </p>
            <p className="section-p" style={{ marginTop: '1rem' }}>
              Aulteus Logic is the answer he built. A structured, five-layer
              governance framework that separates signal from noise and gives
              traders the same decision clarity used at the institutional level.
            </p>

            <div className="about-creds" role="list" aria-label="Sam Onigbanjo credentials">
              {CREDENTIALS.map((c, i) => (
                <div
                  key={c}
                  className={`cred sr sr-d${i + 1}${inView ? ' visible' : ''}`}
                  role="listitem"
                >
                  <span className="cred-mark" aria-hidden="true" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div className={`sr-right${inView ? ' visible' : ''}`}>
            <blockquote className="about-quote-block">
              <p className="about-q-text">
                &ldquo;The market does not reward effort. It rewards decision quality.
                Most traders try to work harder. The 1% work smarter — with a
                framework that governs every move before it is made.&rdquo;
              </p>
              <footer>
                <cite className="about-q-attr">— Sam Onigbanjo, Inventor of Aulteus Logic</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
