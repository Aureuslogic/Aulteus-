import HeroSection from "@/components/sections/heroSection";
import StatsBar from "@/components/sections/statsBar";
import FrameworkSection from "@/components/sections/frameworkSection";
import AccessSection from "@/components/sections/accessSection";
import AiSection from "@/components/sections/aiSection";
import TestimonialsSection from "@/components/sections/testimonialsSection";
import PartnerSection from "@/components/sections/partnerSection";
import ArticlesSection from "@/components/sections/articlesSection";
import AboutSection from "@/components/sections/aboutSection";
import CtaSection from "@/components/sections/ctaSection";
import FAQSection from "@/components/sections/faqSection";
import DisclaimerSection from "@/components/sections/disclaimerSection";
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
      <HeroSection />
      <StatsBar />
      <FrameworkSection />
      <AccessSection />
      <AiSection />
      <TestimonialsSection />
      <PartnerSection />
      <ArticlesSection />
      <AboutSection />
      <CtaSection />
      <FAQSection />
      <DisclaimerSection />
    </>
  );
}
