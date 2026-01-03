'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

export default function LegalLayout({
  children,
  title,
  lastUpdated,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-aureus-bg py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-aureus-gold hover:text-aureus-goldHover transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-aureus-dark mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-sm text-aureus-muted">
              Last Updated: {lastUpdated}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>

        {/* Footer Navigation */}
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-bold text-aureus-dark mb-4 uppercase tracking-wider">
            Legal Documents
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/risk-disclosure"
                className="text-aureus-gold hover:text-aureus-goldHover transition-colors text-sm"
              >
                Risk Disclosure
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-aureus-gold hover:text-aureus-goldHover transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-aureus-gold hover:text-aureus-goldHover transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}