import LegalLayout from '@/components/layout/legalLayout';
import LegalSection from '@/components/sections/legalSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Aulteus Logic',
  description: 'FCA Perimeter Safe Terms of Service for Aulteus Logic',
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="January 2025"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-aureus-dark mb-4">
          Aulteus Logic
        </h2>
      </div>

      <LegalSection title="Agreement to Terms">
        <p>
          <strong>
            By accessing or using Aulteus Logic, you agree to these Terms of
            Service.
          </strong>
        </p>
        <p>
          If you do not agree, you must not use the platform.
        </p>
      </LegalSection>

      <LegalSection title="Nature of the Service">
        <p>
          Aulteus Logic provides technology-enabled education and decision
          intelligence frameworks relating to market structure and analytical
          thinking.
        </p>
        <p>
          <strong>Aulteus Logic does not:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide investment advice</li>
          <li>Make personal recommendations</li>
          <li>Arrange or execute transactions</li>
          <li>Manage investments</li>
          <li>Operate trading accounts</li>
          <li>Hold client funds</li>
        </ul>
        <p>
          <strong>
            The service operates entirely outside the FCA regulatory perimeter.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="User Acknowledgements">
        <p>You acknowledge that:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You are using the service at your own discretion</li>
          <li>No content constitutes advice</li>
          <li>All decisions are your sole responsibility</li>
          <li>You are responsible for compliance with local laws</li>
        </ul>
        <p>
          <strong>
            You agree not to rely on Aulteus Logic as a substitute for regulated
            financial advice.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content, frameworks, systems, and materials are the intellectual
          property of Aulteus Logic.
        </p>
        <p>
          <strong>
            Unauthorised copying, redistribution, or commercial exploitation is
            prohibited.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Aulteus Logic shall not be
          liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Trading losses</li>
          <li>Financial losses</li>
          <li>Loss of opportunity</li>
          <li>Indirect or consequential damages</li>
        </ul>
        <p>
          Nothing in these terms excludes liability where such exclusion is not
          permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="Platform Access">
        <p>
          Access may be modified, suspended, or withdrawn at any time to
          maintain system integrity or comply with legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We reserve the right to restrict access where these terms are breached
          or where continued access presents legal or operational risk.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law and Jurisdiction">
        <p>
          These Terms of Service are governed by the laws of{' '}
          <strong>England and Wales</strong>.
        </p>
        <p>
          The courts of England and Wales shall have exclusive jurisdiction.
        </p>
      </LegalSection>

      <div className="mt-12 p-6 bg-aureus-bg border-l-4 border-aureus-gold rounded">
        <p className="font-bold text-aureus-dark mb-4">
          Important Notice
        </p>
        <p className="text-aureus-dark">
          These Terms of Service are designed to operate within the FCA
          regulatory perimeter. By using Aulteus Logic, you acknowledge that the
          service is educational in nature and does not constitute regulated
          financial advice or services.
        </p>
      </div>
    </LegalLayout>
  );
}