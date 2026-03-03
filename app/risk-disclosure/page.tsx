import LegalLayout from '@/components/layout/legalLayout';
import LegalSection from '@/components/sections/legalSection';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Risk Disclosure | Aulteus Logic',
  description: 'FCA Perimeter Aligned Risk Disclosure for Aulteus Logic',
};

export default function RiskDisclosurePage() {
  return (
    <LegalLayout
      title="Risk Disclosure"
      lastUpdated="January 2025"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-aureus-dark mb-4">
          Aulteus Logic
        </h2>
        <h3 className="text-xl font-bold text-aureus-gold mb-6">
          Regulatory Positioning Statement
        </h3>
      </div>

      <LegalSection title="FCA Perimeter Aligned Risk Disclosure">
        <p>
          Aulteus Logic operates as a technology education and decision
          intelligence company.
        </p>
        <p>
          <strong>
            Aulteus Logic is not authorised or regulated by the Financial Conduct
            Authority
          </strong>{' '}
          and does not carry on any regulated activity as defined under the
          Financial Services and Markets Act 2000 or the Financial Services and
          Markets Act 2000 Regulated Activities Order.
        </p>
        <p>
          <strong>Nothing provided by Aulteus Logic constitutes:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Investment advice</li>
          <li>Personal recommendations</li>
          <li>Arranging or executing transactions</li>
          <li>Portfolio management</li>
          <li>Discretionary trading</li>
          <li>Dealing in investments</li>
          <li>Advising on investments</li>
        </ul>
      </LegalSection>

      <LegalSection title="Educational and Informational Scope">
        <p>
          All materials, outputs, insights, frameworks, analyses, probabilities,
          and decision intelligence produced by Aulteus Logic are provided
          strictly on a <strong>non-advisory, non-personalised, and educational
          basis</strong>.
        </p>
        <p>
          Content is general in nature and is not presented as suitable for any
          individual user.
        </p>
        <p>
          <strong>Aulteus Logic does not assess:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Individual financial circumstances</li>
          <li>Investment objectives</li>
          <li>Risk tolerance</li>
          <li>Experience or knowledge</li>
        </ul>
        <p>
          Users are responsible for determining whether and how any information
          is used.
        </p>
      </LegalSection>

      <LegalSection title="Market Risk and User Responsibility">
        <p>
          <strong>
            Participation in capital markets involves substantial risk and is not
            suitable for all individuals.
          </strong>
        </p>
        <p>You acknowledge and accept that:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Capital markets are volatile</li>
          <li>Losses may exceed expectations</li>
          <li>No analytical framework or intelligence tool can eliminate risk</li>
          <li>Outcomes are uncertain</li>
          <li>All decisions remain solely yours</li>
        </ul>
        <p>
          Any reference to market conditions, directional bias, probability,
          opportunity, or neutrality is provided solely to illustrate educational
          principles and decision frameworks.
        </p>
      </LegalSection>

      <LegalSection title="No Personal Recommendation">
        <p>
          Aulteus Logic does not make personal recommendations as defined by the
          FCA.
        </p>
        <p>
          Any reference to potential scenarios, conditions, or market states is
          generic and non-specific and must not be interpreted as a
          recommendation to take or refrain from any particular action.
        </p>
        <p>
          Inaction may be referenced as a valid educational outcome within
          disciplined decision making but does not constitute advice.
        </p>
      </LegalSection>

      <LegalSection title="Independent Advice">
        <p>
          <strong>
            You should seek independent advice from a suitably authorised and
            regulated financial adviser before making any financial decisions.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="No Guarantees">
        <p>
          Aulteus Logic provides no guarantees of performance, accuracy,
          completeness, or outcomes.
        </p>
        <p>
          Past examples or illustrations are not indicative of future results.
        </p>
      </LegalSection>

      <div className="mt-12 p-6 bg-aureus-bg border-l-4 border-aureus-gold rounded">
        <p className="font-bold text-aureus-dark">
          By accessing or using Aulteus Logic, you confirm your understanding of
          and acceptance of this regulatory position.
        </p>
      </div>
    </LegalLayout>
  );
}