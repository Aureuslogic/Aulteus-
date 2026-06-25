import Breadcrumbs from "@/components/layout/bedcrumbs";
import AccessSection from "@/components/sections/accessSection";
import AuthorSection from "@/components/sections/authorSection";
import FAQSection from "@/components/sections/faqSection";
import HeroSection from "@/components/sections/heroSection";
import HiddenTruthSection from "@/components/sections/hiddenTruthSection";
import IntroductionSection from "@/components/sections/introductionSection";
import LogicEngineSection from "@/components/sections/logicSection";
import PhilosophySection from "@/components/sections/philosophySection";
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
      <Breadcrumbs />
      <HeroSection />
      <PhilosophySection />
      <AccessSection />
      <HiddenTruthSection />
      <IntroductionSection />
      <LogicEngineSection />
      <AuthorSection />
      <AccessSection />
      <FAQSection />
    </>
  );
}
