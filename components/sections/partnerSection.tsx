'use client';

import { useInView } from '@/hooks/useInView';

export default function PartnerSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="partner-section section"
      aria-labelledby="partner-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-inner">
        <div className="partner-inner">
          {/* Left: copy */}
          <div className={`sr-left${inView ? ' visible' : ''}`}>
            <p className="eyebrow">Partner</p>
            <h2 className="section-h" id="partner-heading">
              Execute with a regulated broker
            </h2>
            <p className="section-p">
              Aulteus Logic does not execute trades or hold client funds. The framework
              governs your decisions — members execute them through their own regulated
              broker, including eToro.
            </p>
          </div>

          {/* Right: partner card */}
          <div className={`partner-block sr-right${inView ? ' visible' : ''}`}>
            <div className="partner-logo">eToro</div>
            <div className="partner-official-tag">Partner</div>
            <p className="partner-desc">
              eToro (UK) Ltd is authorised and regulated by the Financial Conduct
              Authority, FRN 583263. Open a free account and trade alongside Aulteus
              Logic members worldwide.
            </p>
            {/* Affiliate tracking link, eToro Partners account A93487 */}
            <a
              href="https://med.etoro.com/B12087_A93487_TClick.aspx"
              target="_blank"
              rel="noopener sponsored nofollow"
              className="btn-gold"
              style={{ display: 'inline-block' }}
            >
              Open an Account with eToro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
