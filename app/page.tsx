import Breadcrumbs from "@/components/layout/bedcrumbs";
import AccessSection from "@/components/sections/accessSection";
import AuthorSection from "@/components/sections/authorSection";
import FAQSection from "@/components/sections/faqSection";
import HeroSection from "@/components/sections/heroSection";
import HiddenTruthSection from "@/components/sections/hiddenTruthSection";
import IntroductionSection from "@/components/sections/introductionSection";
import LogicEngineSection from "@/components/sections/logicSection";
import PhilosophySection from "@/components/sections/philosophySection";

export default function Home() {
  return (
    <>
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
