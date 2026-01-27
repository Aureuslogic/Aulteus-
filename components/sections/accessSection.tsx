import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingOption {
  featured?: boolean;
  badge?: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  stripeLink: string;
}

const pricingOptions: PricingOption[] = [
  {
    category: 'Framework Only',
    title: 'Decision Framework Access',
    description:
      'Designed for experienced traders who already understand market structure.',
    features: [
      'Access to the Aureus Logic decision asset framework',
      'Daily live War Room decision sessions',
      'One to one onboarding',
    ],
    buttonText: 'Select Access',
    stripeLink: 'https://aureus-logic.vercel.app/signup?plan=standard',
  },
  {
    featured: true,
    badge: 'Recommended',
    category: 'Complete Mentorship',
    title: "The Banker's Code Bundle",
    description:
      'Designed for traders who want education and decision governance combined.',
    features: [
      'Full Education (How Banks Trade)',
      'Access to the Aureus Logic decision asset framework',
      'Daily live War Room decision sessions',
      'One to one onboarding and framework orientation',
    ],
    buttonText: 'Join The 1%',
    stripeLink: 'https://aureus-logic.vercel.app/app?plan=mentorship',
  },
];

export default function AccessSection() {
  return (
    <section id="access" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-serif font-bold mb-16">
        Secure Your Unfair Advantage
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`${
              option.featured
                ? 'aureus-dark-bg text-white shadow-2xl transform md:-translate-y-4'
                : 'bg-white shadow-lg'
            } rounded-lg p-8 border ${
              option.featured ? 'border-aureus-dark' : 'border-gray-200'
            } flex flex-col relative`}
          >
            {option.badge && (
              <div className="absolute top-0 right-0 aureus-gold-bg text-white text-xs font-bold px-4 py-1 rounded-bl uppercase tracking-widest">
                {option.badge}
              </div>
            )}

            <div className="mb-6">
              <span
                className={`text-xs font-bold tracking-widest uppercase ${
                  option.featured ? 'aureus-gold' : 'text-gray-500'
                }`}
              >
                {option.category}
              </span>
              <h3
                className={`text-2xl font-serif font-bold mt-2 ${
                  option.featured ? 'text-white' : ''
                }`}
              >
                {option.title}
              </h3>
              <p
                className={`text-sm mt-2 ${
                  option.featured ? 'text-gray-400' : 'text-aureus-muted'
                }`}
              >
                {option.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {option.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 aureus-gold shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={option.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 font-bold uppercase tracking-widest rounded transition-all text-center block ${
                option.featured
                  ? 'gold-gradient text-white hover:shadow-lg hover:opacity-90'
                  : 'border-2 border-aureus-gold aureus-gold hover:aureus-gold-bg hover:text-black'
              }`}
            >
              {option.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}