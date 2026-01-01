'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is Aureus Logic?',
    answer:
      'Aureus Logic is a non linear decision asset framework expressed through Agentic AI. It supports disciplined trading decisions by evaluating whether action is justified or whether neutrality is appropriate.',
  },
  {
    question: 'Is Aureus Logic software?',
    answer:
      'No. Aureus Logic is not software in the traditional sense. It is a decision framework operationalised through AI to support judgement under uncertainty.',
  },
  {
    question: 'Does Aureus Logic place trades automatically?',
    answer:
      'No. Aureus Logic does not place trades and does not execute orders. It governs decision making rather than execution.',
  },
  {
    question: 'Can Aureus Logic be used with any trading platform?',
    answer:
      'Yes. Aureus Logic is platform agnostic and can be used alongside any trading platform worldwide.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded p-4"
            >
              <button
                className="flex justify-between items-center w-full text-left font-bold"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-aureus-gold transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3 text-sm text-aureus-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}