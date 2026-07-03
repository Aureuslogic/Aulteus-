import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div>
          <div className="footer-brand">Aulteus Logic™</div>
          <p className="footer-tagline">
            Moving traders from reaction to control through non linear decision governance.
          </p>
          <span className="footer-partner-tag">Official Partner: Trade Nation</span>
        </div>

        {/* Product column */}
        <div>
          <div className="footer-col-h">Product</div>
          <ul className="footer-links" role="list">
            <li><Link href="/#framework">The Aulteus Logic Framework</Link></li>
            <li><Link href="/#access">The Aulteus Logic Complete Mentorship</Link></li>
            <li><Link href="/#ai">Agentic AI</Link></li>
            <li><a href="https://app.aulteuslogic.com/login" target="_blank" rel="noopener noreferrer">Login</a></li>
          </ul>
        </div>

        {/* Published column */}
        <div>
          <div className="footer-col-h">Published</div>
          <ul className="footer-links" role="list">
            <li>
              <a href="https://businessday.ng/life/article/aulteus-logic-the-market-doesnt-care-what-you-think-about/" target="_blank" rel="noopener noreferrer">
                BusinessDay
              </a>
            </li>
            <li>
              <a href="https://www.brainzmagazine.com/post/5-forex-and-stock-market-trading-secrets-you-need-to-know-to-succeed-as-a-trader" target="_blank" rel="noopener noreferrer">
                Brainz Magazine
              </a>
            </li>
          </ul>
        </div>

        {/* Legal column */}
        <div>
          <div className="footer-col-h">Legal</div>
          <ul className="footer-links" role="list">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/risk-disclosure">Risk Disclosure</Link></li>
            <li><a href="mailto:Hello@aulteuslogic.com">Hello@aulteuslogic.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">&copy; {year} Aulteus Logic. All Rights Reserved.</span>
        <span className="footer-copy">Decision support only. Not financial advice.</span>
      </div>
    </footer>
  );
}
