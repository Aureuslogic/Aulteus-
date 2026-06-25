'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <div className="space-y-2">
          {answer.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      );
    }
    return <p>{answer}</p>;
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">
          Regulatory and Compliance FAQs
        </h2>
        <p className="text-center text-aureus-muted mb-10">
          Important information about Aulteus Logic&apos;s regulatory positioning
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded p-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold"
                onClick={() => toggleFaq(index)}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-aureus-gold transition-transform shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-4 text-sm text-aureus-dark leading-relaxed">
                  {renderAnswer(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-aureus-bg border-l-4 border-aureus-gold rounded">
          <p className="font-bold text-aureus-dark mb-2">
            Have more questions?
          </p>
          <p className="text-sm text-aureus-dark">
           contact us at{' '} <a href="mailto:Hello@aulteuslogic.com" className="text-aureus-gold hover:text-aureus-goldHover underline">
           Hello@aulteuslogic.com 
          </a>
          </p>
        </div>
      </div>
    </section>
  );
}