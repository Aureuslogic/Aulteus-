'use client';

import { useState } from 'react';
import { faqs } from '@/lib/faqs';
import { useInView } from '@/hooks/useInView';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const renderAnswer = (answer: string | string[]) =>
    Array.isArray(answer)
      ? answer.map((p, i) => <p key={i}>{p}</p>)
      : <p>{answer}</p>;

  return (
    <section
      className="faq-section"
      aria-labelledby="faq-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="faq-inner">
        <p className={`eyebrow sr${inView ? ' visible' : ''}`} style={{ textAlign: 'center' }}>
          Regulatory &amp; Compliance
        </p>
        <h2 className={`section-h sr sr-d1${inView ? ' visible' : ''}`} id="faq-heading" style={{ textAlign: 'center', maxWidth: '100%' }}>
          Frequently Asked Questions
        </h2>
        <p className={`sr sr-d2${inView ? ' visible' : ''}`} style={{ textAlign: 'center', color: 'var(--white-dim)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
          Important information about Aulteus Logic&apos;s regulatory positioning
        </p>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`faq-item sr sr-d${Math.min(i + 1, 6)}${inView ? ' visible' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-chevron${isOpen ? ' open' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <polyline
                    points="3,6 8,11 13,6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Smooth accordion via max-height transition */}
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`faq-expand${isOpen ? ' open' : ''}`}
              >
                <div className="faq-answer">
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            </div>
          );
        })}

        <div className={`faq-contact-box sr sr-d4${inView ? ' visible' : ''}`}>
          <p><strong style={{ color: 'var(--white)' }}>Have more questions?</strong></p>
          <p>Contact us at{' '}
            <a href="mailto:Hello@aulteuslogic.com">Hello@aulteuslogic.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
