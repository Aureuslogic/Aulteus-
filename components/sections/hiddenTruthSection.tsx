import { CheckCircle, Scale } from 'lucide-react';

export default function HiddenTruthSection() {
  const benefits = [
    'How structure is read (The Banker\'s Way)',
    'How risk is framed before opportunity',
    'How patience becomes a strategic advantage',
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-sm font-bold tracking-widest text-aureus-gold mb-2 uppercase">
            Market Reality
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The Hidden Truth About Markets
          </h2>
          <p className="mb-4">
            Markets are non linear systems. They do not reward effort.{' '}
            <strong>
              They reward restraint applied at the correct moment.
            </strong>
          </p>
          <p className="mb-4 text-aureus-muted">
            Retail trading culture encourages constant activity. Institutional
            trading culture prioritises selective engagement.
          </p>
          <p className="mb-8">
            This difference explains why a small minority compound capital while
            most participants churn. We do not teach speculation. We teach
            decision governance under uncertainty.
          </p>

          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-aureus-gold shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Abstraction */}
        <div className="bg-white p-10 shadow-2xl rounded-lg border border-gray-100 relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-aureus-gold opacity-10 rounded-full"></div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-center">
            From Retail Chaos to <br />
            <span className="text-aureus-gold">Decision Assets</span>
          </h3>
          <p className="text-center mb-8 text-sm text-aureus-muted">
            Moving traders from reaction to control.
          </p>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-aureus-bg flex items-center justify-center border border-aureus-gold">
              <Scale className="w-8 h-8 text-aureus-gold" />
            </div>
          </div>
          <p className="text-center font-medium">
            We introduce what most traders never develop.
          </p>
          <p className="text-center font-serif italic text-xl mt-2">
            A decision asset.
          </p>
        </div>
      </div>
    </section>
  );
}