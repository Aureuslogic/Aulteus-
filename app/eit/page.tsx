import type { Metadata } from "next";
import EitHero from "@/components/sections/eit/eitHero";
import EitStats from "@/components/sections/eit/eitStats";
import TrafficLightSection from "@/components/sections/eit/trafficLightSection";
import WhyEitSection from "@/components/sections/eit/whyEitSection";
import PillarsSection from "@/components/sections/eit/pillarsSection";
import EitProtocolsFull from "@/components/sections/eit/eitProtocolsFull";
import CreedBanner from "@/components/sections/eit/creedBanner";
import TiebackSection from "@/components/sections/eit/tiebackSection";
import PressStrip from "@/components/sections/eit/pressStrip";
import LeadMagnetSection from "@/components/sections/eit/leadMagnetSection";
import EitFinalCta from "@/components/sections/eit/eitFinalCta";
import StickyCta from "@/components/layout/stickyCta";
import { eitBreadcrumbSchema, eitDefinedTermSchema, eitFaqPageSchema } from "@/lib/schema";

const TITLE = "The EIT Framework | Emotionally Intelligent Trader | Aulteus Logic";
const DESCRIPTION =
  "EIT is a six-protocol behaviour framework for traders, starting with the Traffic Light pre-trade check. Learn how it governs decisions. Educational only, UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/eit",
  },
  openGraph: {
    type: "article",
    url: "/eit",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function EitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eitBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eitDefinedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eitFaqPageSchema) }}
      />
      <EitHero />
      <EitStats />
      <TrafficLightSection />
      <WhyEitSection />
      <PillarsSection />
      <EitProtocolsFull />
      <CreedBanner />
      <TiebackSection />
      <PressStrip />
      <LeadMagnetSection />
      <EitFinalCta />
      <StickyCta closeTargetId="join" />
    </>
  );
}
