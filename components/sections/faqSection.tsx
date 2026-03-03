'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string | string[]; // Allow array for multi-paragraph answers
}

const faqs: FAQ[] = [
  {
    question: 'Is Aulteus Logic regulated by the Financial Conduct Authority?',
    answer: [
      'No.',
      'Aulteus Logic is not authorised or regulated by the Financial Conduct Authority.',
      'Aulteus Logic does not carry on any regulated activity under the Financial Services and Markets Act 2000 or the Regulated Activities Order.',
    ],
  },
  {
    question: 'Does Aulteus Logic provide investment advice or financial advice?',
    answer: [
      'No.',
      'Aulteus Logic does not provide investment advice, financial advice, personal recommendations, or suitability assessments.',
      'All content and outputs are provided strictly for educational and informational purposes only and are general in nature.',
    ],
  },
  {
    question: 'Does Aulteus Logic tell users what trades to place?',
    answer: [
      'No.',
      'Aulteus Logic does not instruct users to place trades, execute trades, or take any specific financial action.',
      'Any market analysis, scenarios, probabilities, or decision frameworks are provided solely to illustrate educational concepts and analytical thinking.',
      'All decisions remain the sole responsibility of the user.',
    ],
  },
  {
    question: 'Does Aulteus Logic make personal recommendations?',
    answer: [
      'No.',
      'Aulteus Logic does not make personal recommendations as defined by the Financial Conduct Authority.',
      'The platform does not consider individual financial circumstances, objectives, experience, or risk tolerance.',
      'All information is non-personalised and non-advisory.',
    ],
  },
  {
    question: 'Is Aulteus Logic a trading platform or broker?',
    answer: [
      'No.',
      'Aulteus Logic is not a trading platform, broker, execution venue, or intermediary.',
      'Aulteus Logic does not connect to brokerage accounts, does not execute transactions, and does not hold client funds.',
      'Users independently choose their own trading platforms or brokers if they decide to participate in markets.',
    ],
  },
  {
    question: 'Does Aulteus Logic use automated or algorithmic trading?',
    answer: [
      'No.',
      'Aulteus Logic does not trade on behalf of users and does not provide automated trading, discretionary trading, or account control.',
      'Any intelligence produced by Aulteus Logic is used at the discretion of the user as part of their own independent decision making process.',
    ],
  },
  {
    question: 'Does Aulteus Logic guarantee profits or outcomes?',
    answer: [
      'No.',
      'Aulteus Logic makes no guarantees regarding performance, profitability, accuracy, or outcomes.',
      'Capital markets involve risk and losses may occur.',
      'Past examples or illustrations are not indicative of future results.',
    ],
  },
  {
    question: 'Does Aulteus Logic tell users when not to trade?',
    answer: [
      'Aulteus Logic may identify market conditions that are presented educationally as unclear, unstable, or high risk.',
      'In such cases, remaining neutral or taking no action may be highlighted as a valid educational outcome.',
      'This does not constitute advice or a recommendation and remains part of general decision education.',
    ],
  },
  {
    question: 'Who is responsible for decisions made using Aulteus Logic?',
    answer: [
      'The user is fully and solely responsible for all decisions made.',
      'Aulteus Logic does not accept responsibility for trades placed, losses incurred, or actions taken based on the use of its educational materials or tools.',
      'Users should seek independent advice from a suitably authorised professional if required.',
    ],
  },
  {
    question: 'Does Aulteus Logic fall within the FCA regulatory perimeter?',
    answer: [
      'No.',
      'Aulteus Logic is designed and operated to remain outside the FCA regulatory perimeter.',
      'The service does not involve advising on investments, dealing in investments, arranging transactions, portfolio management, or discretionary management.',
    ],
  },
  {
    question: 'Can Aulteus Logic be used with any trading platform?',
    answer: [
      'Yes.',
      'Because Aulteus Logic is not a trading platform, it may be used alongside any broker or platform chosen independently by the user.',
      'Aulteus Logic does not integrate with, endorse, or monitor third party platforms.',
    ],
  },
  {
    question: 'Does Aulteus Logic hold or process client money?',
    answer: [
      'No.',
      'Aulteus Logic does not hold, receive, process, or control client funds or financial accounts.',
      'All financial transactions related to market participation are conducted independently by users through third party providers.',
    ],
  },
];

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