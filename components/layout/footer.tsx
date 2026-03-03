export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aureus-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-serif font-bold text-xl mb-4 aureus-gold">
            AULTEUS LOGIC
          </h3>
          <p className="text-gray-800">
            Moving traders from reaction to control through non linear decision
            governance.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 aureus-gold">Product</h4>
          <ul className="space-y-2 text-gray-800">
            <li>
              <a href="https://aureuslogic.com/#" className="hover:text-black transition-colors">
                Aulteus Logic Framework
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                The Banker&apos;s Code Bundle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                War Room Access
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 aureus-gold">Legal</h4>
          <ul className="space-y-2 text-gray-800">
            <li>
              <a href="/privacy-policy" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-black transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/risk-disclosure" className="hover:text-black transition-colors">
                Risk Disclosure
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {currentYear} Aulteus Logic. All Rights Reserved. Aulteus Logic is
        a decision support tool, not financial advice.
      </div>
    </footer>
  );
}