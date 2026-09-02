import ChallengePromoBar from "@/components/sections/challengePromoBar";
import HeroSection from "@/components/sections/heroSection";
import StatsBar from "@/components/sections/statsBar";
import EitJourneySection from "@/components/sections/eitJourneySection";
import BridgeSection from "@/components/sections/bridgeSection";
import FrameworkSection from "@/components/sections/frameworkSection";
import EitProtocolsSection from "@/components/sections/eitProtocolsSection";
import AccessSection from "@/components/sections/accessSection";
import AiSection from "@/components/sections/aiSection";
import TestimonialsSection from "@/components/sections/testimonialsSection";
import PartnerSection from "@/components/sections/partnerSection";
import BrokerWarningSection from "@/components/sections/brokerWarningSection";
import ArticlesSection from "@/components/sections/articlesSection";
import AboutSection from "@/components/sections/aboutSection";
import QaSection from "@/components/sections/qaSection";
import CtaSection from "@/components/sections/ctaSection";
import FAQSection from "@/components/sections/faqSection";
import DisclaimerSection from "@/components/sections/disclaimerSection";
import StickyCta from "@/components/layout/stickyCta";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <ChallengePromoBar />
      <HeroSection />
      <StatsBar />
      <EitJourneySection />
      <BridgeSection />
      <FrameworkSection />
      <EitProtocolsSection />
      <AiSection />
      <AccessSection />
      <TestimonialsSection />
      <PartnerSection />
      <BrokerWarningSection />
      <ArticlesSection />
      <AboutSection />
      <QaSection />
      <FAQSection />
      <CtaSection />
      <DisclaimerSection />
      <StickyCta />
    </>
  );
}
