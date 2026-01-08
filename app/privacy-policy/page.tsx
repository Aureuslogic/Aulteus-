import LegalLayout from '@/components/layout/legalLayout';
import LegalSection from '@/components/sections/legalSection';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Privacy Policy | Aureus Logic',
  description: 'FCA Aware Privacy Policy for Aureus Logic',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="January 2025"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-aureus-dark ">
          Aureus Logic
        </h2>
      </div>

      <LegalSection title="Introduction">
        <p>
          This Privacy Policy explains how Aureus Logic processes personal data
          in compliance with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>UK General Data Protection Regulation</li>
          <li>Data Protection Act 2018</li>
        </ul>
        <p>
          Aureus Logic recognises the importance of data protection in regulated
          and unregulated financial adjacent environments and applies governance
          standards appropriate to that context.
        </p>
      </LegalSection>

      <LegalSection title="Data Controller">
        <p>
          Aureus Logic acts as the data controller for all personal data
          processed through its website, systems, and educational tools.
        </p>
      </LegalSection>

      <LegalSection title="Categories of Personal Data">
        <p>We may process:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Identification data such as name and email address</li>
          <li>Contact details</li>
          <li>Account credentials</li>
          <li>Technical data including IP address, browser, and device type</li>
          <li>Usage data relating to engagement with content or tools</li>
        </ul>
        <p>
          <strong>
            We do not collect or process client money data, brokerage
            credentials, trading account access, or financial account control
            information.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Purpose of Processing">
        <p>Personal data is processed for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Delivery of educational content and access to tools</li>
          <li>Account administration</li>
          <li>Platform security and integrity</li>
          <li>Product improvement and analytics</li>
          <li>Compliance with legal obligations</li>
        </ul>
        <p>
          <strong>
            Data is not used to provide regulated financial services.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Lawful Basis">
        <p>Processing is based on:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>User consent</li>
          <li>Contractual necessity</li>
          <li>Legitimate interests</li>
          <li>Legal and regulatory compliance</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data Sharing and Safeguards">
        <p>
          Personal data may be shared with vetted service providers supporting:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hosting</li>
          <li>Analytics</li>
          <li>Payment processing</li>
          <li>Communications</li>
        </ul>
        <p>
          All providers operate under contractual data protection obligations.
        </p>
        <p>
          <strong>
            Data is not sold or shared for unsolicited marketing purposes.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          Data is retained only for as long as reasonably necessary to fulfil
          its stated purposes or to comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="User Rights">
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Rectify inaccuracies</li>
          <li>Request erasure</li>
          <li>Restrict processing</li>
          <li>Withdraw consent</li>
        </ul>
        <p>
          Requests may be made using the contact details published on our
          website.
        </p>
      </LegalSection>

      <LegalSection title="Security Measures">
        <p>
          Appropriate technical and organisational measures are in place to
          safeguard personal data.
        </p>
        <p>
          <strong>
            No system can be guaranteed to be completely secure and users
            acknowledge this risk.
          </strong>
        </p>
      </LegalSection>

      <div className="mt-12 p-6 bg-aureus-bg border-l-4 border-aureus-gold rounded">
        <p className="font-bold text-aureus-dark">
          For questions regarding this Privacy Policy or to exercise your data
          rights, please contact us using the details provided on our website.
        </p>
      </div>
    </LegalLayout>
  );
}